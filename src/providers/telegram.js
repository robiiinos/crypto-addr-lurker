import { TelegramClient } from 'messaging-api-telegram';
import utils from '../utils';
import config from '../../config';

const client = TelegramClient.connect(config.providers.telegram.accessToken);

function formatMessage(type, hash, address, value) {
  const formattedMessage = config.providers.telegram.message
    .replace('%currency%', config.cryptocurrency.name)
    .replace('%type%', type)
    .replace('%tx_hash%', hash.substring(0, 17))
    .replace('%address%', address)
    .replace('%value%', value)
    .replace('%currency%', config.cryptocurrency.name)
    .replace('%explorer%', config.cryptocurrency.blockExplorer)
    .replace('%hash%', hash)
    .replace('%date%', utils.getDateConfig());

  return formattedMessage;
}

function sendMessage(type, hash, address, value) {
  client.sendMessage(config.providers.telegram.chatId, formatMessage(type, hash, address, value), {
    parse_mode: 'HTML',
    disable_web_page_preview: true,
    disable_notification: false
  });
}


export default {
  sendMessage
};
