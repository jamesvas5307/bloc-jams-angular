(function(){
  function seekBar($document){
    /**
     * @function calculatePercent
     * @desc calculate horizontal percent along the seekbar where the event occured.
    **/
    var calculatePercent = function(seekBar,event){
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(1,offsetXPercent);
      return offsetXPercent;
    };
    return{
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function(scope,element,attributes){
        //Scope.value and Scope.max seeks the current value and the maximum value of the seekbar
        scope.value = 0;
        scope.max = 100;
        // grabs the seek-bar element
        var seekBar = $(element);
        /**
          * @function percentString
            @desc Function that calculate percent based on the value/max value of a seekbar
        **/
        var percentString = function(){
          var value = scope.value;
          var max = scope.max;
          var percent = value/max* 100;
          return percent + "%";
        }
        scope.fillStyle = function(){
          return {width: percentString()};
        }
        scope.thumbStyle = function(){
          return {left: percentString()};
        }
        /**
        @function onClickSeekBar
        @desc updates seekbar value based on the seekbars width and location of the user's click and the seek bar.
        **/
        scope.onClickSeekBar = function(event){
          var percent = calculatePercent(seekBar,event);
          scope.value = percent * scope.max;
        }
        scope.trackThumb = function(){
          $document.bind('mousemove.thumb',function(event){
            var percent = calculatePercent(seekBar,event);
            scope.$apply(function(){
              scope.value = percent * scope.max;
            });

          $document.bind('mouseup.thumb', function(){
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          });
          });
        }
      }
    };
  }
  angular
    .module('blocJams')
    .directive('seekBar',['$document',seekBar]);
})();
