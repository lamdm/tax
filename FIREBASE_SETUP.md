# Hướng dẫn Setup Firebase Push Notifications

## 1. Tạo Firebase Project

### Bước 1: Tạo project trên Firebase Console
1. Truy cập [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Nhập tên project: "Tax App"
4. Chọn Google Analytics (optional)
5. Click "Create project"

### Bước 2: Thêm ứng dụng
1. Click "Add app" (biểu tượng web)
2. Chọn "Web" platform
3. Nhập app nickname: "Tax App Web"
4. Click "Register app"

## 2. Cài đặt Firebase SDK

### Bước 1: Cài đặt Firebase CLI
```bash
npm install -g firebase-tools
```

### Bước 2: Login Firebase
```bash
firebase login
```

### Bước 3: Initialize Firebase trong project
```bash
firebase init
```

Chọn các options:
- Hosting
- Functions
- Firestore

## 3. Cấu hình cho Web

### Bước 1: Tạo file firebase config
Tạo file `src/config/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
```

### Bước 2: Tạo service worker
Tạo file `public/firebase-messaging-sw.js`:

```javascript
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/favicon-128x128.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
```

## 4. Cấu hình cho Android

### Bước 1: Tải google-services.json
1. Trong Firebase Console, thêm Android app
2. Package name: `com.tax.app`
3. Tải file `google-services.json`
4. Đặt vào `android/app/google-services.json`

### Bước 2: Cập nhật build.gradle
Thêm vào `android/app/build.gradle`:

```gradle
apply plugin: 'com.google.gms.google-services'
```

Thêm vào `android/build.gradle`:

```gradle
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.3.15'
    }
}
```

## 5. Cấu hình cho iOS

### Bước 1: Tải GoogleService-Info.plist
1. Trong Firebase Console, thêm iOS app
2. Bundle ID: `com.tax.app`
3. Tải file `GoogleService-Info.plist`
4. Thêm vào Xcode project

### Bước 2: Cài đặt CocoaPods
```bash
cd ios/App
pod install
```

## 6. Test Push Notifications

### Bước 1: Chạy app
```bash
npm run dev
```

### Bước 2: Truy cập notification test
- Mở browser: `http://localhost:9000/notifications`
- Click "Request Permission"
- Click "Send Test Notification"

### Bước 3: Test trên device
```bash
# Build cho Android
npm run build:android

# Build cho iOS
npm run build:ios
```

## 7. Gửi Push Notification từ Server

### Bước 1: Sử dụng Firebase Admin SDK
```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
  notification: {
    title: 'Tax App',
    body: 'Bạn có thông báo mới!'
  },
  token: 'user-fcm-token'
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
```

### Bước 2: Sử dụng Firebase Console
1. Vào Firebase Console > Messaging
2. Click "Send your first message"
3. Nhập title và body
4. Chọn target (topic hoặc user)
5. Click "Send"

## 8. Troubleshooting

### Lỗi thường gặp:
1. **Permission denied**: Kiểm tra notification permission
2. **Token not found**: Đảm bảo đã request permission
3. **Service worker not found**: Kiểm tra file firebase-messaging-sw.js
4. **Build failed**: Kiểm tra google-services.json và GoogleService-Info.plist

### Debug:
```bash
# Check Firebase config
firebase projects:list

# Test messaging
firebase messaging:send --token="user-token" --message="Test message"
```

## 9. Production Setup

### Bước 1: Cập nhật Firebase config
Thay thế config test bằng config production

### Bước 2: Setup server
Deploy server với Firebase Admin SDK

### Bước 3: Test production
Test trên device thật với app production build 