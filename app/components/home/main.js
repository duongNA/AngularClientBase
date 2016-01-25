define('home', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');

  //define angular module
  var ngName = 'home';
  var ngDependencies = [];
  var ngModule = angular.module(ngName, ngDependencies);

  ngModule.controller('HomeController', require('./controllers/HomeController'));

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});

