<script setup lang="ts">
import PrefabTree from '@/components/prefabs/tree/index.vue'
import PrefabFire from '@/components/prefabs/fire/index.vue'
import PrefabStone from '@/components/prefabs/stone/index.vue'
</script>

<template>
<div class="" style="width: max-content;">
  <PrefabFire/>
<!--  <Items name="🌲" :timer="5"/>-->
  <PrefabTree/>

  <PrefabStone/>
</div>
</template>

<style scoped>

</style>
