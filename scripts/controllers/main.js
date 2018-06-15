'use strict';

angular.module('nantesjugApp')
    .controller('MenuCtrl', function ($scope, $location) {
      var urlIs = function (viewLocation) {
        return $location.path() === viewLocation;
      };
      var urlStartsWith = function (viewLocation) {
        return $location.path().indexOf(viewLocation) === 0;
      };
      var urlMatch = function (viewLocation) {
        return new RegExp(viewLocation.replace(/\//g, '\\/')).test($location.path());
      };

      $scope.urlIs = urlIs;

      $scope.urlStartsWith = urlStartsWith;

      $scope.urlMatch = urlMatch;

      $scope.showLayout = function() {
        return !urlMatch('/events/.*/slide') && !urlMatch('/events/.*/mail');
      };

      $scope.showSponsors = function() {
        return !urlIs('/sponsors');
      };
    })
    .controller('MainCtrl', function ($scope) {
      $scope.event = nj.getNextEvent();
      $scope.nextNextEvents = nj.getNextNextEvents();
      $scope.today = nj.getToday();

      var eventDetailledView = {};
      if (typeof $scope.event !== 'undefined') {
        eventDetailledView[$scope.event.id] = true;
      }
      $scope.eventDetailledView = eventDetailledView;
      $scope.eventToggleViewDisabled = true;
      $scope.getEventPlaceUrl = nj.getEventPlaceUrl;
      $scope.escapeTime = nj.escapeTime;
    })
    .controller('EventsCtrl', function ($scope) {
      $scope.today = nj.getToday();
      $scope.nextEvents = nj.getNextEvents().reverse();
      $scope.previousEvents = nj.getPreviousEvents().reverse();
      $scope.searchText = '';
      $scope.getEventPlaceUrl = nj.getEventPlaceUrl;
      $scope.escapeTime = nj.escapeTime;

      //Events detailled view
      var eventDetailledView = {};
      $scope.nextEvents.forEach(function (event) {
        eventDetailledView[event.id] = false;
      });
      $scope.previousEvents.forEach(function (event) {
        eventDetailledView[event.id] = false;
      });
      $scope.eventDetailledView = eventDetailledView;
      $scope.eventToggleViewDisabled = false;

      $scope.toggleDetail = function (evendId) {
        $scope.eventDetailledView[evendId] = !$scope.eventDetailledView[evendId];
      };
    })
    .controller('EventCtrl', function ($scope, $stateParams) {
      $scope.event = nj.getEvent($stateParams.eventId);
      $scope.today = nj.getToday();
      $scope.getEventPlaceUrl = nj.getEventPlaceUrl;
      $scope.escapeTime = nj.escapeTime;

      var eventDetailledView = {};
      eventDetailledView[$scope.event.id] = true;
      $scope.eventDetailledView = eventDetailledView;
      $scope.eventToggleViewDisabled = false;

      $scope.toggleDetail = function (evendId) {
        $scope.eventDetailledView[evendId] = !$scope.eventDetailledView[evendId];
      };

    })
    .controller('SpeakersCtrl', function ($scope) {
      $scope.speakers = nj.getSpeakers();
      $scope.searchText = '';
      $scope.getSpeakerPhotoUrl = nj.getSpeakerPhotoUrl;

    })
    .controller('SpeakerCtrl', function ($scope, $stateParams, $timeout) {
      var speaker = nj.getSpeaker($stateParams.speakerId);
      var subjects = nj.getSpeakerSubjects($stateParams.speakerId);
      $scope.speaker = speaker;
      $scope.subjects = subjects;
      $scope.getSpeakerPhotoUrl = nj.getSpeakerPhotoUrl;
      $timeout(function(){
        $(document).trigger('speakerLoaded');
      }, 0);
    })
;
