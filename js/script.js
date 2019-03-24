
// functions are in here so that the DOM loads before they are called

$(function() {

  const navIcon = $('#nav-icon');

  /* clicking on hamburger icon opens the navigation sidebar
  */
  navIcon.on('click', function() {
    $('body').toggleClass('nav-hidden');
  });

  /**
   * clicking on arrow icon takes user back to top of page
   */
  $('.back-to-top').on('click', 'i', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  /* placeholder code for smooth jump 
  $('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });
  */

}());
  

