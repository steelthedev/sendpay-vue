<template>
   <nav class="navbar navbar-expand-lg fixed-top   p-2">
        
    <div class="container-fluid"> 
    <router-link to="/" class="navbar-brand p-3" >iPay</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 p-3 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{'name':'home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{'name':'pay'}" class="nav-link">Send funds</router-link>
        </li>
        
       
      </ul>
    </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav{
  background: #ffffff;
}

nav a{
  color: var(--main-color) ;
  font-size: 1.2rem;
  text-decoration: none;
  outline: none;
}

.navbar .navbar-brand{
  font-size: 1.6rem;
}

nav a:hover{
  color: var(--main-color);
}

.navbar-toggler{
  background: #fff;;
}

.fa-bars{
  font-size: 1.2rem;
  color:var(--main-color);
}

</style>
