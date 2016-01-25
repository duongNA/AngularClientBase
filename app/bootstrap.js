// Bootstrap requirejs and angular app

require.config({
  paths: {
    angular: 'bower_components/angular/angular',
    ngRoute: 'bower_components/angular-route/angular-route'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    ngRoute: {
      deps: ['angular']
    },
  },

  packages: [
    'shared',
    {
      name: 'home',
      location: './components/home'
    }
  ]
});

require(['angular', 'app'], function(angular) {
  angular.bootstrap(document.documentElement, ['app']);
});