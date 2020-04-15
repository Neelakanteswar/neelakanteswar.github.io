// if($(window).width() < 1000){
//     $(document).scroll(function() {
//       var y = $(this).scrollLeft();
//
//       if (y < 659) {
//         $(".text1").removeClass("no_text");
//         $(".text1").addClass("add_text");
//         $(".text2").addClass("no_text");
//       }
//
//       else if (y > 659 && y < 1712){
//         $(".text1").addClass("no_text");
//         $(".text2").removeClass("no_text");
//         $(".text2").addClass("add_text");
//       }
//
//       else{
//         $(".text2").removeClass("add_text");
//         $(".text2").addClass("no_text");
//       }
//     });
// }
//
// else if($(window).width() > 1000){
//     $(document).scroll(function() {
//       var y = $(this).scrollLeft();
//
//       if (y < 1000) {
//         $(".text1").removeClass("no_text");
//         $(".text1").addClass("add_text");
//         $(".text2").addClass("no_text");
//       }
//
//       else if (y > 1000 && y < 3500){
//         $(".text1").addClass("no_text");
//         $(".text2").removeClass("no_text");
//         $(".text2").addClass("add_text");
//       }
//
//       else{
//         $(".text2").removeClass("add_text");
//         $(".text2").addClass("no_text");
//       }
//     });
// }




function text1(){
  $(".text1").addClass("no_text");
  $(".text2").removeClass("no_text");
  $(".text2").addClass("add_text");
}
setTimeout(text1, 2000);

function text2(){
  $(".text2").removeClass("add_text");
  $(".text2").addClass("no_text");
  $(".text3").addClass("add_text");
}
setTimeout(text2, 5000);

// function text3(){
//   $(".text3").removeClass("add_text");
// }
// setTimeout(text3, 7000);


if($(window).width() < 1000){
    $(document).scroll(function() {
      var y = $(this).scrollLeft();

      if (y > 659) {
        $(".text3").removeClass("add_text");
      }
    });
}

else if($(window).width() > 1000){
    $(document).scroll(function() {
      var y = $(this).scrollLeft();

      if (y > 1000) {
        $(".text3").removeClass("add_text");
      }
    });
}
