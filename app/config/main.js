define(function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var ngSanitize = require('ngSanitize');
  var pascalTranslate = require('pascalTranslate');
  var environment = require('./environment');

  var configValue = null;

  if (environment.env == 'development') {
    configValue = require('./env/development.js');
  } else if (environment.env == 'production') {
    configValue = require('./env/production.js')
  }


  // define angular module
  var ngName = 'config';
  var ngDependencies = ['ngSanitize', 'pascalprecht.translate']
  var ngModule = angular.module(ngName, ngDependencies);

  // constants
  ngModule.constant('Config', configValue);

  // config
  ngModule.config(require('./localeConfig'));

  return {
    ngName: ngName,
    ngModule: ngModule
  };
});