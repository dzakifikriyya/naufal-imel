@echo off
REM Script untuk mendeteksi IP Address otomatis
REM Buka file ini dengan double-click untuk lihat IP Anda

echo ========================================
echo   IP ADDRESS DETECTOR
echo ========================================
echo.
echo Mencari IP Address komputer Anda...
echo.

ipconfig | findstr "IPv4"

echo.
echo ========================================
echo   CARA AKSES:
echo ========================================
echo.
echo 1. Catat IP Address di atas (contoh: 192.168.x.x)
echo.
echo 2. Di handphone, buka browser dan ketik:
echo    http://[IP-ADDRESS]/wedding
echo.
echo    Contoh: http://192.168.1.100/wedding
echo.
echo 3. Pastikan handphone terhubung WiFi SAMA dengan komputer
echo.
echo ========================================
echo.
echo Tekan tombol APAPUN untuk tutup...
pause
