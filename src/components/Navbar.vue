<script>
export default {
  name: 'Navbar',
  data() {
    return {
      hover: false,
    };
  }
}
</script>

<template>
    <nav class="flex w-full p-1 text-lg p-1 px-8 fixed bg-sa-yellow z-10">
      <!-- <div @mouseover="hover = true" @mouseleave="hover = false"> -->
        <!-- <router-link v-if="hover" class="px-2 text-sa-blue font-bold" to="/">me</router-link>          -->
        <router-link    class="px-2 text-sa-blue font-bold" to="/">sashimi</router-link>  
      <!-- </div> -->
      
      <div class="ml-auto text-primary">
        <router-link class="px-2 hover:text-secondary" to="/about">about </router-link>  
        <router-link class="px-2 hover:text-secondary" to="/projects">projects </router-link>  
        <router-link class="px-2 hover:text-secondary" to="/art">art </router-link>  
        <router-link class="px-2 hover:text-secondary" to="/contact">contact </router-link>
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