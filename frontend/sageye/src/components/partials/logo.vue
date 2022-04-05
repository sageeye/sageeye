<template>
    <p class="sageye_style_one title">sageye</p> 
    <!-- <p class="subtitle wise_outcomes_style" >efficient outcomes</p> -->
</template>
<script>
export default {
  name: 'SageyeLogo',
 
  data() {
      return{
         
      }
  },
  components: {
  
  },
  methods: {
      
  }
}

</script>
<style scoped>

.wise_outcomes_style{
    text-transform: lowercase;
    /* text-transform: capitalize; */
    margin-left: 56px;
    font-size: 1.05rem;
    color: #fff;
    font-style: italic;
    /* font-family: "Proxima-Nova"; */
}

.title:not(.is-spaced) + .subtitle {
    margin-top: -1.95rem;
}

.sageye_style_one {
  margin-top: -5px;
  /* padding-top:5px; */
  font-family: 'Forum', cursive;
  font-size: 60px;
  font-weight: 900;
  line-height:77px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  text-transform: lowercase;
  background: linear-gradient(90deg, 
  var(--color-3) 58%, 
    transparent 58%,
    var(--color-4) 58%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* display: flex; */
  
}
	
</style>

