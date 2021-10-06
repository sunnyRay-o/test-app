<template>
  <div class="change-city-container">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <HotCity :title="hotCityTitle" :list="hotCityList"/>
    </el-row>
    <el-row>
      <HotCity :title="recentVisitTitle" :list="recentVisitList"/>
    </el-row>
    <el-row>
      <AllCities />
    </el-row>
  </div>
</template>

<script>
import Province from '@/components/ChangeCity/Province.vue';
import HotCity from '../components/ChangeCity/HotCity.vue';
import AllCities from '@/components/ChangeCity/AllCities.vue';
import api from '@/api';

export default {
  data() {
    return {
      hotCityTitle: '热门城市',
      recentVisitTitle: '最近访问',
      hotCityList: [],
      recentVisitList: [],
    };
  },
  async created() {
    // 热门城市列表
    const { data: cityList } = await api.getHotCityList();
    this.hotCityList = cityList.map((item) => item.name);
    // 最近搜索列表
    const { data: recentlyCityList } = await api.getRecentlyCityList();
    this.recentVisitList = recentlyCityList.map((item) => item.name);
  },
  components: {
    Province,
    HotCity,
    AllCities,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/changecity/index.scss';

</style>
