<template>
  <q-footer elevated class="bottom-nav">
    <div class="bottom-nav-container">
      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'home' }"
        @click="navigateTo('/')"
        flat
        class="nav-btn"
      >
        <q-icon name="home" size="24px" />
        <span class="nav-label">Trang chủ</span>
      </q-btn>

      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'dashboard' }"
        @click="navigateTo('/dashboard')"
        flat
        class="nav-btn"
      >
        <q-icon name="dashboard" size="24px" />
        <span class="nav-label">Dashboard</span>
      </q-btn>

      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'reports' }"
        @click="navigateTo('/reports')"
        flat
        class="nav-btn"
      >
        <q-icon name="analytics" size="24px" />
        <span class="nav-label">Báo cáo</span>
      </q-btn>

      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'profile' }"
        @click="navigateTo('/profile')"
        flat
        class="nav-btn"
      >
        <q-icon name="person" size="24px" />
        <span class="nav-label">Cá nhân</span>
      </q-btn>
    </div>
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