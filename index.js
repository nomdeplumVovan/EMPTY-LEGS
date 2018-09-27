$(document).ready(function () {
  $('table a').click(function (event) {
    event.preventDefault();
    var tds = $(this).parent('td').siblings('td');
    var row = [];
    $.each(tds, function (i, c) {
      row.push($(c).text());
    });
    $('#goal').text(row.join(' - '));
    $('#overlay').fadeIn(400,
      function () {
        $('#modal_form').css('display', 'block').animate({
          opacity: 1,
          top: '50%'
        }, 200);
      });
    $('#modal_close, #overlay, #btn').click(function () {
      $('#modal_form')
        .animate({
            opacity: 0,
            top: '45%'
          }, 200,
          function () {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
          }
        );
    });
  });
});