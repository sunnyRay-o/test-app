<template>
  <div class="hot-city-container">
    <h2>{{title}}：</h2>
    <ul class="city-list">
      <li class="item" @click="changeCity(item)" v-for="(item, i) in list" :key="i">
        <router-link to="/">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import api from '@/api';

export default {
  props: ['title', 'list'],
  methods: {
    ...mapActions(['setPosition']),
    async changeCity(city) {
      console.log(city);
      let { data: position } = await api.getCurrentPosition();
      position = {
        ...position,
        name: city,
      };
      await this.setPosition(position);
      this.$router.push('/home');
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/changecity/hotcity.scss';

</style>
