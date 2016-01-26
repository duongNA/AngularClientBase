define('app', function(require) {
  // specify requirejs dependencies
  var angular = require('angular');
  var uiRouter = require('uiRouter');
  var shared = require('shared');
  var home = require('home');
  var shows = require('shows');

  // define angular module
  var dependencies = [
    'ui.router',
    shared.ngName,
    home.ngName,
    shows.ngName
  ];

  angular.module('app', dependencies);
});