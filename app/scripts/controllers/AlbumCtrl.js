(function(){
  function ALbumCtrl(){
    this.albumData =angular.copy(albumPicasso);
  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ALbumCtrl);

})();
