//
// New event model
//

var new_event =
{
    id: '2013_11_00',
    title: '',
    date: new Date(2013, 0, 1),//month begin at 0
    time: '19',
    register: null, //'https://guestlistapp.com/events/XXXXX',
    place: null, //when known: 'place.id',
    subjects: [
      {
        title: 'Sujet à confirmer',
        length: '20 min',
        type: 'quickie',
        intro: null,
        abstract: '<p></p>' +
            '<p></p>',
        speakers: null // when known: ['speaker.id'],
      },
      {
        title: 'Sujet à confirmer',
        length: '1 h 30',
        type: 'talk',
        intro: null,
        abstract: '<p></p>' +
            '<p></p>',
        speakers: null // when known: ['speaker.id', 'speaker.id'],
      }
    ]
  };

var new_speaker =
{
  id: '',
  name: '',
  bio: '',
  gravatar: null,
  photo: null,
  twitter: null,
  gplus: null,
  github: null,
  website: null
};