<script>
import Hi from "./interests/Hi.vue";
import Skills from "../views/Skills.vue";
import Contact from "./Contact.vue";
import Description from "../views/Description.vue";
import Projects from "../views/Projects.vue";
import Footer from "../views/Footer.vue";

    export default {
        name: "Home",
        data(){
          return{

          }
        },
        components: {
          Description,
          Contact,
          Hi,
          Skills,
          Projects,
          Footer,
        }
    }
</script>
<template>
<!-- h-screen flex whitespace-no-wrap p-24  px-auto -->
<div class="  horizontal-scroll-wrapper">
  <!-- <div :class="{'flex-col': mq === 'mo'}" class="flex justify-between"> -->
   <Description />
   <Hi/>
   <Skills/>
   <Projects/>
   <Contact />
   <Footer />
  </div>
<!-- </div> -->

</template>

<style scoped>
.sa-font{
  font-size:300px;
}
</style>