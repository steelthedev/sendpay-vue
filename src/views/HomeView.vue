<template>
 <Navbar />
 
 <Hero />

<Services />

<Footer />

</template>
<script>
import Services from '@/components/Services.vue'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'


export default {
    name:'HomeView',
    components:{
        Navbar,Hero,Services,Footer
        
    }
}
</script>
