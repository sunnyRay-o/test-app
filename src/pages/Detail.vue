<template>
  <div class="detail-page">
    <div class="detail-page-content">
      <el-row class="header-breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>{{position.name}}美团</el-breadcrumb-item>
          <el-breadcrumb-item>{{position.name}}{{type}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row class="product-info">
        <ProductInfo :meta="data"/>
      </el-row>
      <el-row>
        <el-col :span="19">
          <Comment :meta="data.comment"/>
        </el-col>
        <el-col :span="5"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductInfo from '@/components/Detail/ProductInfo.vue';
import api from '@/api';
import Comment from '@/components/Detail/Comment.vue';

export default {
  data() {
    return {
      data: {},
      // commentMeta: [
      //   {
      //     username: '匿名用户',
      //     image: 'https://www.dpfile.com/ugc/user/anonymous.png',
      //     rate: 3.5,
      //     pics: [
      //       'http://p0picxxxxx',
      //       'http://picxxxxx',
      //     ],
      //     evalaute: 'xxxx',
      //   },
      //   {
      //     username: '匿名用户',
      //     image: 'https://www.dpfile.com/ugc/user/anonymous.png',
      //     rate: 3,
      //     pics: [
      //       'http://p0picxxxxx',
      //       'http://picxxxxx',
      //     ],
      //     evalaute: 'xxxx',
      //   },
      //   {
      //     username: '匿名用户',
      //     image: 'https://www.dpfile.com/ugc/user/anonymous.png',
      //     rate: 5,
      //     pics: [
      //       'http://p0picxxxxx',
      //       'http://picxxxxx',
      //     ],
      //     evalaute: 'xxxx',
      //   },
      // ],
    };
  },
  components: {
    ProductInfo,
    Comment,
  },
  computed: {
    ...mapState({
      position: (state) => state.position,
    }),
    type() {
      return this.data.type === 'food' ? '美食' : '其它';
    },
  },
  async created() {
    const { data } = await api.getDetail();
    console.log(data);
    this.data = data;
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/detail";
</style>
