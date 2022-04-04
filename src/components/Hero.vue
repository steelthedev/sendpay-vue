<template>
   <section class="hero">
       <div class="container-fluid ">
           <div class="row mt-5">
               <div class="col-lg-6 mt-5">
                   <h2>The best way to send funds to your loved ones.</h2>
                   <p>iPay is your get to web app to instantiate money transfer to your loved ones via cryptocurrencies</p>
                <div class="hero-btn">
                    <router-link :to="{name:'createaccount'}" class="btn h-btn btn-outline-white">Create free account</router-link>
                </div>
               </div>
               <div class="col-lg-6 mt-5">
                   <img src="../assets/hero3.png" alt="">
               </div>
           </div>
       </div>
   </section>






</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name:'Hero',
    components:{
        Navbar
    }
}
</script>
<style scoped>
.hero{
    padding: 40px ;
    height: 100%;
 
}


.hero h2{
    font-size: 3.5rem;
    color: var(--main-color);
    font-weight: 700;
}

.hero p{
    font-size: 1.1rem;
    color: #B0350A;
}

.hero img{
    width: 80%;
}

.hero .h-btn{
    padding: 12px;
    background:var(--main-color);
    border-radius: 10px 10px ;
    font-size:1rem;
    font-weight: 700;
    color: #fff;
}
</style>