define(function(require) {
  // specify requirejs dependencies
  var angular = require('angular');

  //define angular module
  var ngName = 'shows';
  var ngDependencies = [];
  var ngModule = angular.module(ngName, ngDependencies);

  // controllers
  ngModule.controller('shows.ShowsController', require('./controllers/ShowsController'));
  ngModule.controller('shows.ShowsDetailsController', require('./controllers/ShowsDetailsController'));

  // services
  ngModule.factory('ShowsService', require('./services/ShowsService'));

  ngModule.config(require('./routes'));

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});

