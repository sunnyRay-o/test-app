<template>
  <div class="life-container">
    <el-row>
      <el-col>
        <div class="home-header-link">
          <ul>
            <li class="takeout">
              <router-link to="/">美团外卖</router-link>
            </li>
            <li class="movie">
              <router-link to="/">猫眼电影</router-link>
            </li>
            <li class="hotel">
              <router-link to="/">美团酒店</router-link>
            </li>
            <li class="apartment">
              <router-link to="/">民宿 / 公寓</router-link>
            </li>
            <li class="shop">
              <router-link to="/">商家入驻</router-link>
            </li>
            <li class="public">
              <router-link to="/">美团公益</router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="banner-row">
      <el-col :span="14">
        <el-carousel height="250px">
          <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4" class="img">
        <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
      </el-col>
      <el-col :span="5" class="register">
        <div class="setting" v-if="username">
          <i class="iconfont icon-shezhi"></i>
        </div>
        <div class="avatar">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
        </div>
        <div :class="{fontWeight: username}">{{username ? username : 'Hi 你好'}}</div>
        <template v-if="!username">
          <p><el-button round class="btn logon">
            <router-link :to="{name: 'Login'}">登录</router-link></el-button></p>
          <p><el-button round class="btn login">
            <router-link :to="{name: 'Register'}">注册</router-link></el-button></p>
        </template>
        <template v-if="username">
          <nav class="user-info-nav">
            <a href="#" class="nav-item">
              <i class="iconfont icon-dingdan"></i>
              <span class="desc">我的订单</span>
            </a>
            <a href="#" class="nav-item">
              <i class="iconfont icon-shoucang"></i>
              <span class="desc">我的收藏</span>
            </a>
            <a href="#" class="nav-item">
              <i class="iconfont icon-icon_A"></i>
              <span class="desc">抵用券</span>

            </a>
            <a href="#" class="nav-item">
              <i class="iconfont icon-yue01"></i>
              <span class="desc">余额</span>

            </a>
            <a href="#" class="nav-item">
              <i class="iconfont icon-gengduo"></i>
              <span class="desc">更多</span>
            </a>
          </nav>
        </template>
      </el-col>
    </el-row>
    <el-row class="last-banner">
      <el-col :span="7" class="banner-col">
        <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
      </el-col>
      <el-col :span="7" class="banner-col">
        <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
      </el-col>
      <el-col :span="4" class="banner-col">
        <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
      </el-col>
      <el-col :span="5" class="downApp">
        <div class="qrcode">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
        </div>
        <p class="app-name">美团APP手机版</p>
        <p class="desc">
          <span class="red">1元起</span>
          <span class="gray">吃喝玩乐</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      imgList: ['https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png', 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg', 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg', 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'],
    };
  },
  computed: mapState(['username']),
};
</script>

<style>
@import '//at.alicdn.com/t/font_2807291_2m8skveo6sd.css';

</style>
