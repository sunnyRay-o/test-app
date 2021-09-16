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
        <div class="avatar">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
        </div>
        <div>Hi！你好</div>
        <p><el-button round class="btn logon">注册</el-button></p>
        <p><el-button round class="btn login">立即登录</el-button></p>
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
export default {
  data() {
    return {
      imgList: ['https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png', 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg', 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg', 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'],
    };
  },
};
</script>

<style>

</style>
