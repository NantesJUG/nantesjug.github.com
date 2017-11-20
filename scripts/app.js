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
          .state('event_info', {
            url: '/events/:eventId/info',
            templateUrl: 'views/info/info.html',
            controller: 'EventCtrl'
          })
          .state('event_slide', {
            url: '/events/:eventId/slide',
            templateUrl: 'views/info/slide.html',
            controller: 'EventCtrl'
          })
          .state('event_mail', {
            url: '/events/:eventId/mail',
            templateUrl: 'views/info/mail.html',
            controller: 'EventCtrl'
          })
          .state('event_affiche', {
            url: '/events/:eventId/affiche',
            templateUrl: 'views/info/affiche.html',
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
          });
      $urlRouterProvider.when('/devoxx4kids', '/specials/devoxx4kids');
      $urlRouterProvider.otherwise('/');
    });
