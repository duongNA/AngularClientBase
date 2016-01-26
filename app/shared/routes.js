define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
          views: {
            'header': {
              templateUrl: 'shared/views/header.html',
            },
            'footer': {
              templateUrl: 'shared/views/footer.html'
            }
          }
      })
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});