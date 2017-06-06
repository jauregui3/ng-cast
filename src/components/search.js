angular.module('video-player')

.component('search', {
  templateUrl: "src/templates/search.html",
  controller: function() {
    this.onClick = function() {
      this.search(this.textInput);
    };
  },
  bindings: {
    result: '<',
    search: '<'
  }
});
