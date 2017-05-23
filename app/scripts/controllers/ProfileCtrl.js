(function(){
  function ProfileCtrl(PlayerInfo){
    this.playerInfo = PlayerInfo;
  }
  angular
    .module('blocJams')
    .controller('ProfileCtrl', ['PlayerInfo',ProfileCtrl]);

})();
