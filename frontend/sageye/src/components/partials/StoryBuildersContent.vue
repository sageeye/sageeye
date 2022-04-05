<template>
  <div class="firstCard">  
    <p class="body_text mb-4">
      {{ storyBuilder_content_1 }}
    </p>
    <p class="body_text mb-4">
      {{ storyBuilder_content_2 }}
    </p>
    <p class="body_text">
      {{ storyBuilder_content_3 }}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'StoryBuildersContent',
    data() {
      return {
        'storyBuilder_content_1' : "Are you a freelance illustrator, storyboarder and/or animator, proficient in design tools, who would love to work on various domains in exciting story angles?",
        'storyBuilder_content_2' : "Our subject matter specialists from fields like big data, security, crypto, storage and so on, including design, would translate the story seeker’s requirement for you in simple clear language and a navigation system will guide you further,  for you to illustrate and animate.",
        'storyBuilder_content_3' : "The concepts are ours; the visualisations are yours. Connect with us to create impactful outcomes for the B2B industry.",
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
      font-size: 27px ;
      line-height: 36px;
      color: #e7e6e6ff;
      text-align: justify;
    }

  div.firstCard{
    width: 90%;
  }
 
  @media only screen and (max-width: 480px) {
    div.firstCard{
      width: 100%;
    }
    .body_text{
      font-size: 22px ;
      line-height: 30px;
      text-align: center;
    }
   
  }

</style>
