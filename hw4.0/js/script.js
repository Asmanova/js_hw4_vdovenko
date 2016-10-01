$(function() {
  function activeBlocks (a, b) {
    $( '.block__item' ).removeClass('block__item--active');
    $( a ).addClass('block__item--active');
    $( '.text' ).hide();
    $( b ).show();
  }

  $( '.block__item--1' ).on('click', function () {
    activeBlocks(this, '.text--1');
  });
  $( '.block__item--2' ).on('click', function () {
    activeBlocks(this, '.text--2');
  });
  $( '.block__item--3' ).on('click', function () {
    activeBlocks(this, '.text--3');
  });
});
