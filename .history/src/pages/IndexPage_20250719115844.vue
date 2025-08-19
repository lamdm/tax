<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-center">
      <h2 class="text-h2 q-mb-md">{{ t('welcomeToApp') }}</h2>
      <p class="text-body1 q-mb-lg">{{ t('demoHome') }}</p>
      
      <div class="row justify-center q-gutter-md">
        <q-btn
          color="primary"
          size="lg"
          :label="t('login')"
          icon="login"
          @click="goToLogin"
        />
        <q-btn
          outline
          color="primary"
          size="lg"
          :label="t('viewDemo')"
          icon="play_arrow"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

const goToLogin = () => {
  void router.push('/login');
};
</script>
