define(function(require) {
  var BaseApiService = require('../../../shared/services/BaseApiService');

  // class UserService
  var UserService = function($http, Config) {
    BaseApiService.call(this, $http);

    this.Config = Config;
  }

  UserService.prototype = Object.create(BaseApiService.prototype);

  UserService.prototype.list = function() {
    return this.get('/data/users.json');
  }

  function serviceFactory($http, Config) {
    return new UserService($http, Config);
  }

  serviceFactory.$inject = ['$http', 'Config'];

  return serviceFactory;
});