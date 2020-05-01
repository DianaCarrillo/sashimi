<template>
    <section  class="items-center flex flex-col justify-center flex-grow text-6xl font-bold bg-sa-blue px-24 text-secondary">
    <div></div>
        <h1 class="p-2">DEVELOPER</h1>
        <h1 class="p-2">PSYCHOLOGIST</h1>
        <h1 class="p-2">FEMINIST</h1>
        <h1 class="p-2">CAT LOVER</h1>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h1{
  transition: 400ms ease;
}
section:hover{
   animation: colorchange 1s infinite;
   -webkit-animation: colorchange 1s infinite ;  
}
   @keyframes colorchange
    {
      0%   {background: red;}

      25%  {background: yellow;}
    }

    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
      0%   {background: red;}
      100%  {background: yellow;}
    }
h1:hover {
   background-color: black;  /* Fallback: assume this color ON TOP of image */
//    background: url('https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500s') repeat;
     background-size: 300px 100px;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  transition: 700ms ease;
//   font-size: 150%;

}
</style>