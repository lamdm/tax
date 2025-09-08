<template>
  <div class="fullscreen error-page">
    <div class="error-container">
      <div class="error-illustration">
        <q-icon name="error_outline" size="120px" color="primary" />
      </div>
      
      <div class="error-code">
        404
      </div>

      <div class="error-title">
        Không tìm thấy trang
      </div>

      <div class="error-description">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </div>

      <div class="error-actions">
        <q-btn
          unelevated
          :to="{ name: 'dashboard' }"
          label="Về trang chủ"
          no-caps
          size="lg"
          icon="home"
          class="home-btn"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Removed router since we don't need goBack function anymore
</script>

<style scoped>
.error-page {
  background: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.error-container {
  max-width: 500px;
  text-align: center;
  padding: 60px 40px;
  width: 100%;
}

.error-illustration {
  margin-bottom: 40px;
  animation: bounce 2s infinite;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: #667eea;
  line-height: 1;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.error-description {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 40px;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  justify-content: center;
}

.home-btn {
  border-radius: 16px;
  font-weight: 600;
  min-width: 200px;
  height: 52px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  color: white;
}

.home-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .error-page {
    padding: 16px;
  }
  
  .error-container {
    padding: 40px 24px;
  }
  
  .error-illustration {
    margin-bottom: 30px;
  }
  
  .error-illustration .q-icon {
    font-size: 80px !important;
  }
  
  .error-code {
    font-size: 5rem;
  }
  
  .error-title {
    font-size: 1.8rem;
  }
  
  .error-description {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  
  .home-btn {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .error-container {
    padding: 30px 20px;
  }
  
  .error-illustration .q-icon {
    font-size: 60px !important;
  }
  
  .error-code {
    font-size: 4rem;
  }
  
  .error-title {
    font-size: 1.5rem;
  }
  
  .error-description {
    font-size: 0.9rem;
  }
}
</style>
