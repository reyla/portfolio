
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



  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
  
  var win = $(window);
  
  /* find all elements that will slide around */
  var sideMods = $('.module-side');
  var upMods = $('.module-upwards');
  
  /* prevent elements from sliding multiple times */
  sideMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass('already-visible'); 
    } 
  });

  upMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass('already-visible'); 
    } 
  });
  
  /* when the element is visible in the viewport, make it slide! */
  win.scroll(function(event) {
    
    sideMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass('come-in-sideways'); 
      } 
    });

    upMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass('come-in-upwards'); 
      } 
    });
    
  });

})(jQuery);




  

