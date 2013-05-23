/*global module, require, process*/
var request = require('superagent'),
    logger = require(process.cwd() + '/script/logger'),
    service = {
      get: function(lat, long, callback) {
        var url = this.baseURL + '/' + [lat, long].join(',');
        logger.info('request: ' + url);
        
        request.get(url)
          .set('Accept', 'application/json')
          .end(callback);
      }
    };

module.exports = {
  create: function(baseURL) {
    return Object.create(service, {
      "baseURL": {
        value: baseURL,
        writable: false,
        enumerable: true
      }
    });
  }
};