angular.module('video-player')

.component('app', {
  templateUrl: "src/templates/app.html",

  controller: function(youTube) {
    this.youTube = youTube;
    // this.search = function(query) {
    //   youTube.search(query, this.searchResults);
    // };
    var that = this;

    this.searchResults = function(items) {
      that.videos = items;
      that.currentVideo = that.videos[0];
    };

    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.selectVideo = function(video) {
      that.currentVideo = video;
    };

    this.youTube.search('hello', this.searchResults.bind(this));
  }

});
