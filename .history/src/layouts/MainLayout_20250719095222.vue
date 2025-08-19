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
          />
          <q-btn flat round icon="notifications" />
          <q-btn flat round icon="account_circle" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

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

const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
