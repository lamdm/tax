<template>
  <div class="register-page">
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
    
    <div class="register-content">
      <!-- Header section -->
      <div class="register-top">
        <q-btn
          flat
          round
          icon="arrow_back"
          color="white"
          size="md"
          @click="goBack"
          class="back-btn"
        />
        <div class="register-brand">
          <h2 class="register-title">{{ t('register') }}</h2>
          <p class="register-subtitle">{{ t('createAccount') }}</p>
        </div>
      </div>

      <!-- Register Form -->
      <div class="register-form-container">
        <q-form @submit="onRegister" class="register-form">
          <div class="input-group">
            <q-input
              v-model="registerForm.fullName"
              :label="t('fullName')"
              outlined
              class="custom-input"
              :rules="[val => !!val || t('required')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="person" color="white" />
              </template>
            </q-input>
          </div>

          <div class="input-group">
            <q-input
              v-model="registerForm.cccd"
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
              v-model="registerForm.email"
              :label="t('email')"
              outlined
              type="email"
              class="custom-input"
              :rules="[val => !!val || t('required'), val => validateEmail(val) || t('invalidEmail')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="email" color="white" />
              </template>
            </q-input>
          </div>

          <div class="input-group">
            <q-input
              v-model="registerForm.phone"
              :label="t('phone')"
              outlined
              class="custom-input"
              :rules="[val => !!val || t('required'), val => validatePhone(val) || t('invalidPhone')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="phone" color="white" />
              </template>
            </q-input>
          </div>

          <div class="input-group">
            <q-input
              v-model="registerForm.password"
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

          <div class="input-group">
            <q-input
              v-model="registerForm.confirmPassword"
              :label="t('confirmPassword')"
              :type="showConfirmPassword ? 'text' : 'password'"
              outlined
              class="custom-input"
              :rules="[
                val => !!val || t('required'),
                val => val === registerForm.password || t('passwordMismatch')
              ]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="white" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="showConfirmPassword ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  color="white"
                  @click="showConfirmPassword = !showConfirmPassword"
                />
              </template>
            </q-input>
          </div>

          <div class="checkbox-group">
            <q-checkbox
              v-model="registerForm.agreeTerms"
              :label="t('agreeTerms')"
              color="white"
              :rules="[(val: any) => val || t('agreeTermsRequired')]"
              class="terms-checkbox"
            />
          </div>

          <q-btn
            type="submit"
            color="white"
            text-color="primary"
            size="lg"
            class="register-btn"
            :loading="loading"
            :label="t('register')"
            no-caps
            unelevated
          />
        </q-form>

        <div class="login-link-section">
          <p class="login-text">{{ t('haveAccount') }}</p>
          <q-btn
            flat
            color="white"
            :label="t('loginNow')"
            size="md"
            no-caps
            class="login-link-btn"
            @click="goToLogin"
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

// Register form
const registerForm = reactive({
  fullName: '',
  cccd: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
});

// UI states
const loading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Validation functions
const validateCCCD = (cccd: string): boolean => {
  return cccd.length >= 9 && cccd.length <= 12;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone);
};

// Register handler
const onRegister = async () => {
  loading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    Notify.create({
      type: 'positive',
      message: t('registerSuccess'),
      position: 'top'
    });
    
    // Navigate to login
    void router.push({ name: 'auth.login' });
  } catch {
    Notify.create({
      type: 'negative',
      message: t('registerError'),
      position: 'top'
    });
  } finally {
    loading.value = false;
  }
};

const goBack = () => {
  router.back();
};

const goToLogin = () => {
  void router.push({ name: 'auth.login' });
};
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
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
  width: 180px;
  height: 180px;
  top: -90px;
  right: -90px;
  animation: float 6s ease-in-out infinite;
}

.circle-2 {
  width: 120px;
  height: 120px;
  bottom: 20%;
  left: -60px;
  animation: float 8s ease-in-out infinite reverse;
}

