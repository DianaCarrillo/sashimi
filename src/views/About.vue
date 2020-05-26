<script>
// import BioButton from "../components/BioButton.vue";
import Psychologist from "./interests/Psychologist.vue";
import Developer from "./interests/Developer.vue";
import Feminist from "./interests/Feminist.vue";
// import Mountains from "../views/Mountains.vue";

    export default {
        name: "About",
        data(){
          return{

          }
        },
        components: {
          // BioButton,
          // Mountains,
          Psychologist,
          Developer,
          Feminist,
        }
    }
</script>
<template>
  <div class="about">
   <Developer />
   <Feminist />
   <Psychologist/>
  </div>
</template>
