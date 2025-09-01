<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ElButton } from 'element-plus';
</script>

<template>

<div class="header_con">
<!-- h1里面放logo哦 -->
        <h1>
            <img src="./assets/logo.png" width=35% >
        </h1>
<!-- 头部右侧表单标签-->
        <form action="">
            <input type="text" class="search" value="SEARCH...">
            <div>
                <el-button type="primary" icon="el-icon-set-up"  auto-insert-space >搜索</el-button>
            </div>
        </form>
    </div>
<!-- 导航栏平铺部分：会显示黑色啦 -->
    <div id="nav">
<!-- 导航栏版心部分 -->
        <div class="nav_con">
            <ul>
                <li class="margin-left"></li>
                <li><RouterLink to="/">首页</RouterLink></li>
                <li><RouterLink to="/culture">文化展台</RouterLink></li>
                <li><RouterLink to="/new">新闻资讯</RouterLink></li>
                <li><RouterLink to="/game">文化游戏</RouterLink></li>
                <li><RouterLink to="/about">关于我们</RouterLink></li>
                <li><RouterLink to="/contact">联系我们</RouterLink></li>
            </ul>
        </div>
        <router-view />
    </div>
</template>
<style scoped>
    ul{
        font: small-caps bold 48px/1 sans-serif;
    }

</style>