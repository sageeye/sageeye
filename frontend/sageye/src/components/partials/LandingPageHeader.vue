<template>
  <h1 class="header_text">
    Re-Defining
    <div class="story_style"> story </div> 
    Creation
  </h1>
</template>
<script>
  export default {
    name: 'LandingPageHeader',
    data() {
      return {
        
      }
    },
    components: {

    },
    methods: {

    }
}
</script>
<style scoped>

  .header_text{
    font-size: 65px;
    line-height: 76px;
    color: #e7e6e6ff;
    margin-bottom: 20px;
  }
  .story_style {
    font-family: 'Forum', cursive;
    font-weight: 900;
    width: -webkit-min-content;
    width: -webkit-min-content;
    width: min-content;
    /* margin: auto; */
    text-transform: uppercase;
    background: linear-gradient(90deg, 
    var(--color-3) 45.5%, 
      transparent 45.5%,
      var(--color-4) 45%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media only screen and (max-width: 480px) {
    .header_text{
      font-size: 45px ;
      line-height: 1.125;
      text-align: center;
      margin-bottom: 12px;
    }

    .story_style {
      font-family: 'Forum', cursive;
      font-weight: 900;
      width: -webkit-min-content;
      width: -moz-min-content;
      width: min-content;
      margin: auto;
      text-transform: uppercase;
      background: linear-gradient(90deg, 
      var(--color-3) 50%, 
        transparent 50%,
        var(--color-4) 50%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
  

</style>
