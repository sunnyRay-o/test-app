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
              @input="onInput"
              >
              </el-input>
              <el-button class="my-btn" type="warning" icon="el-icon-search"></el-button>
            </div>
            <div class="hot-search" v-if="isHotSearch">
                <dl>
                  <dt>热门搜索</dt>
                  <router-link :to="{
                    name: 'Product',
                    params: {
                      name: item
                    }
                  }" v-for="(item, index) in hotSearchWords" :key="index">
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
              :to="{
                name: 'Product',
                params: {
                  name: item,
                }
              }"
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
import api from '@/api';

export default {
  data() {
    return {
      searchWord: '',
      isFocus: false,
      searchList: [],
      hotSearchWords: [],
      suggestList: [],
    };
  },
  async created() {
    const { data } = await api.getSearchHotWords();
    this.suggestList = data;
    this.hotSearchWords = data;
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
    async onInput() {
      const resp = await api.getSearchList();
      this.searchList = resp.data.list.filter((item) => item.indexOf(this.searchWord) !== -1);
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/public/header/searchBar.scss';
</style>
