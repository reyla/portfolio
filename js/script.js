

/**
 * @description arrow icon takes user back to top of page
 */
$('.back-to-top').on('click', 'i', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
