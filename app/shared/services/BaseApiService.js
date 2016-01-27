define(function(require) {
  // BaseApiService class
  var BaseApiService = function($http) {
    this.$http = $http;
  };

  BaseApiService.prototype.get = function(url, config) {
    return this.$http.get(url, config);
  };

  BaseApiService.prototype.post = function(url, data, config) {
    return this.$http.get(url, data, config);
  };

  BaseApiService.prototype.put = function(url, data, config) {
    return this.$http.put(url, data, config);
  };

  BaseApiService.prototype.delete = function(url, config) {
    return this.$http.delete(url, config);
  };

  BaseApiService.prototype.request = function(config) {
    return this.$http(config);
  }

  return BaseApiService;
});