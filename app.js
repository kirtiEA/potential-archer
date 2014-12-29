$(document).ready(function () {

  $("ul").sortable({
    connectWith: "ul",
    forcePlaceholderSize: true,
    placeholder: "placeholder",
    dropOnEmpty: true,
    scroll: true,
    zIndex: 9999,
    start: function (event, ui) {
      ui.item.addClass('tilt');
       $('ul').css('min-height', '50px');
        $('ul').sortable('refreshPositions');
    },
    stop: function (event, ui) {
      ui.item.removeClass('tilt');
    }
  });

  });

