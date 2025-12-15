import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { Notify } from 'quasar';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Get API base URL from environment variable or use default
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ 
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens or custom headers here
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const status = error.response.status;
      const data = error.response.data as { message?: string };
      
      switch (status) {
        case 401:
          Notify.create({
            type: 'negative',
            message: 'Authentication failed. Please log in again.',
            position: 'top'
          });
          break;
        case 403:
          Notify.create({
            type: 'negative',
            message: 'Access denied.',
            position: 'top'
          });
          break;
        case 404:
          Notify.create({
            type: 'negative',
            message: 'Resource not found.',
            position: 'top'
          });
          break;
        case 500:
          // Handle Laravel backend errors including log file permission issues
          Notify.create({
            type: 'negative',
            message: data.message || 'Server error. Please contact support if the issue persists.',
            position: 'top',
            timeout: 5000
          });
          break;
        default:
          Notify.create({
            type: 'negative',
            message: data.message || 'An error occurred. Please try again.',
            position: 'top'
          });
      }
    } else if (error.request) {
      // Request was made but no response received
      Notify.create({
        type: 'negative',
        message: 'Unable to connect to the server. Please check your connection.',
        position: 'top',
        timeout: 5000
      });
    } else {
      // Something else happened
      Notify.create({
        type: 'negative',
        message: 'An unexpected error occurred.',
        position: 'top'
      });
    }
    
    return Promise.reject(error);
  }
);

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
