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
      .when('/speakers', {
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
      })
      .when('/speakers/:speakerId', {
        templateUrl: 'views/speaker.html',
        controller: 'SpeakerCtrl'
      })
      .when('/infos', {
        templateUrl: 'views/infos.html'
      })
      .when('/devoxx4kids', {
        templateUrl: 'views/devoxx4kids.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
