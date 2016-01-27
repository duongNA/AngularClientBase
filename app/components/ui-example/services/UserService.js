define(function(require) {
  var BaseApiService = require('../../../shared/services/BaseApiService');

  // class UserService
  var UserService = function($http) {
    BaseApiService.call(this, $http);
  }

  UserService.prototype = Object.create(BaseApiService.prototype);

  UserService.prototype.list = function() {
    return this.$http.get('/data/users.json');
  }

  function serviceFactory($http) {
    return new UserService($http);
  }

  serviceFactory.$inject = ['$http'];

  // 

  return serviceFactory;
});