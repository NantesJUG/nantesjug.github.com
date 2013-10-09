'use strict';

angular.module('nantesjugApp')
    .controller('MenuCtrl', function ($scope, $location) {
      $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
      };
    })
    .controller('MainCtrl', function ($scope) {
      $scope.event = nj.getNextEvent();
      $scope.today = nj.getToday();

      var eventDetailledView = {};
      if ($scope.event !== null) {
        eventDetailledView[$scope.event.id] = true;
      }
      $scope.eventDetailledView = eventDetailledView;
      $scope.eventToggleViewDisabled = true;
    })
    .controller('EventsCtrl', function ($scope) {
      $scope.today = nj.getToday();
      $scope.nextEvents = nj.getNextEvents();
      $scope.previousEvents = nj.getPreviousEvents();
      $scope.searchText = '';

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
    .controller('EventCtrl', function ($scope, $routeParams) {
      $scope.event = nj.getEvent($routeParams.eventId);
      $scope.today = nj.getToday();

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
    })
    .controller('SpeakerCtrl', function ($scope, $routeParams) {
      var speaker = nj.getSpeaker($routeParams.speakerId);
      var subjects = nj.getSpeakerSubjects($routeParams.speakerId);
      $scope.speaker = speaker;
      $scope.subjects = subjects;
    })
;
