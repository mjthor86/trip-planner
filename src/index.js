const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoibWp0aG9yIiwiYSI6ImNqOGJxNmd6bDAwbGsycXBtdGVkbmU5bmwifQ.0s6oVcY3JzCmf6VNwGG_MQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.63, 41.88], // FullStack coordinates
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
new mapboxgl.Marker(markerDomEl).setLngLat([-87.67, 41.88]).addTo(map);

buildMarker('activity', [-74.009151, 40.705086]).addTo(map);
