import jayson from 'jayson';
import config from '../config';

const client = jayson.client.http({
  host: config.cryptocurrency.rpc.host,
  port: config.cryptocurrency.rpc.port,
  auth: `${config.cryptocurrency.rpc.user}:${config.cryptocurrency.rpc.password}`,
  method: 'POST'
});

function fetchTransaction(hash, callback) {
  client.request('getrawtransaction', [hash, true], (err, response, result) => {
    if (err) {
      return callback(new Error(err), null);
    }

    return callback(null, result);
  });
}


export default {
  fetchTransaction
};
