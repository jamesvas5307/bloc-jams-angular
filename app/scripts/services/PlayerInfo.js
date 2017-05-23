(function(){
  function PlayerInfo($rootScope,Fixtures){
    var profile = {};
    profile.UserName = "User444";
    profile.favorites = [];
    profile.playerImage = "../assets/images/user.png";
    profile.createFavorite = function(song,artist){
      for(var i=0; i < profile.favorites; i++){
        if(profile.favorites[i][0] == song){
          return;
        }
      }
      profile.favorites.push([song,artist]);
    }
    return profile;
  }

  angular
    .module('blocJams')
    .factory('PlayerInfo', ['$rootScope','Fixtures',PlayerInfo]);
})();
