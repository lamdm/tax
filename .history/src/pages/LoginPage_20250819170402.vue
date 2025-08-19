<template>
  <div class="login-page">
    <!-- Top language chip and back button -->
    <div class="top-actions">
      <q-btn
        v-if="showBack"
        flat
        round
        dense
        icon="arrow_back"
        class="back-btn"
        @click="goBackToIntro"
      />
      <q-chip clickable color="white" text-color="dark" class="lang-chip" @click="toggleLangMenu = true">
        <span class="flag">🇻🇳</span>
        <span class="lang-text">Tiếng Việt</span>
        <q-icon name="keyboard_arrow_down" size="18px" class="q-ml-xs" />
        <q-menu v-model="toggleLangMenu" anchor="bottom right" self="top right">
          <q-list style="min-width: 140px">
            <q-item clickable v-close-popup @click="setLang('vi')">
              <q-item-section>🇻🇳 Tiếng Việt</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="setLang('en')">
              <q-item-section>🇺🇸 English</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-chip>
    </div>

    <!-- Intro screen -->
    <div v-if="!showForm" class="intro-container">
      <div class="brand">
        <q-avatar size="36px" class="brand-logo">
          <q-icon name="apps" color="primary" size="28px" />
        </q-avatar>
        <div class="brand-text">
          <div class="brand-name">AMIS KẾ TOÁN</div>
          <div class="brand-dot"></div>
        </div>
      </div>

      <div class="intro-title">Thêm mới chứng từ và phát hành hóa đơn mọi lúc, mọi nơi</div>

      <div class="intro-illustration">
        <q-icon name="insert_drive_file" size="120px" color="grey-5" />
      </div>

      <div class="dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <div class="bottom-actions">
        <q-btn color="positive" no-caps class="cta" label="Đăng nhập" @click="showForm = true" />
        <q-btn flat no-caps class="demo-link" label="Xem dữ liệu demo" />
      </div>
    </div>

    <!-- Login form screen -->
    <div v-else class="form-container">
      <div class="brand brand-center">
        <q-avatar size="36px" class="brand-logo">
          <q-icon name="apps" color="primary" size="28px" />
        </q-avatar>
        <div class="brand-text">
          <div class="brand-name">AMIS KẾ TOÁN</div>
          <div class="brand-dot"></div>
        </div>
      </div>

      <q-banner class="edition-banner" rounded dense>
        Phiên bản dành cho Hộ kinh doanh
      </q-banner>

      <div class="login-headings">
        <div class="title">Đăng nhập tài khoản MISA</div>
        <div class="subtitle">Để sử dụng ứng dụng AMIS Kế toán HKD</div>
      </div>

      <q-form @submit="onLogin" class="q-gutter-md form">
        <q-input
          v-model="loginForm.email"
          type="email"
          label="Email"
          outlined rounded
          :rules="[val => !!val || 'Vui lòng nhập email']"
        />

        <q-input
          v-model="loginForm.password"
          :type="showPassword ? 'text' : 'password'"
          label="Mật khẩu"
          outlined rounded
          :rules="[val => !!val || 'Vui lòng nhập mật khẩu']"
        >
          <template v-slot:append>
            <q-icon :name="showPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPassword = !showPassword" />
          </template>
        </q-input>

        <q-btn type="submit" color="positive" no-caps class="cta" :loading="loading" label="Đăng nhập" />
      </q-form>

      <q-btn flat no-caps class="forgot" label="Quên mật khẩu?" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';

const router = useRouter();

const showForm = ref(false);
const loading = ref(false);
const showPassword = ref(false);
const toggleLangMenu = ref(false);

const showBack = computed(() => showForm.value);

const loginForm = reactive({
  email: '',
  password: ''
});

function goBackToIntro() {
  showForm.value = false;
}

function setLang(lang: 'vi' | 'en') {
  // Placeholder: tie into your i18n if needed
  toggleLangMenu.value = false;
}

const onLogin = async () => {
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 800));
    if (loginForm.email && loginForm.password) {
      Notify.create({ type: 'positive', message: 'Đăng nhập thành công', position: 'top' });
      void router.push('/dashboard');
    } else {
      Notify.create({ type: 'negative', message: 'Thông tin đăng nhập chưa hợp lệ', position: 'top' });
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.top-actions { position: relative; height: 56px; }
.back-btn { position: absolute; top: 8px; left: 8px; }
.lang-chip { position: absolute; top: 8px; right: 8px; border: 1px solid #e5e7eb; }
.flag { margin-right: 6px; }
.lang-text { font-weight: 600; }

.intro-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px 24px;
}

.brand {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.brand-center { justify-content: center; }

.brand-logo { background: #f2f5ff; }

.brand-text { display: flex; align-items: center; margin-left: 8px; }

.brand-name { font-weight: 700; letter-spacing: 0.2px; }

.brand-dot { width: 18px; height: 8px; background: #ff6a00; border-radius: 4px; margin-left: 6px; }

.intro-title { text-align: center; color: #6b7280; margin: 20px 0 6px; padding: 0 8px; line-height: 1.4; }

.intro-illustration { margin: 16px 0 12px; }

.dots { display: flex; gap: 6px; margin: 8px 0 20px; }
.dot { width: 6px; height: 6px; border-radius: 3px; background: #d1d5db; }
.dot.active { width: 22px; border-radius: 4px; background: #22c55e; }

.bottom-actions { width: 100%; max-width: 360px; display: flex; flex-direction: column; align-items: stretch; margin-top: auto; }
.cta { width: 100%; border-radius: 10px; height: 44px; font-weight: 600; }
.demo-link { margin-top: 8px; color: #0ea5e9; }

.form-container { flex: 1; padding: 0 16px 24px; display: flex; flex-direction: column; }
.edition-banner { background: #eaf8f0; color: #22c55e; margin: 12px 0 16px; text-align: center; }
.login-headings { text-align: center; margin: 8px 0 8px; }
.login-headings .title { font-weight: 700; font-size: 18px; }
.login-headings .subtitle { color: #6b7280; font-size: 13px; margin-top: 4px; }
.form { max-width: 360px; width: 100%; margin: 0 auto; }
.forgot { align-self: center; margin-top: 8px; color: #0ea5e9; }
</style>