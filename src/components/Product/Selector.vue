<template>
  <div class="selector-container">
    <div class="select-title">
        <span class="type"
        @mouseenter="enterType"
        @mouseleave="leaveType">{{item.title}}</span>
        <i class="el-icon-caret-bottom drop-down-arrow"></i>
    </div>
    <dl
    @mouseenter="enterSelectorArea"
    @mouseleave="leaveSelectorArea"
    class="selector-area"
    :class="{show: areaShow}">
        <dt>{{item.title}}</dt>
        <dd v-for="f in item.subList" :key="f.id">
            <a href="#">{{f.name}}</a>
        </dd>
    </dl>
  </div>
</template>

<script>

export default {
  data() {
    return {
      areaShow: false,
      timer: null,
      timer2: null,
    };
  },
  props: ['item'],
  methods: {
    enterType() {
      const self = this;
      this.timer = setTimeout(() => {
        self.areaShow = true;
      }, 1000);
    },
    leaveType() {
      clearTimeout(this.timer);
      this.timer2 = setTimeout(() => {
        this.areaShow = false;
      }, 200);
    },
    enterSelectorArea() {
      console.log('area');
      clearTimeout(this.timer2);
      this.areaShow = true;
    },
    leaveSelectorArea() {
      this.areaShow = false;
    },
  },
};
</script>

<style scoped>

</style>
