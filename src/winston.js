import winston from 'winston';
import utils from './utils';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

/**
 * Catch info.
 * @param info
 */
function onInfo(info) {
  logger.info(`[${utils.getDateConfig(true)}] ${info}`);
}

/**
 * Catch errors.
 * @param error
 */
function onError(error) {
  logger.error(`[${utils.getDateConfig(true)}] ${error}`);
}


export default {
  onInfo,
  onError
};
