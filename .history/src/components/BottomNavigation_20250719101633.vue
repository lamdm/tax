<template>
  <q-footer elevated class="bg-white">
    <q-tabs
      v-model="activeTab"
      class="text-grey-8"
      active-color="primary"
      indicator-color="transparent"
      align="justify"
      narrow-indicator
    >
      <q-tab name="home" @click="navigateTo('/')">
        <q-icon name="home" size="24px" />
        <div class="text-caption q-mt-xs">Trang chủ</div>
      </q-tab>

      <q-tab name="dashboard" @click="navigateTo('/dashboard')">
        <q-icon name="dashboard" size="24px" />
        <div class="text-caption q-mt-xs">Dashboard</div>
      </q-tab>

      <q-tab name="reports" @click="navigateTo('/reports')">
        <q-icon name="analytics" size="24px" />
        <div class="text-caption q-mt-xs">Báo cáo</div>
      </q-tab>

      <q-tab name="profile" @click="navigateTo('/profile')">
        <q-icon name="person" size="24px" />
        <div class="text-caption q-mt-xs">Cá nhân</div>
      </q-tab>
    </q-tabs>
  </q-footer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const activeTab = ref('home');

// Cập nhật active tab dựa trên route hiện tại
const updateActiveTab = () => {
  const path = route.path;
  if (path === '/') {
    activeTab.value = 'home';
  } else if (path === '/dashboard') {
    activeTab.value = 'dashboard';
  } else if (path === '/reports') {
    activeTab.value = 'reports';
  } else if (path === '/profile') {
    activeTab.value = 'profile';
  } else {
    activeTab.value = 'home';
  }
};

// Watch route changes
watch(() => route.path, updateActiveTab, { immediate: true });

const navigateTo = (path: string) => {
  void router.push(path);
};
</script>

<style scoped>
.q-footer {
  border-top: 1px solid #e0e0e0;
}

.q-tabs {
  height: 60px;
}

.q-tab {
  min-height: 60px;
  padding: 8px 0;
}

.q-tab__content {
  flex-direction: column;
  align-items: center;
}

.text-caption {
  font-size: 10px;
  line-height: 1;
  margin-top: 2px;
}

/* Mobile specific styles */
@media (max-width: 768px) {
  .q-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
}
</style> 