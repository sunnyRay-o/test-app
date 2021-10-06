<template>
  <div class="navigation-container">
    <el-row>
      <div class="title">
        <h2>美团导航</h2>
      </div>
    </el-row>
    <el-row>
      <div class="content">
        <dl>
          <div class="list hot-city">
            <dt class="sub-title">热门城市</dt>
            <div class="sub-list">
              <dd class="sub-list-item" v-for="(item, i) in navList.city"
              :key="i"
              :title="item"
              >
                <router-link to="/">{{item}}</router-link>
              </dd>
            </div>
          </div>
          <div class="list hot-type">
            <dt class="sub-title">热门分类</dt>
            <div class="sub-list">
              <dd
              class="sub-list-item"
              :class="{active: item === hotType }"
              v-for="(item, i) in navList.type"
              :key="i" :title="item">
                <router-link to="/">{{item}}</router-link>
              </dd>
            </div>
          </div>
          <div class="list perimeter">
            <dt class="sub-title">周边热门</dt>
            <div class="sub-list">
              <dd class="sub-list-item" v-for="(item, i) in navList.perimeter"
              :key="i" :title="item">
                <router-link to="/">{{item}}</router-link>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotType: '美食',
      navList: {
        city: ['天津', '上海'],
        type: ['酒店', '美食'],
        perimeter: ['大厂回族自治县酒店', '门头沟渠美食'],
      },
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/css/home/navigation.scss";
</style>
