<template>
  <div class="login-page">
    <header>
        <router-link to="/" class="logo">美团首页</router-link>
    </header>
    <article>
        <div class="banner">
            <img
            src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt="美团网" />
        </div>
        <form action="#" class="login-form">
          <div :class="{'validate-info': true, 'show': showValidateInfo}">
            <i class="el-icon-remove-outline"></i>
            <span>{{validateInfo}}</span>
          </div>
          <div class="form-item form-title">
            <span>账号登录</span>
          </div>
          <div class="form-item form-input form-userName">
              <el-input
                :class="{input: loginForm.userName, 'prompt-border': showValidateInfo}"
                @focus="onFocus"
                placeholder="手机号"
                prefix-icon="el-icon-user"
                v-model="loginForm.userName">
              </el-input>
          </div>
          <div class="form-item form-input">
              <el-input
                @focus="onFocus"
                placeholder="密码"
                prefix-icon="el-icon-unlock"
                type="password"
                v-model="loginForm.password">
              </el-input>
          </div>
          <div class="form-item forget-password">
            <a href="#">忘记密码？</a>
          </div>
          <div class="form-item form-login-btn">
            <el-button type="primary" @click="submit">登录</el-button>
          </div>
          <div class="form-item signup-guide">
            <span>还没有账号？</span>
            <router-link :to="{
              name: 'Register',
            }">免费注册</router-link>
          </div>
          <div class="form-item user-agreement">
            <el-radio
            v-model="radioStatus"
            ></el-radio>
            <div class="user-agreement-content">
              我已阅读并同意
              <a href="#">《美团用户协议》</a>
              <a href="#">《隐私政策》</a>
              ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
            </div>
          </div>
          <div class="form-item other-login-methods">
            <div class="text">用合作网站账号登录</div>
            <div class="login-methods">
              <i class="qq"></i>
              <i class="weibo"></i>
            </div>
          </div>
        </form>
    </article>
    <footer>
      <nav class="footer-nav">
        <a href="#">关于美团</a>
        <a href="#">加入我们</a>
        <a href="#">商家入驻</a>
        <a href="#">帮助中心</a>
        <a href="#">美团手机版</a>
      </nav>
      <div class="copyright">
        ©2021
        <a href="#">美团网团购</a>
        meituan.com
        <a href="#">京ICP证070791号</a>
        京公网安备11010502025545号
      </div>
    </footer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api';

export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
      validateInfo: '',
      showValidateInfo: false,
      radioStatus: true,
    };
  },
  methods: {
    ...mapMutations(['setUsername']),
    async submit() {
      console.log('username', this.loginForm.userName);
      console.log('password', this.loginForm.password);
      if (!this.loginForm.userName && !this.loginForm.password) {
        this.validateInfo = '请输入账号和密码';
        this.showValidateInfo = true;
      } else if (!this.loginForm.password) {
        this.validateInfo = '请输入密码';
        this.showValidateInfo = true;
      } else if (!this.loginForm.userName) {
        this.validateInfo = '请输入账号';
        this.showValidateInfo = true;
      } else {
        // 登录
        const resp = await api.login(this.loginForm);
        const phoneReg = /^(15|13|14|17|18|16)\d{9}$/g;
        if (!this.loginForm.userName.match(phoneReg)) {
          console.log(this.loginForm.validateInfo);
          this.validateInfo = '手机格式不对';
          this.showValidateInfo = true;
          return;
        }
        if (resp.status === 'fail') {
          this.validateInfo = resp.msg;
          this.showValidateInfo = true;
          return;
        }
        this.setUsername(this.loginForm.userName);
        this.$router.push({ name: 'Home' });
      }
    },
    onFocus() {
      this.validateInfo = '';
      this.showValidateInfo = false;
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/login/index.scss';

</style>
