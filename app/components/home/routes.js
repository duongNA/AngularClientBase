define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'components/home/views/home.html',
        controller: 'HomeController'
      });
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});