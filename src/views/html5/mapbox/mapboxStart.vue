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
    mapboxgl.accessToken = 'pk.eyJ1IjoibGllc2R5IiwiYSI6ImNrbW9hOHY5dTIzMjYydXM3OTA0eHh1ZW4ifQ.PP0stCOLjK9y03hymnSFhw';
    // var map = new mapboxgl.Map({
    //   container: 'map-content',
    //   style: 'mapbox://styles/mapbox/streets-v11'
    // });
    new mapboxgl.Map({
      container: 'map-content',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .map-content {
    height: 300px;
  }
</style>