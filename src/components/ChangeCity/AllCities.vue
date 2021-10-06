<template>
  <div class="all-cities-container">
    <div class="alphabet">
      <h2>按拼音首字母选择：</h2>
      <ul class="list">
        <li class="item" v-for="(item, i) in alphabetList" :key="i">
          <a :href="'#city-' + item">{{ item }}</a>
        </li>
      </ul>
    </div>
    <div class="city-area-wrap" v-for="(cityList, i) in cityGroup" :key="i">
      <h3 class="initial-letter">{{i}}</h3>
      <div class="city-list" :id="'city-' + i">
        <li @click="changeCity(cityItem)"
        class="city-item" v-for="(cityItem, i) in cityList"
        :key="i">
          <router-link :to="'city-' + cityItem.name">{{cityItem.name}}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint quotes: "off", quote-props: "off" */
import { mapActions } from 'vuex';
import api from '@/api';

export default {
  data() {
    return {
      alphabetList: "ABCDEFGHGKLMNPQRSTWXYZ".split(""),
      cityGroup: {},
    };
  },
  created() {
    api.getCityList().then((res) => {
      const obj = {};
      console.log(res);
      res.data.forEach((item) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  methods: {
    ...mapActions(['setPosition']),
    changeCity(item) {
      console.log(item);
      this.setPosition(item);
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/changecity/allcities.scss";
</style>
