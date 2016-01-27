define(function(require) {
  var BaseController = require('../../../shared/controllers/BaseController');

  var TopController = function($injector, $scope) {
    $injector.invoke(BaseController, this, { $scope: $scope });

    $scope.bigData = {
      breakfast : false,
      lunch     : false,
      dinner    : false
    };

    $scope.isCollapsed = false;
  }

  // define angular dependencies
  TopController.$inject = ['$injector', '$scope'];

  return TopController;
});