'use strict';

//Define NantesJug Module
//variable 'nj' is not a function but the result of its call (returns 'that' object)
var nj = function () {
  var events = njEvents;
  var speakers = njSpeakers;
  var places = njPlaces;

  // Public functions

  var that = {
    getToday: function () {
      var d = new Date();
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      return d;
    },
    getEvents: function () {
      return events;
    },
    getNextEvent: function () {
      return _.first(that.getNextEvents());
    },
    getNextEvents: function () {
      var today = that.getToday();
      return _.filter(events, function(event){ return event.date > today; });
    },
    getPreviousEvents: function () {
      var today = that.getToday();
      return _.filter(events, function(event){ return event.date <= today; });
    },
    getEvent: function (eventId) {
      return _.find(events, function(event){ return event.id === eventId; });
    },
    getSpeakers: function () {
      return speakers;
    },
    getSpeaker: function (speakerId) {
      return _.find(speakers, function(speaker){ return speaker.id === speakerId; });
    },
    getPlace: function (placeId) {
      return _.find(places, function(place){ return place.id === placeId; });
    }
  };

  // Private functions

  //Fulfill events by replace id by full object (places, speakers)

  var fulfillEvent = function (event) {
    //Replace place id by place object
    event.place = that.getPlace(event.place);
    //Complete Subject
    _.each(event.subjects, function(subject){ fulfillSubject(subject); });
  };

  var fulfillSubject = function (subject) {
    //Replace speaker id by speaker object
    subject.speakers = _.map(subject.speakers, function(speakerId){ return that.getSpeaker(speakerId) });
  };

  //Fulfill each events
  _.each(events, function(event){ fulfillEvent(event) });

  //Returns publics methods
  return that;
}();