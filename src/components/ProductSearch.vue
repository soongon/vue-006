<script setup>
const emit = defineEmits(['demoEvent'])

function sendDataToFather() {
  //$emit('demoEvent');
  emit('demoEvent', '자식이 전달하는 데이터');
  console.log('demoEvent 가 발생되었어요..');
}
</script>

<template>
  <p>
    상품 검색 : <input/>
    <button @click="sendDataToFather">검색</button>
  </p>
</template>

<style>
</style>