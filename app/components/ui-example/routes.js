define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.uiexample', {
        url: '/uiexample/top',
        views: {
          'content@': {
            templateUrl: 'components/ui-example/views/top.html',
            controller: 'UIExampleTopController'
          }
        }
      });
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});