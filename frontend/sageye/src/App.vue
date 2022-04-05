<template>
  <AppNavBar />
  <div>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import AppNavBar from './components/partials/NavBar.vue'
import Footer from './components/partials/Footer.vue'

export default {
  name: 'App',
  components: {
    AppNavBar,
    Footer,
  },
  data(){
    return {
      
    }
  },
}
</script>

<style>
@font-face {
  font-family: "Proxima-Nova";
  src: local("Proxima-Nova"),
   url(./assets/fonts/FontsFree-Net-FontsFree-Net-Proxima-Nova-1.ttf) format("truetype");
}
</style>
