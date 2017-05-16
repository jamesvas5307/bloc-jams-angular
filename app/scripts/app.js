(function()){
  function config($stateProvider,$locationProvider){
    // To avoid hash bangs: you change enabled to true making clean urls
    $locationProvider
      .html5Mode({
        enable: true,
        requiredBase: false
      });
      // Basic Template: $stateProvider.state(stateName,stateConfig)
      $stateProvider
        .state('landing',{
          url: '/',
          templateUrl: 'templates/landing.html'
        })

        .state('album',{
          url: '/',
          templateUrl: 'templates/album.html'
        });
  }
  angular
        .module('blocJames'['ui.router'])
        .config(config);

  }
