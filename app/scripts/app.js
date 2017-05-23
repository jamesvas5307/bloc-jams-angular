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
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
        })

        .state('album',{
          url: '/album',
          controller: 'AlbumCtrl as album',
          templateUrl: '/templates/album.html'
        })
        .state('collection',{
          url: '/collection',
          controller: 'CollectionCtrl as collection',
          templateUrl: '/templates/collection.html'
        })
        .state('profile',{
          url: '/profile',
          controller: 'ProfileCtrl as profile',
          templateUrl: '/templates/profile.html'
        });
  }
  angular
        .module('blocJams',['ui.router'])
        .config(config);

  })();
