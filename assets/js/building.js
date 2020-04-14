if($(window).width() < 1000){
  $(document).scroll(function() {
    var y = $(this).scrollLeft();
    if (y > 2600 && y < 3500) {
      $(".skill1").addClass("design");
      $(".skill2").addClass("illistration");
      $(".skill3").addClass("code");
    }
    else {
      $(".skill1").removeClass("design");
      $(".skill2").removeClass("illistration");
      $(".skill3").removeClass("code");
    }
  });
}

else if($(window).width() > 1000){
  $(document).scroll(function() {
    var y = $(this).scrollLeft();
    if (y > 5500 && y < 7000) {
      $(".skill1").addClass("design");
      $(".skill2").addClass("illistration");
      $(".skill3").addClass("code");
    }
    else {
      $(".skill1").removeClass("design");
      $(".skill2").removeClass("illistration");
      $(".skill3").removeClass("code");
    }
  });
}
