define(function(require) {
  var BaseController = require('../../../shared/controllers/BaseController');

  var UserController = function($injector, $scope, UserService) {
    $injector.invoke(BaseController, this, { $scope: $scope });

    UserService.list()
      .then(function(response) {
        console.log('response: ' + JSON.stringify(response));
        $scope.users = response.data;
      })
      .catch(function(response) {
        console.log('api error reponse: ' + JSON.stringify(response));
      });
  }

  // define angular dependencies
  UserController.$inject = ['$injector', '$scope', 'uiexample.UserService'];

  return UserController;
});