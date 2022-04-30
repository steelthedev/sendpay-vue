
<template>
 <section class="client">
   
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-5">
      <div class="form mt-5">
        <form @submit.prevent="makePayment">
          <h6>Receipient's Details</h6>
          <div class="form-group mt-3">
            <label for="">Full name</label>
          <input type="text" v-model="name" maxlength="200" required class="form-control shadow-none border-none">
        </div>
        <div class="form-group mt-3">
          <label for="">Email</label>
          <input type="text" v-model="email" maxlength="200" required class="form-control shadow-none border-none">
        </div>
        <div class="form-group mt-3">
          <label for="">Btc Amount</label>
          <input type="integer" v-model="crypto"  required class="form-control shadow-none border-none">
        </div> 

        <div class="form-group mt-3">
          <label for="">Equivalent in NGN</label>
          <input type="integer" v-model="NGN" placeholder="NGN" required class="form-control shadow-none border-none" readonly>
        </div> 
         <div class="form-group mt-3">
           <label for="">Bank</label>
          <select v-model="bank" class="form-control border-none shadow-none" required >
            <option value="" disabled selected>Select your bank</option>
            <option value="011">First Bank</option>
            <option value="035">Wema Bank</option>
            <option value="611">Kuda Bank</option>
            <option value="033">UBA</option>
          </select>
        <div class="form-group mt-3">
          <label for="">Account number</label>
          <input type="text" v-model="account_number"  maxlength="10" required class="form-control shadow-none border-none">
        </div>
       
        <div class="form-group mt-3">
          <label for="">Account name</label>
          <input type="text" v-model="account_name"  class="form-control shadow-none border-none" required  readonly >
        </div> 
        
      
        </div>
        <button class="btn btn-outline-white verify-btn shadow-none mt-3 " type="submit">Submit transfer</button>
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
  name: 'PayView',
  components: {
    Navbar
    
  },
  data(){
    return{
      account_name:'',
      account_number:'',
      name:'',
      email:'',
      bank:'',
      usd:'',
      crypto:'',
      NGN:'',
      errors:'',
      ngn_rate:'',

    }
  },
  watch:{
    account_number(account_number){
      if((account_number.length) === 10 ){
      this.verifyAccount()
      }
    },

    crypto(crypto){
      if(crypto.length){
       this.NGN = (crypto * this.usd) *  this.ngn_rate
      }
      else if(!crypto.length){
        this.NGN= 0
      }
    }
  },
  mounted(){
    this.getBtc()
    this.getExchange()
  },
  methods: {

makePayment(){
    const data = {

      full_name : this.name,
      email : this.email,
      btc_amount : this.crypto,
      btc_in_ngn : this.NGN,
      bank : this.bank,
      account_number:this.account_number,
      account_name:this.account_name

    }
      axios
            .post('pay',data)
            .then(response =>{
              console.log(response)
            })
    },

  getBtc(){
    axios
    .get('crypto')
    .then(response =>{
      console.log(response.data)
      this.usd = response.data.prices.USD
    })
  },

  async getExchange(){
    await axios
    .get('naira')
    .then(response => {
        console.log(response.data.rates)
        this.ngn_rate = response.data.rates.NGN
    })
  },
  
   async verifyAccount(){
       const data={
       account_number:this.account_number,
       bank:this.bank
     }
    await axios
      .post('acc_num',data)
      .then(response =>{
        console.log(response.data.data.account_name)
        this.account_name = response.data.data.account_name
      })
      .catch(error =>{
          this.errors= "Your bank account cannot be verified at the moment. Check details again."
      })
    }
    
   
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
