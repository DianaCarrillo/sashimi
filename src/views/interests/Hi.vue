<template>
    <div class=" flex flex-col justify-center flex-grow text-xl font-bold  h-screen bg-black cover bg-img"  >
       <!-- <p class="text-lg">Con <span class="text-sa-blue sashimi">01111011</span> minúscula</p>  -->
     <div class="flex">
      <section class="flex items-center w-1/2 bg-opacity" :class="{'flex-col w-full': $mq === 'mo', 'p-8': $mq === 'de' }">
       <div v-if="$mq === 'de'">
         <p class=" pr-4 font-bold text-primary pb-8">Soy Programadora Front-end y licenciada en Psicología social. Mi camino como dev comenzó en Laboratoria donde aprendí a trabajar con JavaScript, node, CSS, Firebase, APIs y conceptos básicos de UX. <br> Posteriormente trabajé por un año con Eleva en app.chain.inc donde programaba con VUE y realizaba email development para comunicación interna y de la aplicación  </p> 
         <!-- <a  href="./diana-cv.pdf" download="diana-cv.pdf" target="_blank" class="font-bold text-sa-yellow bg-primary p-2 rounded-lg hover:bg-sa-yellow">Descarga mi C.V</a> -->
        </div>
        <div v-else>
             <p class=" pr-4 font-bold text-primary text-lg pb-8 p-8">Soy Programadora Front-end y licenciada en Psicología social. Mi camino como dev comenzó en Laboratoria donde aprendí a trabajar con JavaScript, node, CSS, Firebase, APIs y conceptos básicos de UX. <br> Posteriormente trabajé por un año con Eleva en app.chain.inc donde programaba con VUE y realizaba email development para comunicación interna y de la aplicación  </p> 
        </div>

        <img class="circle rounded-full w-48 feminism z-0"  :class="{'w-32': $mq === 'mo'}"  src="../../assets/dianasash.jpg" alt="">      
      </section>
      
      <section class="w-1/2">
        <Skills/>
      </section>
      </div>
       <!-- <p>:)</p>    -->
  </div>
</template>

<script>
import Skills from '../Skills';
    export default {
        components:{
            Skills
        }
    }
</script>

<style lang="scss" scoped>
img {
 box-shadow: 8px 8px 50px  #eefa00;
}
.bg-img{
    background-image: url('../../assets/atardecer.jpg');
    background-size: cover;
}

.bg-opacity{
  background: rgba(25, 25, 25, .5);
}
a:hover{
    color: #ff0080;
}
// .sashimi{

//   color: #fff;
//   animation: glow 1s ease-in-out  infinite alternate-reverse;
//   -webkit-animation: glow 1s ease-in-out infinite  alternate-reverse;
//   -moz-animation: glow 1s ease-in-out infinite alternate-reverse;
// }

// @-webkit-keyframes glow {
//   from {
//     text-shadow: 0 0 10px #1d00ff, 0 0 20px #1d00ff, 0 0 30px #1d00ff, 0 0 40px #1d00ff, 0 0 50px #1d00ff, 0 0 60px #1d00ff, 0 0 70px #1d00ff;
//   }
  
//   to {
//     text-shadow: 0 0 5px #1d00ff, 0 0 10px #1d00ff, 0 0 10px #1d00ff, 0 0 10px #1d00ff, 0 0 10px #1d00ff, 0 0 10px #1d00ff, 0 0 10px #1d00ff;
//   }
// }
</style>