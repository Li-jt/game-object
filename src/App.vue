<script setup lang="ts">
import {onMounted} from "vue";
import useUserStore from "@/stores/modules/user";
import {itemEnum} from "@/components/prefabs/types";

onMounted(()=>{
  const userStore = useUserStore()
  if(!userStore.getItem(itemEnum.Fire) || userStore.getItem(itemEnum.Fire)?.level < 1){
    userStore.setItem(itemEnum.Fire,{
      name: '火',
      icon: '🔥',
      type: itemEnum.Fire,
      level: 1,
      count:1
    })




  }
})
</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
