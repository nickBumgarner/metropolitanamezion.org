$(document).ready(function () {

  //Open modal windows
  $('a.modal-link').click(function (e) {
    e.preventDefault();
    var modalTarget = $(this).attr('id');
    $('.' + modalTarget).addClass('open');
    $('body').addClass('modal-open');
  });

  //Close modal windows
  $('.close-button, .screen').click(function () {
    $('.modal-window').removeClass('open');
    $('body').removeClass('modal-open');
  });

  //Close modal windows with escape key
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.modal-window').removeClass('open');
      $('body').removeClass('modal-open');    }
  });
});