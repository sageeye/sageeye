<template>
  <section class="section first_section pt-5">
      <div class="columns is-vcentered">

        <div class="column is-6">
          <LandingPageHeader />
          <LandingPageContent />
        </div>

        <div class="column is-6 pb-0">
          <LandingPageImage />
        </div>

      </div>
  </section>
</template>
<script>
import LandingPageHeader from './LandingPageHeader.vue';
import LandingPageImage from './LandingPageImage.vue';
import LandingPageContent from './LandingPageContent.vue';
  export default {
    name: 'LandingPage',
    data() {
      return {
        
      }
    },
    components: {
      LandingPageHeader,
      LandingPageImage,
      LandingPageContent
    },
    methods: {
    }
}
</script>
<style scoped>
  .first_section{
    background-color: #434343;
  }
  
</style>
