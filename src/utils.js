import moment from 'moment';
import config from '../config';

/**
 * Return Moment.js formatted date.
 * @returns {string}
 */
function getDateConfig(logs = false) {
  const dateFormat = logs === true ? config.logs.dateFormat : config.dateFormat;

  return moment().format(dateFormat);
}


export default {
  getDateConfig
};
