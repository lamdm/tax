<template>
  <div id="q-app">
    <splash-screen v-if="showSplash" />
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SplashScreen from 'components/SplashScreen.vue';

const showSplash = ref(true);

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 2000); // Hiển thị splash trong 2 giây, bạn chỉnh lại theo ý muốn
});
</script>

<style>
/* Mobile-first design - Giao diện mobile làm chuẩn */
html,
body {
  margin: 0;
  padding: 0;
  background: white;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
}

#q-app {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: #f8fafc;
  min-height: 100vh;
  position: relative;
}

/* Khi màn hình lớn hơn 900px - hiển thị như web với 2 bên trắng */
@media (min-width: 901px) {
  body {
    background: white;
    display: flex;
    justify-content: center;
  }
  
  #q-app {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