.circle-3 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 10px;
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.register-content {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header section */
.register-top {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 16px;
}

.back-btn {
  margin-right: 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.register-brand {
  flex: 1;
}

.register-title {
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 4px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.register-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 0;
  font-weight: 400;
}

/* Form container */
.register-form-container {
  border-radius: 24px;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 
              0 0 0 1px rgba(255, 255, 255, 0.05);
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.input-group {
  margin-bottom: 4px;
}

.checkbox-group {
  margin: 12px 0;
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
  background: rgba(255, 153, 153, 0.05);
  box-shadow: 0 0 0 3px rgba(255, 153, 153, 0.08);
}

.terms-checkbox {
  color: white;
}

.terms-checkbox :deep(.q-checkbox__label) {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 500;
}

.terms-checkbox :deep(.q-checkbox__inner) {
  color: white;
}

.register-btn {
  width: 100%;
  height: 52px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 16px;
  margin-top: 16px;
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 25px rgba(108, 92, 231, 0.3);
  transition: all 0.3s ease;
}

.register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(108, 92, 231, 0.4);
}

/* Login link section */
.login-link-section {
  text-align: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.login-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 0 0 8px 0;
}

.login-link-btn {
  font-weight: 600;
  font-size: 18px;
  color: #e0e7ff;
  background: none;
  padding: 8px 0;
  border: none;
  text-decoration: none;
  transition: all 0.3s ease;
}

.login-link-btn:hover {
  color: #c7d2fe;
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-height: 700px), (max-width: 480px) {
  .register-page {
    padding: 6px;
  }
  
  .register-top {
    margin-bottom: 12px;
    padding-top: 8px;
  }
  
  .register-title {
    font-size: 20px;
  }
  
  .register-form-container {
    padding: 16px;
  }
  
  .register-form {
    gap: 10px;
  }
  
  .input-group {
    margin-bottom: 2px;
  }
  
  .checkbox-group {
    margin: 8px 0;
  }
  
  .register-btn {
    height: 48px;
    margin-top: 12px;
  }
  
  .login-link-section {
    margin-top: 12px;
    padding-top: 12px;
  }
  
  .circle-1 {
    width: 100px;
    height: 100px;
    top: -50px;
    right: -50px;
  }
  
  .circle-2 {
    width: 60px;
    height: 60px;
    bottom: 25%;
    left: -30px;
  }
  
  .circle-3 {
    display: none;
  }
}

@media (max-width: 390px) {
  .register-page {
    padding: 4px;
  }
  
  .register-top {
    margin-bottom: 8px;
    padding-top: 6px;
  }
  
  .register-title {
    font-size: 18px;
  }
  
  .register-subtitle {
    font-size: 12px;
  }
  
  .register-form-container {
    padding: 10px;
  }
  
  .register-form {
    gap: 6px;
  }
  
  .input-group {
    margin-bottom: 2px;
  }
  
  .checkbox-group {
    margin: 6px 0;
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
  
  .register-btn {
    height: 42px;
    margin-top: 8px;
    font-size: 15px;
  }
  
  .login-link-section {
    margin-top: 8px;
    padding-top: 8px;
  }
  
  .login-text {
    font-size: 12px;
    margin: 0 0 4px 0;
  }
}

@media (max-width: 375px) and (max-height: 667px) {
  .register-page {
    padding: 2px;
  }
  
  .register-content {
    min-height: auto;
  }
  
  .register-top {
    margin-bottom: 6px;
    padding-top: 4px;
  }
  
  .register-form-container {
    padding: 8px;
  }
  
  .register-form {
    gap: 4px;
  }
  
  .custom-input :deep(.q-field__control) {
    height: 38px;
    padding: 0 10px;
  }
  
  .custom-input :deep(.q-field__label) {
    font-size: 13px;
  }
  
  .custom-input :deep(.q-field__native) {
    font-size: 14px;
  }
  
  .register-btn {
    height: 40px;
    margin-top: 6px;
  }
  
  .login-link-section {
    margin-top: 6px;
    padding-top: 6px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .register-content {
    max-width: 450px;
  }
  
  .register-form-container {
    padding: 36px;
  }
}

/* Animations */
.register-form-container {
  animation: slideUp 0.6s ease-out;
}

.register-brand {
  animation: fadeIn 0.8s ease-out;
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

/* Responsive language switcher */
@media (max-width: 480px) {
  .language-switcher-corner {
    top: 16px;
    right: 16px;
  }
}
</style>
