<template>
    <section :class="{' justify-center items-center text-6xl ': $mq === 'de', 'justify-end': $mq === 'mo'}" class=" text-4xl flex flex-col flex-grow  bg-black h-screen text-primary p-4" >
        <h1 class="text-sa-yellow font-bold zoom">sashimi</h1>
        <p class=" text-4xl">Front-end developer</p>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.bg-sa{
// background: rgb(255,0,76);
// background: linear-gradient(0deg, rgba(255,0,76,1) 1%, rgba(0,0,0,1) 100%);
}
p {
  transition: 700ms ease;
 }

h1{
  transition: 700ms ease;

}
 h1:hover{
  transition: 700ms ease;
   font-size:150%;
 }
// section:hover{
//    animation: colorchange 1s infinite;
//    -webkit-animation: colorchange 1s infinite ;  
// }
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
p:hover {
  transition: 200ms ease;
  color: #fff;
  animation: glow 2s ease-in-out  infinite alternate-reverse;
  -webkit-animation: glow 2s ease-in-out infinite  alternate-reverse;
  -moz-animation: glow 2s ease-in-out infinite alternate-reverse;

}
// .psicologa:hover{
//    background: url('../assets/psi.jpg') repeat;
//        background-size: 200px;
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
// }
// .dev:hover{
//     background: url('../assets/teclado.jpg') repeat; 
//         background-size:200px;
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
// }
// .fem:hover{
//     //  background: url('../assets/panuelo.jpg'); font-size: 80px
// }
@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #1d00ff, 0 0 40px #1d00ff, 0 0 50px #1d00ff, 0 0 60px #1d00ff, 0 0 70px #1d00ff;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #1d00ff, 0 0 40px #1d00ff, 0 0 50px #1d00ff, 0 0 60px #1d00ff, 0 0 70px #1d00ff, 0 0 80px #1d00ff;
  }
}
</style>