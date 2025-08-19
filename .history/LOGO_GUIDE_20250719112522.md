# Hướng dẫn thay đổi Logo cho Tax App

## 1. Thay đổi Logo cho Web

### Favicon (Browser Tab)
Thay thế các file trong thư mục `public/icons/`:
- `favicon-16x16.png` (16x16px)
- `favicon-32x32.png` (32x32px) 
- `favicon-96x96.png` (96x96px)
- `favicon-128x128.png` (128x128px)

## 2. Thay đổi Logo cho Android

### App Icon
Thay thế các file trong thư mục `android/app/src/main/res/`:

#### Mipmap folders (App Icon):
- `mipmap-mdpi/ic_launcher.png` (48x48px)
- `mipmap-hdpi/ic_launcher.png` (72x72px)
- `mipmap-xhdpi/ic_launcher.png` (96x96px)
- `mipmap-xxhdpi/ic_launcher.png` (144x144px)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192px)

#### Adaptive Icon (Android 8.0+):
- `mipmap-anydpi-v26/ic_launcher.xml`
- `mipmap-anydpi-v26/ic_launcher_round.xml`

### Splash Screen
Thay thế các file trong thư mục `android/app/src/main/res/drawable-*/`:

#### Portrait (Dọc):
- `drawable-port-mdpi/splash.png` (320x470px)
- `drawable-port-hdpi/splash.png` (480x720px)
- `drawable-port-xhdpi/splash.png` (720x1080px)
- `drawable-port-xxhdpi/splash.png` (1080x1620px)
- `drawable-port-xxxhdpi/splash.png` (1440x2160px)

#### Landscape (Ngang):
- `drawable-land-mdpi/splash.png` (470x320px)
- `drawable-land-hdpi/splash.png` (720x480px)
- `drawable-land-xhdpi/splash.png` (1080x720px)
- `drawable-land-xxhdpi/splash.png` (1620x1080px)
- `drawable-land-xxxhdpi/splash.png` (2160x1440px)

## 3. Thay đổi Logo cho iOS

### App Icon
Thay thế các file trong thư mục `ios/App/App/Assets.xcassets/AppIcon.appiconset/`:
- `AppIcon-512@2x.png` (1024x1024px)

### Splash Screen
Thay thế các file trong thư mục `ios/App/App/Assets.xcassets/Splash.imageset/`:
- `splash-2732x2732-1.png` (Portrait)
- `splash-2732x2732-2.png` (Landscape)
- `splash-2732x2732.png` (Universal)

## 4. Thay đổi Logo trong Splash Screen Component

Để thay đổi logo hiển thị trong splash screen, chỉnh sửa file `src/components/SplashScreen.vue`:

```vue
<!-- Thay đổi icon -->
<q-icon name="account_balance" size="80px" color="primary" class="logo-icon" />

<!-- Thay đổi tên app -->
<h1 class="app-title">Tax App</h1>

<!-- Thay đổi mô tả -->
<p class="app-subtitle">Ứng dụng quản lý thuế</p>
```

## 5. Công cụ tạo Icon

### Online Tools:
- [App Icon Generator](https://appicon.co/)
- [Favicon Generator](https://realfavicongenerator.net/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)

### Desktop Tools:
- Adobe Photoshop
- Sketch
- Figma

## 6. Kích thước Icon chuẩn

### Android:
- mdpi: 48x48px
- hdpi: 72x72px
- xhdpi: 96x96px
- xxhdpi: 144x144px
- xxxhdpi: 192x192px

### iOS:
- iPhone: 180x180px
- iPad: 167x167px
- App Store: 1024x1024px

### Web:
- Favicon: 16x16px, 32x32px, 96x96px, 128x128px

## 7. Build App sau khi thay đổi

```bash
# Build cho Android
npm run build:android

# Build cho iOS
npm run build:ios

# Build cho Web
npm run build
``` 