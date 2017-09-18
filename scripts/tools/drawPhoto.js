'use strict';

//DRAW

DepartureBoard.LETTERS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,\':()&!?+-€˚';

var boardWhatTemplate = '<div class="row board">' +
                          '<div class="col-xs-3">Lot :</div>' +
                          '<div class="board-what board-value col-xs-9"></div>' +
                          '<div class="col-xs-3">Gagnant :</div>' +
                          '<div class="board-whos col-xs-9">' +
                          '</div>' +
                          '</div>';
var boardWhoTemplate = '<div class="board-who"><div class="board-photo"><img></div><div class="board-name board-value"></div></div>';

var lastBoardWhat = null;
var lastBoardWho = null;
var lastPhoto = null;

var drawStarted = false;
var whatList = null;
var whoList = null;
var whoListImages = null;
var hasDisplayNoMoreWho = false;

function addBoardWhat() {
  $('.boards').prepend(boardWhatTemplate);
  lastBoardWhat = new DepartureBoard($('.board:first-child .board-what')[0], { rowCount: 1, letterCount: 40 });
}

function addBoardWho() {
  $('.board:first-child .board-whos').prepend(boardWhoTemplate);
  lastBoardWho = new DepartureBoard($('.board:first-child .board-whos .board-who:first-child .board-name')[0], { rowCount: 1, letterCount: 40 });
  lastPhoto = $('.board:first-child .board-whos .board-who:first-child .board-photo')[0];
}

function drawWhat() {
  var indexWhat = _.random(0, whatList.length - 1);
  var what = whatList.splice(indexWhat, 1);
  lastBoardWhat.setValue(what);
  if (_.isEmpty(whatList)) {
    $('#draw').prop('disabled', true);
  }
}

var randomPhotoTimeouts = [];
var randomPhotoTimeoutIndex = 0;

function setPhoto(photo, image) {
  return $(photo).empty().append(image);
}

function randomPhoto(photo, list, timeoutIdx) {
  var indexWaitWho = _.random(0, list.length - 1);
  setPhoto(photo, list[indexWaitWho].image);
  randomPhotoTimeouts[timeoutIdx] = setTimeout(function(){randomPhoto(photo, list, timeoutIdx);}, 100);
}

function drawWho() {
  var size = whoListImages.length;
  var indexWho = _.random(0, size - 1);
  var who = whoListImages[indexWho];
  var listCopy = whoListImages.slice();
  whoListImages.splice(indexWho, 1);
  var photo = lastPhoto;

  if (who.image) {
    var timeoutIdx = randomPhotoTimeoutIndex++;
    randomPhotoTimeouts.push(-1);
    randomPhotoTimeouts[timeoutIdx] = setTimeout(function(){randomPhoto(photo, listCopy, timeoutIdx);}, 0);

    setTimeout(function() {
      clearTimeout(randomPhotoTimeouts[timeoutIdx]);
      setPhoto(photo, who.image);
      $(photo).addClass('final');
    }, 3000);
  }

  if (who.name) {
    lastBoardWho.setValue(who.name);
  }
  if (_.isEmpty(whoListImages)) {
    if (hasDisplayNoMoreWho) {
      $('#drawNewWho').prop('disabled', true);
    } else {
      $('#draw').prop('disabled', true);
      whoListImages.push({name: 'Plus de participant !'});
      hasDisplayNoMoreWho = true;
    }
  }
}

function initDraw() {
  whatList = $('.whatList .editable').html().split('<br>');
  //whoList = $('.whoList .editable').html().split('<br>');
  //remove empty entries

  whatList = _.filter(whatList, function (e) {return !_.isEmpty(e);});
  //whoList = _.filter(whoList, function (e) {return !_.isEmpty(e);});

  //shuffle
  whatList = _.shuffle(whatList);
  whoListImages = _.shuffle(whoListImages);

  drawStarted = true;
  $('#drawNewWho').prop('disabled', false);
  $('#resetDraw').prop('disabled', false);

  $('.drawLists').hide();
}

function loadImages() {
  var whoList = $('.whoList .editable').html().split('<br>');

  whoListImages = _(whoList)
      .filter(function (e) {return !_.isEmpty(e);})
      .collect(function(who) {
        var url = who.split(';')[0];
        var name = who.split(';')[1];
        var image = new Image();
        image.src = url;

        return {
          name: name,
          image: image
        };
      })
      .value();
}

