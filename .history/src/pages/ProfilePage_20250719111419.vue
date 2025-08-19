<template>
  <q-page class="profile-page">
    <div class="page-header">
      <h2 class="text-h4 q-mb-md">{{ t('profile') }}</h2>
      <p class="text-body1 q-mb-lg">{{ t('personalInfo') }}</p>
    </div>

    <!-- Profile Card -->
    <q-card class="profile-card" flat bordered>
      <q-card-section class="text-center">
        <q-avatar size="80px" class="q-mb-md">
          <q-icon name="account_circle" size="80px" color="primary" />
        </q-avatar>
        <h3 class="text-h5">Nguyễn Văn A</h3>
        <p class="text-grey-6">CCCD: 123456789</p>
      </q-card-section>
    </q-card>

    <!-- Profile Options -->
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="person" color="primary" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t('personalInfoTitle') }}</q-item-label>
              <q-item-label caption>{{ t('personalInfoDesc') }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="security" color="warning" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t('changePassword') }}</q-item-label>
              <q-item-label caption>{{ t('changePasswordDesc') }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="notifications" color="info" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t('notificationsTitle') }}</q-item-label>
              <q-item-label caption>{{ t('notificationsDesc') }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" color="secondary" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ t('helpTitle') }}</q-item-label>
              <q-item-label caption>{{ t('helpDesc') }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- Logout Button -->
    <div class="text-center q-mt-lg">
      <q-btn
        color="negative"
        icon="logout"
        :label="t('logout')"
        size="lg"
        @click="logout"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Notify } from 'quasar';

const router = useRouter();
const { t } = useI18n();

const logout = () => {
  Notify.create({
    type: 'positive',
    message: t('logoutSuccess'),
    position: 'top'
  });
  void router.push('/login');
};
</script>

<style scoped>
.profile-page {
  padding: 24px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.page-header {
  margin-bottom: 24px;
}

.profile-card {
  border-radius: 12px;
}

.q-card {
  border-radius: 12px;
}

.q-btn {
  border-radius: 8px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .profile-page {
    padding: 16px;
  }
}
</style> 