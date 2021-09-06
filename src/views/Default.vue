<template>
  <div class="default-container">
    <el-container>
      <el-header style="height: ">
        <MyHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer style="height: ">
        <MyFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '../components/header/index.vue';
import MyFooter from '../components/Footer.vue';

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">
@import '../assets/css/public/layout.scss';
</style>
