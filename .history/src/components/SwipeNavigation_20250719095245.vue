<template>
  <div 
    class="swipe-container"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const touchStartX = ref(0);
const touchStartY = ref(0);
const touchEndX = ref(0);
const touchEndY = ref(0);

const minSwipeDistance = 50;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX;
  touchStartY.value = event.touches[0].clientY;
};

const handleTouchEnd = (event: TouchEvent) => {
  touchEndX.value = event.changedTouches[0].clientX;
  touchEndY.value = event.changedTouches[0].clientY;
  
  const distanceX = touchStartX.value - touchEndX.value;
  const distanceY = touchStartY.value - touchEndY.value;
  
  // Kiểm tra xem có phải swipe ngang không
  if (Math.abs(distanceX) > Math.abs(distanceY) && Math.abs(distanceX) > minSwipeDistance) {
    if (distanceX > 0) {
      // Swipe trái - có thể thêm logic navigation
      console.log('Swipe left');
    } else {
      // Swipe phải - back
      router.back();
    }
  }
};
</script>

<style scoped>
.swipe-container {
  width: 100%;
  height: 100%;
  touch-action: pan-y;
}
</style> 