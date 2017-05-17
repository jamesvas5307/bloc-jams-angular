(function(){
  function config($stateProvider,$locationProvider){
    // To avoid hash bangs: you change enabled to true making clean urls
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
      // Basic Template: $stateProvider.state(stateName,stateConfig)
      $stateProvider
        .state('landing',{
          url: '/',
          templateUrl: '/templates/landing.html'
        })

        .state('album',{
          url: '/album',
          templateUrl: '/templates/album.html'
        })
        .state('collection',{
          url: '/collection',
          templateUrl: '/templates/collection.html'
        });
  }
  angular
        .module('blocJams',['ui.router'])
        .config(config);

  })();
