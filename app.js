function bottom(elm) {
  var top = elm.offset().top;
  var height = elm.height();
  return top + height;
}

function position_text() {
  var cover_bottom = bottom($(".cover"));
  $(".text").css({
    "top": "" + (cover_bottom + 40) + "px",
    "padding-top": '0px'
  });
}

function position_read_next() {
  var text_bottom = bottom($(".text"));
  var margin = 60;
  if (is_desktop()) {
    margin = margin + 60;
  }
  $('.read-next').css({
    'top': "" + (text_bottom + margin) + 'px',
    'display': 'block'
  });
}

$(document).ready(function() {
  if (is_chrome_mobile()) {
    $(".cover").css("height", ($(window).height() - 5) + "px");
    position_text();
  }

  $(".story-cover-arrow").click(function() {
    if (is_ios() || is_windows_phone()) {
      var height = $(".text").offset().top;
      window.setTimeout(function() {window.scrollTo(0,height);}, 0);
    } else {
      var offset = 0;
      if (is_chrome_mobile()) {
        offset = -20;
      }
      $('body').scrollTo('.text', {
        duration: 500,
        easing: 'swing',
        offset: offset,
      });  
    }
  })

  setTimeout(position_read_next, 500);
  $(window).resize(position_read_next);
});
