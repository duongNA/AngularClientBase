define(function(require) {
  // BaseApiService class
  var BaseApiService = function($http) {
    this.$http = $http;
  };

  BaseApiService.prototype.print = function() {
    console.log('BaseApiService');
  };

  return BaseApiService;
});