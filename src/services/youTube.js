angular.module('video-player')
.service('youTube', function($http, $window){
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then(function success({data}) {callback(data.items);}, function failure({data}) {console.log(data.error);});
  };
});
