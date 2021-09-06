<template>
  <div class="search-bar-container">
    <el-row class="search-content">
      <div class="left">
        <el-col :span="3">
          <router-link to="/">
            <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png" alt="美团">
          </router-link>
        </el-col>
      </div>
      <div class="right">
        <el-col :span="21">
          <el-row>
            <div class="search-input">
              <el-input
              class="my-input"
              v-model="searchWord"
              placeholder="请输入商家或地点"
              @focus="onFocus"
              @blur="onBlur"
              >
              </el-input>
              <el-button class="my-btn" type="warning" icon="el-icon-search"></el-button>
            </div>
            <div class="hot-search" v-if="isHotSearch">
                <dl>
                  <dt>热门搜索</dt>
                  <router-link to="/" v-for="(item, index) in hotSearchWords" :key="index">
                    <dd>{{item}}</dd>
                  </router-link>
                </dl>
            </div>
            <div class="search-list" v-if='isSearchList'>
              <dl>
                  <router-link
                  to="/"
                  v-for="(item, index) in searchList"
                  :key="index">
                  <dd>
                    {{item}}
                  </dd>
                  </router-link>
              </dl>
            </div>
          </el-row>
          <el-row>
            <div class="hot-words">
              <router-link
              to="/"
              v-for="(item, index) in suggestList"
              :key="index">{{item}}</router-link>
            </div>
          </el-row>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: '',
      isFocus: false,
      searchList: ['火锅', '火锅店', '火锅水', '火锅肉', '火锅', '火锅'],
      hotSearchWords: ['酒店旅游', '酒店旅游', '酒店旅游', '酒店旅游'],
      suggestList: ['七天连锁酒店', '七天连锁酒店', '七天连锁酒店', '七天连锁酒店'],
    };
  },
  computed: {
    isSearchList() {
      return this.isFocus && this.searchWord;
    },
    isHotSearch() {
      return this.isFocus && !this.searchWord;
    },
  },
  methods: {
    onFocus() {
      this.isFocus = true;
    },
    onBlur() {
      const self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 200);
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/public/header/searchBar.scss';
</style>
