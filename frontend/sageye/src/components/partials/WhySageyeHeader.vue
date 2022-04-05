<template>
  <h1 class="header_text  has-text-centered">
    Why <a href="https://sageye.io/"><span class="sageye_logo_style">sageye</span></a>?
  </h1>
</template>
<script>
  export default {
    name: 'WhySageyeHeader',
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
  .sageye_logo_style {
    font-family: 'Forum', cursive;
    font-weight: 900;
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content;
    margin: auto;
    text-transform: lowercase;
    background: linear-gradient(90deg, 
    var(--color-3) 58%, 
      transparent 58%,
      var(--color-4) 58%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  .header_text{
    letter-spacing: 1.5px;
    font-size: 60px ;
  }
 
  @media only screen and (max-width: 480px) {
    .header_text{
      font-size: 45px ;
      line-height: 1.125;
      text-align: center;
    }
  }

</style>
