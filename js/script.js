
/** 
 * functions are put in here so that the DOM fully loads before they are called
 */

$(function() {

  /** 
   * clicking on hamburger icon opens or closes the navigation sidebar
   */
  $('#nav-icon').on('click', function() {
    $('body').toggleClass('nav-hidden');
  });


  /**
   * clicking on footer arrow icon takes user back to top of page
   */
  $('.back-to-top').on('click', 'i', function () {
    $('html, body').animate({ scrollTop: 0 }, "slow"); return false;
  });


})(jQuery);




  

