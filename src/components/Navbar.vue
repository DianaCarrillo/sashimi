<script>
import BioButton from '../components/BioButton'

export default {
  name: 'Navbar',
  data() {
    return {
      contact: false,
      email: false,
      about: false,      
    };
  },
  components:{
    BioButton,
  }
}
</script>

<template>
    <nav  class="flex w-full p-2 text-lg px-2 fixed bg-black z-10 items-center" :class="{'px-8': $mq==='de'}">
    <router-link  class="px-4 text-sa-yellow font-bold sashimi" to="/">sashimi</router-link>  
      
      <div class="ml-auto text-primary flex" >
                <BioButton href="https://drive.google.com/file/d/1FraRYkixphpWpPttBiAUUMA6HnBzgDoG/view?usp=sharing" label="Ir a mi C.V." />
          <!-- <router-link  class="px-2 hover:text-sa-yellow flex items-center" to="/about">
            <span class="material-icons" >sentiment_satisfied_alt</span>
          </router-link>
          <router-link  class="px-2 hover:text-sa-yellow flex items-center" to="/projects">
            <span class="material-icons" >code</span>
          </router-link>
          <router-link  class="px-2 hover:text-sa-yellow flex items-center" to="/contact">
            <span class="material-icons" >alternate_email</span>
          </router-link> -->
          <!-- lets deploy -->
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
</style>