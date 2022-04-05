<template>
  <div class="body_content"> 
    <LandingPage />
    <WhySageye />
    <StoryBuilders />
  </div>
</template>

<script>
import LandingPage from './partials/LandingPage.vue'
import WhySageye from './partials/WhySageye.vue'
import StoryBuilders from './partials/StoryBuilders'
export default {
  name: 'Home',
  data(){
    return{
      
    }
  },
  components: {
    LandingPage,
    WhySageye,
    StoryBuilders
  },
  created: function () {  
  
  },
  methods: {

  }
}
</script>
<style scoped>
.body_content{
  margin-top: 6rem !important;
}
</style>