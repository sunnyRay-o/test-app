<template>
  <div class="register-page">
    <header>
      <div class="logo">
        <a href="/">美团首页</a>
      </div>
      <div class="login-guide">
        <span class="guide">已有美团账号？</span>
        <router-link :to="{ name: 'Login' }">
          <el-button type="warning">登录</el-button>
        </router-link>
      </div>
    </header>
    <article>
      <div class="register-form">
        <el-form
          :model="registerForm"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="100px"
        >
          <el-form-item label="手机号" prop="userName">
            <el-input
              type="text"
              v-model="registerForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="创建密码" prop="password">
            <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="pw-strength" label="">
            <div class="bar" :class="strengthClass"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input v-model="registerForm.rePassword" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')"
              >完成注册并登录</el-button>
          </el-form-item>
          <el-form-item class="user-agreement-content">
            <el-checkbox v-model="checked">
              我已阅读并同意
              <a href="#">《美团用户协议》</a>
              <a href="#">《隐私政策》</a>
               ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
            </el-checkbox>
          </el-form-item>
        </el-form>
      </div>
    </article>
    <footer>
      <p class="copyright">
        <router-link to="/">©meituan.com</router-link>
        <router-link to="/">京ICP证070791号</router-link>
        京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
/* eslint prefer-template: off */
import api from '@/api';

export default {
  data() {
    // 验证用户名
    const phoneReg = /^(13|14|15|16|17|18)\d{9}$/g;
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入手机号'));
      } else if (!value.match(phoneReg)) {
        callback(new Error('手机号格式不正确'));
      } else {
        callback();
      }
    };
    // 校验密码
    const passwordReg1 = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![_]+$)[0-9A-Za-z_]{6,16}$/gi;
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'));
      } else if (!value.match(passwordReg1)) {
        callback(new Error('密码必须为6-16位的字母数字下划线组成'));
      } else {
        if (value.length >= 6 && value.length <= 10) {
          this.strengthClass = 'weak';
        } else if (value.length >= 10 && value.length <= 13) {
          this.strengthClass = 'normal';
        } else {
          this.strengthClass = 'strong';
        }
        callback();
      }
    };
    // 确认密码
    const validateRePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: '',
        password: '',
        rePassword: '',
      },
      strengthClass: '',
      checked: false,
      rules: {
        userName: [
          { validator: validateUserName, trigger: 'blur' },
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' },
        ],
        rePassword: [
          { validator: validateRePassword, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const resp = await api.register(this.registerForm);
          console.log(resp);
          if (resp.status === 'success') {
            this.$message('恭喜' + resp.msg);
            this.$router.push({ name: 'Login' });
          } else {
            this.$message('很遗憾' + resp.msg);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/register";
</style>
