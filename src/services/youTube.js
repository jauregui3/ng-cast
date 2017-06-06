angular.module('video-player')
.service('youTube', function($http){
  this.search = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function success(data) {callback(data.items);}, function failure() {console.log('error');});
  };
});
