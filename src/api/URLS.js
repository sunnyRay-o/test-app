const baseURL = 'https://open.duyiedu.com';
const URLS = {
  searchHotWords: '/api/meituan/header/searchHotWords.json',
  searchList: '/api/meituan/header/search.json',
  leftMenuList: '/api/meituan/index/nav.json',
  iStyleList: '/api/meituan/index/resultsByKeywords.json',
  productsList: '/api/meituan/list/goodsList.json',
  classifyList: '/api/meituan/list/classify.json',
  areaList: '/api/meituan/list/areaList.json',
  recommendList: '/api/meituan/list/recommend.json',
  hotCityList: '/api/meituan/city/hot.json',
  recentlyCityList: '/api/meituan/city/recents.json',
  currentPosition: '/api/meituan/city/getPosition.json',
  provinceList: '/api/meituan/city/province.json',
  cityList: '/api/meituan/city/cityList.json',
  login: '/api/meituan/login',
  register: '/api/meituan/register',
  detail: '/api/meituan/product/detail.json',
};
export { URLS };
export default baseURL;
