<template>
    <div class=" flex flex-col justify-center flex-grow text-xl  h-screen bg-black cover bg-img"  >
     <div class="flex ">
      <section class="flex flex-col justify-center bg-opacity p-4" :class="{'flex-col w-full ': $mq === 'mo', 'p-8 ': $mq === 'de' }">
      <p class="text-left  font-bold text-sa-yellow" :class="{'text-2xl p-8': $mq === 'de', 'pb-4': $mq === 'mo'}">Sobre mí</p>
      <div class="flex items-center justify-center text-lg" :class="{'flex-col w-full': $mq === 'mo'}">
       <div class=" flex flex-col w-1/2  items-center justify-center pr-8" v-if="$mq === 'de'">
         <p class=" text-secondary  pb-8">Soy Programadora Front-end y licenciada en Psicología Social. Mi camino como dev comenzó en Laboratoria donde aprendí a trabajar con JavaScript, node, CSS, Firebase, APIs y conceptos básicos de UX. Además de haber aprendido tanto: ¡una de las mejores experiencias de mi vida! </p>         
         <p class=" text-secondary pb-8" >Posteriormente trabajé en la aplicación app.chain.inc donde programé elementos para la librería de componentes y las vistas de la aplicación con Vue. Realicé e-mail development para comunicación interna y de la aplicación; así mismo, adquirí importantes nociones sobre  Design Systems y UI para comprender la composición de los elementos.   </p>
         <p class=" text-secondary" >Actualmente trabajo en Aiwifi como Front-end developer, donde me encargo de codificar el diseño UI, de realizar las conexiones de datos a través de la API y en ocaciones de definir el diseño de pantallas o elementos UI ya sea en la aplicación, en el portal cautivo o en la página web</p>
         <!-- <a  href="./diana-cv.pdf" download="diana-cv.pdf" target="_blank" class="font-bold text-sa-yellow bg-primary p-2 rounded-lg hover:bg-sa-yellow">Descarga mi C.V</a> -->
        </div>
        
        <div v-else class="">
         <p class=" text-secondary  pb-4 text-lg">Soy Programadora Front-end y licenciada en Psicología Social. Mi camino como dev comenzó en Laboratoria donde aprendí a trabajar con JavaScript, Node, CSS, Firebase, APIs y conceptos básicos de UX. ¡Una de las mejores experiencias de mi vida! </p>         
         <p class=" text-secondary text-lg" >Posteriormente trabajé con Eleva en app.chain.inc donde programé elementos para la librería de componentes y las vistas de la aplicación con Vue. Realicé e-mail development para comunicación interna y de la aplicación; así mismo, adquirí importantes nociones sobre  Design Systems y UI para comprender la composición de los elementos.   </p>
            
             <!-- <p class=" pr-4 font-bold text-primary text-lg pb-8 p-8">Soy Programadora Front-end y licenciada en Psicología social. Mi camino como dev comenzó en Laboratoria donde aprendí a trabajar con JavaScript, node, CSS, Firebase, APIs y conceptos básicos de UX. <br> Posteriormente trabajé por un año con Eleva en app.chain.inc donde programaba con VUE y realizaba email development para comunicación interna y de la aplicación  </p>  -->
        </div>
          <img class="circle rounded-full w-1/4 feminism z-0 "  :class="{'w-42 m-2 mt-4': $mq === 'mo', 'm-0': $mq === 'de'}"  src="../../assets/sashimi.gif" alt="">                   
      </div>

      </section>
      </div>
       <!-- <p>:)</p>    -->
  </div>
</template>

<script>
// import Skills from '../Skills';
export default {
  components: {
    // Skills
  }
};
</script>

<style lang="scss" scoped>
img {
  //  box-shadow: 8px 8px 50px  #eefa00;
}
.bg-img {
  background-image: url("../../assets/nightoax.jpg");
  background-size: cover;
}

.bg-opacity {
  background: rgba(25, 25, 25, 0.8);
}
a:hover {
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