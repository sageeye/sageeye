<template>
  <h1 class="header_content_decoration">
    <span>
        {{ title }}
    </span>
  </h1>
</template>
<script>
  export default {
    name: 'StoryBuildersHeader',
    data() {
      return {
        'title': 'Story Builders',
      }
    },
    components: {
      
    },
    methods: {

    }
}
</script>
<style scoped>
  h1.header_content_decoration{
    display: block;
    position: relative;
  }

  h1.header_content_decoration span{
    position: relative;
    z-index: 1;
  }
  h1.header_content_decoration span:after{
    background: #f25b24;
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    height: 15px;
    bottom: 6px;
    left: -5px;
    right: -5px;
  }
  .header_content_decoration{
    letter-spacing: 1.5px;
    font-size: 50px;
    color: #e7e6e6ff;
  }

 
  @media only screen and (max-width: 480px) {
    .header_content_decoration{
      font-size: 45px ;
      line-height: 1.125;
      text-align: center;
    }
  }

</style>
