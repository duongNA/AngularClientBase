define('shared', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');

  // define angular module
  var name = 'shared';

  var ngModule = angular.module(name, []);

  return {
      name: name,
      ngModule: ngModule
  };
});