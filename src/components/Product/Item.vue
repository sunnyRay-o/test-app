<template>
  <div class="item-container">
    <div class="item-content">
      <div class="img">
        <router-link :to="{name: 'Detail', params: {id: productItem.title} }">
          <img
            :src="productItem.image"
            alt=""
          />
          <div class="tag">{{index+1}}</div>
        </router-link>
      </div>
      <div class="desc">
        <h2>
          <router-link :to="{name: 'Detail', params: {id: productItem.title} }">
            {{productItem.title}}
          </router-link>
        </h2>
        <p class="score">
          <el-rate
            v-model="productItem.score"
            disabled
            text-color="#FF9900"
            score-template="{value}"
          >
          </el-rate>
          <span class="text" v-if="productItem.score > 4.5">很好</span>
          <span class="text" v-else-if="productItem.score > 4">好</span>
          <span class="text" v-else-if="productItem.score > 3.5">不错</span>
          <span class="text" v-else>一般</span>
          <span class="score-number">{{productItem.score}}分</span>
          <span class="highlight">{{productItem.commentNum}}人评论</span>
        </p>
        <p class="site-info">
          <span class="name">
              <span
              v-for="(item, i) in productItem.tab"
              :key="i">
              {{item + (i === productItem.tab.length - 1 ? '' : '|')}}
              </span>
          </span>
          <i class="el-icon-location-information ffc400"></i>
          <span class="viewmap">查看地图</span>
        </p>
        <p class="price">人均￥{{productItem.avgPrice}}</p>
      </div>
    </div>
    <div class="deal" v-for="(d, i) in productItem.dealItems" :key="i">
      <div class="deal-content">
        <p class="deal-name">{{d.title}}</p>
        <p>
          <span class="deal-price"><i class="money-icon">￥</i>{{d.price}}</span>
          <span class="deal-market-price">门市价￥{{d.counterPrice}}</span>
        </p>
      </div>
    </div>
    <div class="more-coupons">
        <span>更多2个优惠</span>
        <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productItem', 'index'],
  data() {
    return {
    };
  },
  mounted() {
    const deal = document.getElementsByClassName('deal')[0];
    const i = deal.getAttribute('data-index');
    this.mIndex = i;
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/product/item.scss";
</style>
