define(function(require) {
  function config($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'components/home/views/home.html',
        controller: 'HomeController'
      });
  }

  // define angular dependencies
  config.$inject = ['$routeProvider'];

  return config;
});