<template>
  <div class="homestay-container">
    <el-row>
      <div class="homestay-header m-header">
        <dl>
          <dt>推荐民宿</dt>
          <dd
            @mouseenter="enterDd(i)"
            :class="{ active: index === i }"
            v-for="(item, i) in placeList"
            :key="i"
          >
            {{ item }}
          </dd>
          <dd class="all">
            <span>全部</span>
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
      </div>
    </el-row>
    <el-row>
      <div class="homestay-content">
        <el-card :body-style="{ padding: '0px' }">
          <ul>
            <li v-for="(item, i) in cardList" :key="i" class="item">
              <router-link to="/">
                <div class="img">
                  <img
                    :src="item.img"
                    alt=""
                  />
                  <div class="avatar">
                    <img :src="item.avatarUrl" alt="">
                  </div>
                </div>
                <div class="desc">
                  <div class="title">
                    {{item.title}}
                  </div>
                  <div class="detail">
                    <span>{{item.detail}}</span>
                  </div>
                  <div class="price">
                    <span class="price-icon">￥</span>
                    <span>{{item.price}}</span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<script>
// import api from '@/api';

export default {
  data() {
    return {
      index: 0,
      placeList: [
        '天津',
        '济南',
        '大连',
        '太原',
        '石家庄',
        '秦皇岛',
        '呼和浩特',
        '唐山',
        '泰安',
        '潍坊',
      ],
      cardList: [{
        img: 'https://img.meituan.net/phoenix/d681fd63f884f6f5fd9fd5493e65f86c4428480.jpg@740w_416h_1e_1c',
        avatarUrl: 'https://img.meituan.net/avatar/679eaba9b666f647d7aeea50619b544713170.jpg@200w_200h_1e_1c',
        title: '【爱巢公寓】时尚临湖投影公寓，近机场，空港肿瘤医院',
        detail: '整套1居室·可住2人 | 滨海国际机场地区',
        price: '198',
      },
      {
        img: 'http://p1.meituan.net/enhancedimage/25030e37c9f84f726c9eb8ecc87368d71056633.jpg@740w_416h_1e_1c',
        avatarUrl: 'https://img.meituan.net/avatar/419f07e2cb16a273db7d500e82fe3fb789161.jpg@200w_200h_1e_1c',
        title: '100%好评北欧风超大空间飘窗电梯大床房 【停车方便】印象城 聚隆广场 悦立方洪家楼山东大学 近大明湖趵突泉',
        detail: '整套1居室·可住2人 | 新华广场/呼和浩特站',
        price: '185',
      }],
    };
  },
  // async created() {
  //   const { data } = await api.getIStyleList();
  //   console.log(data);
  //   this.cardList = data;
  // },
  methods: {
    enterDd(i) {
      this.index = i;
      // 根据地名请求卡片信息
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/home/homestay.scss";
</style>
