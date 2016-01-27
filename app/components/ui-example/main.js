define(function(require) {
  // specify requirejs dependencies
  var angular = require('angular');

  //define angular module
  var ngName = 'ui.example';
  var ngDependencies = [];
  var ngModule = angular.module(ngName, ngDependencies);

  // controllers
  ngModule.controller('uiexample.TopController', require('./controllers/TopController'));
  ngModule.controller('uiexample.UserController', require('./controllers/UserController'));

  // services
  ngModule.factory('uiexample.UserService', require('./services/UserService'));

  // route
  ngModule.config(require('./routes'));

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});

