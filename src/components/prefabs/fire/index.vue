<script setup lang="ts">

import Items from "@/components/items/index.vue";
import {itemEnum} from "@/components/prefabs/types";
import useUserStore from "@/stores/modules/user";
import {shallowRef} from "vue";
import {toast} from "vue3-toastify";

const itemRef = shallowRef<InstanceType<typeof Items>>()

const userStore = useUserStore()
const handleAnimationEnd = (fun: () => void) => {
  const item = userStore.getItem(itemEnum.Wood)
  item.count -= 1
  if(item?.count > 0){
    fun()
  }
}
const handleClick = () => {
  if(itemRef.value!.startAnima){
    itemRef.value!.end()
  }else{
    const item = userStore.getItem(itemEnum.Wood)
    if(item?.count > 0){
      itemRef.value!.start()
    }else {
      toast(`没有${item?.icon || '🪵'}`,{
        position: "top-center",
        theme:'dark'
      })
    }
  }
}
</script>

<template>
  <Items name="🔥" ref="itemRef" :timer="1" @click="handleClick" @animation-end="handleAnimationEnd"/>
</template>

<style scoped>

</style>
