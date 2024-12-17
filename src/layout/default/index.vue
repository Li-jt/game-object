<script setup lang="ts">
import LayoutHeader from './components/header/index.vue'
import LayoutMain from './components/main.vue'
</script>

<template>
<div>
  <div class="fixed top-0 left-0 w-[100vw]"><LayoutHeader/></div>
  <div class="flex justify-center mt-[50px]"><LayoutMain/></div>
</div>
</template>

<style scoped>

</style>
