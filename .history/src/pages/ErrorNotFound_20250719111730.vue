<template>
  <div class="fullscreen error-page">
    <div class="error-container">
      <div class="error-illustration">
        <q-icon name="search_off" size="120px" color="grey-4" />
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
          color="primary"
          unelevated
          to="/"
          label="Về trang chủ"
          no-caps
          size="lg"
          class="q-mr-md"
          icon="home"
        />
        <q-btn
          outline
          color="primary"
          unelevated
          @click="goBack"
          label="Quay lại"
          no-caps
          size="lg"
          icon="arrow_back"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.error-page {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.error-container {
  max-width: 500px;
  text-align: center;
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-illustration {
  margin-bottom: 30px;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  color: #e0e0e0;
  line-height: 1;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
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
  gap: 16px;
  flex-wrap: wrap;
}

.error-actions .q-btn {
  border-radius: 12px;
  font-weight: 600;
  min-width: 160px;
}

@media (max-width: 768px) {
  .error-container {
    padding: 40px 20px;
  }
  
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .error-actions .q-btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
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
