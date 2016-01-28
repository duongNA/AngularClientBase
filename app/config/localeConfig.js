define(function(require) {
  var en = require('./locales/en.js');
  var it = require('./locales/it.js');

  function LocaleConfig($translateProvider) {
    $translateProvider
      .translations('en', en)
      .translations('it', it)
      .preferredLanguage('en');

      $translateProvider.useSanitizeValueStrategy('escape');
  };

  LocaleConfig.$inject = ['$translateProvider'];

  return LocaleConfig;
});