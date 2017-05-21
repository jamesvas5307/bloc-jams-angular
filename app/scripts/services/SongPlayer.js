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
    /**
      * @function PlaySong
      * @desc Plays the currentBuzzObject and set the value to currentSong.playing to true
    **/
    var playSong = function(){
        currentBuzzObject.play();
        currentSong.playing = true;
    };
    /**
      * @function songPlayer.play
      * @desc Checks to see if the currentSong is not the song chosen: if not, sets the currentBuzzObject to song and then plays it.
      * if true, checks to see if the song is paused, if it is, resume the song
    **/
    songPlayer.play = function(song){
      if(currentSong !== song){
        setSong(song);
        playSong();
    } else if(currentSong == song){
        if(currentBuzzObject.isPaused()){
          playSong();
      }
    }
    };
    /**
      * @function songPlayer.pause
      * @desc Method called on ng-click in HTML element to pause the song and set the song.playing attriute to false for determining conditional formatting in the player and list
    **/
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
