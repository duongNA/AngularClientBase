// Bootstrap requirejs and angular app

require.config({
  paths: {
    angular: 'bower_components/angular/angular',
    ngRoute: 'bower_components/angular-route/angular-route',
    ngAnimate: 'bower_components/angular-animate/angular-animate',
    ngSanitize: 'bower_components/angular-sanitize/angular-sanitize',
    uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
    uiBootstrap: 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
    pascalTranslate: 'bower_components/angular-translate/angular-translate',
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
    ngSanitize: {
      deps: ['angular']
    },    
    uiRouter: {
      deps: ['angular']
    },
    uiBootstrap: {
      deps: ['angular', 'ngAnimate']
    },
    pascalTranslate: {
      deps: ['angular']
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
  ],

  deps: ['./appBootstrap']
});
