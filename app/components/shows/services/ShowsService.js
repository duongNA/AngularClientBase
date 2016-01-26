define(function(require) {
  var shows = [
      { id: 1, name: 'Friends', description: 'the greatest sitcom of all time' },
      { id: 2, name: 'Big bang theory', description: 'famous sitcom about geeks' }
  ];

  function ShowsService() {
    return {
      list: function() {
        return shows;
      },

      find: function(id) {
        for (var i = 0; i < shows.length; i++) {
          if (shows[i].id == id) { 
            return shows[i]; 
          }
        }

        return null;
      }
    }
  }

  // define angular dependencies
//  ShowsService.$inject = ["$scope"];

  return ShowsService;
});