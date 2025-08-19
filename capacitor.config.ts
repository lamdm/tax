import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tax.app',
  appName: 'Tax App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
