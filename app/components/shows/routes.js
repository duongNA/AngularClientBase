define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.shows', {
        url: '/shows',
        views: {
          'content@': {
            templateUrl: 'components/shows/views/shows.html',
            controller: 'shows.ShowsController'
          }
        }
      })
      .state('app.shows.detail', {
        url: '/detail/:id',
        views: {
          'detail@app.shows': {
            templateUrl: 'components/shows/views/shows-details.html',
            controller: 'shows.ShowsDetailsController'
          }
        }
      });
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});