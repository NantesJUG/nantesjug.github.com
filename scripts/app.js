'use strict';

angular.module('nantesjugApp', ['ui.gravatar', 'angulartics', 'angulartics.google.analytics'])
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/events', {
            templateUrl: 'views/events.html',
            controller: 'EventsCtrl'
          })
          .when('/events/:eventId', {
            templateUrl: 'views/event.html',
            controller: 'EventCtrl'
          })
          .when('/events/:eventId/slide', {
            templateUrl: 'views/slide.html',
            controller: 'EventCtrl'
          })
          .when('/speakers', {
            templateUrl: 'views/speakers.html',
            controller: 'SpeakersCtrl'
          })
          .when('/speakers/:speakerId', {
            templateUrl: 'views/speaker.html',
            controller: 'SpeakerCtrl'
          })
          .when('/sponsors', {
            templateUrl: 'views/sponsors.html'
          })
          .when('/infos', {
            templateUrl: 'views/infos.html'
          })
          .when('/devoxx4kids', {
            redirectTo: '/specials/devoxx4kids'
          })
          .when('/specials/devoxx4kids', {
            templateUrl: 'views/specials/devoxx4kids.html'
          })
          .when('/specials/devparty', {
            templateUrl: 'views/specials/devparty.html'
          })
          .otherwise({
            redirectTo: '/'
          });
    });
