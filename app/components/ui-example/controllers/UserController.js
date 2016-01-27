define(function(require) {
  var BaseController = require('../../../shared/controllers/BaseController');

  var UserController = function($injector, $scope, UserService) {
    $injector.invoke(BaseController, this, { $scope: $scope });

    UserService.list()
      .then(function(users) {
        console.log('response: ' + JSON.stringify(users));
        $scope.users = users;
      })
      .catch(function(response) {
        console.log('error response: ' + JSON.stringify(response));
      });
  }

  // define angular dependencies
  UserController.$inject = ['$injector', '$scope', 'uiexample.UserService'];

  return UserController;
});