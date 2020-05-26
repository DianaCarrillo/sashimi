<template>
    <div class="flex items-center justify-center h-screen p-8  bg-sa-yellow" :class="{'flex-col text-lg justify-between': $mq === 'mo', 'text-lg': $mq === 'de'}">
        <div class="w-1/3 flex flex-col bg-black text-left  rounded-lg box-shadow" :class="{'flex-col w-full m-0  p-2': $mq === 'mo' , 'mr-8 p-8': $mq === 'de'}">
            <p class="flex items-center pb-4  text-sa-yellow font-bold" :class="{'text-2xl': $mq === 'de'}" >Terminal<span class="material-icons px-4">
               recent_actors
                </span>
            </p>
            <img v-if="$mq==='de'" src="../assets/terminal1.png" alt="">
            <p v-if="$mq==='de'" class="text-secondary pt-8 text-center box">Registro de vistantes. Desarrollado con vanilla JS, Cloud Firestore and Formspree.</p>
            <div class="flex text-primary pt-8 justify-center">
                <BioButton href="https://github.com/DianaCarrillo/cdmx-2018-06-am-bc-registro-de-visitantes" label="CODE" />
                <BioButton href="https://dianacarrillo.github.io/cdmx-2018-06-am-bc-registro-de-visitantes/src/" label="DEMO" />
            </div>
        </div>
        <div class="w-1/3 flex flex-col  text-left bg-black rounded-lg box-shadow" :class="{'flex-col w-full p-2': $mq === 'mo' , 'mx-8 p-8': $mq === 'de'}">
            <p class="flex items-center pb-4 text-sa-yellow font-bold" :class="{'text-2xl': $mq === 'de'}">Greener <span class="material-icons px-4">
                face
                </span>
            </p>
            <img v-if="$mq==='de'" src="../assets/greener.png" alt="">
            <p v-if="$mq==='de'" class="text-secondary pt-8 text-center box">Red social sobre nutrición y salud "Greener". Desarrollada con vanilla JS y Firebase.</p>
             <div class="flex text-primary pt-8 justify-center">
                <BioButton href="https://github.com/DianaCarrillo/cdmx-social-network-frameworks" label="CODE" />
                <BioButton href="https://dianacarrillo.github.io/cdmx-social-network-frameworks/" label="DEMO" />
            </div>
        </div>
                <div class="w-1/3 flex flex-col  text-left bg-black rounded-lg box-shadow" :class="{'flex-col w-full p-2': $mq === 'mo' , 'ml-8 p-8': $mq === 'de'}">
            <p class="flex items-center pb-4 text-sa-yellow font-bold" :class="{'text-2xl': $mq === 'de'}">Foodmap  <span class="material-icons px-4">
                place
                </span>
            </p >
            <img v-if="$mq==='de'" src="../assets/foodmap.png" alt="">
            <p v-if="$mq==='de'" class="text-secondary pt-8 text-center box"> Buscador de restaurantes consumiendo Google Maps API. Desarrollado con with vanilla JS.</p>
            <div class="flex text-primary pt-8 justify-center">
                <BioButton href="https://github.com/DianaCarrillo/cdmx-2018-06-bc-core-pm-foodmap" label="CODE" />
                <BioButton href="https://dianacarrillo.github.io/cdmx-2018-06-bc-core-pm-foodmap/src/views/view1.html" label="DEMO" />
            </div>
        
        </div>
    </div>
</template>

<script>
import BioButton from '../components/BioButton'
    export default {
        data(){
            return{
                showTech: false,
                showSoft: false,
            }
        },
        components:{
            BioButton,
        }
    }
</script>

<style lang="scss" scoped>
.box{
    height: 100px
}
// .bg-color{
//       background: rgba(25, 25, 25, .5);
// }

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
.box-shadow{
-webkit-box-shadow: 0px 23px 45px -9px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 23px 45px -9px rgba(0,0,0,0.75);
box-shadow: 0px 23px 45px -9px rgba(0,0,0,0.75);
}
</style>