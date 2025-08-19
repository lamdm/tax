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
.error-container {
  max-width: 500px;
  padding: 40px;
}

.error-code {
  font-size: 15rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.error-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  opacity: 0.9;
}

.error-description {
  font-size: 1.2rem;
  opacity: 0.7;
  margin-bottom: 32px;
  line-height: 1.5;
}

.error-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 8rem;
  }
  
  .error-title {
    font-size: 1.8rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .error-actions .q-btn {
    width: 200px;
  }
}
</style>
