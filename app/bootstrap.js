// Bootstrap requirejs and angular app

require.config({
  paths: {
    angular: 'bower_components/angular/angular',
    ngRoute: 'bower_components/angular-route/angular-route',
    uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router'    
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    },
    uiRouter: {
      deps: ['angular']
    }
  },

  packages: [
    'shared',
    {
      name: 'home',
      location: './components/home'
    },
    {
      name: 'shows',
      location: './components/shows'
    }

  ]
});

require(['angular', 'app'], function(angular) {
  angular.bootstrap(document.documentElement, ['app']);
});