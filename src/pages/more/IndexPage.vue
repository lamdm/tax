<template>
  <q-page class="more-page">
    <!-- Header -->
    <div class="header">
      <div class="user-profile">
        <div class="user-avatar">
          <span class="avatar-text">NT</span>
        </div>
        <div class="user-info">
          <div class="user-name">Nguyễn Tâm</div>
          <div class="user-email">thosans1997@gmail.co</div>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- Data Section -->
      <div class="data-section">
        <div class="data-header">
          <h4>Dữ liệu</h4>
        </div>
        <div class="data-item">
          <div class="data-info">
            <q-icon name="storage" color="green" size="24px" />
            <div class="data-details">
              <div class="data-name">02 Thí điểm_KETOAN_2022</div>
            </div>
          </div>
          <q-btn 
            flat 
            no-caps 
            color="primary" 
            label="Đổi dữ liệu"
            @click="changeData"
          />
        </div>
      </div>

      <!-- Functions Section -->
      <div class="functions-section">
        <div class="section-header">
          <h4>CHỨC NĂNG KHÁC</h4>
        </div>
        
        <div class="menu-items">
          <div class="menu-item" @click="navigateTo('profile')">
            <q-icon name="person" color="grey-6" size="20px" />
            <span>Tài khoản và bảo mật</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />
          </div>

          <div class="menu-item" @click="openSettings">
            <q-icon name="settings" color="grey-6" size="20px" />
            <span>Cài đặt</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />
          </div>

          <div class="menu-item" @click="rateApp">
            <q-icon name="star" color="grey-6" size="20px" />
            <span>Đánh giá ứng dụng</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />       
          </div>

          <div class="menu-item" @click="donate">
            <q-icon name="email" color="grey-6" size="20px" />
            <span>Đóng góp cho nhà phát triển</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />
          </div>

          <div class="menu-item" @click="inviteFriends">
            <q-icon name="share" color="grey-6" size="20px" />
            <span>Giới thiệu cho bạn bè</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />
          </div>

          <div class="menu-item" @click="productInfo">
            <q-icon name="info" color="grey-6" size="20px" />
            <span>Thông tin sản phẩm</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />
          </div>

          <div class="menu-item" @click="logout">
            <q-icon name="logout" color="grey-6" size="20px" />
            <span>Đăng xuất</span>
            <q-icon name="chevron_right" color="grey-5" size="20px" />
          </div>
        </div>
      </div>
    </div>

    <!-- Logout Confirmation Dialog -->
    <ConfirmDialog
      v-model="showLogoutDialog"
      title="Xác nhận"
      message="Bạn có chắc chắn muốn đăng xuất không?"
      confirm-label="Xác nhận"
      cancel-label="Hủy"
      @confirm="confirmLogout"
    />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ConfirmDialog from 'src/components/ConfirmDialog.vue';

const router = useRouter();
const showLogoutDialog = ref(false);

const navigateTo = (routeName: string) => {
  void router.push({ name: routeName });
};

const changeData = () => {

};

const openSettings = () => {
  
};

const rateApp = () => {

};

const donate = () => {

};

const inviteFriends = () => {
  
};

const productInfo = () => {
  
};

const logout = () => {
  showLogoutDialog.value = true;
};

const confirmLogout = () => {
  // Clear authentication data
  localStorage.removeItem('token');
  sessionStorage.clear();
  
  // Force page reload to login
  void router.push({ name: 'auth.login' });
};
</script>

<style scoped>
.more-page {
  min-height: 100vh;
  background: #f5f5f5;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 16px 80px 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
}

.avatar-text {
  font-size: 28px;
  font-weight: 600;
  color: white;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

.user-email {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px 100px 16px;
}

/* Data Section */
.data-section {
  margin-top: -70px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.data-header {
  padding: 16px 16px 8px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.data-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
}

.data-item {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.data-name {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

/* Functions Section */
.functions-section {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-header {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.section-header h4 {
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: #9CA3AF;
  letter-spacing: 0.5px;
}

.menu-items {
  padding: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:hover {
  background-color: #f9fafb;
}

.menu-item span {
  flex: 1;
  font-size: 14px;
  color: #374151;
}

.menu-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.badge {
  background: #EF4444;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

/* Responsive */
@media (min-width: 481px) {
  .content {
    padding: 0 20px 100px 20px;
  }
  
  .header {
    padding: 40px 20px 20px 20px;
  }
}

@media (min-width: 769px) {
  .content {
    padding: 0 24px 100px 24px;
  }
  
  .header {
    padding: 40px 24px 20px 24px;
  }
}
</style>
