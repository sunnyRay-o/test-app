<template>
  <div class="home-container">
    <div class="home-content">
      <el-row>
        <el-col :span="5">
          <SideBar />
        </el-col>
        <el-col :span="19">
          <Life />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Home/SideBar.vue';
import Life from '@/components/Home/Life.vue';

export default {
  components: {
    SideBar,
    Life,
  },
};
</script>

<style lang='scss'>
@import "~@/assets/css/home/home.scss";
@import "~@/assets/css/home/sideBar.scss";
@import "~@/assets/css/home/life.scss";
</style>
