<template>
  <q-footer elevated class="bottom-nav">
    <div class="bottom-nav-container">
      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'dashboard' }"
        @click="navigateTo('dashboard')"
        flat
        class="nav-btn"
        no-caps
      >
        <div class="nav-btn-content">
          <q-icon name="dashboard" size="dashboard" />
          <span class="nav-label">{{ t('dashboard') }}</span>
        </div>
      </q-btn>

      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'purchase' }"
        @click="navigateTo('purchase')"
        flat
        class="nav-btn"
        no-caps
      >
        <div class="nav-btn-content">
          <q-icon name="add_shopping_cart" size="20px" />
          <span class="nav-label">{{ t('purchase') }}</span>
        </div>
      </q-btn>

      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'sell' }"
        @click="navigateTo('sell')"
        flat
        class="nav-btn"
        no-caps
      >
        <div class="nav-btn-content">
          <q-icon name="store" size="20px" />
          <span class="nav-label">{{ t('sell') }}</span>
        </div>
      </q-btn>


      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'report' }"
        @click="navigateTo('report')"
        flat
        class="nav-btn"
        no-caps
      >
        <div class="nav-btn-content">
          <q-icon name="analytics" size="20px" />
          <span class="nav-label">{{ t('incomeExpenditure') }}</span>
        </div>
      </q-btn>

      <q-btn
        :value="activeTab"
        :class="{ 'active-tab': activeTab === 'more' }"
        @click="navigateTo('more')"
        flat
        class="nav-btn"
        no-caps
      >
        <div class="nav-btn-content">
          <q-icon name="menu" size="20px" />
          <span class="nav-label">{{ t('more') }}</span>
        </div>
      </q-btn>
    </div>
  </q-footer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const activeTab = ref('dashboard');

// Cập nhật active tab dựa trên route hiện tại
const updateActiveTab = () => {
  const path = route.path;

  console.log(path)
  if (path.startsWith('/dashboard') || path === '/') {
    activeTab.value = 'dashboard';
  } else if (path.startsWith('/sell')) {
    activeTab.value = 'sell';
  } else if (path.startsWith('/purchase')) {
    activeTab.value = 'purchase';
  } else if (path.startsWith('/report') || path.startsWith('/receipt') || path.startsWith('/payment')) {
    activeTab.value = 'report';
  } else if (path.startsWith('/more')) {
    activeTab.value = 'more';
  }
};

// Watch route changes
watch(() => route.path, updateActiveTab, { immediate: true });

const navigateTo = (routeName: string) => {
  void router.push({ name: routeName });
};
</script>

<style scoped>
.bottom-nav {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  position: fixed;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 900px;
  z-index: 1000;
}

.bottom-nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  padding: 2px;
  position: relative;
}

.nav-btn {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  margin: 0 4px;
  min-height: 64px;
  position: relative;
  overflow: hidden;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-btn:hover {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.nav-btn.active-tab {
  color: white;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.nav-btn.active-tab::before {
  opacity: 1;
}

.nav-btn.active-tab .q-icon,
.nav-btn.active-tab .nav-label {
  position: relative;
  z-index: 1;
}

.nav-btn-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
  z-index: 1;
}

.nav-label {
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  letter-spacing: 0.3px;
}

.q-icon {
  transition: transform 0.3s ease;
}

.nav-btn.active-tab .q-icon {
  transform: scale(1.1);
}

/* Mobile portrait */
@media (max-width: 480px) {
  .bottom-nav-container {
    height: 72px;
  }

  .nav-btn {
    min-height: 56px;
    margin: 0 2px;
    border-radius: 12px;
  }

  .nav-btn-content {
    gap: 4px;
  }

  .nav-label {
    font-size: 10px;
  }

  .q-icon {
    font-size: 18px;
  }
}

/* Mobile landscape and small tablets */
@media (min-width: 481px) and (max-width: 768px) {
  .bottom-nav-container {
    height: 76px;
  }

  .nav-btn {
    min-height: 60px;
    margin: 0 6px;
    border-radius: 14px;
  }

  .nav-label {
    font-size: 11px;
  }

  .q-icon {
    font-size: 20px;
  }
}

/* Large tablets (up to 900px) - Vẫn hiển thị bottom nav */
@media (min-width: 769px) and (max-width: 900px) {
  .bottom-nav {
    display: block !important;
  }

  .bottom-nav-container {
    height: 80px;
  }

  .nav-btn {
    min-height: 64px;
    margin: 0 8px;
    border-radius: 16px;
  }

  .nav-label {
    font-size: 12px;
  }

  .q-icon {
    font-size: 22px;
  }
}

/* Hide chỉ khi màn hình lớn hơn 900px */
@media (min-width: 901px) {
  .bottom-nav {
    display: block !important; /* Vẫn hiển thị */
  }

  .bottom-nav-container {
    height: 80px;
  }

  .nav-btn {
    min-height: 64px;
    margin: 0 8px;
    border-radius: 16px;
  }
}

/* Hiển thị trên tất cả màn hình đến 900px */
@media (max-width: 900px) {
  .bottom-nav {
    display: block !important;
  }
}
</style>
