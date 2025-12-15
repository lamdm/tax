# SmartTax (tax)

Tax Manager - A Vue.js/Quasar frontend application for tax management.

## Prerequisites

This is a **frontend application** that requires a Laravel backend API to function properly. Before running this application, ensure:

1. You have a Laravel backend API running
2. The Laravel backend has proper file permissions configured
3. You have configured the API URL for this frontend

## Backend Setup Requirements

The Laravel backend must have:
- Proper permissions on the `storage/logs` directory (typically 775)
- Web server user (e.g., www-data, nginx) must have write access to logs
- Correct ownership: `chown -R www-data:www-data /var/www/your-app/storage`

### Common Backend Issues

**Laravel Log Permission Error:**
```
The stream or file "/var/www/ofza/storage/logs/laravel.log" could not be opened in append mode: failed to open stream: Permission denied
```

**Solution:**
```bash
# Navigate to your Laravel backend directory
cd /var/www/ofza  # or your Laravel installation path

# Fix storage permissions
sudo chmod -R 775 storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache

# Or use the Laravel artisan command
php artisan storage:link
```

## Configuration

### API Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` and set your Laravel backend API URL:
```
VITE_API_BASE_URL=http://localhost:8000/api
```

For production:
```
VITE_API_BASE_URL=https://your-production-api.com/api
```

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
# or
npm run lint
```

### Format the files
```bash
yarn format
# or
npm run format
```

### Build the app for production
```bash
quasar build
```

## Error Handling

This application includes comprehensive error handling for API communication:
- User-friendly error notifications
- Automatic handling of backend errors (500, 404, 401, etc.)
- Connection timeout handling
- Graceful degradation when backend is unavailable

If you see error notifications, check:
1. Is the Laravel backend running?
2. Is the API URL configured correctly in `.env`?
3. Does the backend have proper permissions?
4. Check backend logs for detailed error information

## Troubleshooting

### Cannot connect to backend
- Verify `VITE_API_BASE_URL` in your `.env` file
- Ensure the Laravel backend is running
- Check CORS configuration in Laravel backend

### Backend returns 500 errors
- Check Laravel backend logs: `storage/logs/laravel.log`
- Verify storage directory permissions
- Ensure database connection is configured correctly

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
