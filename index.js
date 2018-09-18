import zeromq from './src/zeromq';
import jayson from './src/jayson';
import Telegram from './src/providers/telegram';
import logger from './src/winston';
import config from './config';

zeromq.connect();
zeromq.suscribe();

zeromq.onMessage((topic, message) => {
  logger.onInfo(`${topic.toString()} : ${message.toString('hex')}`);

  const hash = message.toString('hex');
  jayson.fetchTransaction(hash, (err, transaction) => {
    if (err) return logger.onError(err);

    const { vout } = transaction;
    vout.forEach((output) => {
      if (output.scriptPubKey.type !== 'nonstandard' && output.scriptPubKey.type !== 'nulldata' && output.scriptPubKey.type !== 'create') {
        config.addresses.forEach((address) => {
          if (output.scriptPubKey.addresses[0] === address) {
            Telegram.sendMessage(address, output.value);
          }
        });
      }
    });
  });
});
