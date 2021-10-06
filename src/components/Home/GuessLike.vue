<template>
  <div class="guess-like-container">
    <el-row>
      <div class="m-header guess-like-header">
        <dl>
          <dt>猜你喜欢</dt>
          <dd class="active">为你甄选最合适的</dd>
        </dl>
      </div>
    </el-row>
    <el-row>
      <div class="guess-like-content">
        <el-card :body-style="{ padding: '0px' }">
          <ul class="card-container">
            <li v-for="(item, i) in cardList"
            class="card-item"
            :key="i">
              <router-link to="/">
                <div class="img">
                  <img
                    :src="item.img" alt=""
                  />
                </div>
                <div class="desc">
                  <div class="title" :title="item.title">{{item.title}}</div>
                  <div class="appraise">
                    <div class="stars">
                      <ul class="star-ul dark-star">
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                      </ul>
                      <ul class="star-ul light-star">
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                        <li>
                            <i class="el-icon-star-on"></i>
                        </li>
                      </ul>
                    </div>
                    <span class="number">{{item.commentNumber}}个评价</span>
                  </div>
                  <div class="place-name">{{item.placeName}}</div>
                  <div class="price-info">
                    <span class="price-icon">￥</span>
                    <span class="price-number">{{item.price}}</span>
                    <span>起</span>
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
export default {
  data() {
    return {
      cardList: [
        {
          img: 'https://p0.meituan.net/dpmerchantpic/350bcb8d9a3ab60e9b24869212220166408182.jpg@267w_150h_1e_1c',
          title: '东方名剪（光彩店）',
          stars: '5',
          commentNumber: '637',
          placeName: '刘家窑/宋家庄',
          price: '29.9',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/home/guessLike.scss";
</style>
