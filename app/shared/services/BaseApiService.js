define(function(require) {
  // BaseApiService class
  var BaseApiService = function($http, Config, $q) {
    this.$http = $http;
    this.Config = Config;
    this.$q = $q;
  };

  BaseApiService.prototype.get = function(url, config) {
    config = config || {};
    config.url = this._buildRestUrl(url);
    config.method = 'GET';

    return this.request(config);
  };

  BaseApiService.prototype.post = function(url, data, config) {
    config = config || {};
    config.url = this._buildRestUrl(url);
    config.method = 'POST';
    config.data = data;

    return this.request(config);
  };

  BaseApiService.prototype.put = function(url, data, config) {
    config = config || {};
    config.url = this._buildRestUrl(url);
    config.method = 'PUT';
    config.data = data;

    return this.request(config);
  };

  BaseApiService.prototype.delete = function(url, config) {
    config = config || {};
    config.url = this._buildRestUrl(url);
    config.method = 'DELETE';

    return this.request(config);
  };

  BaseApiService.prototype.request = function(config, useLocalPath) {
    var defer = this.$q.defer();

    if (typeof useLocalPath !== 'undefined' && useLocalPath) {
      config.url = this._buildRestUrl(config.url);
    }

    var self = this;

    this.$http(config)
      .then(
        function(response) {
          var tmpResponse = self._handleJsendResponse(response)
          defer.resolve(tmpResponse);
        },
        function(response) {
          var tmpResponse = self._handleJsendResponse(response);
          defer.reject(tmpResponse);
        }
      );

    return defer.promise;
  }

  // private method
  BaseApiService.prototype._buildRestUrl = function(url) {
    return this.Config.restEndPoint + url;
  }

  BaseApiService.prototype._handleJsendResponse = function(response) {
    if (response.status <= 0) {
      response.errorReason = 'connectionRefused';
      console.log('mark as connectionRefused');
      return response;
    }

    if (typeof response.data !== 'object' || response.data === null 
          || typeof response.data.status === 'undefined'
          || typeof response.data.data === 'undefined') {
      console.log('mark as server error');
      response.errorReason = 'serverError';
      return response;
    }

    response.apiData = response.data.data;
    response.apiStatus = response.data.status;

    // check status
    if (response.apiStatus === 'success') {
      return response.apiData;
      console.log('after return success');
    } 

    if (response.apiStatus === 'fail') {
      switch(response.status) {
        case 400:
          response.errorReason = 'badRequest';
          break;
        case 403:
          response.errorReason = 'forbidden';
          break;
        case 404:
          response.errorReason = 'notFound';
          break;
        default:
          response.errorReason = 'serverError';
          break;
      }
    } else {
      response.errorReason = 'serverError';
    }

    return response;
  }

  return BaseApiService;
});