define(function(require) {
  var BaseController = require('../../../shared/controllers/BaseController');

  var UserController = function($injector, $scope, UserService) {
    $injector.invoke(BaseController, this, { $scope: $scope });

    UserService.list().success(function(users) {
      $scope.users = users;
    }).error(function(data) {
      console.log('api error');
    });
  }

  // define angular dependencies
  UserController.$inject = ['$injector', '$scope', 'uiexample.UserService'];

  return UserController;
});