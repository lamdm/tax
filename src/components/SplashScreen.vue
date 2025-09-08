<template>
  <div class="splash-screen">
    <div class="splash-content">
      <div class="logo-container">
        <q-icon name="account_balance" size="80px" color="white" class="logo-icon" />
        <h1 class="app-title">Tax Management</h1>
        <p class="app-subtitle">Quản lý thuế thông minh</p>
      </div>
      
      <div class="loading-container">
        <q-spinner-dots size="40px" color="white" />
        <p class="loading-text">Đang khởi tạo...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px; /* Giới hạn max-width */
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.5s ease-in;
}

/* Khi màn hình lớn hơn 900px */
@media (min-width: 901px) {
  .splash-screen {
    width: 900px;
    height: 100vh;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
}

.splash-content {
  text-align: center;
  color: white;
  animation: slideUp 0.8s ease-out;
}

.logo-container {
  margin-bottom: 60px;
}

.logo-icon {
  margin-bottom: 20px;
  animation: pulse 2s infinite;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}

.app-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.app-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
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