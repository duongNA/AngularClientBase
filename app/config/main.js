define(function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var environment = require('./environment');

  var configValue = null;

  if (environment.env == 'development') {
    configValue = require('./env/development.js');
  } else if (environment.env == 'production') {
    configValue = require('./env/production.js')
  }


  // define angular module
  var ngName = 'config';

  var ngModule = angular.module(ngName, []);

  // constants
  ngModule.constant('Config', configValue);

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});