<template>
  <div class="splash-screen" v-if="show">
    <div class="splash-content">
      <div class="logo-container">
        <q-icon name="account_balance" size="80px" color="primary" class="logo-icon" />
        <h1 class="app-title">Tax App</h1>
        <p class="app-subtitle">Ứng dụng quản lý thuế</p>
      </div>
      
      <div class="loading-container">
        <q-spinner-dots size="40px" color="primary" />
        <p class="loading-text">Đang tải...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const show = ref(true);

onMounted(() => {
  // Simulate loading time
  setTimeout(() => {
    show.value = false;
  }, 2000);
});
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease-in;
}

.splash-content {
  text-align: center;
  color: white;
}

.logo-container {
  margin-bottom: 60px;
}

.logo-icon {
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

.app-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.app-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-text {
  font-size: 1rem;
  opacity: 0.8;
  margin: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .app-title {
    font-size: 2.5rem;
  }
  
  .app-subtitle {
    font-size: 1rem;
  }
  
  .logo-icon {
    font-size: 60px !important;
  }
}
</style> 