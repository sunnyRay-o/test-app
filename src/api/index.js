import axios from 'axios';
import baseURL, {
  URLS,
} from './URLS';

const instance = axios.create({
  baseURL,
  proxy: {
    host: 'http://localhost',
    port: '8080',
  },
});
instance.interceptors.request.use((config) => {
  const temp = config;
  temp.params = {
    ...config.params,
    appkey: 'sunnyRay_1602947932767',
  };
  return config;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});
instance.interceptors.response.use((config) => config.data, (error) => Promise.reject(error));
export default {
  getSearchHotWords() {
    return instance.get(URLS.searchHotWords);
  },
  getSearchList() {
    return instance.get(URLS.searchList);
  },
  getLeftMenu() {
    return instance.get(URLS.leftMenuList);
  },
  getIStyleList() {
    return instance.get(URLS.iStyleList);
  },
  getProductList() {
    return instance.get(URLS.productsList);
  },
  getClassifyList() {
    return instance.get(URLS.classifyList);
  },
  getAreaList() {
    return instance.get(URLS.areaList);
  },
  getRecommendList() {
    return instance.get(URLS.recommendList);
  },
  getHotCityList() {
    return instance.get(URLS.hotCityList);
  },
  getRecentlyCityList() {
    return instance.get(URLS.recentlyCityList);
  },
  getCurrentPosition() {
    return instance.get(URLS.currentPosition);
  },
  getProvinceList() {
    return instance.get(URLS.provinceList);
  },
  getCityList() {
    return instance.get(URLS.cityList);
  },
  login(params) {
    return instance.get(URLS.login, {
      params,
    });
  },
  register(params) {
    console.log(params);
    return instance.get(URLS.register, {
      params,
    });
  },
  getDetail() {
    return instance.get(URLS.detail);
  },
};
