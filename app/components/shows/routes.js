define(function(require) {
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.shows', {
        url: '/shows',
        views: {
          'content@': {
            templateUrl: 'components/shows/views/shows.html',
            controller: 'ShowsController'
          }
        }
      })
      .state('app.shows.detail', {
        url: '/detail/:id',
        views: {
          'detail@app.shows': {
            templateUrl: 'components/shows/views/shows-details.html',
            controller: 'ShowsDetailsController'
          }
        }
      });
  }

  // define angular dependencies
  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  return config;
});