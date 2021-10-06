<template>
  <div class="category-container">
    <h2>{{title}}</h2>
    <h3>全部</h3>
    <div class="category-content">
        <ul class="category-list">
            <li class="item" v-for="item in list" :key="item.type">
                <Selector :item="item"/>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Selector from './Selector.vue';

export default {
  components: {
    Selector,
  },
  props: ['title', 'list'],
};
</script>

<style>

</style>
