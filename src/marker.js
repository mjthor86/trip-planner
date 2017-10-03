const mapboxgl = require('mapbox-gl');

const images = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
};

const buildMarker = (marker, lngLat) => {
  const newMarker = document.createElement('div');
  const markerImage = images[marker];
  newMarker.style.width = '32px';
  newMarker.style.height = '39px';
  newMarker.style.backgroundImage = `url(${markerImage})`;
  return new mapboxgl.Marker(newMarker).setLngLat(lngLat);
};

module.exports = buildMarker;
