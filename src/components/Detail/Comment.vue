<template>
  <div class="comment-container">
    <div class="header">
        <h3 class="comment-num">88条网友点评</h3>
        <nav class="header-nav">
            <a
            class="item"
            @click.prevent="sort('quality')"
            :class="{active: sortType === 'quality'}"
            data-type="quality" href="#">质量排序</a>
            <a
            @click.prevent="sort('time')"
            class="item"
            :class="{active: sortType === 'time'}"
            data-type="time" href="#">时间排序</a>
        </nav>
    </div>
    <div class="content">
        <ul>
            <li v-for="(item, i) in data" :key="i">
                <div class="avatar">
                    <img :src="item.image" alt="">
                </div>
                <div class="desc">
                    <p class="username">{{item.username}}</p>
                    <div class="score-date">
                      <span class="score">
                        <el-rate
                          v-model="item.rate"
                          disabled
                          text-color="#ff9900"
                          score-template="{value}">
                        </el-rate>
                      </span>
                      <span class="date">{{getCurrentDate}}</span>
                    </div>
                    <p class="comment-text">海底捞这次也太给力了.每次去都感觉好满足</p>
                    <nav class="picture">
                      <a href="#" v-for="(pic, i) in item.pics" :key="i">
                        <img :src="pic" alt="">
                      </a>
                    </nav>
                    <p class="operation" :class="{active: isGood}" @click="like">
                        <i class="good"></i>
                        <span>赞</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['meta'],
  data() {
    return {
      sortType: 'quality',
      score: 5,
      isGood: false,
      data: this.meta,
    };
  },
  // created() {
  //   this.sort(this.sortType);
  // },
  methods: {
    sort(type) {
      console.log(type);
      this.sortType = type;
      // if (type === 'quality') {
      //   // 质量排序
      //   this.data = this.meta.sort((a, b) => {
      //     console.log(a, b);
      //     return b.rate - a.rate;
      //   });
      // } else {
      //   console.log(type);
      //   this.data = this.meta.sort((a, b) => {
      //     console.log(a, b);
      //     return Math.random() - 0.5;
      //   });
      // }
    },
    like() {
      this.isGood = !this.isGood;
    },
  },
  computed: {
    getCurrentDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/detail/comment.scss';

</style>
