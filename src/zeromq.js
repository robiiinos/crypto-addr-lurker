import zeromq from 'zeromq';
import config from '../config';

const sock = zeromq.socket('sub');

function connect() {
  sock.connect(`${config.node.protocol}://${config.node.host}:${config.node.port}`);
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
