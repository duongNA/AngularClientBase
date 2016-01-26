define(function(require) {
  function UIExampleTopController($scope) {
    $scope.bigData = {
      breakfast : false,
      lunch     : false,
      dinner    : false
    };

    $scope.isCollapsed = false;
  }

  // define angular dependencies
  UIExampleTopController.$inject = ['$scope'];

  return UIExampleTopController;
});