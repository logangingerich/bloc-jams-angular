(function() {
    function SongPlayer() {
        var SongPlayer = {};
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
        var setSong = function(song) {
            if (currentBuzzObject) {
            currentBuzzObject.stop();
            currentSong.playing = null;
        }
  /**
 * @desc Buzz object audio file
 * @type {Object}
 */
        currentBuzzObject = new buzz.sound(song.audioUrl, {
            formats: ['mp3'],
            preload: true
        });
 
        currentSong = song;
        };
/**
 * @function playSong
 * @desc Plays the current Buzz object and sets the playing property of the song to true
 * @param {Object} song
 */        
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }
/**
 * @method play
 * @desc If the current song is not the song that is selected, setSong and playSong are called on it. If the current song IS the song selected and if the currentBuzzObject is currently paused, the currentBuzzObject will then be played 
 * @param {Object} song
 */ 
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };
/**
 * @method pause
 * @desc Pauses the currentBuzzObject and sets the playing property of song to false
 * @param {Object} song
 */ 
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();