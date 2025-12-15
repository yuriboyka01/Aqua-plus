@echo off
echo ========================================
echo   Aqua Plus Website - Quick Deploy
echo ========================================
echo.

echo Step 1: Creating production build...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Build failed!
    echo Please check for errors above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build successful!
echo ========================================
echo.
echo Your production files are in the 'build' folder.
echo.
echo Next steps:
echo.
echo Option 1 - Deploy to Vercel (Recommended):
echo   1. Install Vercel CLI: npm install -g vercel
echo   2. Run: vercel
echo   3. Follow the prompts
echo.
echo Option 2 - Deploy to Netlify:
echo   1. Install Netlify CLI: npm install -g netlify-cli
echo   2. Run: netlify deploy --prod
echo   3. Follow the prompts
echo.
echo Option 3 - Manual Upload:
echo   1. Open the 'build' folder
echo   2. Upload all files to your web hosting
echo.
echo ========================================
echo.
pause
