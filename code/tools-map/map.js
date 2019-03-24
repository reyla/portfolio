// const API_KEY = process.env.GOOGLE_API_KEY;
const API_KEY = "AIzaSyBxP3ihX0eOGGUjtbXsWdnUhZ8K0wDGylo";

/**
 * Load map after the page is loaded.
 */
document.addEventListener('DOMContentLoaded', (event) => {
  loadScript();
});

loadScript = () => {
    "https://maps.googleapis.com/maps/api/js?key=" +
      API_KEY +
      "&callback=initMap"
};

initMap = () => {
  // create a new google map
  var map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.909967, lng: -79.075229 },
    zoom: 10
  });
  // create a generic infowindow
  let infowindow = new window.google.maps.InfoWindow({ maxWidth: 300 });
  let bounds = new window.google.maps.LatLngBounds();
};
