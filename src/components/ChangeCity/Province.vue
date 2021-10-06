<template>
  <div class="province-container">
    <h2>按省份选择:</h2>
    <Selector
    :value="province"
    :title="provinceTitle"
    :show="provinceShow"
    :selectList="provinceList"
    @selectCity="selectProvince"
    @changeCity="showProvinceList"/>
    <Selector
    :value="city"
    :title="cityTitle"
    :show="cityShow"
    :selectList="cityList"
    :disabled="citySelectorStatus"
    @selectCity="selectCity"
    @changeCity="showCityList"/>
    <div class="search-box">
      <span>直接搜索:</span>
      <el-select
        popper-class="search-list"
        v-model="searchWord"
        filterable
        remote
        placeholder="请输入城市中文或拼音"
        :remote-method="remoteSearch"
        :loading="loading">
        <el-option
          v-for="(item, i) in searchList"
          :key="i"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Selector from './Selector.vue';
import api from '@/api';

export default {
  data() {
    return {
      province: '省份',
      provinceTitle: '省份',
      city: '城市',
      cityTitle: '城市',
      provinceShow: false,
      cityShow: false,
      provinceList: [],
      cityList: [],
      searchWord: '',
      loading: false,
      searchList: [''],
      citySelectorStatus: true,
    };
  },
  async created() {
    // 获取省份列表
    const { data: provinceList } = await api.getProvinceList();
    this.provinceList = provinceList.map((item) => ({
      ...item,
      name: item.provinceName,
    }));
  },
  components: {
    Selector,
  },
  methods: {
    ...mapActions(['setPosition']),
    showProvinceList(status) {
      this.provinceShow = status;
      if (status) {
        this.cityShow = false;
      }
    },
    showCityList(status) {
      this.cityShow = status;
      if (status) {
        this.provinceShow = false;
      }
    },
    selectProvince({ provinceName, cityInfoList }) {
      this.citySelectorStatus = false;
      this.province = provinceName;
      // console.log(city);
      this.cityList = cityInfoList;
    },
    remoteSearch(word) {
      console.log(word);
      // 请求数据
    },
    selectCity(item) {
      console.log(item);
      this.setPosition(item);
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss">
@import '~@/assets/css/changecity/province.scss';

</style>
