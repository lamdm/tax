# Tax App - Ứng dụng Demo

Đây là ứng dụng demo được xây dựng bằng Quasar Framework và Vue 3, được thiết kế để test giao diện web.

### Chạy ứng dụng

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Serve build files
npm run start
```

## Công nghệ sử dụng

- **Quasar Framework v2**: UI framework
- **Vue 3**: Frontend framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Vue Router**: Client-side routing

## API Integration

Hiện tại ứng dụng sử dụng mock data. Để tích hợp với API thực tế:

1. Cập nhật `src/boot/axios.ts` để cấu hình API base URL
2. Thay thế mock calls trong `LoginPage.vue` và `DashboardPage.vue`
3. Thêm authentication store để quản lý session

## Development

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Build và Deploy

```bash
# Build cho production
npm run build

# Build cho PWA
npm run build --mode pwa

# Build cho mobile app
npm run build --mode capacitor
```


```
npx cap add ios
npm run build
//npx cap copy ios
npx cap sync ios
npx cap open ios
```