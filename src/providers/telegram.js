import { TelegramClient } from 'messaging-api-telegram';
import utils from '../utils';
import config from '../../config';

const client = TelegramClient.connect(config.providers.telegram.accessToken);

function formatMessage(address, value) {
  const formattedMessage = config.providers.telegram.message
    .replace('%currency%', config.cryptocurrency.name)
    .replace('%address%', address)
    .replace('%value%', value)
    .replace('%currency%', config.cryptocurrency.name)
    .replace('%date%', utils.getDateConfig());

  return formattedMessage;
}

function sendMessage(address, value) {
  client.sendMessage(config.providers.telegram.chatId, formatMessage(address, value), {
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    disable_notification: false
  });
}


export default {
  sendMessage
};
