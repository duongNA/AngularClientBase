define('home', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var ngRoute = require('ngRoute');

  //define angular module
  var ngName = 'home';
  var ngDependencies = ['ngRoute'];
  var ngModule = angular.module(ngName, ngDependencies);

  ngModule.controller('HomeController', require('./controllers/HomeController'));

  ngModule.config(require('./routes'));

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});

