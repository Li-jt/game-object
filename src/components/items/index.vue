<script setup lang="ts">
import {computed, onMounted, ref, shallowRef} from "vue";

const props = withDefaults(defineProps<{
  name: string
  timer?: number
}>(),{
  name: '🔥',
  timer: 2
})

const emits = defineEmits(['animationEnd'])

const animaRef = shallowRef()

const startAnima = ref(false)

const animationTime = computed(()=>{
  return props.timer + 's'
})

const timeoutId = ref()
const handleAnimationEnd = async () => {
  startAnima.value = false
  emits('animationEnd',()=>{
    setTimeout(()=>{
        startAnima.value = true
      },100)
  })
}

const end = () => {
  timeoutId.value && clearTimeout(timeoutId.value)
  startAnima.value = false
}

const start = () => {
  startAnima.value = true
  timeoutId.value && clearTimeout(timeoutId.value)
}

onMounted(()=>{
  animaRef.value.addEventListener('animationend', handleAnimationEnd)
})

defineExpose({
  end,
  start,
  startAnima
})
</script>

<template>
<div>
  <div class="item my-[5px]">
    <div :class="{
      'item-s': startAnima
    }">{{name}}</div>
    <div class="item-sj" ref="animaRef" :class="{
      'item-sj-p': startAnima
    }"></div>
  </div>
</div>
</template>

<style scoped lang="scss">
.item{
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  min-width: 60px;
  padding: 4px 8px;
  background: #3a3939;
  border-radius: 4px;
  color: #bca6a6;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  .item-s{
    animation: item-s 4s infinite;
  }

  .item-sj{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: rgba(255,255,255,0.5);
    //transition: .2s width linear;
  }

  .item-sj-p{
    animation: anima v-bind(animationTime) linear;
  }
}

@keyframes anima {
  0%{
    width: 100%;
  }
  100%{
    width: 0;
  }
}

@keyframes item-s {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
}
</style>
