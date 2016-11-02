$(document).ready(function () {
  $('a.modal-link').click(function (e) {
    e.preventDefault();
    var modalTarget = $(this).attr('id');
    $('.' + modalTarget).addClass('open');
    $('body').addClass('modal-open');
  });

  $('.close-button, .screen').click(function () {
    $('.modal-window').removeClass('open');
    $('body').removeClass('modal-open');
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.modal-window').removeClass('open');
      $('body').removeClass('modal-open');    }
  });
});