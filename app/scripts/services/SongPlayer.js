(function(){
  function SongPlayer($rootScope,Fixtures){
    var songPlayer = {};
    var currentAlbum = Fixtures.getAlbum();
    songPlayer.volume= null;
    /**
     * @function getSongIndex
      @desc return the index of the currenting playing song in the CurrentAlbum object
    **/
    var getSongIndex = function(song){
      return currentAlbum.songs.indexOf(song);
    };
    songPlayer.currentSong = null;
    songPlayer.currentTime = null;
    songPlayer.mute = false;
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
        songPlayer.currentSong.playing = null;
      }
      currentBuzzObject = new buzz.sound(song.audioUrl,{
        formats: ['mp3'],
        preload: true
      });
      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
        songPlayer.currentTime = currentBuzzObject.getTime();
        if(songPlayer.currentTime === songPlayer.currentSong.duration){
          songPlayer.next();
        }
    });

  });
      songPlayer.currentSong = song;
    };
    /**
      * @function PlaySong
      * @desc Plays the currentBuzzObject and set the value to currentSong.playing to true
    **/
    var playSong = function(){
        currentBuzzObject.play();
        songPlayer.currentSong.playing = true;
    };
    /**
     * @function stopSong
        @desc stopSong From Playing
    **/
    var stopSong = function(){
      currentBuzzObject.stop();
      songPlayer.currentSong.playing = false;
    };
    /**
      * @function songPlayer.play
      * @desc Checks to see if the currentSong is not the song chosen: if not, sets the currentBuzzObject to song and then plays it.
      * if true, checks to see if the song is paused, if it is, resume the song
    **/
    songPlayer.play = function(song){
      song = song || songPlayer.currentSong;
      if(songPlayer.currentSong !== song){
        setSong(song);
        playSong();
    } else if(songPlayer.currentSong == song){
        if(currentBuzzObject.isPaused()){
          playSong();
      }
    }
    };
    songPlayer.setCurrentTime= function(time){
      if (currentBuzzObject){
        currentBuzzObject.setTime(time);
      }
    };
    /**
      * @function songPlayer.pause
      * @desc Method called on ng-click in HTML element to pause the song and set the song.playing attriute to false for determining conditional formatting in the player and list
    **/
      songPlayer.pause = function(song){
      song = song || songPlayer.currentSong;
      currentBuzzObject.pause();
      songPlayer.currentSong.playing = false;

    };
    /**
    * @function songPlayer.previous
      @desc uses getSongIndex to grab current songs index and then decrements the song index
    **/
    songPlayer.previous = function(){
      var currentSongIndex = getSongIndex(songPlayer.currentSong);
      currentSongIndex--;
      if(currentSongIndex < 0){
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    songPlayer.next = function(){
      var currentSongIndex = getSongIndex(songPlayer.currentSong);
      currentSongIndex++;
      if(currentSongIndex > currentAlbum.songs.length - 1){
        stopSong();
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };
    songPlayer.setVolume = function(newValue){
      if (currentBuzzObject){
        songPlayer.mute = newValue != 0 ? false : true ;
        currentBuzzObject.setVolume(newValue);
      }
    }
    songPlayer.mute = function(){
      if(songPlayer.mute){
        songPlayer.mute = false;
        songPlayer.setVolume(20);
      } else {
        songPlayer.mute = true;
        songPlayer.setVolume(0);
      }
    }

    return songPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope','Fixtures',SongPlayer]);
})();
