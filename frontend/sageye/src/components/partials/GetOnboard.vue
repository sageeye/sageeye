<template>
   <div class="onboard_btn">
      <button class="button is-info is-capitalized" @click="showModal = true">Get onboard</button>
    </div>
  <!--Get onboard modal-->
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background" @click="closeModal()"></div>
    <div class="modal-content has-background-info py-5 px-5">
      <form @submit.prevent="saveOnboardDetails()">
        <div class="field">
          <label class="label input_label has-text-white is-uppercase">Name<span class="has-text-danger">*</span></label>
          <div class="control">
            <input class="input" :class="{ 'is-danger': v$.name.$error }" type="text" placeholder="Name" v-model.trim="name">
          </div>
          <span class="has-text-black" v-if="v$.name.$error"> {{v$.name.$errors[0].$message }}</span>
        </div>
        <div class="field">
          <label class="label input_label has-text-white is-uppercase">Email<span class="has-text-danger">*</span></label>
          <div class="control">
            <input class="input" :class="{ 'is-danger': v$.email.$error }" type="email" placeholder="Email" v-model.trim="email">
            <span class="has-text-black" v-if="v$.email.$error"> {{v$.email.$errors[0].$message }}</span>
          </div>
        </div>
        <div class="field">
          <label class="label input_label has-text-white is-uppercase">Would you like to tell something about yourself?</label>
          <div class="control">
            <textarea class="textarea" rows="3" placeholder="I would love to create illustrations/animations/story research..." v-model.trim="message"></textarea>
          </div>
        </div>
        <div class="field"> 
          <label class="checkbox checkbox_label has-text-white" >
            <input type="checkbox" class="v-input__checkbox" value="true" v-model="selectAgree">
            I agree for sageye to send newsletter and other relevant articles to my email.
          </label>
        </div>
        <div class="mt-3 has-text-centered">
          <button type="submit" class="button form_btn px-6 is-capitalized">Submit</button>
        </div>
      </form>
    </div>
  </div>

</template>
<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'
  import axios from 'axios'

  export default {
    name: 'GetOnboardModal',
    setup () {
      return { v$: useVuelidate() }
    },
    data() {
      return {
        showModal: false,
        name:null,
        email:null,
        message:null,
        interest: 'storybuilder',
        selectAgree: true,
      }
    },
    validations () {
      return {
        name: { required }, 
        email: { required, email },
      }
    },
    components: {
  
    },
    methods: {
      closeModal(){
        this.showModal = false
      },
      
      saveOnboardDetails(){  
        this.v$.$validate()
        // console.log(this.v$)
        if(!this.v$.$error) {
          console.log(this.name +', '+ this.email +', '+ this.message +', '+ this.selectAgree)

          // Post the contact to the backend
          var _body = {
            contact: {
                name: this.name,
                email: this.email,
                message: this.message,
                interest: this.interest,
                agree: this.selectAgree
            }
          }
          console.log('user is ' + _body.contact)
          const _headers = {
            headers: {
              'Content-Type': 'application/json',
            }
          }
          console.log(_headers)

          // Hack: Until we deploy the backend into firebase functions, we'll use
          // the heroku as the backend!
          axios.post('https://us-central1-sageye-3f736.cloudfunctions.net/app/api/contact', _body, _headers)
            .then((res) =>  {
              console.log('success - ' + res)
            })
            .catch((error) => {
              console.log('error - ' + error)
            })
            .finally(() => {
              console.log('cleanup!')
              this.showModal = false
              // this.$router.go(0)
              this.name= ''
              this.email= ''
              this.message= ''
              this.interest = 'storybuilder'
              this.selectAgree= true        
            })
        }
      },
    }
}
</script>
<style scoped>
  @media only screen and (max-width: 480px) {
    .onboard_btn{
       text-align: center;
    }
  }
  .checkbox_label{
    font-family: "Proxima-Nova";
  }
  .input_label{
    font-family: "Proxima-Nova";
    letter-spacing: 1.5px;
  }
  .form_btn{
    font-family: "Proxima-Nova";
    color: #fff;
    background-color:#f25b24;
  }
  .v-input__checkbox {
    vertical-align: middle;
  }

</style>
