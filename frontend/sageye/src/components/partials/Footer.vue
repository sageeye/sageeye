<template>
    <section class="section py-4 social_media_card">
        <div class="container">
            <div class="content has-text-white">
                <div class="columns mx-5 pt-3 footer_border">

                    <!--Mail-->
                    <div class="column is-4 has-text-centered-mobile">
                        <p class="is-primary is-size-6 has-text-weight-medium is-lowercase social_media_icon">  
                            <a v-bind:href="contact">
                                <span class="icon fa-lg ">
                                    <fa icon="envelope" />
                                </span>
                            </a>
                        </p>
                    </div>

                    <!--Social Media Icon-->
                    <div class="column is-4 has-text-centered social_media_icon">
                        <a href="/">
                            <span class="icon fa-lg mx-2">
                                <fa :icon="['fab', 'facebook-f']" />
                            </span>
                        </a>
                        <a href="/">
                            <span class="icon fa-lg mx-2">
                                <fa :icon="['fab', 'twitter']" />
                            </span>
                        </a>
                        <a href="/">
                            <span class="icon fa-lg mx-2">
                                <fa :icon="['fab', 'instagram']" />
                            </span>
                        </a>
                        <a href="/">
                            <span class="icon fa-lg mx-2">
                                <fa :icon="['fab', 'linkedin-in']" />
                            </span>
                        </a>
                    </div>
                    <!--Terms & Conditions-->
                    <div class="column is-4 has-text-right has-text-centered-mobile">
                        <p class="is-primary is-size-6 has-text-weight-medium is-capitalized">  
                        Terms &amp; Conditions &nbsp;&nbsp; Privacy Policy
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>

     <!--copyrights-->
    <div class="has-text-centered my-4">
        <p class="is-primary is-size-6 has-text-weight-medium is-lowercase">&copy; 2021 - 2022 <strong><a href='https://sageye.io'><span class="sageye_colored_logo">sageye</span></a></strong> All Rights Reserved.</p>
    </div>
</template>

<style>
@import '../../assets/css/styles.css'
</style>
<script>

export default {
  name: 'Footer',
  data() {
      return {
          contact: "mailto:contact-us@sageye.io"
      }
  }
}

</script>

<style scoped>
.social_media_icon a{
    text-decoration: none;
    cursor: pointer!important;
    color: #fff;
}
.social_media_card{
    background-color:#1d1e21;
}
</style>