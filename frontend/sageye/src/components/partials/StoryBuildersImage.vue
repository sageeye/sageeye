<template>
  <div class="img_card"> 
    <div>
      <figure class="image is-inline-block">
          <img src="../../assets/images/sageye_team.png" alt="Sageye Team" class="team_img"/>
      </figure>
    </div>
    <div>
      <figure class="image is-inline-block">
          <img src="../../assets/images/sageye_creator_hands.png" alt="Sageye Creator Hands" class="creator_hands_img">
      </figure>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'StoryBuildersImage',
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
.img_card{
  margin: auto;
  width: 95%;
}
.creator_hands_img{
  margin-top: -10px;
  width: 60%;
  height: 60%;
  float: right;
}
.team_img{
  width: 60%;
  height: 60%;
  float: left;
}
</style>
