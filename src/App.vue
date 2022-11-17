<script setup>
import {reactive} from 'vue';
import ShopTitle from './components/ShopTitle.vue';
import ProductSearch from './components/ProductSearch.vue';
import ProductList from './components/ProductList.vue';
import ShopFooter from './components/ShopFooter.vue';

const state = reactive({
  title: '키트리 샵 입니다.',
  products: ['아이폰', '갤럭시','아이패드....'],
  copyright: 'Copyright 2022 by kiri.'
});
function demoEventEmitted(d) {
  console.log('서치 컴포넌트 자식이 이벤트를 발생했네요.. ' + d);
}
</script>

<template>
  <shop-title :title="state.title">
    <h2>슬롯으로 전달되는 컨텐츠..</h2>
  </shop-title>
  <product-search @demo-event="demoEventEmitted"></product-search>  
  <product-list :products="state.products"></product-list>
  <shop-footer></shop-footer>
  <global-button></global-button>
</template>

<style scoped>
</style>
