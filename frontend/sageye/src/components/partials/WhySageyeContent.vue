<template>
  <div class="body_text">
    <p class="mb-4 sageye_subtitle">
        <span class="text_blue">Your Idea, </span>
        <span class="text_orange">Your Story! </span>
        <span class="text_blue line_break">We help you </span> 
        <span class="text_orange">Weave!</span>
    </p>

    <p>From Concept to Visualization: </p>

    <div class="visualization_card my-3"> 
      <p class="mb-3">
        No more frustrations on communicating the idea  in “creative”  language  
      </p>
      <p class="mb-3">
        No more innumerable edits or iterations, costing time and money.
      </p>
      <p>
        No more elusive deadlines for your Marketing collateral and assets 
      </p>
    </div>

    <p>
      Check in, build your stories efficiently, realize creative outcomes!
    </p>
  </div>
</template>
<script>
  export default {
    name: 'WhySageyeContent',
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
  .body_text{
    font-size: 28px ;
    line-height: 34px;
  }
  .sageye_subtitle{
    /* text-transform: capitalize; */
    font-weight: bold;
    line-height: 32px;
  }
  .text_blue{
    color:#3494EB;
  }
  .text_orange{
    color:#f25b24;
  }
  .visualization_card{
    width: 80%;
  }
  .visualization_card p{
    font-size: 22px ;
    line-height: 28px;
  }
 
  @media only screen and (max-width: 480px) {
    .line_break {
      white-space: pre;
    }
    .body_text{
      font-size: 22px ;
      line-height: 30px;
      text-align: center;
    }
    .visualization_card{
      margin: auto;
      width: 90%;
    }
    .visualization_card p{
      font-size: 18px ;
      line-height: 28px;
         text-align: center;
    }
  }
  
</style>
