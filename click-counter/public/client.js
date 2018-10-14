// client-side js
function getCount() {
  $.get('/the-count', function(data) {
    $('.js-current-count').text(data.count);
  });
}

$(function() {
  getCount();
  $('form').submit(function(event) {
    event.preventDefault();
    getCount();
  });

});
