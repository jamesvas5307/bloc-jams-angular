(function(){
  function AlbumCtrl(Fixtures, SongPlayer, PlayerInfo){
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
    this.playerInfo = PlayerInfo;
  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures','SongPlayer','PlayerInfo',AlbumCtrl]);

})();
