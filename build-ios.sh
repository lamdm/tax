#!/bin/bash

echo "Building iOS app..."

# Remove old capacitor folder if exists
rm -rf src-capacitor

# Build with automatic answers
echo "com.tax.app" | npm run build:ios

echo "iOS build completed!"
echo "Next steps:"
echo "1. Open ios/App/App.xcworkspace in Xcode"
echo "2. Select your device or simulator"
echo "3. Click Run button (▶️)" 