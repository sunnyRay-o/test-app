<template>
  <div class="recommend-item-container">
    <div class="img">
        <a href="#">
            <img src="https://p0.meituan.net/msmerchant/dc9acd0fee2c3387d8ca3e7fc6088596565898.jpg@275w_156h_1e_1c" alt="">
        </a>
    </div>
    <div class="desc">
        <p class="name">{{data.title}}</p>
        <p class="score">
            <el-rate
                v-model="score"
                disabled
                text-color="#ff9900"
                score-template="{value}">
            </el-rate>
            <span class="comment-number">{{data.commentNum}}个评价</span>
        </p>
        <p class="address">{{data.areaName}}</p>
        <p class="price">
            <span>￥</span>
            <span class="big">{{data.lowPrice}}</span>
            <span>起</span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      score: Number(this.data.score),
    };
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/product/recommend.scss';

</style>
