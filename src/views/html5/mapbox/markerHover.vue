<template>
  <div class="box">
    <h3>markerHover</h3>
    <div class='quakeInfo'>
      <div><strong>Magnitude:</strong> <span id='mag'></span></div>
      <div><strong>Location:</strong> <span id='loc'></span></div>
      <div><strong>Date:</strong> <span id='date'></span></div>
    </div>
    <div class="map-content" id="map-content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'markerHover',
  data () {
    return {
      route: null
    }
  },
  mounted() {
    var today = new Date();
    // Use JavaScript to get the date a week ago
    var priorDate = new Date().setDate(today.getDate() - 7);
    // Set that to an ISO8601 timestamp as required by the USGS earthquake API
    var priorDateTs = new Date(priorDate);
    var sevenDaysAgo = priorDateTs.toISOString();

    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoibGllc2R5IiwiYSI6ImNrbW9hOHY5dTIzMjYydXM3OTA0eHh1ZW4ifQ.PP0stCOLjK9y03hymnSFhw';
    var map = new mapboxgl.Map({
      container: 'map-content',
      style: 'mapbox://styles/mapbox/outdoors-v11', // Specify which map style to use
      center: [-122.44121, 37.76132], // Specify the starting position [lng, lat]
      zoom: 3.5 // Specify the starting zoom
    });

    map.on('load', function() {
      map.addSource('earthquakes', {
        type: 'geojson',
        data:
          'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&minmagnitude=1&starttime=' +
          sevenDaysAgo,
        generateId: true // This ensures that all features have unique IDs
      });
      map.addLayer({
        id: 'earthquakes-viz',
        type: 'circle',
        source: 'earthquakes',
        paint: {
          // The feature-state dependent circle-radius expression will render
          // the radius size according to its magnitude when
          // a feature's hover state is set to true
          'circle-radius': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              1,
              8,
              1.5,
              10,
              2,
              12,
              2.5,
              14,
              3,
              16,
              3.5,
              18,
              4.5,
              20,
              6.5,
              22,
              8.5,
              24,
              10.5,
              26
            ],
            5
          ],
          'circle-stroke-color': '#000',
          'circle-stroke-width': 1,
          // The feature-state dependent circle-color expression will render
          // the color according to its magnitude when
          // a feature's hover state is set to true
          'circle-color': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            [
              'interpolate',
              ['linear'],
              ['get', 'mag'],
              1,
              '#fff7ec',
              1.5,
              '#fee8c8',
              2,
              '#fdd49e',
              2.5,
              '#fdbb84',
              3,
              '#fc8d59',
              3.5,
              '#ef6548',
              4.5,
              '#d7301f',
              6.5,
              '#b30000',
              8.5,
              '#7f0000',
              10.5,
              '#000'
            ],
            '#000'
          ]
        }
      });
    });

    var magDisplay = document.getElementById('mag');
    var locDisplay = document.getElementById('loc');
    var dateDisplay = document.getElementById('date');

    var quakeID = null;

    map.on('mousemove', 'earthquakes-viz', e => {
      map.getCanvas().style.cursor = 'pointer';
      // Set variables equal to the current feature's magnitude, location, and time
      console.log('e.features[0]: ', e.features[0])
      var quakeMagnitude = e.features[0].properties.mag;
      var quakeLocation = e.features[0].properties.place;
      var quakeDate = new Date(e.features[0].properties.time);
    
      // Check whether features exist
      if (e.features.length > 0) {
        // Display the magnitude, location, and time in the sidebar
        magDisplay.textContent = quakeMagnitude;
        locDisplay.textContent = quakeLocation;
        dateDisplay.textContent = quakeDate;
    
        // If quakeID for the hovered feature is not null,
        // use removeFeatureState to reset to the default behavior
        if (quakeID) {
          map.removeFeatureState({
            source: 'earthquakes',
            id: quakeID
          });
        }
    
        quakeID = e.features[0].id;
    
        // When the mouse moves over the earthquakes-viz layer, update the
        // feature state for the feature under the mouse
        map.setFeatureState(
          {
            source: 'earthquakes',
            id: quakeID
          },
          {
            hover: true
          }
        );
      }
    });
    map.on('mouseleave', 'earthquakes-viz', function() {
      if (quakeID) {
        map.setFeatureState(
          {
            source: 'earthquakes',
            id: quakeID
          },
          {
            hover: false
          }
        );
      }
    
      quakeID = null;
      // Remove the information from the previously hovered feature from the sidebar
      magDisplay.textContent = '';
      locDisplay.textContent = '';
      dateDisplay.textContent = '';
      // Reset the cursor style
      map.getCanvas().style.cursor = '';
    });
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    .map-content {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 500px;
      z-index: 1;
    }
    .quakeInfo {
      position: absolute;
      font-family: sans-serif;
      margin-top: 5px;
      margin-left: 5px;
      padding: 5px;
      width: 30%;
      border: 2px solid black;
      font-size: 14px;
      color: #222;
      background-color: #fff;
      border-radius: 3px;
      z-index: 100;
    }
  }
</style>
<style>

</style>