<template>
    <div class="flex justify-center px-4 ">
        <div class="w-1/2 flex flex-col mr-2 text-left ">
            <button class="flex items-center justify-between p-2 text-lg  text-sa-yellow " @click="showTech = !showTech"> Tech Skills <span class="material-icons">
                expand_more
                </span>
            </button>
            <transition name="fade">
            <ul v-if="showTech" class="p-4">
                <li>JavaScript</li>
                <li>Vue</li>
                <li>Tailwind</li>
                <li>Metodología Agile</li>
                <li>Active Campaign</li>
                <li>Sendgrid</li>
            </ul>
            </transition>
        </div>
        <div class="w-1/2 flex flex-col ml-2 text-left ">
            <button class="flex items-center justify-between p-2 text-lg   text-sa-yellow " @click="showSoft = !showSoft">Soft Skills  <span class="material-icons">
                expand_more
                </span>
            </button>
            <transition name="fade">
            <ul v-if="showSoft" class="p-4">
                 <li>Comunicación acertiva</li>
                 <li>Trabajo en equipo</li>
                 <li>Capacidad de liderazgo</li>
                 <li></li>
                 <li></li>
            </ul>
            </transition>

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                showTech: false,
                showSoft: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg-color{
      background: rgba(25, 25, 25, .5);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>