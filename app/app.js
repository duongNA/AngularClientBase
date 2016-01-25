define('app', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var shared = require('shared');

  // define angular module
  var dependencies = [
    'shared'
  ];

  angular.module('app', dependencies);
});