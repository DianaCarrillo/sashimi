<template>
  <div id="app" class="overflow-hidden">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"; 
    export default {
    name: "App",
    components: {
      Navbar,
    },
    }
</script>
