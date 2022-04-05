<template>
  <section class="section why_sageye_section py-5" id="WhySageye">
    <div class="columns">
      <div class="column is-12">
        <WhySageyeHeader />
      </div>
    </div>
    <div class="columns is-vcentered">
      <div class="column is-6">
        <WhySageyeImage />
      </div>
      <div class="column is-6">
        <WhySageyeContent />
      </div>
    </div>
  </section>
</template>
<script>
  import WhySageyeHeader from './WhySageyeHeader'
  import WhySageyeImage from './WhySageyeImage'
  import WhySageyeContent from './WhySageyeContent'
  export default {
    name: 'WhySageye',
    data() {
      return {
      }
    },
    components: {
      WhySageyeHeader,
      WhySageyeImage,
      WhySageyeContent,
    },
    methods: {
    }
}
</script>
<style scoped>
  .why_sageye_section{
    background-color: #e7e6e6;
    color:#000;
  }

</style>
