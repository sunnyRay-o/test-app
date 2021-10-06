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
      <el-row>
        <Movie />
      </el-row>
      <el-row>
        <Homestay />
      </el-row>
      <el-row>
        <GuessLike />
      </el-row>
      <el-row>
        <Navigation />
      </el-row>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Home/SideBar.vue';
import Life from '@/components/Home/Life.vue';
import Movie from '@/components/Home/Movie.vue';
import Homestay from '@/components/Home/Homestay.vue';
import GuessLike from '@/components/Home/GuessLike.vue';
import Navigation from '@/components/Home/Navigation.vue';

export default {
  components: {
    SideBar,
    Life,
    Movie,
    Homestay,
    GuessLike,
    Navigation,
  },
};
</script>

<style lang='scss'>
@import "~@/assets/css/home/home.scss";
@import "~@/assets/css/home/sideBar.scss";
@import "~@/assets/css/home/life.scss";
@import "~@/assets/css/home/header.scss";
</style>
