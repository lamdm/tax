<template>
  <div class="language-switcher">
    <q-btn-dropdown
      :label="currentLanguageLabel"
      color="primary"
      flat
      class="lang-dropdown"
    >
      <q-list>
        <q-item
          clickable
          v-close-popup
          @click="changeLanguage('vi-VN')"
          :active="currentLocale === 'vi-VN'"
        >
          <q-item-section>
            <q-item-label>🇻🇳 Tiếng Việt</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          @click="changeLanguage('en-US')"
          :active="currentLocale === 'en-US'"
        >
          <q-item-section>
            <q-item-label>🇺🇸 English</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const currentLanguageLabel = computed(() => {
  return currentLocale.value === 'vi-VN' ? '🇻🇳 VI' : '🇺🇸 EN';
});

const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('language', lang);
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
}

.lang-dropdown {
  min-width: 80px;
}

.q-item--active {
  background-color: #e3f2fd;
  color: #1976d2;
}
</style> 