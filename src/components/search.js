angular.module('video-player')

.component('search', {
  templateUrl: "src/templates/search.html",
  controller: function() {
    this.handleClick = function() {
      this.service.search(this.input, this.result);
    };
  },
  bindings: {
    result: '<',
    service: '<'
  }
});
