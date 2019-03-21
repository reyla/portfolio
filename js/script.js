const nav = document.getElementById('nav');
const navIcon = document.getElementById('nav-icon');
const closeNavIcon = document.getElementById('close-icon');
const navLink1 = document.getElementById('nav-link1');
const navLink2 = document.getElementById('nav-link2');
const navLink3 = document.getElementById('nav-link3');


/* Opens the sidebar (when the nav icon is clicked)
 */
function openNav() {
  nav.style.width = "200px";
}

/* Closes the sidebar (when the nav icon is clicked)
*/
function closeNav() {
  nav.style.width = "0";
}

// this listens for click on the nav icon
navIcon.addEventListener('click', openNav);

// this listens for click on the X icon
closeNavIcon.addEventListener('click', closeNav);

// these listen for clicks on the nav links
navLink1.addEventListener('click', closeNav);
navLink2.addEventListener('click', closeNav);
navLink3.addEventListener('click', closeNav);



/**
 * @description arrow icon takes user back to top of page
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
  

