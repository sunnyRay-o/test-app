<template>
  <div class="index-container">
    <el-row>
        <TopBar />
    </el-row>
    <el-row>
        <SearchBar />
    </el-row>
  </div>
</template>

<script>
import TopBar from './TopBar.vue';
import SearchBar from './SearchBar.vue';

export default {
  components: {
    TopBar,
    SearchBar,
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/public/header/index.scss';
@import '~@/assets/css/public/mixin.scss';
</style>
