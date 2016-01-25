define('shared', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');

  // define angular module
  var ngName = 'shared';

  var ngModule = angular.module(ngName, []);

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});