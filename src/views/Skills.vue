<template>
    <div class="flex items-center justify-center h-screen p-8  bg-primary" :class="{'flex-col text-lg': $mq === 'mo', 'text-lg': $mq === 'de'}">
        <div class="w-1/3 flex flex-col bg-black text-left  rounded-lg box-shadow" :class="{'flex-col w-full m-0 mb-8 p-2': $mq === 'mo' , 'mr-16 p-8': $mq === 'de'}">
            <P class="flex items-center p-2 text-sa-yellow font-bold" :class="{'text-2xl': $mq === 'de'}" >Tech Skills <span class="material-icons px-4">
                code
                </span>
            </P>
            <ul class="text-secondary text-center p-4  " >
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS </li>
                <li>Vue</li>
                <li>Tailwind</li>
                <li>Storybook</li>
                <li>Sendgrid</li>
            </ul>
        </div>
        <div class="w-1/3 flex flex-col  text-left bg-black rounded-lg box-shadow" :class="{'flex-col w-full p-2': $mq === 'mo' , 'ml-16 p-8': $mq === 'de'}">
            <P class="flex items-center p-2  text-sa-yellow font-bold" :class="{'text-2xl': $mq === 'de'}">Soft Skills  <span class="material-icons px-4">
                people
                </span>
            </P>
            <ul class="text-secondary text-center p-4" >
                <li>Metodología Agile</li>
                 <li>Acertividad</li>
                 <li>Trabajo en equipo</li>
                 <li>Liderazgo</li>
                 <li>Escucha</li>
                 <li>Observación</li>
                 <li>Creatividad</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showTech: false,
      showSoft: false
    };
  }
};
</script>

<style lang="scss" scoped>
.bg-color {
  background: rgba(25, 25, 25, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.box-shadow {
  -webkit-box-shadow: 0px 23px 45px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 23px 45px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 23px 45px -9px rgba(0, 0, 0, 0.75);
}
</style>