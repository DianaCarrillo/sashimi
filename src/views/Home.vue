<script>
// import BioButton from "../components/BioButton.vue";
import Psychologist from "./interests/Psychologist.vue";
import Developer from "./interests/Developer.vue";
import Feminist from "./interests/Feminist.vue";
// import CatLover from "./interests/CatLover.vue";
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
          Psychologist,
          Developer,
          Feminist,
          // CatLover
        }
    }
</script>
<template>
<div class="h-screen flex whitespace-no-wrap p-24  px-auto overflow-x-scroll">
  <div class=" flex">
   <Description />
   <Developer />
       <div class="flex flex-col w-full">
    <div class="bg-sa-yellow w-full z-0 p-8"> </div>
  </div>
  <Feminist />
   <Psychologist/>
    <section class="items-center flex flex-col justify-center flex-grow text-6xl p-64 pl-16 mx-64 text-center" >
      <p >Bienvenide<br/> mi nombre es</p>
      <h1 class="text-sa-blue sashimi">sashimi</h1>
      <p class="text-lg">Con <span class="text-sa-blue sashimi">01110011</span> minúscula</p>
  </section>
  </div>
</div>

</template>

<style scoped>
.sa-font{
  font-size:300px;
}
.sashimi{
  /* text-shadow: #C4DAFE 1px 0 5px; */
}
.feminism{
  filter: grayscale(100%)
  /* background-image: url(../assets/IMG_20200308_170320_BURST20.jpg) */
}
</style>