define('app', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var shared = require('shared');
  var home = require('home');

  // define angular module
  var dependencies = [
    shared.ngName,
    home.ngName
  ];

  angular.module('app', dependencies);
});