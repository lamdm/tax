# Troubleshooting Guide

This document provides solutions to common issues you might encounter while developing or deploying the SmartTax application.

## Backend Connection Issues

### Issue: "Unable to connect to the server"

**Symptoms:**
- Application shows error notification: "Unable to connect to the server. Please check your connection."
- API requests timeout or fail

**Causes:**
1. Laravel backend is not running
2. Incorrect API URL configuration
3. Network connectivity issues
4. CORS configuration issues

**Solutions:**

1. **Verify Backend is Running:**
   ```bash
   # Check if Laravel backend is running
   curl http://localhost:8000/api/health  # adjust URL as needed
   ```

2. **Check API URL Configuration:**
   - Verify your `.env` file exists and contains the correct `VITE_API_BASE_URL`
   - For local development: `VITE_API_BASE_URL=http://localhost:8000/api`
   - For production: Use your production API URL

3. **Restart Development Server:**
   ```bash
   # Stop the dev server (Ctrl+C)
   # Then restart
   quasar dev
   ```

## Laravel Backend Errors

### Issue: "The stream or file could not be opened in append mode: Permission denied"

**Full Error:**
```
The stream or file "/var/www/ofza/storage/logs/laravel.log" could not be opened in append mode: failed to open stream: Permission denied
```

**This is a backend server issue, not a frontend issue.** The frontend now handles this error gracefully by displaying a user-friendly notification.

**Backend Solution:**

1. **Fix Storage Permissions (Laravel Backend):**
   ```bash
   cd /var/www/ofza  # or your Laravel installation path
   
   # Option 1: Set proper permissions
   sudo chmod -R 775 storage bootstrap/cache
   sudo chown -R www-data:www-data storage bootstrap/cache
   
   # Option 2: Use Laravel storage link command
   php artisan storage:link
   
   # Verify permissions
   ls -la storage/logs/
   ```

2. **If Using Docker:**
   ```bash
   # In your Dockerfile or docker-compose.yml, ensure proper permissions
   RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
   RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache
   ```

3. **SELinux Issues (CentOS/RHEL):**
   ```bash
   # If SELinux is enabled
   sudo chcon -R -t httpd_sys_rw_content_t storage/
   sudo chcon -R -t httpd_sys_rw_content_t bootstrap/cache/
   ```

## Authentication Issues

### Issue: "Authentication failed. Please log in again"

**Symptoms:**
- API returns 401 status code
- User is redirected to login

**Solutions:**

1. **Check Laravel Backend Authentication:**
   - Verify Laravel Sanctum or Passport is configured correctly
   - Check if authentication tokens are expired
   - Verify database session or token storage

2. **Clear Browser Cache:**
   ```bash
   # Clear localStorage in browser console
   localStorage.clear()
   ```

## Development Environment Issues

### Issue: Build Fails

**Symptoms:**
- `npm run build` or `quasar build` fails
- TypeScript compilation errors

**Solutions:**

1. **Clean Install Dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear Quasar Cache:**
   ```bash
   rm -rf .quasar
   quasar dev  # or quasar build
   ```

3. **Check Node Version:**
   ```bash
   node --version  # Should be 18+
   npm --version   # Should be 6.13.4+
   ```

### Issue: Linting Errors

**Symptoms:**
- `npm run lint` shows errors
- Pre-commit hooks fail

**Solutions:**

1. **Auto-fix Linting Issues:**
   ```bash
   npm run lint -- --fix
   ```

2. **Format Code:**
   ```bash
   npm run format
   ```

## Production Deployment Issues

### Issue: 500 Errors in Production

**Symptoms:**
- Application shows "Server error" notification
- Backend returns 500 status

**Check Backend Logs:**

1. **Laravel Backend Logs:**
   ```bash
   # Check Laravel logs
   tail -f /var/www/ofza/storage/logs/laravel.log
   
   # Check web server logs
   sudo tail -f /var/log/nginx/error.log  # or apache error.log
   ```

2. **Common Production Issues:**
   - Database connection not configured
   - Environment variables not set
   - Missing PHP extensions
   - Insufficient memory limits
   - File permission issues

**Solutions:**

1. **Verify Laravel Configuration:**
   ```bash
   # In Laravel backend
   php artisan config:clear
   php artisan cache:clear
   php artisan route:clear
   php artisan view:clear
   ```

2. **Check Environment Variables:**
   - Verify `.env` file in Laravel backend exists
   - Database credentials are correct
   - APP_KEY is set

### Issue: CORS Errors

**Symptoms:**
- Browser console shows CORS errors
- API requests blocked by browser

**Backend Solution (Laravel):**

1. **Install Laravel CORS Package:**
   ```bash
   composer require fruitcake/laravel-cors
   ```

2. **Update CORS Configuration (`config/cors.php`):**
   ```php
   return [
       'paths' => ['api/*', 'sanctum/csrf-cookie'],
       'allowed_methods' => ['*'],
       'allowed_origins' => ['http://localhost:9000', 'https://your-frontend-domain.com'],
       'allowed_origins_patterns' => [],
       'allowed_headers' => ['*'],
       'exposed_headers' => [],
       'max_age' => 0,
       'supports_credentials' => true,
   ];
   ```

## Getting Help

If you continue experiencing issues:

1. **Check Laravel Backend Logs:** `/var/www/ofza/storage/logs/laravel.log`
2. **Check Browser Console:** Look for JavaScript errors or failed requests
3. **Check Network Tab:** Inspect failed API requests for status codes and responses
4. **Enable Debug Mode:** 
   - Frontend: Check browser console for detailed error messages
   - Backend: Set `APP_DEBUG=true` in Laravel `.env` (development only!)

## Useful Commands

```bash
# Frontend Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Check code style
npm run format       # Format code

# Backend (Laravel)
php artisan serve              # Start dev server
php artisan config:clear       # Clear config cache
php artisan cache:clear        # Clear application cache
php artisan storage:link       # Create storage symbolic link
chmod -R 775 storage           # Fix permissions
```
