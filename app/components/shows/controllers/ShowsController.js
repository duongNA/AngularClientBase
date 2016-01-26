define(function(require) {
  function ShowsController($scope, ShowsService) {
    $scope.shows = ShowsService.list();
  }

  // define angular dependencies
  ShowsController.$inject = ['$scope', 'ShowsService'];

  return ShowsController;
});