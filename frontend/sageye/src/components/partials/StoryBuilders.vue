<template>
  <section class="section story_builder_section py-5" id="StoryBuilders">
        <div class="columns">
          <div class="column is-12 pt-0">
            <StoryBuildersHeader />
          </div>
        </div>

      <div class="columns">
        <div class="column is-6">
          <StoryBuildersContent />
        </div>

        <div class="column is-6">
          <StoryBuildersImage />
        </div>

      </div>

      <GetOnboard />
  </section>

</template>
<script>
  import StoryBuildersHeader from './StoryBuildersHeader.vue'
  import StoryBuildersContent from './StoryBuildersContent.vue'
  import StoryBuildersImage from './StoryBuildersImage.vue'
  import GetOnboard from './GetOnboard.vue'
  export default {
    name: 'StoryBuilders',
    data() {
      return {
        
      }
    },
    components: {
      StoryBuildersHeader,
      StoryBuildersContent,
      StoryBuildersImage,
      GetOnboard,
    },
    methods: {

    }
}
</script>
<style scoped>
  .story_builder_section{
    background-color: #434343;
  }
</style>
