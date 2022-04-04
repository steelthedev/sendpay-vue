<template>

  <router-view/>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name:'App',
  components:{
    Navbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200&display=swap');

:root{
  --main-color:#ffa500;
  --secondary-color:#B0350A;
}


*{
  font-family: 'Mukta', sans-serif;
 }


</style>
