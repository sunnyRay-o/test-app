<template>
  <div class="side-bar-container">
    <dl class="nav" @mouseleave="onWrapLeave">
      <dt>全部分类</dt>
      <dd
      v-for="(item, index) in sideBarList"
      :key="index"
      @mouseenter="onItemEnter(item)"
      :class="{'hot': item.hot}"
      >
        <i :class="item.type"></i>
        {{ item.name }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
    class="popup-detail"
    v-if="detail"
    @mouseenter="onPopupEnter"
    @mouseleave="onPopupLeave">
    <!-- {{detail.items}} -->
      <dl v-for="(sub, index) in detail.items" :key="index">
        <dt><router-link to="/">{{sub.title}}</router-link></dt>
        <dd
        v-for="(child, i) in sub.items"
        :key="i"><router-link to="/">{{child}}</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      detail: null,
      timer: null,
      sideBarList: [],
    };
  },
  async created() {
    let { data } = await api.getLeftMenu();
    data = data.map((item) => {
      if (item.type === 'takeout') {
        return {
          ...item,
          hot: true,
        };
      }
      return item;
    });
    this.sideBarList = data;
  },
  methods: {
    onItemEnter(item) {
      this.detail = item;
    },
    onWrapLeave() {
      const self = this;
      this.timer = setTimeout(() => {
        self.detail = false;
      }, 200);
    },
    onPopupEnter() {
      clearTimeout(this.timer);
    },
    onPopupLeave() {
      this.detail = null;
    },
  },
};
</script>

<style>
</style>
