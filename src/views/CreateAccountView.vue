
<template>
 <section class="client">
   
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-5">
      <div class="form mt-5">
        <form @submit.prevent="">
          <h6>Create Account</h6>
          <div class="form-group mt-3">
            <label for="">First Name</label>
          <input type="text" v-model="first_name" maxlength="200" required class="form-control shadow-none border-none">
        </div>
        <div class="form-group mt-3">
            <label for="">Last Name</label>
          <input type="text" v-model="last_name" maxlength="200" required class="form-control shadow-none border-none">
        </div>
        <div class="form-group mt-3">
          <label for="">Email</label>
          <input type="text" v-model="email" maxlength="200" required class="form-control shadow-none border-none">
        </div>

        <div class="form-group mt-3">
          <label for="">Phone Number</label>
          <input type="text" v-model="phone_number"  maxlength="10" required class="form-control shadow-none border-none">
        </div>
       
      
       
        <button class="btn btn-outline-white verify-btn shadow-none mt-3 " type="submit">Create Account</button>
        <div >
          {{errors}}
        </div>
      </form>
      </div>

    </div>
  </div>
</div>
 </section>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'CreateAccountView',
  components: {
    Navbar
    
  },
  data(){
    return{
      phone_number:'',
      first_name:'',
      last_name:'',
      email:'',
      errors:''
    }
  },
  
  mounted(){
    this.getBtc()
  },
  methods: {
   
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&display=swap');

.client{
  font-family: 'Mukta', sans-serif;
}

.form{
  background:#fff;
  box-shadow:
  0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)
  ;
  padding: 25px;
  border-radius: 8px 20px 8px 20px;
  margin: 10px;
}

.client{
  background:#FF9428;
  padding: 60px 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}


.verify-btn{
  padding: 15px;
  background: #F6821F;
  color: #ffffff;
  border-radius: 2px 10px;
}

input[readonly]{
  background-color:#f2f2f2;
  border: 0;
  font-size: 1em;
}


form h6{
  color:#F6821F;
  font-size: 1.9rem;
}

.form-control{
  padding: 10px;
  border-radius: 5px;

}

label{
  font-size: 1rem;
  padding: 2px;
  font-weight:500;
  color: #F67800;
}

</style>
