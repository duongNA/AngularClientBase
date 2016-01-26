define('ui-example', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');

  //define angular module
  var ngName = 'ui.example';
  var ngDependencies = [];
  var ngModule = angular.module(ngName, ngDependencies);

  // controllers
  ngModule.controller('UIExampleTopController', require('./controllers/UIExampleTopController'));

  // services

  // route
  ngModule.config(require('./routes'));

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});

