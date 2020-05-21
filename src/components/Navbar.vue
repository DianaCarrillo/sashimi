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
    <nav v-if="$mq === 'de'" class="flex w-full p-1 text-lg p-2 px-8 fixed bg-black z-10 items-center">
      <!-- <div @mouseover="hover = true" @mouseleave="hover = false"> -->
        <!-- <router-link v-if="hover" class="px-2 text-sa-blue font-bold" to="/">me</router-link>          -->
        <router-link    class="px-2 text-sa-yellow font-bold" to="/">sashimi</router-link>  
      <!-- </div> -->
      
      <div class="ml-auto text-primary flex" >
        <div @mouseover="about = true" @mouseleave="about = false">
          <router-link v-if="!about" class="px-2 hover:text-secondary flex items-center" to="/about">
            <span class="material-icons" >sentiment_satisfied_alt</span>
          </router-link>
          <router-link v-else class="px-2 hover:text-secondary flex items-center" to="/about">
            <span>sobre mi</span>
          </router-link>
        </div>
        <div @mouseover="email = true" @mouseleave="email = false">
          <router-link v-if="!email" class="px-2 hover:text-secondary flex items-center" to="/projects">
            <span class="material-icons" >code</span>
          </router-link>
          <router-link v-else class="px-2 hover:text-secondary flex items-center" to="/projects">
            <span>proyectos</span>
          </router-link>
        </div>
        <div @mouseover="contact = true" @mouseleave="contact = false">
          <router-link v-if="!contact" class="px-2 hover:text-secondary flex items-center" to="/contact">
            <span class="material-icons" >alternate_email</span>
          </router-link>
          <router-link v-else class="px-2 hover:text-secondary flex items-center" to="/contact">
            <span>contacto</span>
          </router-link>
        </div>
      </div>
    </nav>
</template>

<style lang="scss" scoped>
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