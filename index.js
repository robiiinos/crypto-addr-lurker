import zeromq from './src/zeromq';
import config from './config';

zeromq.connect();
zeromq.suscribe();

zeromq.onMessage((topic, message) => {
  console.log(`${topic.toString()} : ${message.toString('hex')}`);
});
