<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <body>
   <div class="shell">
           <RouterLink to="/culture/wenwu/wenwu1" class="box">
                <i class="iconfont">&#xe673;
                </i>
                <span>
                        文物
                </span>
           </RouterLink>
           <RouterLink to="/culture/feiyi/feiyi1" class="box">
                <i class="iconfont icon-feiyihuicui-">
                </i>
                <span>
                        非遗
                </span>
           </RouterLink>
           
   </div>
   <div class="shell2" >
           <RouterView />
           
   </div>
  </body>

  
</template>


<style scoped>
   *{
           padding:0;
           margin:0;
           text-decoration: none;
   }
   body{
           background-color: white;
           display:flex;
           justify-content:  flex-start;
           height:100vh;
           
   }
   .shell{
           width: 80px;
           height: 100vh;
           
           justify-content:center;
           align-items:center
           flex-direction column;
           background-color:gray;
           border-radius:.3s;
           overflow:hidden;
   }
   .shell2{
        width: 280px;
        height: 100vh;
        background-color:rgb(206, 198, 198);
   }
   
   .box{
           display: block;
           height: 15%;
           width: 85%;
           margin: 9px;
           border-radius: 5px;
           position: relative;
           transition: .3s;
           color:white ;

   }
   .box i{
           font-size: 20px;
           position: absolute;
           margin: 7px 0 0 13px;
   }

   .box:nth-child(1)::before,
   .box:nth-child(5)::before{
          content:'';
          display:block ;
          width:  100%;
          height: 2px;
          background-color: beige;
          position: absolute;
          bottom: -10px;
   }
   .box span{
           position: relative;
           top: 22px;
           left: 80px;
           font: 500 20px '';
           opacity: 0;
           transition: .1s;
   }
   .shell:hover{
           width: 270px;

   }
   .box:hover{
           background-color:coral;
   }
   .shell:hover span{
           opacity:1;
   }
   .box:hover{
           color:tomato;
   }
</style>