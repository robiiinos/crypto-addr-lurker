import zeromq from 'zeromq';
import config from '../config';

const sock = zeromq.socket('sub');

function connect() {
  sock.connect(`${config.cryptocurrency.zmq.protocol}://${config.cryptocurrency.zmq.host}:${config.cryptocurrency.zmq.port}`);
}

function suscribe() {
  sock.subscribe('hashtx');
}

function onMessage(callback) {
  sock.on('message', (topic, message) => {
    callback(topic, message);
  });
}


export default {
  connect,
  suscribe,
  onMessage
};
