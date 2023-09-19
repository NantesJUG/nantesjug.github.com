'use strict';

angular.module('nantesjugApp', ['ui.router', 'ui.gravatar', 'angulartics', 'angulartics.google.analytics'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .state('events', {
            url: '/events',
            templateUrl: 'views/events.html',
            controller: 'EventsCtrl'
          })
          .state('event', {
            url: '/events/:eventId',
            templateUrl: 'views/event.html',
            controller: 'EventCtrl'
          })
          .state('draw', {
            url: '/tools/draw',
            templateUrl: 'views/tools/draw.html'
          })
          .state('drawPhoto', {
            url: '/tools/drawPhoto',
            templateUrl: 'views/tools/drawPhoto.html'
          })
          .state('speakers', {
            url: '/speakers',
            templateUrl: 'views/speakers.html',
            controller: 'SpeakersCtrl'
          })
          .state('speaker', {
            url: '/speakers/:speakerId',
            templateUrl: 'views/speaker.html',
            controller: 'SpeakerCtrl'
          })
          .state('sponsors', {
            url: '/sponsors',
            templateUrl: 'views/sponsors.html'
          })
          .state('infos', {
            url: '/infos',
            templateUrl: 'views/infos.html'
          })
          .state('specials_devoxx4kids', {
            url: '/specials/devoxx4kids',
            templateUrl: 'views/specials/devoxx4kids.html'
          })
          .state('specials_devparty', {
            url: '/specials/devparty',
            templateUrl: 'views/specials/devparty.html'
          })
          .state('speaker_form', {
            url: '/speaker-form',
            templateUrl: 'views/speaker-form.html'
          });
      $urlRouterProvider.when('/devoxx4kids', '/specials/devoxx4kids');
      $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope, $anchorScroll){
      $rootScope.$on('$stateChangeSuccess', function() {
        $anchorScroll();
      });
    });
