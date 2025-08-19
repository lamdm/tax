import { Capacitor } from '@capacitor/core';

export interface PushNotification {
  id: string;
  title: string;
  body: string;
  data?: Record<string, unknown>;
  badge?: number;
  sound?: string;
  image?: string;
  actionTypeId?: string;
  actionTypeIdClicked?: string;
  categoryId?: string;
  categoryIdClicked?: string;
  url?: string;
  urlClicked?: string;
}

export class FirebaseService {
  private static instance: FirebaseService;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Check if running on native platform
      if (Capacitor.isNativePlatform()) {
        // Initialize Firebase for native platforms
        await this.initializeNative();
      } else {
        // Initialize Firebase for web
        await this.initializeWeb();
      }

      this.isInitialized = true;
      console.log('Firebase initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Firebase:', error);
    }
  }

  private async initializeNative(): Promise<void> {
    // This would be implemented with actual Firebase native plugins
    console.log('Initializing Firebase for native platform');
    
    // Request notification permissions
    await this.requestNotificationPermission();
    
    // Set up notification listeners
    this.setupNotificationListeners();
  }

  private async initializeWeb(): Promise<void> {
    console.log('Initializing Firebase for web platform');
    
    // Check if browser supports notifications
    if ('Notification' in window) {
      await this.requestNotificationPermission();
    }
  }

  async requestNotificationPermission(): Promise<boolean> {
    try {
      if (Capacitor.isNativePlatform()) {
        // For native platforms, permission is usually granted during app installation
        return true;
      } else {
        // For web, request permission explicitly
        if ('Notification' in window) {
          const permission = await Notification.requestPermission();
          return permission === 'granted';
        }
      }
      return false;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }

  private setupNotificationListeners(): void {
    // Set up listeners for notification events
    document.addEventListener('deviceready', () => {
      // Cordova/PhoneGap specific notification listeners
      this.setupCordovaListeners();
    });
  }

  private setupCordovaListeners(): void {
    // This would be implemented with actual Cordova plugins
    console.log('Setting up Cordova notification listeners');
  }

  async sendLocalNotification(notification: PushNotification): Promise<void> {
    try {
      if (Capacitor.isNativePlatform()) {
        await this.sendNativeNotification(notification);
      } else {
        await this.sendWebNotification(notification);
      }
    } catch (error) {
      console.error('Error sending local notification:', error);
    }
  }

  private async sendNativeNotification(notification: PushNotification): Promise<void> {
    // This would be implemented with actual native notification APIs
    console.log('Sending native notification:', notification);
    await Promise.resolve(); // Placeholder for future implementation
  }

  private async sendWebNotification(notification: PushNotification): Promise<void> {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notificationOptions: NotificationOptions = {
        body: notification.body,
        icon: notification.image || '/icons/favicon-128x128.png',
        data: notification.data
      };

      if (notification.badge) {
        notificationOptions.badge = notification.badge.toString();
      }

      const webNotification = new Notification(notification.title, notificationOptions);

      // Handle notification click
      webNotification.onclick = () => {
        console.log('Notification clicked:', notification);
        // Handle notification click action
        if (notification.url) {
          window.open(notification.url, '_blank');
        }
      };
    }
    await Promise.resolve(); // Placeholder for future implementation
  }

  async subscribeToTopic(topic: string): Promise<void> {
    try {
      console.log('Subscribing to topic:', topic);
      // This would be implemented with actual Firebase messaging
      await Promise.resolve(); // Placeholder for future implementation
    } catch (error) {
      console.error('Error subscribing to topic:', error);
    }
  }

  async unsubscribeFromTopic(topic: string): Promise<void> {
    try {
      console.log('Unsubscribing from topic:', topic);
      // This would be implemented with actual Firebase messaging
      await Promise.resolve(); // Placeholder for future implementation
    } catch (error) {
      console.error('Error unsubscribing from topic:', error);
    }
  }

  async getToken(): Promise<string | null> {
    try {
      console.log('Getting FCM token');
      // This would return actual FCM token
      return 'mock-fcm-token-' + Date.now();
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }
}

export const firebaseService = FirebaseService.getInstance(); 