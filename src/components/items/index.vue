<script setup lang="ts">
import {computed, onMounted, ref, shallowRef} from "vue";
import gsap from 'gsap'

const props = withDefaults(defineProps<{
  name: string
  timer?: number
}>(),{
  name: '🔥',
  timer: 2
})

const emits = defineEmits(['animationEnd'])

const animaRef = shallowRef()

const startAnima = ref<GSAPTween>()

const animationTime = computed(()=>{
  return props.timer + 's'
})

const end = () => {
  startAnima.value?.pause()
  startAnima.value = null
  gsap.set(animaRef.value,{width:'0%'})
}

const start = () => {
  gsap.set(animaRef.value,{width:'100%'})
  startAnima.value = gsap.to(animaRef.value, {
    width: '0%', // 目标宽度
    duration: props.timer, // 动画持续时间
    ease: 'none', // 动画缓动
    repeat: -1, // 无限循环
    onRepeat: () => {
      // 在这里添加你的回调逻辑
      emits('animationEnd')
    }
  });
}

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
    <div class="item-sj" ref="animaRef"></div>
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
