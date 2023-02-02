<template>
  <div class="row-center">

    <!-- 左边导航条 -->
    <div class="navigation-bar">
      <div class="row-a">
        <div class="navigation-bar-id">管理员</div>
        <div><img class="navigation-bar-img" src="../style/img/wqy.jpg"></div>
        <div class="row-center"><h2>Hi,</h2><h6>王庆媛</h6></div>
        <div class="num">@210501100303</div>
        <div class="row">
          <div class="function-card"><img src="../style/front/tongzhi.png"></div>
          <div class="function-card"><img src="../style/front/tongzhi.png"></div>
          <div class="function-card"><img src="../style/front/tongzhi.png"></div>
          <div class="function-card"><img src="../style/front/tongzhi.png"></div>
        </div>

        <el-col :span="1">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#1b1e24"
      text-color="#fff"
      active-text-color="#4aa49b"
      width="100%"
      >

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
       
        <el-submenu index="1-4">
          <template slot="title">选项1</template>
          <el-menu-item index="1-4-1">细节1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" @click="goto('about')">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="3" @click="goto('a')">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>


        <!-- 下拉框1 -->
        <!-- <div class="row click-tab" @click="toggleimgshow1">
        <div class="click-tab-left">今日待办</div>
        <div class="click-tab-right row-center">
          <img v-show="imgshow1" src="../style/front/shang.png">
          <img v-show="!imgshow1" src="../style/front/xiapng.png"></div>
        </div>
        <div v-show="imgshow1">hhhhhh</div> -->

           <!-- 下拉框2 -->
         <!-- <div class="row click-tab" @click="toggleimgshow2">
        <div class="click-tab-left">今日待办</div>
        <div class="click-tab-right row-center">
          <img v-show="imgshow2" src="../style/front/shang.png">
          <img v-show="!imgshow2" src="../style/front/xiapng.png"></div>
        </div>
        <div v-show="imgshow2">hhhhhh</div> -->

           <!-- 下拉框3 -->
         <!-- <div class="row click-tab" @click="toggleimgshow3">
        <div class="click-tab-left">今日待办</div>
        <div class="click-tab-right row-center">
          <img v-show="imgshow3" src="../style/front/shang.png">
          <img v-show="!imgshow3" src="../style/front/xiapng.png"></div>
        </div>
        <div v-show="imgshow3">
          hhh
        </div> -->
   
      </div> 
    </div>

    <!-- 数据展示区 -->
    <div class="data">
     <router-view></router-view>
      
    </div>
  </div>
</template>

<script>

import '../style/style.css'
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });


export default {
    data () {
      return {
        imgshow1: false,
        imgshow2: false,
        imgshow3: false, //默认内容不显示
         tabPosition: 'left',
      }
    },
    methods: {
      toggleimgshow1 () {
        this.imgshow1 = !this.imgshow1 //使false变为true显示
      },
      toggleimgshow2 () {
        this.imgshow2 = !this.imgshow2 //使false变为true显示
      },
      toggleimgshow3 () {
        this.imgshow3 = !this.imgshow3 //使false变为true显示
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       goto(selector){
 
         //点击跳转至上次浏览页面
        // this.$router.go(-1)
 
         //指定跳转地址
         this.$router.replace(selector)
       }
      
    }

}

</script>

<style>

</style>