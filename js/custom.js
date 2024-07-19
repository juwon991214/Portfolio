$(function(){
  /* 마우스 휠 이벤트 */
  $('.wrap>section').on('wheel', function (e) {
    e.preventDefault();
    let nav;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      nav = $(this).prev();
    } else {
      nav = $(this).next();
    }

    if (nav.length) {
      let moveTop = nav.offset().top;
      // console.log(moveTop);
      $('html,body').stop().animate({
        scrollTop: moveTop,
      }, 500);
    }   
  });
  /* 마우스 휠 이벤트 끝 */
});