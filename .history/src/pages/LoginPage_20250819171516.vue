<template>
  <div class="login-container">
    <q-card class="login-card">
      <q-card-section class="text-center">
        <q-avatar size="60px" class="q-mb-md">
          <q-icon name="account_circle" size="60px" color="primary" />
        </q-avatar>
        <h4 class="text-h4">{{ t('login') }}</h4>
        <p class="text-grey-6 q-mb-none">{{ t('welcomeBack') }}</p>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onLogin" class="q-gutter-sm">
          <q-input
            v-model="loginForm.cccd"
            :label="t('cccd')"
            outlined
            :rules="[val => !!val || t('required'), val => validateCCCD(val) || t('invalidCCCD')]"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="badge" />
            </template>
          </q-input>

          <q-input
            v-model="loginForm.password"
            :label="t('password')"
            :type="showPassword ? 'text' : 'password'"
            outlined
            :rules="[val => !!val || t('required'), val => val.length >= 6 || t('invalidPassword')]"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>

          <div class="row justify-between items-center q-mb-sm">
            <q-checkbox v-model="loginForm.rememberMe" :label="t('rememberMe')" />
            <q-btn flat color="primary" :label="t('forgotPassword')" size="sm" />
          </div>

          <q-btn
            type="submit"
            color="primary"
            size="lg"
            class="full-width"
            :loading="loading"
            :label="t('login')"
          />
        </q-form>

        <q-separator class="q-my-lg" />

        <div class="text-center q-mt-sm">
          <p class="text-grey-6 q-mb-sm">{{ t('noAccount') }}</p>
          <q-btn
            flat
            color="primary"
            :label="t('registerNow')"
            size="sm"
            @click="showRegister = true"
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- Register Dialog -->
    <q-dialog v-model="showRegister">
      <q-card class="register-card">
        <q-card-section class="text-center">
          <h4 class="text-h4">{{ t('register') }}</h4>
          <p class="text-grey-6 q-mb-none">{{ t('createAccount') }}</p>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onRegister" class="q-gutter-sm">
                        <q-input
              v-model="registerForm.cccd"
              :label="t('cccd')"
              outlined
              :rules="[val => !!val || t('required'), val => validateCCCD(val) || t('invalidCCCD')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="badge" />
              </template>
            </q-input>

            <q-input
              v-model="registerForm.password"
              :label="t('password')"
              :type="showRegisterPassword ? 'text' : 'password'"
              outlined
              :rules="[val => !!val || t('required'), val => val.length >= 6 || t('invalidPassword')]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="showRegisterPassword ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="showRegisterPassword = !showRegisterPassword"
                />
              </template>
            </q-input>

            <q-input
              v-model="registerForm.confirmPassword"
              :label="t('confirmPassword')"
              :type="showConfirmPassword ? 'text' : 'password'"
              outlined
              :rules="[
                val => !!val || t('required'),
                val => val === registerForm.password || t('passwordMismatch')
              ]"
              lazy-rules
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="showConfirmPassword ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="showConfirmPassword = !showConfirmPassword"
                />
              </template>
            </q-input>

                                     <q-checkbox
              v-model="registerForm.agreeTerms"
              :label="t('agreeTerms')"
              :rules="[(val: any) => val || t('agreeTermsRequired')]"
            />

            <q-btn
              type="submit"
              color="primary"
              size="lg"
              class="full-width"
              :loading="loading"
              :label="t('register')"
            />
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Đóng" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Notify } from 'quasar';

const router = useRouter();
const { t } = useI18n();

// Login form
const loginForm = reactive({
  cccd: '',
  password: '',
  rememberMe: false
});

// Register form
const registerForm = reactive({
  fullName: '',
  cccd: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
});

// UI states
const loading = ref(false);
const showPassword = ref(false);
const showRegisterPassword = ref(false);
const showConfirmPassword = ref(false);
const showRegister = ref(false);

// Validation functions
const validateCCCD = (cccd: string): boolean => {
  return cccd.length >= 9 && cccd.length <= 12;
};

// Login handler
const onLogin = async () => {
  loading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo login - in real app, you would call your API here
    if (loginForm.cccd === '123456789' && loginForm.password === '123456') {
      Notify.create({
        type: 'positive',
        message: t('loginSuccess'),
        position: 'top'
      });
      
      // Navigate to dashboard
      void router.push('/dashboard');
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

// Register handler
const onRegister = async () => {
  loading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    Notify.create({
      type: 'positive',
      message: t('registerSuccess'),
      position: 'top'
    });
    
    showRegister.value = false;
    
    // Reset register form
    Object.assign(registerForm, {
      fullName: '',
      cccd: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    });
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
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  overflow: hidden;
}

.login-card {
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto;
}

.register-card {
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
}

.text-h4 {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.q-card-section {
  padding: 16px;
}

.q-btn {
  border-radius: 8px;
  font-weight: 600;
}

.q-input {
  margin-bottom: 12px;
}

.q-separator {
  margin: 16px 0;
}

.q-avatar {
  margin-bottom: 12px;
}

.q-checkbox {
  margin-bottom: 12px;
}
</style>