//PAGE EVENTS

function draw() {
  if (!drawStarted) {
    initDraw();
  }
  addBoardWhat();
  drawWhat();

  //setTimeout(function(){
    addBoardWho();
    drawWho();
  //}, 2000);
}

function drawNewWho() {
  $('.board:first-child .board-whos .board-who:first-child').addClass('board-who-canceled');
  addBoardWho();
  drawWho();
}

function resetDraw() {
  whatList = null;
  whoList = null;
  whoListImages = null;
  drawStarted = false;
  hasDisplayNoMoreWho = false;
  $('#draw').prop('disabled', false);
  $('#drawNewWho').prop('disabled', true);
  $('#resetDraw').prop('disabled', true);
  $('.boards').html('');
  $('.drawLists').show();
  loadImages();
}

// EDITABLE DIV

var editableAlertTimeout = null;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function editDiv(e) {
  if (drawStarted) {
    //div not editable
    if (editableAlertTimeout !== null){
      clearTimeout(editableAlertTimeout);
    } else {
      $(e.target).before('<span class="editable-alert">(non éditable pendant un tirage)</span>');
    }
    editableAlertTimeout = setTimeout(function(){
      $('.editable-alert').remove();
      editableAlertTimeout = null;
    }, 2000);
  } else {
    var divHtml = $(e.target).html();
    var editableText = $('<textarea class="editable"/>');
    editableText.val(divHtml.replace(/<br>/g, '\n'));
    $(e.target).replaceWith(editableText);
    editableText.focus();
    // setup the blur event for this new textarea
    editableText.on('blur', leaveEditableDiv);
  }
}

function leaveEditableDiv(e) {
  var html = $(e.target).val();
  var viewableText = $('<div class="editable"></div>');
  viewableText.html(_.collect(html.replace(/\t/g, ' ').split('\n'), capitalize).join('<br>'));
  $(e.target).replaceWith(viewableText);
  // setup the click event for this new div
  viewableText.on('click', editDiv);
  loadImages();
}

//ON PAGE READY

$(function () {
  //Install editable div
  $('div .editable').on('click', editDiv);

  //Install button handlers
  $('#draw').on('click', draw);
  $('#drawNewWho').on('click', drawNewWho);
  $('#resetDraw').on('click', resetDraw);

  //Exemple data
  $('.whatList .editable').html(
    'Place Devfest n˚1<br>' +
    'Place Devfest n˚2<br>' +
    'Place Devfest n˚3<br>' +
    'Licence Intellij n˚1<br>' +
    'Licence Intellij n˚2<br>' +
    'Licence Intellij n˚3');

  // $('.whoList .editable').html(
  //   'http://lorempixel.com/400/200/sports/;User1<br>' +
  //   'http://lorempixel.com/400/200/food/;User2<br>' +
  //   'http://lorempixel.com/400/200/nature/;User3<br>' +
  //   'http://lorempixel.com/400/200/technics/;User4');

  $('.whoList .editable').html(
      'http://nantesjug.org/images/tshirt2017/arnaud_genre_grandpierre.jpg;Arnaud Genre Grandpierre<br>' +
      'http://nantesjug.org/images/tshirt2017/bruno_bonnin.jpg;Bruno Bonnin<br>' +
      'http://nantesjug.org/images/tshirt2017/etienne_juliot.jpg;Etienne Juliot<br>' +
      'http://nantesjug.org/images/tshirt2017/fabien_juif.png;Fabien Juif<br>' +
      'http://nantesjug.org/images/tshirt2017/fouad_ouahi.jpg;Fouad Ouahi<br>' +
      'http://nantesjug.org/images/tshirt2017/francois_kha.jpg;Francois Kha<br>' +
      'http://nantesjug.org/images/tshirt2017/remi_picard.jpg.jpg;Remi Picard<br>' +
      'http://nantesjug.org/images/tshirt2017/pierre-yves_baloche.jpg;Pierre-yves Baloche<br>' +
      'http://nantesjug.org/images/tshirt2017/sylvain_leray.jpg;Sylvain Leray<br>' +
      'http://nantesjug.org/images/tshirt2017/yann_danthu.jpg;Yann Danthu');

  loadImages();
});
