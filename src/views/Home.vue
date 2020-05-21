<script>
// import BioButton from "../components/BioButton.vue";
// import Psychologist from "./interests/Psychologist.vue";
// import Developer from "./interests/Developer.vue";
// import Feminist from "./interests/Feminist.vue";
import Hi from "./interests/Hi.vue";
// import Mountains from "../views/Mountains.vue";
import Description from "../views/Description.vue";

    export default {
        name: "Home",
        data(){
          return{
          // psychologist: false,
          // developer: false,
          // feminist: false,
          // catlover: false,
          // hover: false,
          }
        },
        components: {
          Description,
          // BioButton,
          // Mountains,
          // Psychologist,
          // Developer,
          // Feminist,
          Hi
          // CatLover
        }
    }
</script>
<template>
<!-- h-screen flex whitespace-no-wrap p-24  px-auto -->
<div class=" overflow-x-scroll horizontal-scroll-wrapper">
  <!-- <div :class="{'flex-col': mq === 'mo'}" class="flex justify-between"> -->
   <Description />
   <!-- <Developer /> -->
  <!-- <Feminist /> -->
   <!-- <Psychologist/> -->
   <Hi/>
  </div>
<!-- </div> -->

</template>

<style scoped>
.sa-font{
  font-size:300px;
}
horizontal-scroll-wrapper {
  width: 100px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
    transform: rotate(-90deg);
  transform-origin: right top;
}
</style>