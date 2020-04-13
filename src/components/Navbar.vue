<template>
    <nav class="bg-transparent flex w-full p-1 text-2xl">
        <router-link class="px-2" to="/">sashimi</router-link>  
      <div class="ml-auto">
        <router-link class="px-2" to="/about">about </router-link>  
        <router-link class="px-2" to="/projects">projects </router-link>  
        <router-link class="px-2" to="/art">art </router-link>  
        <router-link class="px-2" to="/contact">contact </router-link>
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