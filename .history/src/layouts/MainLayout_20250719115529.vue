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
          v-show="isDesktop"
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
            class="q-mr-sm"
            v-show="isDesktop"
          />
          <q-btn flat round icon="notifications" v-show="isDesktop" />
          <q-btn flat round icon="account_circle" v-show="isDesktop" @click="goToProfile" />
        </div>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      v-show="isDesktop"
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
    <bottom-navigation v-show="isMobile" />

    <q-page-container class="page-container" :style="{ paddingBottom: isMobile ? '80px' : '0' }">
      <swipe-navigation>
        <router-view />
      </swipe-navigation>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import SwipeNavigation from 'components/SwipeNavigation.vue';
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
const isMobile = ref(false);

const showBackButton = computed(() => {
  return route.path !== '/' && route.path !== '/login';
});

const isDesktop = computed(() => !isMobile.value);

function checkScreenSize() {
  isMobile.value = window.innerWidth <= 1024;
}

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function goBack () {
  router.back();
}

function goToProfile () {
  void router.push('/profile');
}



onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.page-container {
  padding-bottom: 80px; /* Space for bottom navigation on mobile */
  transition: padding-bottom 0.3s ease;
}
</style>
