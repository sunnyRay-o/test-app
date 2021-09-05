<template>
  <div class="top-bar-container">
    <div class="left">
      <div class="position">
        <i class="el-icon-location"></i>
        <span>北京</span>
        <router-link :to="{
          name: 'ChangeCity',
        }" class="change-city">切换城市</router-link>
        <span>[</span>
        <a href="#" class="address change-city">门头沟区</a>
        <a href="#" class="address change-city">大厂回族自治县</a>
        <a href="#" class="address change-city">廊坊</a>
        <span>]</span>
      </div>
      <div class="login">
        <router-link to="/" class="checked">立即登录</router-link>
        <router-link to="/">注册</router-link>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li class="list">
          <router-link to="/">我的美团</router-link>
          <dl>
            <dd>我的订单</dd>
            <dd>我的收藏</dd>
            <dd>抵用券</dd>
            <dd>账户设置</dd>
          </dl>
        </li>
        <li>
          <router-link to="/">手机APP</router-link>
        </li>
        <li class="list shop">
          <router-link to="/">商家中心</router-link>
          <dl>
            <dd>商家中心</dd>
            <dd>美团餐饮商户中心</dd>
            <dd>登录商家中心</dd>
            <dd>美团智能收银</dd>
            <dd>我想合作</dd>
            <dd>手机免费开店</dd>
            <dd>到店综合业务招募</dd>
            <dd>餐饮合作商招募</dd>
            <dd>商家申请开票</dd>
            <dd>免费合作美团排队</dd>
          </dl>
        </li>
        <li class="list">
          <router-link to="/">美团规则</router-link>
          <dl>
            <dd>规则中心</dd>
            <dd>规则目录</dd>
            <dd>规则评议院</dd>
          </dl>
        </li>
        <li class="list site-nav">
          <router-link to="/">网站导航</router-link>
          <div class="sub-container">
            <dl class="hotel">
              <dt>酒店旅游</dt>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
            </dl>
            <dl class="food">
              <dt>吃美食</dt>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
            </dl>
            <dl class="movie">
              <dt>看电影</dt>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
              <dd>
                <router-link to="/">国际机票</router-link>
              </dd>
            </dl>
            <dl class="app">
              <dt>手机应用</dt>
              <dd>
                <router-link to="/">
                  <img src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png">
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png">
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png">
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png">
                </router-link>
              </dd>
              <dd>
                <router-link to="/">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png">
                </router-link>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '~@/assets/css/public/mixin.scss';
@import '~@/assets/css/public/header/topbar.scss';
</style>
