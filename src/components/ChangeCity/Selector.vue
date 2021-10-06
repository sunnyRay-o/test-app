<template>
  <div
  :class="['selector-container', disabled ? 'disabled' : '']"
  @click="showSelectList" v-documentClick="hideSelectList">
    <div class="selector-box">
      <span class="title">{{value}}</span>
      <i class="el-icon-caret-bottom drop-down-arrow"></i>
    </div>
    <div class="select-list" :class="{'show': show}">
      <h3>{{title}}</h3>
      <div class="select-area">
        <ul class="wrap-col" v-for="(listData, i) in renderList" :key="i">
          <li
          @click="selectCity(item)"
          class="item"
          v-for="(item, i) in listData"
          :class="{active: item.name === value}"
          :key="i">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['value', 'title', 'province', 'show', 'selectList', 'disabled'],
  computed: {
    renderList() {
      const col = Math.ceil(this.selectList.length / 12);
      const resultData = [];
      for (let i = 0; i < col; i += 1) {
        const colData = this.selectList.slice(i * 12, i * 12 + 12);
        resultData.push(colData);
      }
      return resultData;
    },
  },
  methods: {
    showSelectList(e) {
      e.stopPropagation();
      if (this.disabled) {
        return;
      }
      this.$emit('changeCity', true);
    },
    hideSelectList() {
      this.$emit('changeCity', false);
    },
    selectCity(city) {
      this.$emit('selectCity', city);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/changecity/selector.scss';

</style>
