<template>
  <div class="language-switcher">
    <q-btn-dropdown
      color="white"
      flat
      class="lang-dropdown"
      no-caps
      bordered
    >
      <template v-slot:label>
        <div class="dropdown-label">
          <div v-if="currentLocale === 'vi-VN'" class="flag-icon">
            <img :src="vietnamFlag" alt="Vietnam flag" class="flag-image" />
          </div>
          <div v-else class="flag-icon">
            <img :src="ukFlag" alt="UK flag" class="flag-image" />
          </div>
          <span class="label-text">{{ currentLanguageLabel }}</span>
        </div>
      </template>
      <q-list class="custom-dropdown-list">
        <q-item
          clickable
          v-close-popup
          @click="changeLanguage('vi-VN')"
          :active="currentLocale === 'vi-VN'"
          class="dropdown-item"
        >
          <q-item-section avatar class="item-avatar">
            <div class="flag-icon">
              <img :src="vietnamFlag" alt="Vietnam flag" class="flag-image" />
            </div>
          </q-item-section>
          <q-item-section>
            <q-item-label class="item-label">Tiếng Việt</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          @click="changeLanguage('en-US')"
          :active="currentLocale === 'en-US'"
          class="dropdown-item"
        >
          <q-item-section avatar class="item-avatar">
            <div class="flag-icon">
              <img :src="ukFlag" alt="UK flag" class="flag-image" />
            </div>
          </q-item-section>
          <q-item-section>
            <q-item-label class="item-label">English</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import vietnamFlag from 'src/assets/flags/vn.png';
import ukFlag from 'src/assets/flags/gb.png';

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const currentLanguageLabel = computed(() => {
  return currentLocale.value === 'vi-VN' ? 'Tiếng Việt' : 'English';
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
  min-width: 120px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 4px 12px;
}

.lang-dropdown:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.15);
}

.q-item--active {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Flag icons styling */
.flag-icon {
  width: 20px;
  height: 13px;
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flag-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
}

/* Dropdown styling */
.custom-dropdown-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 4px;
  min-width: 160px;
  margin-top: 4px;
}

.dropdown-item {
  border-radius: 6px;
  margin-bottom: 2px;
  padding: 8px 12px;
  transition: all 0.2s ease;
}

.dropdown-item:last-child {
  margin-bottom: 0;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item.q-item--active {
  background-color: #e3f2fd;
}

.item-avatar {
  min-width: 28px;
}

.item-label {
  font-size: 13px;
  font-weight: 400;
  color: #333;
}

.dropdown-item.q-item--active .item-label {
  color: #1976d2;
  font-weight: 500;
}

.dropdown-label {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
}

.label-text {
  font-size: 14px;
  font-weight: 400;
  color: white;
  flex: 1;
}

/* Mobile styles */
@media (max-width: 768px) {
  .lang-dropdown {
    min-width: 100px;
    font-size: 12px;
    border-radius: 16px;
    padding: 3px 10px;
  }
  
  .flag-icon {
    width: 16px;
    height: 10px;
  }
  
  .label-text {
    font-size: 12px;
  }
}
</style> 