<template>
  <div class="movie-container">
    <el-row>
      <div class="movie-header m-header">
        <dl @mouseover="overDl">
          <dt>猫眼电影</dt>
          <dd
          :class="{active: type === 'hot'}"
          data-type="hot">正在热映</dd>
          <dd
          :class="{active: type === 'coming'}"
          data-type="coming">即将上映</dd>
          <dd class="all">
            <router-link to="/">全部</router-link>
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
      </div>
    </el-row>
    <el-row>
      <div class="movie-content">
        <div class="carousel-btn left-btn">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="carousel-btn right-btn">
          <i class="el-icon-arrow-right"></i>
        </div>
        <ul>
            <li class="tag">
              <router-link to="/">
                <img src="https://p0.meituan.net/movie/88b14189629176dfada3e749bfacc2f83725061.jpg@267w_371h_1e_1c" class="image">
                <div class="desc">
                  <p class="person-number">
                    <span class="num">275358</span>
                    <span>人想看</span>
                  </p>
                  <p class="title">我的青春有个你</p>
                </div>
                <el-button class="btn" type="danger" round>预售</el-button>
                <div class="mask"></div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="https://p0.meituan.net/movie/88b14189629176dfada3e749bfacc2f83725061.jpg@267w_371h_1e_1c" class="image">
                <div class="desc">
                  <p class="person-number">
                    <span class="num">275358</span>
                    <span>人想看</span>
                  </p>
                  <p class="title">我的青春有个你</p>
                </div>
                <el-button class="btn" type="danger" round>预售</el-button>
                <div class="mask"></div>
              </router-link>
            </li>
            <li class="tag">
              <router-link to="/">
                <img src="https://p0.meituan.net/movie/88b14189629176dfada3e749bfacc2f83725061.jpg@267w_371h_1e_1c" class="image">
                <div class="desc">
                  <p class="person-number">
                    <span class="num">275358</span>
                    <span>人想看</span>
                  </p>
                  <p class="title">我的青春有个你</p>
                </div>
                <el-button class="btn" type="danger" round>预售</el-button>
                <div class="mask"></div>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="https://p0.meituan.net/movie/88b14189629176dfada3e749bfacc2f83725061.jpg@267w_371h_1e_1c" class="image">
                <div class="desc">
                  <p class="person-number">
                    <span class="num">275358</span>
                    <span>人想看</span>
                  </p>
                  <p class="title">我的青春有个你</p>
                </div>
                <el-button class="btn" type="danger" round>预售</el-button>
                <div class="mask"></div>
              </router-link>
            </li>
            <li class="tag">
              <router-link to="/">
                <img src="https://p0.meituan.net/movie/88b14189629176dfada3e749bfacc2f83725061.jpg@267w_371h_1e_1c" class="image">
                <div class="desc">
                  <p class="person-number">
                    <span class="num">275358</span>
                    <span>人想看</span>
                  </p>
                  <p class="title">我的青春有个你</p>
                </div>
                <el-button class="btn" type="danger" round>预售</el-button>
                <div class="mask"></div>
              </router-link>
            </li>
            <li class="tag">
              <router-link to="/">
                <img src="https://p0.meituan.net/movie/88b14189629176dfada3e749bfacc2f83725061.jpg@267w_371h_1e_1c" class="image">
                <div class="desc">
                  <p class="person-number">
                    <span class="num">275358</span>
                    <span>人想看</span>
                  </p>
                  <p class="title">我的青春有个你</p>
                </div>
                <el-button class="btn" type="danger" round>预售</el-button>
                <div class="mask"></div>
              </router-link>
            </li>
        </ul>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'hot',
    };
  },
  methods: {
    overDl(e) {
      const dom = e.target;
      const { tagName } = dom.tagName.toLowerCase();
      if (tagName === 'dl') {
        return false;
      }
      const dataType = dom.getAttribute('data-type');
      this.type = dataType;
      return true;
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/home/movie.scss';
</style>
