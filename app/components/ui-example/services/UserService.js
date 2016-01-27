define(function(require) {
  var BaseApiService = require('../../../shared/services/BaseApiService');

  // class UserService
  var UserService = function($http, Config, $q) {
    BaseApiService.call(this, $http, Config, $q);

    this.Config = Config;
  }

  UserService.prototype = Object.create(BaseApiService.prototype);

  UserService.prototype.list = function() {
    return this.get('/data/users2.json');
  }

  function serviceFactory($http, Config, $q) {
    return new UserService($http, Config, $q);
  }

  serviceFactory.$inject = ['$http', 'Config', '$q'];

  return serviceFactory;
});