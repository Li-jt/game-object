<script setup lang="ts">
import Items from '@/components/items/index.vue'
import useUserStore from "@/stores/modules/user";
import {itemEnum} from "@/components/prefabs/types";
import {shallowRef} from "vue";
import {random} from 'lodash-es'

const itemRef = shallowRef<InstanceType<typeof Items>>()

const userStore  = useUserStore()
const handleAnimationEnd = () => {
  const item = userStore.getItem(itemEnum.Wood)
  userStore.setItem(itemEnum.Wood,{
    name: '木头',
    icon: '🪵',
    type: itemEnum.Wood,
    ...item,
    count: item?.count ? item.count + random(1,3) : 1,
  })
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
  <items name="🌲" ref="itemRef" @click="handleClick" :timer="5" @animation-end="handleAnimationEnd"/>
</template>

<style scoped>

</style>
