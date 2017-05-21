(function(){
  function ALbumCtrl(Fixtures){
    this.albumData = Fixtures.getAlbum();
  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures',ALbumCtrl]);

})();
