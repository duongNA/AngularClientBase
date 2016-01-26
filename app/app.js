define('app', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var uiRouter = require('uiRouter');
  var uiBootstrap = require('uiBootstrap');
  var shared = require('shared');
  var home = require('home');
  var shows = require('shows');
  var uiExample = require('ui-example');

  // define angular module
  var dependencies = [
    'ui.router',
    'ui.bootstrap',
    shared.ngName,
    home.ngName,
    shows.ngName,
    uiExample.ngName
  ];

  angular.module('app', dependencies);
});