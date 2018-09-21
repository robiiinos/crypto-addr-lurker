export default {
  cryptocurrency: {
    name: 'Bitcoin',
    blockExplorer: 'https://www.blockchain.com/en/btc/tx/',
    rpc: {
      host: '127.0.0.1',
      user: 'Ulysseys',
      password: 'YourSuperGreatPasswordNumber_DO_NOT_USE_THIS_OR_YOU_WILL_GET_ROBBED_385593',
      port: 8332
    },
    zmq: {
      protocol: 'tcp',
      host: '127.0.0.1',
      port: 28332
    }
  },
  addresses: [
    '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    '1XPTgDRhN8RFnzniWCddobD9iKZatrvH4'
  ],
  providers: {
    telegram: {
      accessToken: '123456789:abcdefghijklmnopqrstuvwxyzABCDEFGHI',
      chatId: 123456789,
      message: '<b>🤖 %currency% address lurker</b>\n<em>New %type% transaction.</em>\n\n<b>🛠 Hash :</b> <code>%tx_hash%...</code>\n\n<b>📝 Address :</b>\n<pre>%address%</pre>\n\n<b>💰 Amount :</b>\n<pre>%value% %currency%</pre>\n\nView on <a href="%explorer%%hash%">explorer</a>...\n<em>Date : %date%</em>'
    }
  },
  dateFormat: 'MMMM Do YYYY, hh:mm A',
  logs: {
    dateFormat: 'MMMM Do YYYY, h:mm:ss'
  }
};
