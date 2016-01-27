define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.uiexample-top', {
        url: '/uiexample/top',
        views: {
          'content@': {
            templateUrl: 'components/ui-example/views/top.html',
            controller: 'uiexample.TopController'
          }
        }
      })
      .state('app.uiexample-users', {
        url: '/uiexample/users',
        views: {
          'content@': {
            templateUrl: 'components/ui-example/views/users.html',
            controller: 'uiexample.UserController'
          }
        }
      });
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});