<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header chỉ hiện trên mobile -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Tax App111
        </q-toolbar-title>

        <div class="row items-center q-gutter-sm">
          <q-btn flat round icon="notifications" />
          <q-btn flat round icon="account_circle" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Main content -->
    <q-page-container>
      <swipe-navigation>
        <router-view />
      </swipe-navigation>
    </q-page-container>

    <!-- Bottom Navigation - Always show on mobile -->
    <bottom-navigation class="mobile-bottom-nav" />
  </q-layout>
</template>

<script setup lang="ts">
import SwipeNavigation from 'components/SwipeNavigation.vue';
import BottomNavigation from 'components/BottomNavigation.vue';
</script>

<style scoped>
.q-page-container {
  padding-bottom: 80px; /* Space for bottom navigation */
}

.mobile-bottom-nav {
  display: block !important;
}

@media (min-width: 769px) {
  .q-page-container {
    padding-bottom: 0;
  }
  
  .mobile-bottom-nav {
    display: none !important;
  }
}
</style> 