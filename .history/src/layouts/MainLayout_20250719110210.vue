<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="desktop-only"
        />

        <q-toolbar-title>
          Tax App
        </q-toolbar-title>

        <div class="row items-center q-gutter-sm">
          <q-btn 
            v-if="showBackButton" 
            flat 
            round 
            icon="arrow_back" 
            @click="goBack"
            class="q-mr-sm desktop-only"
          />
          <language-switcher class="desktop-only" />
          <q-btn flat round icon="notifications" class="desktop-only" />
          <q-btn flat round icon="account_circle" class="desktop-only" @click="goToProfile" />
        </div>

        <!-- Mobile Language Switcher -->
        <language-switcher class="mobile-only" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="desktop-only"
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- Bottom Navigation for Mobile -->
    <bottom-navigation class="mobile-only" />

    <q-page-container class="page-container">
      <swipe-navigation>
        <router-view />
      </swipe-navigation>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import SwipeNavigation from 'components/SwipeNavigation.vue';
import LanguageSwitcher from 'components/LanguageSwitcher.vue';
import BottomNavigation from 'components/BottomNavigation.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Trang chủ',
    caption: 'Dashboard chính',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Báo cáo',
    caption: 'Xem báo cáo',
    icon: 'analytics',
    link: '/reports'
  },
  {
    title: 'Cài đặt',
    caption: 'Cấu hình hệ thống',
    icon: 'settings',
    link: '/settings'
  },
  {
    title: 'Trợ giúp',
    caption: 'Hướng dẫn sử dụng',
    icon: 'help',
    link: '/help'
  }
];

const router = useRouter();
const route = useRoute();

const leftDrawerOpen = ref(false);

const showBackButton = computed(() => {
  return route.path !== '/' && route.path !== '/login';
});

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function goBack () {
  router.back();
}

function goToProfile () {
  void router.push('/profile');
}
</script>

<style scoped>
.page-container {
  padding-bottom: 80px; /* Space for bottom navigation on mobile */
}

@media (min-width: 769px) {
  .page-container {
    padding-bottom: 0; /* No padding needed on desktop */
  }
}
</style>
