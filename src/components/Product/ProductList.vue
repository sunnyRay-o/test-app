<template>
  <div class="product-list-container">
    <el-row class="navbar">
        <ul>
            <li>
                <span>智能排序</span>
            </li>
            <li>
                <span>价格排序</span>
            </li>
            <li>
                <span>人气最高</span>
            </li>
            <li>
                <span>评价最高</span>
            </li>
        </ul>
    </el-row>
    <el-row>
      <Item v-for="(item, i) in meta" :key="i" :productItem="item" :index="i"/>
    </el-row>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  props: ['meta'],
};
</script>

<style lang="scss">
@import '~@/assets/css/product/list.scss';

</style>
