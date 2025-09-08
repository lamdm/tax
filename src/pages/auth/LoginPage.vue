<template>
  <div class="login-container">
    <!-- Language switcher in top right corner -->
    <div class="language-switcher-corner">
      <LanguageSwitcher />
    </div>
    
    <!-- Background decorative elements -->
    <div class="bg-decoration">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
    </div>
    
    <div class="login-content">
      <!-- Logo/Brand section -->
      <div class="brand-section">
        <div class="brand-logo">
          <q-icon name="account_balance" size="48px" color="white" />
        </div>
        <h2 class="brand-title">Tax Management</h2>
        <p class="brand-subtitle">Quản lý thuế thông minh</p>
      </div>

      <div class="login-form-container">
        <div class="login-header">
          <h3 class="login-title">{{ t('login') }}</h3>
          <p class="login-subtitle">{{ t('welcomeBack') }}</p>
        </div>

        <q-form @submit="onLogin" class="login-form">
          <div class="input-group">
            <q-input
              v-model="loginForm.cccd"
              :label="t('cccd')"
              outlined
              class="custom-input"
              :rules="[val => !!val || t('required'), val => validateCCCD(val) || t('invalidCCCD')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="badge" color="white" />
              </template>
            </q-input>
          </div>

          <div class="input-group">
            <q-input
              v-model="loginForm.password"
              :label="t('password')"
              :type="showPassword ? 'text' : 'password'"
              outlined
              class="custom-input"
              :rules="[val => !!val || t('required'), val => val.length >= 6 || t('invalidPassword')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="white" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  color="white"
                  @click="showPassword = !showPassword"
                />
              </template>
            </q-input>
          </div>

          <div class="form-options">
            <q-checkbox 
              v-model="loginForm.rememberMe" 
              :label="t('rememberMe')" 
              color="primary"
              size="sm"
            />
            <q-btn 
              flat 
              color="primary" 
              :label="t('forgotPassword')" 
              size="sm" 
              no-caps
              class="forgot-btn"
            />
          </div>

          <q-btn
            type="submit"
            color="primary"
            size="lg"
            class="login-btn"
            :loading="loading"
            :label="t('login')"
            no-caps
            unelevated
          />
        </q-form>

        <div class="divider-section">
          <div class="divider-line"></div>
          <span class="divider-text">hoặc</span>
          <div class="divider-line"></div>
        </div>

        <div class="register-section">
          <p class="register-text">{{ t('noAccount') }}</p>
          <q-btn
            flat
            color="primary"
            :label="t('registerNow')"
            size="md"
            no-caps
            class="register-btn"
            @click="goToRegister"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import LanguageSwitcher from 'src/components/LanguageSwitcher.vue';

const router = useRouter();
const { t } = useI18n();

// Login form
const loginForm = reactive({
  cccd: '',
  password: '',
  rememberMe: false
});

// UI states
const loading = ref(false);
const showPassword = ref(false);

// Validation functions
const validateCCCD = (cccd: string): boolean => {
  return cccd.length >= 9 && cccd.length <= 12;
};

// Navigation
const goToRegister = () => {
  void router.push({ name: 'auth.register' });
};

// Login handler
const onLogin = async () => {
  loading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo login - in real app, you would call your API here
    if (loginForm.cccd === '123456789' && loginForm.password === '123456') {

      
      // Navigate to dashboard
      void router.push({ name: 'dashboard' });
    } else {
      Notify.create({
        type: 'negative',
        message: t('loginError'),
        position: 'top'
      });
    }
  } catch {
    Notify.create({
      type: 'negative',
      message: t('loginFailed'),
      position: 'top'
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: relative;
  overflow: hidden;
}

/* Language switcher corner styling */
.language-switcher-corner {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}

/* Background decorative elements */
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  animation: float 6s ease-in-out infinite;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: -75px;
  left: -75px;
  animation: float 8s ease-in-out infinite reverse;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  right: 20px;
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.login-content {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 2;
}

/* Brand section */
.brand-section {
  text-align: center;
  margin-bottom: 24px;
}

.brand-logo {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.brand-title {
  color: white;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.brand-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin: 0;
  font-weight: 400;
}

/* Login form container */
.login-form-container {
  border-radius: 24px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 
              0 0 0 1px rgba(255, 255, 255, 0.05);
  padding: 24px;
}

.login-header {
  text-align: center;
  margin-bottom: 20px;
}

.login-title {
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin: 0 0 8px 0;
}

.login-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 0;
  font-weight: 400;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.input-group {
  margin-bottom: 8px;
}

.custom-input {
  border-radius: 16px;
}

.custom-input :deep(.q-field__control) {
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 0 16px;
}

.custom-input:hover :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.35);
}

.custom-input.q-field--focused :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.08);
}

.custom-input :deep(.q-field__outline) {
  border: none;
}

.custom-input :deep(.q-field__label) {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 16px;
}

