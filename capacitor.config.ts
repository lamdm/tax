import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lamdm.tax',
  appName: 'Tax App',
  webDir: 'dist/spa',
  server: {
    androidScheme: 'https'
  }
};

export default config;
