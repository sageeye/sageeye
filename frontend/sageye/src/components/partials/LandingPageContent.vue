<template>
  <div class="firstCard"> 
    <p class="body_text">
      {{ landingSectionContent_1 }}
    </p>
  </div>
  <div class="secondCard"> 
    <p class="sub_content">
      <a href="https://sageye.io/"><span class="sageye_logo_style">sageye</span></a> {{ landingSectionContent_2 }}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'LandingPageContent',
    data() {
      return {
        'landingSectionContent_1': "Leverage the power of our subject matter specialists who will solve challenges in content communication and collaborate with a community of creators to achieve impactful visual stories.",
        'landingSectionContent_2': "is an intuitive marketplace platform for B2B industry built with subject centric approach, smart contracts, collaboration tools, IP protection and anti-plagiarism checks."
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
  div.firstCard{
    width: 90%;
  }
  .body_text{
    font-size: 27px ;
    line-height: 36px;
    color: #e7e6e6ff;
    margin-bottom: 20px;
    text-align: justify;
  }
  div.secondCard {
    width:90%;
    /* margin-bottom: 30px; */
  }
  .sub_content {
    font-size: 27px ;
    line-height: 36px;
    color: #e7e6e6ff;
    text-align: justify;
  }
 
  @media only screen and (max-width: 480px) {
    .body_text, .sub_content{
      font-size: 22px ;
      line-height: 30px;
      text-align: center;
    }
    div.firstCard{
      width: 100%;
    }
    div.secondCard {
      margin: auto;
      width:100%;
      padding: 0px;
    }

  }
  
</style>
