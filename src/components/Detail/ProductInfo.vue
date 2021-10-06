<template>
  <div class="product-info-container">
    <div class="info">
        <div class="title">
            <h2>
                <span>{{meta.title}}</span>
                <a href="#" class="safe-mark">
                    <i class="iconfont icon-anquanzhongxin"></i>
                    <span>食品安全档案</span>
                </a>
            </h2>
            <p class="score-info">
                <el-rate
                    v-model="meta.score"
                    disabled
                    show-score
                    text-color="#666"
                    score-template="{value}">
                </el-rate>分
                <span class="price">人均￥{{meta.avgPrice}}</span>
            </p>
        </div>
        <div class="desc">
            <p>地址：{{meta.address}}</p>
            <p>电话：{{meta.phone}}</p>
            <p>营业时间：{{meta.businessTime}}</p>
        </div>
        <div class="feature">
            <nav>
                <span class="item" v-for="(item, i) in meta.service" :key="i">
                    <i class="iconfont icon-wifi"></i>
                    <span>{{item}}</span>
                </span>
            </nav>
        </div>
    </div>
    <div class="img">
        <div class="big-img">
            <a href="#"><img :src="meta.imgUrl" alt=""></a>
        </div>
        <nav>
            <a href="#">
                <img :src="meta.imgUrl" alt="">
            </a>
            <a href="#">
                <img :src="meta.imgUrl" alt="">
            </a>
            <a href="#">
                <img :src="meta.imgUrl" alt="">
            </a>
            <a href="#">
                <img :src="meta.imgUrl" alt="">
            </a>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['meta'],
};
</script>

<style lang="scss">
@import '//at.alicdn.com/t/font_2807291_2m8skveo6sd.css';

</style>
