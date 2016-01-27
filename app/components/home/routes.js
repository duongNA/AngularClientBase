define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.home', {
        url: '/',
        views: {
          'content@': {
            templateUrl: 'components/home/views/home.html',
            controller: 'home.HomeController'
          }
        }
      });
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});