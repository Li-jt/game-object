<script setup lang="ts">
import Items from '@/components/items/index.vue'
import useUserStore from "@/stores/modules/user";
import {itemEnum} from "@/components/prefabs/types";
import {shallowRef} from "vue";
import {random} from 'lodash-es'

const itemRef = shallowRef<InstanceType<typeof Items>>()

const userStore  = useUserStore()
const handleAnimationEnd = (fun: () => void) => {
  const item = userStore.getItem(itemEnum.Stone)
  userStore.setItem(itemEnum.Stone,{
    name: '石头',
    icon: '🪨',
    type: itemEnum.Stone,
    ...item,
    count: item?.count ? item.count + random(1,2) : 1,
  })
  fun()
}

const handleClick = () => {
  if(itemRef.value!.startAnima){
    itemRef.value!.end()
  }else{
    itemRef.value!.start()
  }
}
</script>

<template>
  <items name="🪨" ref="itemRef" @click="handleClick" :timer="10" @animation-end="handleAnimationEnd"/>
</template>

<style scoped>

</style>
