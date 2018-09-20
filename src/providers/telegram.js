import { TelegramClient } from 'messaging-api-telegram';
import utils from '../utils';
import config from '../../config';

const client = TelegramClient.connect(config.providers.telegram.accessToken);

function formatMessage(type, address, value) {
  const formattedMessage = config.providers.telegram.message
    .replace('%currency%', config.cryptocurrency.name)
    .replace('%type%', type)
    .replace('%address%', address)
    .replace('%value%', value)
    .replace('%currency%', config.cryptocurrency.name)
    .replace('%date%', utils.getDateConfig());

  return formattedMessage;
}

function sendMessage(type, address, value) {
  client.sendMessage(config.providers.telegram.chatId, formatMessage(type, address, value), {
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    disable_notification: false
  });
}


export default {
  sendMessage
};
