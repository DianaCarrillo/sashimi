<template>
    <div class="py-4">
      <button v-on="$listeners" class="sa-button text-sa-yellow text-3xl px-4 rounded-lg">{{label}}</button>
    </div>
</template>

<script>
    export default {
        name: 'BioButton',
        props:{
            label:{
                type: String,
                default: null
            }
        }
    }
</script>

<style lang="scss" scoped>
.sa-button{
transition: all 500ms ease-in-out;
outline: none
}
.sa-button:hover{
// color: #4c3fadb0;
color: #4132b4;
}
</style>