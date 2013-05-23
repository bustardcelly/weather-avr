/*global module, require, process, __dirname*/
var connect = require('connect'),
    app = connect(),
    port = 3003,
    weatherBoard = require(process.cwd() + '/script/weather-board'),
    serviceFactory = require(process.cwd() + '/script/weather-service'),
    logger = require(process.cwd() + '/script/logger'),
    apiURL = 'https://api.forecast.io/forecast/9cd62d9297e9cbcdf2edd713c56e77cc',
    service = serviceFactory.create(apiURL),
    brightonMA = [42.3405705, -71.1450897];

app
  .use(connect.static(__dirname))
  .listen(port);

/*
  Forecast.io
  ---
  https://developer.forecast.io/docs/v2
*/
service
  .get
  .apply(service, brightonMA.concat(weatherBoard.handleWeatherReport));

logger.info('weather-avr started on ' + port);