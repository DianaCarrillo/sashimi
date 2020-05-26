<script>
    export default {
     name: 'ContactLink', 
     props: {
         href:{
             type: String,
             required: true
         },
         linkString:{
             type: String,
             required: true
         },
         site:{
             type: String,
             required: true
         }
     }
    }
</script>
<template>
    <div class="pb-8">
        <p class=" justify-center w-full flex text-lg text-sa-yellow">{{site}} </p>
        <a :href="href" target="_blank" class="flex items-center justify-center text-primary"><span class="pt-2">{{linkString}}</span></a>
    </div>
</template>
<style lang="scss" scoped>

</style>