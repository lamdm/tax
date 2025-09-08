<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header elevated class="main-header">
      <div class="header-container">
        <q-toolbar class="main-toolbar">
          <!-- Logo Section -->
          <div class="logo-section">
            <div class="logo-container">
              <q-icon name="account_balance" size="24px" class="logo-icon" />
              <div class="logo-ripple"></div>
            </div>
            <div class="brand-info">
              <span class="brand-name">Tax App</span>
              <span class="brand-tagline">Smart Tax Management</span>
            </div>
          </div>

          <!-- Notification Section -->
          <div class="notification-section">
            <q-btn
              flat
              round
              color="white"
              icon="notifications"
              size="md"
              class="notification-btn"
              @click="showNotifications"
            >
              <q-badge color="red" floating rounded>3</q-badge>
            </q-btn>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <!-- Bottom Navigation for Mobile -->
    <bottom-navigation />

    <q-page-container class="page-container">
      <div class="page-wrapper">
        <swipe-navigation>
          <router-view />
        </swipe-navigation>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SwipeNavigation from 'components/SwipeNavigation.vue';
import BottomNavigation from 'components/BottomNavigation.vue';
import { Notify } from 'quasar';

// Notification handler
const showNotifications = () => {
  Notify.create({
    type: 'info',
    message: 'Bạn có 3 thông báo mới',
    position: 'top',
    timeout: 2000
  });
};
</script>

<style scoped>
.main-layout {
  max-width: 900px;
  margin: 0 auto;
  background: #f8fafc;
  position: relative; /* Để header có thể căn đúng */
}

/* Header styles - Mobile design */
.main-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 900px;
  z-index: 999;
}

.header-container {
  width: 100%;
  padding: 0;
}

.main-toolbar {
  min-height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0; /* Không cho phép thu nhỏ */
  min-width: 0; /* Cho phép thu nhỏ text */
  overflow: hidden;
}

.logo-container {
  position: relative;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  flex-shrink: 0; /* Logo không bị thu nhỏ */
}

.logo-icon {
  color: white;
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
}

.logo-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 2s infinite;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 60px;
    height: 60px;
    opacity: 0;
  }
}

.brand-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0; /* Cho phép thu nhỏ */
  overflow: hidden;
}

.brand-name {
  font-weight: 700;
  font-size: 18px;
  color: white;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.5px;
  overflow: hidden;
  text-overflow: ellipsis; /* Thêm ... nếu text quá dài */
}

.brand-tagline {
  font-weight: 400;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Notification Section */
.notification-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.notification-btn:hover {
  transform: scale(1.05);
}

/* Page container styles - Mobile chuẩn */
.page-container {
  background: #f8fafc;
  padding-bottom: 80px; /* Space cho bottom navigation */
  padding-top: 64px; /* Space cho fixed header */
}

.page-wrapper {
  min-height: calc(100vh - 56px - 80px);
}

.notification-btn .q-badge--floating {
  top: 0px !important;
}

/* Responsive styles - Cải thiện mobile */
@media (max-width: 360px) {
  .main-toolbar {
    padding: 0 8px; /* Giảm padding trên mobile nhỏ */
    min-height: 52px; /* Giảm chiều cao header */
  }

  .page-container {
    padding-top: 52px;
  }

  .logo-section {
    gap: 6px; /* Giảm khoảng cách */
  }

  .logo-container {
    width: 32px; /* Tăng từ 28px lên 32px */
    height: 32px;
    border-radius: 8px;
  }

  .logo-icon {
    font-size: 18px !important; /* Tăng từ 16px lên 18px */
  }

  .brand-name {
    font-size: 14px; /* Tăng từ 13px lên 14px */
    font-weight: 600;
  }

  .brand-tagline {
    display: none; /* Ẩn hoàn toàn */
  }

  .notification-btn {
    width: 36px; /* Giảm từ 44px xuống 36px */
    height: 36px;
    border-radius: 10px;
  }
}

@media (min-width: 361px) and (max-width: 480px) {
  .main-toolbar {
    padding: 0 12px;
    min-height: 56px;
  }

  .page-container {
    padding-top: 56px;
  }

  .logo-section {
    gap: 8px;
  }

  .logo-container {
    width: 36px; /* Tăng từ 32px lên 36px */
    height: 36px;
    border-radius: 9px;
  }

  .logo-icon {
    font-size: 20px !important; /* Tăng từ 18px lên 20px */
  }

  .brand-name {
    font-size: 15px; /* Tăng từ 14px lên 15px */
    font-weight: 600;
  }

  .brand-tagline {
    display: none; /* Vẫn ẩn */
  }

  .notification-btn {
    width: 38px; /* Giảm từ 44px xuống 38px */
    height: 38px;
    border-radius: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .main-toolbar {
    padding: 0 16px;
    min-height: 60px;
  }

  .page-container {
    padding-top: 60px;
  }

  .logo-section {
    gap: 12px;
  }

  .logo-container {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .logo-icon {
    font-size: 22px !important;
  }

  .brand-name {
    font-size: 17px;
    font-weight: 700;
  }

  .brand-tagline {
    display: block; /* Hiển thị tagline trên tablet */
    font-size: 10px;
  }
}

@media (min-width: 769px) and (max-width: 900px) {
  .main-toolbar {
    padding: 0 20px;
    min-height: 64px;
  }

  .page-container {
    padding-top: 64px;
  }

  .logo-section {
    gap: 14px;
  }

  .logo-container {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }

  .logo-icon {
    font-size: 26px !important;
  }

  .brand-name {
    font-size: 19px;
    font-weight: 700;
  }

  .brand-tagline {
    display: block;
    font-size: 11px;
  }

  .notification-btn {
    width: 42px; /* Giảm từ 48px xuống 42px */
    height: 42px;
    border-radius: 12px;
  }
}

@media (min-width: 901px) {
  .main-toolbar {
    padding: 0 24px;
    min-height: 68px;
  }

  .page-container {
    padding-top: 68px;
  }

  .logo-section {
    gap: 16px;
  }

  .logo-container {
    width: 48px;
    height: 48px;
    border-radius: 14px;
  }

  .logo-icon {
    font-size: 28px !important;
  }

  .brand-name {
    font-size: 20px;
    font-weight: 700;
  }

  .brand-tagline {
    display: block;
    font-size: 12px;
  }

  .notification-btn {
    width: 46px; /* Giảm từ 52px xuống 46px */
    height: 46px;
    border-radius: 14px;
  }
}
</style>