.custom-input :deep(.q-field__native) {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.custom-input :deep(.q-field__native::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}

.custom-input :deep(.q-field__prepend) {
  padding-right: 12px;
}

.custom-input :deep(.q-field__append) {
  padding-left: 12px;
}

.custom-input :deep(.q-field__messages) {
  color: #ff6b6b;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 0;
  margin-top: 6px;
}

.custom-input.q-field--error :deep(.q-field__control) {
  border-color: rgba(255, 153, 153, 0.6) !important;
  background: rgba(255, 153, 153, 0.05);
  box-shadow: 0 0 0 3px rgba(255, 153, 153, 0.08);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
}

.form-options :deep(.q-checkbox__label) {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.form-options :deep(.q-checkbox__inner) {
  color: white;
}

.forgot-btn {
  font-size: 18px;
  padding: 8px 0;
  color: #e0e7ff;
  font-weight: 600;
  background: none;
  border: none;
  text-decoration: none;
  transition: all 0.3s ease;
}

.forgot-btn:hover {
  color: #c7d2fe;
  transform: translateY(-1px);
}

.login-btn {
  width: 100%;
  height: 52px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 16px;
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  border: none;
  box-shadow: 0 8px 25px rgba(108, 92, 231, 0.3);
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(108, 92, 231, 0.4);
}

/* Divider */
.divider-section {
  display: flex;
  align-items: center;
  margin: 24px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.3); /* Đường kẻ màu trắng nhạt */
}

.divider-text {
  margin: 0 16px;
  color: rgba(255, 255, 255, 0.8); /* Chữ màu trắng nhạt */
  font-size: 14px;
}

/* Register section */
.register-section {
  text-align: center;
}

.register-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 0 0 12px 0;
}

.register-btn {
  font-weight: 600;
  font-size: 18px;
  color: #e0e7ff;
  background: none;
  padding: 8px 0;
  border: none;
  text-decoration: none;
  transition: all 0.3s ease;
}

.register-btn:hover {
  color: #c7d2fe;
  transform: translateY(-1px);
}

/* Animation for smoother transitions */
.brand-section {
  animation: fadeIn 0.8s ease-out;
}

.login-form-container {
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-height: 700px), (max-width: 480px) {
  .login-container {
    padding: 0 18px;
  }
  
  .brand-section {
    margin-bottom: 16px;
  }
  
  .brand-logo {
    margin: 0 auto 12px auto;
  }
  
  .brand-title {
    font-size: 22px;
    margin: 0 0 4px 0;
  }
  
  .brand-subtitle {
    font-size: 14px;
  }
  
  .login-form-container {
    padding: 20px;
  }
  
  .login-header {
    margin-bottom: 16px;
  }
  
  .login-title {
    font-size: 20px;
  }
  
  .login-form {
    gap: 14px;
  }
  
  .form-options {
    margin: 8px 0;
  }
  
  .register-section {
    margin-top: 16px;
  }
}

@media (max-width: 390px) {
  .login-container {
    padding: 0 16px;
    align-items: flex-start;
    padding-top: 10px;
  }
  
  .brand-section {
    margin-bottom: 8px;
  }
  
  .brand-logo {
    margin: 0 auto 8px auto;
  }
  
  .brand-title {
    font-size: 18px;
    margin: 0 0 2px 0;
  }
  
  .brand-subtitle {
    font-size: 13px;
  }
  
  .login-form-container {
    padding: 12px;
  }
  
  .login-header {
    margin-bottom: 12px;
  }
  
  .login-title {
    font-size: 18px;
    margin: 0 0 4px 0;
  }
  
  .login-subtitle {
    font-size: 12px;
  }
  
  .login-form {
    gap: 10px;
  }
  
  .input-group {
    margin-bottom: 4px;
  }
  
  .custom-input :deep(.q-field__control) {
    padding: 0 12px;
  }
  
  .custom-input :deep(.q-field__label) {
    font-size: 14px;
  }
  
  .custom-input :deep(.q-field__native) {
    font-size: 15px;
  }
  
  .form-options {
    margin: 6px 0;
  }
  
  .login-btn {
    height: 44px;
    margin-top: 8px;
    font-size: 15px;
  }
  
  .divider-section {
    margin: 12px 0;
  }
  
  .register-section {
    margin-top: 8px;
  }
  
  .register-text {
    font-size: 12px;
    margin: 0 0 6px 0;
  }
}

@media (max-width: 375px) and (max-height: 667px) {
  .login-container {
    padding:0 20px;
    padding-top: 8px;
  }
  
  .brand-section {
    margin-bottom: 6px;
  }
  
  .brand-logo {
    width: 65px;
    height: 65px;
    margin: 0 auto 6px auto;
  }
  
  .login-form-container {
    padding: 0 10px;
  }
  
  .login-form {
    gap: 8px;
  }
  
  .custom-input :deep(.q-field__control) {
    padding: 0 10px;
  }
  
  .custom-input :deep(.q-field__label) {
    font-size: 13px;
  }
  
  .custom-input :deep(.q-field__native) {
    font-size: 14px;
  }
  
  .login-btn {
    height: 42px;
  }
  
  /* Responsive language switcher */
  .language-switcher-corner {
    top: 16px;
    right: 16px;
  }
}
</style>