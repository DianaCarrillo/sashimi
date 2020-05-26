<script>
export default {
  name: 'Navbar',
  data() {
    return {
      contact: false,
      email: false,
      about: false,      
    };
  }
}
</script>

<template>
    <nav v-if="$mq === 'de'" class="flex w-full p-2 text-lg px-8 fixed bg-black z-10 items-center">
    <router-link    class="px-4 text-sa-yellow font-bold sashimi" to="/">sashimi</router-link>  
      
      <div class="ml-auto text-primary flex" >
         <a  href="./diana-cv.pdf" download="diana-cv.pdf" target="_blank" class="font-bold text-sa-yellow bg-primary px-2 rounded-lg hover:bg-sa-yellow">Ir a mi C.V</a>
          <!-- <router-link  class="px-2 hover:text-sa-yellow flex items-center" to="/about">
            <span class="material-icons" >sentiment_satisfied_alt</span>
          </router-link>
          <router-link  class="px-2 hover:text-sa-yellow flex items-center" to="/projects">
            <span class="material-icons" >code</span>
          </router-link>
          <router-link  class="px-2 hover:text-sa-yellow flex items-center" to="/contact">
            <span class="material-icons" >alternate_email</span>
          </router-link> -->
      </div>
    </nav>
</template>

<style lang="scss" scoped>
.sashimi{
  transition: 200ms ease;
}
.sashimi:hover{
  transition: 200ms ease;
  font-size: 105%;
}
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>