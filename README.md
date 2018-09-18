# crypto-addr-lurker

[![Build Status](https://travis-ci.org/robiiinos/crypto-addr-lurker.svg?branch=master)](https://travis-ci.org/robiiinos/crypto-addr-lurker)
[![js-airbnb-style](https://img.shields.io/badge/code%20style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/11ff659bda2143719a85cfa7e37165db)](https://www.codacy.com/app/robiiinos/crypto-addr-lurker)
[![dependencies Status](https://david-dm.org/robiiinos/crypto-addr-lurker/status.svg)](https://david-dm.org/robiiinos/crypto-addr-lurker)
[![devDependencies Status](https://david-dm.org/robiiinos/crypto-addr-lurker/dev-status.svg)](https://david-dm.org/robiiinos/crypto-addr-lurker?type=dev)

This tool is made using [zeromq.js](https://github.com/zeromq/zeromq.js) and works on NodeJS 8+.

**crypto-addr-lurker** helps you watch your addresses on any blockchain (Bitcoin derivative) with ØMQ support.

crypto-addr-lurker supports all major operating systems, including :

* OS X/Darwin (x64)
* Linux (x64, ARMv7 and ARMv8)
* Windows (x64 and x86)

Use **crypto-addr-lurker** and stay informed on both incoming and outcoming transactions from your favorite addresses.

## Usage

> You need to first install all the required dependencies (dev dependencies included, they are needed to compile) for this project by simply running the following command.

> Then you need to copy and fill the configuration file for address lurker. 
> This will create a `config.js` file, that you'll be able to fill with your node (local or remote) information, custom notifications message (with emojis support :tada:), ...

```javascript
// Install the dependencies
npm install

// Copy the configuration file
npm run config
```

#### Production mode :
```javascript
// Clean the build folder.
npm run clean

// Build the project with Babel.
npm run build

// Start the application in production mode.
npm run start
```

## Example

With [Telegram](https://telegram.org/) for [MYNT cryptocurrency](https://www.myntcurrency.org/) :

![Telegram notification example](https://i.imgur.com/EmCo3a6.png)

## Limitations
[1] BIP 125 of Bitcoin protocol introduces Replace-by-Fee, which make a transaction already broadcasted to the network replaceable. This could lead to multiple notifications on the app for an unconfirmed transaction (same output, but different transaction hash) to an address.

*Read more :*

1. https://bitcoin.org/en/glossary/rbf

2. https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki

## To Do List
[1] Unit testing.

[2] [Messaging API](https://github.com/Yoctol/messaging-apis) :

1. ~~Telegram~~
2. Viber
3. WeChat
4. LINE
5. Slack
6. Discord (WIP)
7. Messenger

[3] Notifications about dropped transactions with new transaction hash (see [**Limitations [1]**](#limitations)).

[4] Option for notifications only when a transaction has been included in a block (+ block number in the message content).

## References
[1] [zeromq](https://github.com/zeromq/zeromq.js) : Prebuilt ØMQ bindings for Node.js.

[2] [Bitcoin ZeroMQ documentation](https://github.com/bitcoin/bitcoin/blob/master/doc/zmq.md) : Bitcoin's official documentation about ZeroMQ usage.

## License
MIT