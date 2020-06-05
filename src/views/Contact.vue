<template>
<div>
    <div v-if="$mq==='de'" class="h-screen flex flex-col justify-around bg-black text-xl">
        <section  class="flex flex-col justify-center items-center text-center flex-grow text-sa-yellow font-bold">
             <ContactLink v-for="link in links" :key="link.site" :href="link.href" :linkString="link.linkString" :site="link.site" /> 
        </section>
    </div>
        <div v-else class="h-screen flex flex-col bg-black p-4">
            <section  class="flex flex-col justify-center items-center text-center flex-grow text-sa-yellow font-bold">
               <ContactLink v-for="link in links" :key="link.site" :href="link.href" :linkString="link.linkString" :site="link.site" /> 
            </section>
        </div>
    </div>        
</template>

<script>
import ContactLink from "../components/ContactLink.vue";
export default {
  name: "Contact",
  data() {
    return {
      links: [
        {
          href: "https://github.com/DianaCarrillo/",
          linkString: "DianaCarrillo.github.io",
          site: "Github"
        },
        {
          href: "mailto:carrillorivera.diana@gmail.com",
          linkString: "carrillorivera.diana@gmail.com",
          site: "Correo"
        },
        {
          href: "https://www.linkedin.com/in/diana-carrillo-rivera/",
          linkString: "diana-carrillo-rivera",
          site: "LinkedIn"
        }
      ]
    };
  },
  components: {
    ContactLink
  }
};
</script>

<style lang="scss" scoped>
.zoom-hover {
  transition: all 500ms ease-in-out;
}
.zoom-hover:hover {
  transition: all 500ms ease-in-out;
  transform: scale(
    1.5
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>