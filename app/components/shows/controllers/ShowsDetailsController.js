define(function(require) {
  function ShowsDetailsController($scope, $stateParams, ShowsService) {
      $scope.selectedShow = ShowsService.find($stateParams.id);
  }

  // define angular dependencies
  ShowsDetailsController.$inject = ['$scope', '$stateParams', 'ShowsService'];

  return ShowsDetailsController;
});