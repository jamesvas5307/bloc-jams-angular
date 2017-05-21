(function(){
  function SongPlayer(){
    var songPlayer = {};
    var currentSong = null;
    /**
      * @desc Buzz object audio file
      * @type {Object}
    */
    var currentBuzzObject = null;
    /**
      * @function setSong
      * @desc Stops currently playing song and loads new audio file as currentBuzzObject
      * @param {Object} song
     */
    var setSong = function(song){
      if(currentBuzzObject){
        currentBuzzObject.stop();
        currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl,{
        formats: ['mp3'],
        preload: true
      });
      currentSong = song;
    };

    songPlayer.play = function(song){
      if(currentSong !== song){
        setSong(song);
        currentBuzzObject.play();
        song.playing = true;
    } else if(currentSong == song){
        if(currentBuzzObject.isPaused()){
          currentBuzzObject.play();
          currentSong.playing = true;
      }
    }
    };

    songPlayer.pause = function(song){
      currentBuzzObject.pause();
      song.playing = false;
    };
    return songPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
