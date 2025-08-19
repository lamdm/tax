<template>
  <div class="notification-test">
    <q-card class="notification-card">
      <q-card-section>
        <div class="text-h6">Test Push Notifications</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="sendTestNotification" class="q-gutter-md">
          <q-input
            v-model="notificationForm.title"
            label="Notification Title"
            outlined
            :rules="[val => !!val || 'Title is required']"
          />

          <q-input
            v-model="notificationForm.body"
            label="Notification Body"
            outlined
            type="textarea"
            :rules="[val => !!val || 'Body is required']"
          />

          <q-input
            v-model="notificationForm.url"
            label="URL (optional)"
            outlined
            placeholder="https://example.com"
          />

          <div class="row q-gutter-sm">
            <q-btn
              type="submit"
              color="primary"
              label="Send Test Notification"
              :loading="loading"
            />
            <q-btn
              color="secondary"
              label="Request Permission"
              @click="requestPermission"
            />
            <q-btn
              color="info"
              label="Get FCM Token"
              @click="getToken"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-card-section v-if="token">
        <div class="text-caption">FCM Token:</div>
        <q-input
          :model-value="token"
          readonly
          outlined
          dense
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { firebaseService, type PushNotification } from 'src/services/FirebaseService';

const $q = useQuasar();

const loading = ref(false);
const token = ref<string | null>(null);

const notificationForm = reactive({
  title: 'Test Notification',
  body: 'This is a test notification from Tax App',
  url: ''
});

onMounted(async () => {
  // Initialize Firebase service
  await firebaseService.initialize();
});

const sendTestNotification = async () => {
  loading.value = true;
  
  try {
    const notification: PushNotification = {
      id: Date.now().toString(),
      title: notificationForm.title,
      body: notificationForm.body,
      data: {
        timestamp: Date.now(),
        source: 'test'
      }
    };

    if (notificationForm.url) {
      notification.url = notificationForm.url;
    }

    await firebaseService.sendLocalNotification(notification);
    
    $q.notify({
      type: 'positive',
      message: 'Test notification sent!',
      position: 'top'
    });
  } catch (error) {
    console.error('Error sending notification:', error);
    $q.notify({
      type: 'negative',
      message: 'Failed to send notification',
      position: 'top'
    });
  } finally {
    loading.value = false;
  }
};

const requestPermission = async () => {
  try {
    const granted = await firebaseService.requestNotificationPermission();
    
    if (granted) {
      $q.notify({
        type: 'positive',
        message: 'Notification permission granted!',
        position: 'top'
      });
    } else {
      $q.notify({
        type: 'warning',
        message: 'Notification permission denied',
        position: 'top'
      });
    }
  } catch (error) {
    console.error('Error requesting permission:', error);
    $q.notify({
      type: 'negative',
      message: 'Error requesting permission',
      position: 'top'
    });
  }
};

const getToken = async () => {
  try {
    const fcmToken = await firebaseService.getToken();
    token.value = fcmToken;
    
    if (fcmToken) {
      $q.notify({
        type: 'positive',
        message: 'FCM token retrieved!',
        position: 'top'
      });
    } else {
      $q.notify({
        type: 'warning',
        message: 'Failed to get FCM token',
        position: 'top'
      });
    }
  } catch (error) {
    console.error('Error getting token:', error);
    $q.notify({
      type: 'negative',
      message: 'Error getting FCM token',
      position: 'top'
    });
  }
};
</script>

<style scoped>
.notification-test {
  padding: 20px;
}

.notification-card {
  max-width: 600px;
  margin: 0 auto;
}

.q-form {
  margin-top: 16px;
}
</style> 