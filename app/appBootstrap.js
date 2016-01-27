// Bootstrap requirejs and angular app

require.config({
  paths: {
    angular: 'bower_components/angular/angular',
    ngRoute: 'bower_components/angular-route/angular-route',
    ngAnimate: 'bower_components/angular-animate/angular-animate',
    uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
    uiBootstrap: 'bower_components/angular-bootstrap/ui-bootstrap-tpls'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    },
    ngAnimate: {
      deps: ['angular']
    },
    uiRouter: {
      deps: ['angular']
    },
    uiBootstrap: {
      deps: ['angular', 'ngAnimate']
    }
  },

  packages: [
    'shared',
    'config',
    {
      name: 'home',
      location: './components/home'
    },
    {
      name: 'shows',
      location: './components/shows'
    },
    {
      name: 'ui-example',
      location: './components/ui-example'
    }
  ]
});

require(['angular', 'app'], function(angular) {
  angular.bootstrap(document.documentElement, ['app']);
});