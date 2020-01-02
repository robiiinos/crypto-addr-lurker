import zeromq from './src/zeromq';
import jayson from './src/jayson';
import Telegram from './src/providers/telegram';
import logger from './src/winston';
import config from './config';

const TX_IN = 'incoming';
const TX_OUT = 'outgoing';

zeromq.connect();
zeromq.suscribe();

zeromq.onMessage((topic, message) => {
  logger.onInfo(`${topic.toString()} : ${message.toString('hex')}`);

  const hash = message.toString('hex');
  jayson.fetchTransaction(hash, (err, transaction) => {
    if (err) return logger.onError(err);

    if (!transaction.confirmations) {
      // Check for outgoing transactions.
      const { vin } = transaction;
      vin.forEach((input) => {
        if (!input.coinbase) {
          jayson.fetchTransaction(input.txid, (error, previousTX) => {
            if (error) return logger.onError(error);

            const { vout } = previousTX;
            vout
              .filter((data) => data.n === input.vout)
              .map((data) => {
                config.addresses
                  .filter((address) => address === data.scriptPubKey.addresses[0])
                  .map((address) => {
                    Telegram.sendMessage(TX_OUT, transaction.hash, address, data.value);
                  });
              });
          });
        }
      });

      // Check for incoming transactions.
      const { vout } = transaction;
      vout.forEach((output) => {
        if (output.scriptPubKey.type !== 'nonstandard' && output.scriptPubKey.type !== 'nulldata') {
          config.addresses
            .filter((address) => address === output.scriptPubKey.addresses[0])
            .map((address) => {
              Telegram.sendMessage(TX_IN, transaction.hash, address, output.value);
            });
        }
      });
    }
  });
});
