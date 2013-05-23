/*global module, require, process*/
var arduino = require('duino'),
    board,
    logger = require(process.cwd() + '/script/logger');

module.exports = {
  activate: function() {
    board = new arduino.Board({
      debug: true
    });
  },
  handleWeatherReport: function(err, result) {
    if(err || result.error) {
      logger.error('Error: ' + (err || result.error));
    }
    else {
      logger.info('Hourly weather summary: ' + JSON.parse(result.text).hourly.icon);
    }
  }
};