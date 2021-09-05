<template>
  <div class="default-container">
    <el-container>
      <el-header>
        <MyHeader />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '../components/header/index.vue';

export default {
  components: {
    MyHeader,
  },
};
</script>

<style lang="scss">
@import '../assets/css/public/layout.scss';
</style>
