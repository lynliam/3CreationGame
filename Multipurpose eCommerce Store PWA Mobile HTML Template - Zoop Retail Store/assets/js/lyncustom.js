$('.lynmoreless-button').click(function() {
    $('.lynnmoretext').toggleClass('d-inline');
  
    if ($('.lynmoreless-button').text() == "收起") {
      $(this).text("展开")
    } else {
      $(this).text("收起")
    }
  });