<template>
    <div class="py-4">
       <a  :href="href" target="_blank" class="font-bold text-sa-yellow bg-primary p-8 py-2 rounded-lg hover:bg-sa-yellow mr-4 sa-button">{{label}}</a>
    </div>
</template>

<script>
export default {
  name: "BioButton",
  props: {
    label: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.sa-button {
  transition: all 500ms ease-in-out;
  outline: none;
}
.sa-button:hover {
  // color: #4c3fadb0;
  color: #4132b4;
}
.sa-button:hover {
  color: #000000;
  -webkit-box-shadow: -3px 4px 44px -9px rgba(238, 250, 0, 1);
  -moz-box-shadow: -3px 4px 44px -9px rgba(238, 250, 0, 1);
  box-shadow: -3px 4px 44px -9px rgba(238, 250, 0, 1);
}
.sa-button {
  -webkit-box-shadow: -3px 4px 44px -9px rgba(255, 0, 128, 1);
  -moz-box-shadow: -3px 4px 44px -9px rgba(255, 0, 128, 1);
  box-shadow: -3px 4px 44px -9px rgba(255, 0, 128, 1);
}
</style>