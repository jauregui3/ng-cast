angular.module('video-player')

.component('app', {
  templateUrl: "src/templates/app.html",
  controller: function() {
    this.selectVideo = function() {};
    this.searchResults = function() {};
    this.currentVideo = {};
    this.videos = [];
  }




  // $ctrl: function() {
  //   selectVideo = function(){};
  //   return selectVideo;
  // }
});
// .$ctrl('AppController', function($scope) {
//   $scope.selectVideo = function() {};
// });

