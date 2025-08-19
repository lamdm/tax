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
.bottom-nav {
  background: white;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.bottom-nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}

.nav-btn {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.3s ease;
  border-radius: 0;
  min-height: 60px;
}

.nav-btn:hover {
  background-color: #f5f5f5;
}

.nav-btn.active-tab {
  color: #1976d2;
}

.nav-btn.active-tab .q-icon {
  color: #1976d2;
}

.nav-label {
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
}

.q-icon {
  margin-bottom: 2px;
}

/* Desktop styles */
@media (min-width: 769px) {
  .bottom-nav {
    position: relative;
  }
}
</style> 