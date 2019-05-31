<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>


import Main from './components/Main.vue'
import draggable from 'vuedraggable'
import jsPDF from "jspdf";
import html2canvas from "html2canvas"

export default {
  name: 'app',
  components: {
    Main,
    draggable
  }
}
</script>

<style>
#app {
  font-family: 'Molengo', sans-serif;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
h1,h2,h3, .swatch{
  font-family: 'Palanquin Dark', sans-serif;
}

body{
  background: #f6f6f6;
  margin: 0;
  padding: 0;
  color: #555555;
}
</style>
