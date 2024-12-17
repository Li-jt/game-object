<script setup lang="ts">

import Items from "@/components/items/index.vue";
import useUserStore from "@/stores/modules/user";
import {storeToRefs} from "pinia";
import {itemEnum} from "@/components/prefabs/types";

const userStore  = useUserStore()

const {state} = storeToRefs(userStore)
</script>

<template>
<div>
  <div>
    <items v-for="(item,i) in state?.item" :key="i" :name="`${item.icon}  X ${item.count || 0}`" ref="itemRef"/>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>
