<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-center">
      <h2 class="text-h2 q-mb-md">Chào mừng đến với ứng dụng!</h2>
      <p class="text-body1 q-mb-lg">Đây là trang chủ của ứng dụng demo</p>
      
      <div class="row justify-center q-gutter-md">
        <q-btn
          color="primary"
          size="lg"
          label="Đăng nhập"
          icon="login"
          @click="goToLogin"
        />
        <q-btn
          outline
          color="primary"
          size="lg"
          label="Xem Demo"
          icon="play_arrow"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  void router.push('/login');
};
</script>
