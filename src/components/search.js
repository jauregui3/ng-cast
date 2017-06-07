angular.module('video-player')

.component('search', {
  templateUrl: "src/templates/search.html",
  controller: function() {
    this.handleClick = function() {
      var that = this;
      this.service.search(this.input, function(data) {
        that.result(data);
      });
      this.input = '';
    };
  },
  bindings: {
    result: '<',
    service: '<'
  }
});
