<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
<body>
    <div class="shell">
        <li><RouterLink to="wenwu1" class="menu">
        <span>唐三彩骆驼舞乐佣</span>
        </RouterLink></li>
        <li><RouterLink to="wenwu2" class="menu">
        <span>唐朝佛头</span>
        </RouterLink></li>
    </div>

    <div class="shell3">
    <RouterView />
    </div>

</body>



</template>


<style scoped>
    .wrapper{
        position: relative;
        top: 0;
        left: 0;
        width: 100000px;
        height: 100vh;
    }
   *{
           padding:0;
           margin:0;
           text-decoration: none;
   }
   .box{
    align-items: stretch;
    position: relative;
    margin: 0;
   }
   .shell{
           width: 280px;
           height: 100vh;
           
           justify-content:center;
           align-items:center
           flex-direction column;
           background-color:rgb(184, 180, 180);
           border-radius:.3s;
           overflow:hidden;
   }
   span{
    height: 1.5rem;
    font-weight: 900;
    font-size: 1.2rem;
    color: black;
    padding: 10% 0;
    position: relative;
    left: 20%;
    
   }
   .menu{
    display: block;
    height: 35px;
    width: 85%;
    margin: 20px 20px 20px 20px;
    border-radius: 5px;
    position: relative;
    transition: .3s;
    color:black ;
   }
  .shell3{

    width: 100%;
    height: 100vh;
    background-color:white;
   
  }
</style>