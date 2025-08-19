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
import { ref } from 'vue';
import type { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);

const meta = ref<Meta>({
  totalCount: 1200
});
</script>
