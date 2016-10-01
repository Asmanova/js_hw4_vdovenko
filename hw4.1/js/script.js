$(function () {
  var $inputs = $('.inp');
  var $button = $('.show');

  $inputs.hover (function () {
    var $description = $(this).siblings('.descr');
    $description.slideToggle();
  });

  $button.on('click', function () {
    var $descriptions = $('.descr');
    $descriptions.slideToggle();
  });
});
