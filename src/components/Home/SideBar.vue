<template>
  <div class="side-bar-container">
    <dl class="nav" @mouseleave="onWrapLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in sideBarList" :key="index" @mouseenter="onItemEnter(item)">
        <i :class="item.icon"></i>
        {{ item.text }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div
    class="popup-detail"
    v-if="detail"
    @mouseenter="onPopupEnter"
    @mouseleave="onPopupLeave">
      <dl v-for="(item, index) in detail.children" :key="index">
        <dt><router-link to="/">{{item.title}}</router-link></dt>
        <dd
        v-for="(child, index) in item.childs"
        :key="index"><router-link to="/">{{child}}</router-link></dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: null,
      timer: null,
      sideBarList: [
        {
          icon: 'food',
          text: '美食',
          children: [
            {
              title: '美食',
              childs: ['代金券', '甜点', '饮品', '火锅', '自助餐', '小吃', '快餐', '海鲜素食台湾/客家菜创意菜汤', '粥', '炖菜蒙餐新疆菜', '其他美食京菜鲁菜'],
            },
          ],
        },
        {
          icon: 'takeout',
          text: '外卖',
          children: [
            {
              title: '外卖',
              childs: ['美团外卖'],
            },
          ],
        },
      ],
    };
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
    onPopupLeave(item) {
      this.detail = item;
    },
  },
};
</script>

<style>
</style>
