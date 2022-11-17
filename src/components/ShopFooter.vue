<script setup>
defineProps({
  copyright: {
    type: String,
    required: true,
    default: '기본 카피라이트'
  }
});
</script>

<template>
  <p>{{copyright}}</p>
</template>

<style>
</style>