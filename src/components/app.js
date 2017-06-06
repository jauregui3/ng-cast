angular.module('video-player')

.component('app', {
  templateUrl: "src/templates/app.html",

  controller: function(youTube) {
    this.youTube = youTube;
    // this.search = function(query) {
    //   youTube.search(query, this.searchResults);
    // };
    this.searchResults = function(items) {
      this.videos = items;
      this.currentVideo = items[0];
    };
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;


    this.onClick = function() {
    };

    this.selectVideo = function() {

    };

    this.youTube.search('hello', this.searchResults.bind(this));
  }
});
