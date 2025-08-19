#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  appName: 'Tax App',
  appSubtitle: 'Ứng dụng quản lý thuế',
  iconName: 'account_balance', // Material icon name
  primaryColor: '#1976d2',
  gradientColors: ['#667eea', '#764ba2']
};

// Update SplashScreen component
function updateSplashScreen() {
  const splashPath = path.join(__dirname, '../src/components/SplashScreen.vue');
  
  if (fs.existsSync(splashPath)) {
    let content = fs.readFileSync(splashPath, 'utf8');
    
    // Update icon
    content = content.replace(
      /name="[^"]*"/,
      `name="${config.iconName}"`
    );
    
    // Update app title
    content = content.replace(
      /<h1 class="app-title">[^<]*<\/h1>/,
      `<h1 class="app-title">${config.appName}</h1>`
    );
    
    // Update app subtitle
    content = content.replace(
      /<p class="app-subtitle">[^<]*<\/p>/,
      `<p class="app-subtitle">${config.appSubtitle}</p>`
    );
    
    // Update gradient colors
    content = content.replace(
      /background: linear-gradient\([^)]*\)/,
      `background: linear-gradient(135deg, ${config.gradientColors[0]} 0%, ${config.gradientColors[1]} 100%)`
    );
    
    fs.writeFileSync(splashPath, content);
    console.log('✅ Updated SplashScreen component');
  }
}

// Update app title in MainLayout
function updateAppTitle() {
  const layoutPath = path.join(__dirname, '../src/layouts/MainLayout.vue');
  
  if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    
    content = content.replace(
      /<q-toolbar-title>[^<]*<\/q-toolbar-title>/,
      `<q-toolbar-title>${config.appName}</q-toolbar-title>`
    );
    
    fs.writeFileSync(layoutPath, content);
    console.log('✅ Updated app title in MainLayout');
  }
}

// Update favicon
function updateFavicon() {
  const faviconPath = path.join(__dirname, '../public/favicon.ico');
  const indexPath = path.join(__dirname, '../index.html');
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Update title
    content = content.replace(
      /<title>[^<]*<\/title>/,
      `<title>${config.appName}</title>`
    );
    
    fs.writeFileSync(indexPath, content);
    console.log('✅ Updated HTML title');
  }
}

// Update i18n app name
function updateI18n() {
  const enPath = path.join(__dirname, '../src/i18n/en-US/index.ts');
  const viPath = path.join(__dirname, '../src/i18n/vi-VN/index.ts');
  
  if (fs.existsSync(enPath)) {
    let content = fs.readFileSync(enPath, 'utf8');
    content = content.replace(
      /appName: '[^']*'/,
      `appName: '${config.appName}'`
    );
    fs.writeFileSync(enPath, content);
    console.log('✅ Updated English i18n');
  }
  
  if (fs.existsSync(viPath)) {
    let content = fs.readFileSync(viPath, 'utf8');
    content = content.replace(
      /appName: '[^']*'/,
      `appName: '${config.appName}'`
    );
    fs.writeFileSync(viPath, content);
    console.log('✅ Updated Vietnamese i18n');
  }
}

// Main function
function main() {
  console.log('🔄 Updating app branding...');
  
  updateSplashScreen();
  updateAppTitle();
  updateFavicon();
  updateI18n();
  
  console.log('✅ All branding updates completed!');
  console.log('\n📝 Next steps:');
  console.log('1. Replace logo files in public/icons/');
  console.log('2. Replace Android icons in android/app/src/main/res/');
  console.log('3. Replace iOS icons in ios/App/App/Assets.xcassets/');
  console.log('4. Run: npm run build');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { config, updateSplashScreen, updateAppTitle, updateFavicon, updateI18n }; 