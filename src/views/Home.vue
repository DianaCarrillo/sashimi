<script>
// import BioButton from "../components/BioButton.vue";
// import Psychologist from "./interests/Psychologist.vue";
// import Developer from "./interests/Developer.vue";
// import Feminist from "./interests/Feminist.vue";
// import CatLover from "./interests/CatLover.vue";
// import Mountains from "../views/Mountains.vue";
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
          // BioButton,
          // Mountains,
          // Psychologist,
          // Developer,
          // Feminist,
          // CatLover
        }
    }
</script>
<template>
<div class="h-screen flex whitespace-no-wrap p-16 px-auto overflow-x-scroll">
  <!-- <div class="flex flex-col w-full">
    <div class="bg-sa-yellow w-full z-0 p-8"> </div>
  </div> -->
  
    <!-- <h1 @mouseout="hover = false"  v-if="hover" class="flex text-6xl text-purple-600">
  </h1>
      <h1 @mouseover="hover = true" v-else class="flex text-6xl text-primary">
      Welcome
  </h1> -->
  <div class="z-10 flex">
<section  class="items-center flex flex-col justify-center flex-grow text-6xl font-bold bg-sa-yellow px-16">
  <div></div>
      <h1>DEVELOPER</h1>
      <h1>PSYCHOLOGIST</h1>
      <h1>FEMINIST</h1>
      <h1>CAT LOVER</h1>
  </section>
       <!-- <div class="flex flex-col w-full">
    <div class="bg-sa-yellow w-full  p-8"> </div>
  </div> -->
  <section class="px-16 border border-black mx-64 text-3xl overflow-visible">
      <h3>I have found true love on web development and the internet</h3>
      <img class="w-1/2" src="../assets/489.jpg" alt="">
  </section>
       <div class="flex flex-col w-full">
    <div class="bg-sa-yellow w-full z-0 p-8"> </div>
  </div>
  <section class="flex flex-col p-16  border border-black mx-64 text-3xl bg-no-repeat items-center" >
      <img class="w-1/2"  src="../assets/feminismo.jpg" alt="">
      <div class="border border-black p-8 px-16 m-2">
        <h3><span class="text-6xl">Feminist</span> movements and theories make me feel </h3> 
        <h3>accopained throught my life and fills it with <span class="text-6xl">sense</span>.</h3>
      </div>
      <img class="w-1/2 feminism" src="../assets/feminismo_2.jpg" alt="">
  </section>
    <section class="p-16 border border-black mx-64 text-3xl" >
      <h3>I am a social psychologist. That means:</h3>
      <ul>
        <li>I'm a good observer and listener</li>
        <li>I care about social issues</li>
        <li>I understand human problematics with a social -non biological- point of view</li>
      </ul>
  </section>
    <section class="items-center flex flex-col justify-center flex-grow text-6xl p-64 pl-16 mx-64 " >
      <p >Hi, my name is</p>
      <h1 class="text-sa-blue sashimi">sashimi</h1>
      <p class="text-lg">Con s minúscula</p>
  </section>
  </div>
  
  <!-- <div class=" flex flex-col justify-end" > -->
      <!-- <Psychologist  v-if="psychologist" />
      <Developer v-if="developer" />
      <Feminist v-if="feminist"/>
      <CatLover v-if="catlover" /> -->
    <!-- <Mountains />
    <section class=" flex bg-sa-blue justify-around">      
      <BioButton label="psychologist " @click="psychologist = true"  /> 
      <BioButton label="developer " /> 
      <BioButton label="feminist " /> 
      <BioButton label="cat lover" />
      </section> -->
  <!-- </div> -->
</div>

</template>

<style scoped>
.sa-font{
  font-size:300px;
}
h1{
  transition: 400ms ease;
}
h1:hover {
   color: black;  /* Fallback: assume this color ON TOP of image */
   background: url('https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500s') repeat;
     background-size: 300px 100px;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  transition: 500ms ease;

}
.sashimi{
  /* text-shadow: #C4DAFE 1px 0 5px; */
}
.feminism{
  filter: grayscale(100%)
  /* background-image: url(../assets/IMG_20200308_170320_BURST20.jpg) */
}
.feminism:hover{
  filter: brightness(120%)
  /* background-image: url(../assets/IMG_20200308_170320_BURST20.jpg) */
}
</style>