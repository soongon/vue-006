<script setup>
defineProps({
  products: Array
})
</script>

<template>
  <h3>상품목록</h3>
  <ul>
    <li v-for="product in products">{{product}}</li>
  </ul>
</template>

<style>
</style>