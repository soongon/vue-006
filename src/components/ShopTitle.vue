<script setup>
defineProps({
  title: {
    type: String,
    required: true
  } 
});
</script>

<template>
  <h1>{{title}}</h1>
  <slot>
    <div>abcd</div>
  </slot>
</template>

<style>
</style>