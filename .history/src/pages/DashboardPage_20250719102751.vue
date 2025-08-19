<template>
  <q-page class="dashboard-page">
    <div class="dashboard-header">
      <h2 class="text-h4 q-mb-md">Dashboard</h2>
      <p class="text-body1 q-mb-lg">Chào mừng bạn đến với ứng dụng demo!</p>
    </div>

    <div class="row q-gutter-md">
      <!-- Stats Cards -->
      <q-card class="stat-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="people" size="48px" color="primary" />
          <div class="text-h6 q-mt-sm">1,234</div>
          <div class="text-caption text-grey-6">Người dùng</div>
        </q-card-section>
      </q-card>

      <q-card class="stat-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="trending_up" size="48px" color="positive" />
          <div class="text-h6 q-mt-sm">89%</div>
          <div class="text-caption text-grey-6">Tăng trưởng</div>
        </q-card-section>
      </q-card>

      <q-card class="stat-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="attach_money" size="48px" color="warning" />
          <div class="text-h6 q-mt-sm">$12,345</div>
          <div class="text-caption text-grey-6">Doanh thu</div>
        </q-card-section>
      </q-card>

      <q-card class="stat-card" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="notifications" size="48px" color="info" />
          <div class="text-h6 q-mt-sm">23</div>
          <div class="text-caption text-grey-6">Thông báo</div>
        </q-card-section>
      </q-card>
    </div>

    <!-- Recent Activity -->
    <q-card class="q-mt-lg" flat bordered>
      <q-card-section>
        <div class="text-h6 q-mb-md">Hoạt động gần đây</div>
        <q-list>
          <q-item v-for="(activity, index) in recentActivities" :key="index">
            <q-item-section avatar>
              <q-avatar :color="activity.color" text-color="white">
                <q-icon :name="activity.icon" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ activity.title }}</q-item-label>
              <q-item-label caption>{{ activity.description }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>{{ activity.time }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <!-- Quick Actions -->
    <div class="row q-gutter-md q-mt-lg">
      <q-btn
        color="primary"
        icon="add"
        label="Tạo mới"
        class="col-12 col-sm-6 col-md-3"
      />
      <q-btn
        color="secondary"
        icon="settings"
        label="Cài đặt"
        class="col-12 col-sm-6 col-md-3"
      />
      <q-btn
        color="accent"
        icon="analytics"
        label="Báo cáo"
        class="col-12 col-sm-6 col-md-3"
      />
      <q-btn
        color="negative"
        icon="logout"
        label="Đăng xuất"
        class="col-12 col-sm-6 col-md-3"
        @click="logout"
      />
    </div>

    <!-- Back to Home Button -->
    <div class="text-center q-mt-lg">
      <q-btn
        outline
        color="primary"
        icon="home"
        label="Về trang chủ"
        @click="goHome"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';

const router = useRouter();
const $q = useQuasar();

const recentActivities = ref([
  {
    title: 'Đăng nhập thành công',
    description: 'Bạn đã đăng nhập vào hệ thống',
    time: '2 phút trước',
    icon: 'login',
    color: 'positive'
  },
  {
    title: 'Cập nhật thông tin',
    description: 'Thông tin cá nhân đã được cập nhật',
    time: '1 giờ trước',
    icon: 'edit',
    color: 'info'
  },
  {
    title: 'Tạo báo cáo mới',
    description: 'Báo cáo tháng 12 đã được tạo',
    time: '3 giờ trước',
    icon: 'description',
    color: 'warning'
  },
  {
    title: 'Gửi thông báo',
    description: 'Thông báo đã được gửi đến 150 người dùng',
    time: '5 giờ trước',
    icon: 'send',
    color: 'primary'
  }
]);

const logout = () => {
  $q.notify({
    type: 'positive',
    message: 'Đăng xuất thành công!',
    position: 'top'
  });
  void router.push('/login');
};

const goHome = () => {
  void router.push('/');
};
</script>

<style scoped>
.dashboard-page {
  padding: 24px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.dashboard-header {
  margin-bottom: 24px;
}

.stat-card {
  flex: 1;
  min-width: 200px;
  max-width: 250px;
}

.q-card {
  border-radius: 12px;
}

.q-btn {
  border-radius: 8px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .dashboard-page {
    padding: 16px;
  }
  
  .stat-card {
    min-width: 150px;
  }
}
</style> 