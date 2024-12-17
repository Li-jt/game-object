<script setup lang="ts">

import Items from "@/components/items/index.vue";
import {itemEnum} from "@/components/prefabs/types";
import useUserStore from "@/stores/modules/user";
import {ref, shallowRef} from "vue";
import {toast} from "vue3-toastify";
import {storeToRefs} from "pinia";

const config = {
  1:{
    items:[
      {
        [itemEnum.Stone]: 16
      }
    ]
  }
}

const itemRef = shallowRef<InstanceType<typeof Items>>()

const userStore = useUserStore()

const {state} = storeToRefs(userStore)

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

const judgmentMaterials = () => {
  const nowFire = userStore.getItem(itemEnum.Fire)
  const items = config[nowFire?.level]?.items
  if(!items) return false
  for (let i = 0; i < items?.length; i++) {
    if(userStore.getItem(Object.keys(items[i])[0] as number)?.count < items[i][Object.keys(items[i])[0]]){
      return false
    }
  }
  return true
}

const isShow = ref(true)
const handleUpgrade = () => {
  if(judgmentMaterials()){
    const nowFire = userStore.getItem(itemEnum.Fire)
    const items = config[nowFire?.level]?.items
    let item = {}
    for (let i = 0; i < items?.length; i++) {
      item = userStore.getItem(Number(Object.keys(items[i])[0]))
      userStore.setItem((Object.keys(items[i])[0] as number),{
        ...item,
        count: item.count -= items[i][Object.keys(items[i])[0]]
      })
    }
  }
  // isShow.value = false
  const fire = userStore.getItem(itemEnum.Fire)
  userStore.setItem(itemEnum.Fire,{
    ...fire,
    level: fire.level += 1
  })
  // setTimeout(()=>{
  //   isShow.value = true
  // },100)
}
</script>

<template>
  <div class="relative">
    <div class="absolute z-10 text-[rgb(174,18,18)] text-[12px] bg-[#ccc] rounded-[4px] px-[4px] right-[-10px] top-[-10px] cursor-pointer" v-if="judgmentMaterials()" @click="handleUpgrade">升级</div>
    <div class="relative" v-if="state?.item?.[itemEnum.Fire]?.level == 2 && isShow" @click="handleClick">
      <div class="absolute w-[100%] h-[100%] upgrade cursor-pointer">
        <div class="absolute top-[-10px] z-[1] text-[12px]">🪨🪨🪨🪨🪨</div>
        <div class="absolute top-[-10%] z-[1] text-[12px]">🪨</div>
        <div class="absolute top-[-10%] right-[0] z-[1] text-[12px]">🪨</div>
        <div class="absolute top-[12%] z-[1] text-[12px]">🪨</div>
        <div class="absolute top-[12%] right-[0] z-[1] text-[12px]">🪨</div>
        <div class="absolute top-[40%] z-[1] text-[12px]">🪨</div>
        <div class="absolute top-[40%] right-[0] z-[1] text-[12px]">🪨</div>
        <div class="absolute bottom-[-7px] z-[2] text-[12px]">🪨🪨🪨🪨🪨</div>
      </div>
      <Items name="🔥" ref="itemRef" :timer="1" @animation-end="handleAnimationEnd"/>
    </div>
    <Items v-else name="🔥" ref="itemRef" :timer="1" @click="handleClick" @animation-end="handleAnimationEnd"/>
  </div>
</template>

<style scoped lang="scss">
.upgrade{
  animation: upgrade .2s linear;
}
@keyframes upgrade {
  0%{
    transform: translateY(-100px);
    opacity: 0;
  }
  100%{

  }
}
</style>
