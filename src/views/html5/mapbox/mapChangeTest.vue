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
    this.initmap()
  },
  methods: {
    initmap() {
      const mapboxgl = require('mapbox-gl')
      const MapboxLanguage = require('@mapbox/mapbox-gl-language')
      mapboxgl.accessToken = 'pk.eyJ1IjoibGllc2R5IiwiYSI6ImNrbW9hOHY5dTIzMjYydXM3OTA0eHh1ZW4ifQ.PP0stCOLjK9y03hymnSFhw' // 这里请换成自己的token
      this.gisMap = new mapboxgl.Map({
        container: 'map-content', // container id 绑定的组件的id
        style: 'mapbox://styles/mapbox/satellite-streets-v10', // 地图样式，可以使用官网预定义的样式,也可以自定义
        center: [103.6914265643866741584133706055581569671630859375, 36.48198338101723692261657561175525188446044921875], // 初始坐标系 默认中心点显示中国地图
        zoom: 4, // starting zoom 地图初始的拉伸比例
        pitch: 0, // 地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: 0, // 地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, // 抗锯齿，通过false关闭提升性能 对图片边缘进行柔滑处理
        minZoom: 2
      })
      this.gisMap.addControl(new MapboxLanguage())
      this.gisMap.scrollZoom.disable()
      // this.addTools(mapboxgl)

      // this.gisMap.on('load', () => {
      //   this.handleProjectGeo()
      // })
      this.gisMap.on('wheel', (e) => {
        // var range = this.gisMap.getZoom()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .map-content {
    height: 300px;
  }
</style>