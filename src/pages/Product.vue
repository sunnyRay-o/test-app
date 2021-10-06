<template>
  <div class='product-container'>
    <el-col :span='19'>
      <div class='product-content'>
        <el-row class='crumbs'>
          <el-breadcrumb separator-class='el-icon-arrow-right'>
            <el-breadcrumb-item>{{ position.name }}美团</el-breadcrumb-item>
            <el-breadcrumb-item
              >{{ position.name }}{{ $route.params.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </el-row>
        <el-row class='category'>
          <Category title='分类' :list='classifyList' />
          <Category title='区域' class='border-bottom-none' :list='areaList' />
        </el-row>
        <el-row>
          <ProductList :meta="productList"/>
        </el-row>
      </div>
    </el-col>
    <el-col :span='5'>
      <div class='sidebar'>
        <div class="map">
          <a href="#">
            <img src="@/assets/img/map.jpg" alt="">
          </a>
        </div>
        <div class="title">猜你喜欢</div>
        <div class="list">
          <RecommendItem v-for="(item, i) in recommendList" :key="i" :data="item"/>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Category from '../components/Product/Category.vue';
import ProductList from '../components/Product/ProductList.vue';
import RecommendItem from '../components/Product/RecommendItem.vue';
import api from '@/api';

export default {
  data() {
    return {
      classifyList: [],
      areaList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000,
            },
            {
              name: '昌平',
              id: 12222,
            },
          ],
        },
      ],
      productList: [
        {
          image: 'https://p0.meituan.net/msmerchant/dc9acd0fee2c3387d8ca3e7fc6088596565898.jpg@275w_156h_1e_1c',
          title: '火鸡老店',
          type: 'food',
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃',
            },
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
          avgPrice: 64,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元',
            }, {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元',
            },
          ],
        },
      ],
      recommendList: [],
    };
  },
  async created() {
    // 产品列表
    const { data } = await api.getProductList();
    this.productList = data;
    // 分类列表
    const { data: classify } = await api.getClassifyList();
    console.log(classify);
    this.classifyList = classify;
    // 推荐列表
    const { data: recommend } = await api.getRecommendList();
    this.recommendList = recommend;
  },
  components: {
    Category,
    ProductList,
    RecommendItem,
  },
  computed: mapState(['position']),
};
</script>

<style lang='scss'>
@import '~@/assets/css/product/index.scss';
</style>
