'use strict';

//Define NantesJug Module
//variable 'nj' is not a function but the result of its call (returns 'that' object)
var nj = function () {
  var events = njEvents;
  var speakers = njSpeakers;
  var places = njPlaces;
  /** subjects are initialized at the end of this function */
  var subjects = [];

  // Public functions

  //noinspection JSUnusedGlobalSymbols
  var that = {
    getToday: function () {
      var d = new Date();
      d.setHours(0);
      d.setMinutes(0);
      d.setSeconds(0);
      d.setMilliseconds(0);
      return d;
    },
    getEvents: function () {
      return events;
    },
    getNextEvent: function () {
      return _.first(that.getNextEvents());
    },
    getNextNextEvents: function () {
      var nextEvents = that.getNextEvents();
      return _.last(nextEvents, Math.max(nextEvents.length - 1, 0));
    },
    getNextEvents: function () {
      var today = that.getToday();
      return _.filter(events, function(event){ return event.date >= today; });
    },
    getPreviousEvents: function () {
      var today = that.getToday();
      return _.filter(events, function(event){ return event.date < today; });
    },
    getEvent: function (eventId) {
      return _.find(events, function(event){ return event.id === eventId; });
    },
    escapeTime : function(time){
      return time && time + (time.indexOf('h') == -1 ? 'h' : '');
    },
    getEventPlaceUrl : function(event){
      return typeof event !== 'undefined' && typeof event.place !== 'undefined' && event.place !== null ? '/images/places/map-' + event.place.id + '.png' : null;
    },
    getSpeakers: function () {
      return speakers;
    },
    getSpeaker: function (speakerId) {
      return _.find(speakers, function(speaker){ return speaker.id === speakerId; });
    },
    getSpeakerPhotoUrl: function (speaker){
      return typeof speaker  !== 'undefined' && typeof speaker.photo  !== 'undefined' && speaker.photo !== null ? '/images/speakers/' + speaker.id +'.' + speaker.photo : null;
    },
    getSpeakerSubjects: function (speakerId) {
      return _.filter(subjects, function(subject){ return subject.speaker === speakerId; });
    },
    getPlace: function (placeId) {
      return _.find(places, function(place){ return place.id === placeId; });
    },
    getDayName: function(date) {
      var weekdays = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
      return weekdays[date.getDay()];
    }
  };

  // Private functions

  var toGcalDate = function (date) {
    return date.toISOString().replace(/[:-]/g, '').replace(/\.000Z/g, 'Z');
  };

  //Fulfill events by replace id by full object (places, speakers)

  var fulfillEvent = function (event) {
    //Replace place id by place object
    event.place = that.getPlace(event.place);
    //Complete Subject
    _.each(event.subjects, function(subject){ fulfillSubject(subject); });
    //Complete google calendar info
    var from=new Date(event.date);
    from.setHours(parseInt(event.time, 10));
    var to=new Date(event.date);
    to.setHours(parseInt(event.time, 10) + 2);
    event.gcal = {
      title: encodeURI(event.title),
      date: toGcalDate(from)+'/'+toGcalDate(to),
      location: event.place ? encodeURI(event.place.name + ' ' + event.place.address + ' ' + event.place.city) : ''
    };

  };

  var fulfillSubject = function (subject) {
    //Replace speaker id by speaker object
    subject.speakers = _.map(subject.speakers, function(speakerId){ return that.getSpeaker(speakerId); });
  };

  //Fulfill each events
  _.each(events, function(event){ fulfillEvent(event); });

  //Extract subjects of each speaker
  _.each(events, function(event){
    _.each(event.subjects, function(subject){
      _.each(subject.speakers, function(speaker){
        subjects.push({
          speaker: speaker.id,
          subject: subject,
          event: event
        });
      });
    });
  });

  //Sort events
  events = _.sortBy(events, function(event) { return event.date; });

  //Returns publics methods
  return that;
}();