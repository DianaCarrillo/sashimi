<template>
    <div class="h-screen flex flex-col justify-center">
        <p class="items-center justify-center flex text-4xl mb-32 text-sa-yellow bg-sa-blue">
            come to say hi! :)
        </p>
        <section class="flex justify-around items-center">
            <img class="w-40 zoom" src="../assets/Octicons-mark-github.svg" alt="github-logo">
            <img class="w-40 zoom" src="../assets/gmail-icon-2.svg" alt="gmail-logo">
            <img class="w-40 zoom" src="../assets/Twitter_Logo_Blue.svg" alt="twitter-logo">
        </section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.zoom {
  transition: all 500ms ease-in-out ;
}
.zoom:hover {
  transition: all 500ms ease-in-out ;
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>