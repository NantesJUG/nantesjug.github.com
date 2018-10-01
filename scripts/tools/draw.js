'use strict';

//DRAW

DepartureBoard.LETTERS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,\':()&!?+-€ÉÈÊ';

var boardWhatTemplate = '<div class="row board board-what"><div class="col-xs-3">Lot :</div><div class="board-value col-xs-9"></div></div>';
var boardWhoTemplate = '<div class="row board board-who"><div class="col-xs-3">Gagnant :</div><div class="board-value col-xs-9"></div></div>';


var lastBoardWhat = null;
var lastBoardWho = null;
var drawStarted = false;
var whatList = null;
var whoList = null;
var hasDisplayNoMoreWho = false;

function lastBoardOfType(type) {
  return $('.board-' + type + ':last-child .board-value');
}

function addBoardWhat() {
  $('.boards').append(boardWhatTemplate);
  lastBoardWhat = new DepartureBoard(lastBoardOfType('what')[0], { rowCount: 1, letterCount: 40 });
}

function addBoardWho() {
  $('.boards').append(boardWhoTemplate);
  lastBoardWho = new DepartureBoard(lastBoardOfType('who')[0], { rowCount: 1, letterCount: 40 });
}

function drawWhat() {
  var indexWhat = _.random(0, whatList.length - 1);
  var what = whatList.splice(indexWhat, 1);
  lastBoardWhat.setValue(what);
  if (_.isEmpty(whatList)) {
    $('#draw').prop('disabled', true);
  }
}

function drawWho() {
  var indexWho = _.random(0, whoList.length - 1);
  var who = whoList.splice(indexWho, 1);
  lastBoardWho.setValue(who);
  if (_.isEmpty(whoList)) {
    if (hasDisplayNoMoreWho) {
      $('#drawNewWho').prop('disabled', true);
    } else {
      $('#draw').prop('disabled', true);
      whoList.push('Plus de participant !');
      hasDisplayNoMoreWho = true;
    }
  }
}

function initDraw() {
  whatList = $('.whatList .editable').html().split('<br>');
  whoList = $('.whoList .editable').html().split('<br>');
  //remove empty entries
  whatList = _.filter(whatList, function (e) {return !_.isEmpty(e);});
  whoList = _.filter(whoList, function (e) {return !_.isEmpty(e);});
  //shuffle
  whatList = _.shuffle(whatList);
  whoList = _.shuffle(whoList);
  drawStarted = true;
  $('#drawNewWho').prop('disabled', false);
  $('#resetDraw').prop('disabled', false);
}

//PAGE EVENTS

function draw() {
  if (!drawStarted) {
    initDraw();
  }
  addBoardWhat();
  addBoardWho();
  drawWhat();
  drawWho();
}

function drawNewWho() {
  lastBoardOfType('who').addClass('board-who-canceled');
  addBoardWho();
  drawWho();
}

function resetDraw() {
  whatList = null;
  whoList = null;
  drawStarted = false;
  hasDisplayNoMoreWho = false;
  $('#draw').prop('disabled', false);
  $('#drawNewWho').prop('disabled', true);
  $('#resetDraw').prop('disabled', true);
  $('.boards').html('');
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
  $('.whatList .editable').html('Lot 1<br>Lot 2');
  $('.whoList .editable').html('User 1<br>User 2<br>User 3<br>User 4<br>User 5');
});
