<template>
  <div>
    <h3>mapboxStart</h3>
    <div class="map-content" id="map-content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'mapboxStart',
  data () {
    return {
      route: null
    }
  },
  mounted() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      var geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-77.032, 38.913]
          },
          properties: {
            title: 'Mapbox',
            description: 'Washington, D.C.'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-122.414, 37.776]
          },
          properties: {
            title: 'Mapbox',
            description: 'San Francisco, California'
          }
        }
      ]
    };
    mapboxgl.accessToken = 'pk.eyJ1IjoibGllc2R5IiwiYSI6ImNrbW9hOHY5dTIzMjYydXM3OTA0eHh1ZW4ifQ.PP0stCOLjK9y03hymnSFhw';
    // var map = new mapboxgl.Map({
    //   container: 'map-content',
    //   style: 'mapbox://styles/mapbox/streets-v11'
    // });
    var map = new mapboxgl.Map({
      container: 'map-content',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-96, 37.8],
      zoom: 3
    });
    // add markers to map
    geojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
    
      // make a marker for each feature and add to the map
      
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            '<h3>' +
              marker.properties.title +
              '</h3><p>' +
              marker.properties.description +
              '</p>'
          )
      )
      .addTo(map);
    });
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .map-content {
    height: 500px;
  }
</style>
<style>
  .marker {
    background-image: url('../../../assets/mapbox-icon.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  .mapboxgl-popup {
    max-width: 200px;
  }
  
  .mapboxgl-popup-content {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
</style>