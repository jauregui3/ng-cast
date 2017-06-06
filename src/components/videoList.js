angular.module('video-player')
.component('videoList', {
  templateUrl: "src/templates/videoList.html",
  controller: function() {
    this.videos = window.exampleVideoData;
  }
  //template:
    // <video-list-entry><h5><em>videoListEntry</em> component goes here</h5></video-list-entry>

  // controllerAs: 'props',
  // // bindToController: true,
  // controller: function($scope) {
  //   // console.log($scope);
  // },
  // template:
});

//THIS EVENTUALLY GOES INTO VIDEOLIST, USING NG REPEAT?

// <li class="video-list-entry media">
//   <div class="media-left">
//     <img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />
//   </div>
//   <div class="media-body">
//     <div class="video-list-entry-title">Video Title</div>
//     <div class="video-list-entry-detail">Video Description</div>
//   </div>
// </li>