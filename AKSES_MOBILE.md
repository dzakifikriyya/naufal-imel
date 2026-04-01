
# 📱 Panduan Akses Website di Handphone Pribadi

## 🎯 CARA TERCEPAT (5 Menit)

### **Opsi 1: Menggunakan IP Address (Recommended)**

#### Langkah-langkah:
1. **Buka Command Prompt / Terminal** di komputer tempat Laragon berjalan
   - Windows: Tekan `Win + R`, ketik `cmd`, Enter
   - Mac/Linux: Buka Terminal

2. **Ketik perintah untuk cari IP Address:**
   ```
   ipconfig
   ```
   Cari "IPv4 Address" (biasanya terlihat seperti: `192.168.x.x` atau `10.0.x.x`)

3. **Di Handphone:**
   - Buka browser (Chrome, Firefox, Safari, dll)
   - Ketik di address bar: `http://192.168.x.x/wedding`
   - Ganti `192.168.x.x` dengan IP Address komputer Anda
   - Contoh: `http://192.168.1.100/wedding`

4. **Jika berhasil**, halaman website akan muncul di handphone!

---

## 🔧 CARA ALTERNATIF

### **Opsi 2: Menggunakan Localhost dengan Port Forwarding**

1. **Setup di Laragon:**
   - Buka Laragon > Settings
   - Pastikan Apache berjalan
   - Catat port yang digunakan (default: 80)

2. **Konfigurasi Router (jika perlu akses dari luar WiFi):**
   - Buka dashboard router (192.168.1.1 atau 192.168.0.1)
   - Cari Port Forwarding settings
   - Forward port 80 ke IP komputer Anda
   - Kemudian akses dari handphone

3. **Di Handphone (dalam WiFi yang sama):**
   - `http://192.168.x.x/wedding`

---

### **Opsi 3: Menggunakan ngrok (Cloud Tunneling)**

Cara ini memungkinkan akses dari mana saja bahkan di luar WiFi!

#### Setup:
1. **Download ngrok** dari https://ngrok.com/download

2. **Extract dan buka Terminal di folder ngrok:**
   ```
   cd path/to/ngrok
   ```

3. **Jalankan perintah:**
   ```
   ngrok http 80
   ```

4. **Ngrok akan menampilkan URL publik:**
   ```
   Forwarding: http://xxxxx-xxx-xxx.ngrok.io -> localhost:80
   ```

5. **Di Handphone:**
   - Buka browser
   - Ketik: `http://xxxxx-xxx-xxx.ngrok.io/wedding`
   - Sekarang bisa diakses dari mana saja!

---

## 📍 MEMASTIKAN LARAGON BERJALAN

### **Checklist:**
- ✅ Laragon sudah dijalankan (icon di taskbar)
- ✅ Apache sudah aktif (hijau)
- ✅ MySQL aktif (jika dibutuhkan)
- ✅ Website berada di folder: `c:\laragon\www\wedding`

### **Jika belum berjalan:**
1. Buka Laragon
2. Klik tombol "Start All"
3. Tunggu hingga status services hijau

---

## 🌐 SHARING LINK KE UNDANGAN

### **Buat QR Code (Mudah untuk Dibagikan)**

1. **Gunakan QR Code Generator:**
   - https://www.qr-code-generator.com/
   - Atau https://qr.io/

2. **Generate QR Code dari URL:**
   - Input: `http://192.168.x.x/wedding` atau link ngrok
   - Download QR Code
   - Bagikan ke undangan via WhatsApp, Email, atau cetak

3. **Undangan tinggal scan QR Code dengan HP**
   - Otomatis buka website

---

## 📲 CHECKLIST SEBELUM SHARE KE UNDANGAN

- [ ] Website sudah berjalan di Laragon
- [ ] IP Address atau ngrok URL sudah disiapkan
- [ ] Coba akses dari HP pribadi dulu
- [ ] Pastikan semua fitur berfungsi (foto, RSVP, komentar)
- [ ] Test di browser berbeda (Chrome, Firefox, Safari)
- [ ] Cek tampilan mobile (gunakan ukuran HP)

---

## 🎨 TIPS UNTUK AKSESIBILITAS

### **1. Setting Static IP (Opsional tapi Recommended)**
Agar IP tidak berubah setiap kali restart:

**Windows:**
1. Settings > Network & Internet > Advanced network settings
2. Cari adapter WiFi
3. Edit > IP settings > Manual
4. Aktifkan IPv4 > Set static IP

**Mac:**
1. System Preferences > Network
2. Klik "Advanced"
3. Tab IPv4
4. Pilih "Manual"
5. Set IP static

---

### **2. Membuat Shortcut di HP**

**Android:**
1. Buka Chrome
2. Akses website
3. Klik menu (3 titik)
4. "Add to Home screen"
5. Beri nama "Undangan Pernikahan"
6. Selesai!

**iPhone:**
1. Buka Safari
2. Akses website
3. Klik share icon
4. "Add to Home Screen"
5. Konfirmasi

---

## 🚀 BEST PRACTICE

### **Untuk Acara Resmi:**

1. **Deploy ke Hosting Online** (Recommended untuk produksi)
   - Gunakan Netlify (gratis)
   - Atau Vercel
   - Atau Heroku
   - Website bisa diakses siapa saja, dimana saja

2. **Atau Gunakan ngrok** (untuk testing/temporary)
   - Setup cepat
   - Akses global
   - Cocok untuk trial

3. **Update Countdown:**
   - Edit tanggal di `script.js` baris ~12
   - Ubah sesuai tanggal pernikahan asli

---

## ⚠️ TROUBLESHOOTING

### **"ERR_CONNECTION_REFUSED"**
❌ Laragon tidak berjalan
✅ Solusi: Buka Laragon > klik "Start All"

### **"ERR_NAME_NOT_RESOLVED"**
❌ IP Address salah atau tidak dalam WiFi yang sama
✅ Solusi: Periksa IP dengan `ipconfig`, pastikan HP dan PC di WiFi sama

### **"Koneksi timeout"**
❌ Firewall memblokir
✅ Solusi: 
- Windows: Settings > Firewall > Allow Apache through
- Atau nonaktifkan firewall sementara untuk testing

### **"Tampilan berantakan di HP"**
❌ Browser cache lama
✅ Solusi: 
- Buka Dev Tools (F12) > Clear cache
- Atau gunakan Incognito mode

---

## 📊 PERBANDINGAN METODE AKSES

| Metode | Setup | Akses Global | Mudah | Rekomendasi |
|--------|-------|--------------|-------|------------|
| **IP Address** | ⭐ Mudah | ❌ Tidak | ⭐⭐⭐ | WiFi rumah |
| **ngrok** | ⭐⭐ Medium | ✅ Ya | ⭐⭐ | Testing |
| **Hosting Online** | ⭐⭐⭐ Kompleks | ✅ Ya | ⭐ | Produksi |

---

## 🎯 REKOMENDASI UNTUK ANDA

**Skenario 1: Hanya keluarga & teman dekat (WiFi sama)**
→ Gunakan **IP Address** (Paling mudah!)

**Skenario 2: Undangan dari berbagai tempat**
→ Gunakan **ngrok** (Akses cepat dari mana saja)

**Skenario 3: Acara besar & professional**
→ Deploy ke **Hosting Online** (Lebih stabil & permanent)

---

## 📱 TESTING DI BERBAGAI DEVICE

Setelah akses berhasil, test di:
- ✅ HP Android
- ✅ iPhone/iPad
- ✅ Tablet
- ✅ Desktop browser
- ✅ Landscape & Portrait mode

---

## 💡 PRO TIPS

1. **Simpan URL di Notes/Memo** untuk referensi
2. **Buat Backup URL** sebelum event
3. **Test semua fitur** sebelum share ke undangan
4. **Minta feedback** dari beberapa tester dulu
5. **Siapkan backup link** (misalnya ngrok + static IP)

---

Sekarang website Anda bisa diakses dari handphone! 🎉

Ada pertanyaan? Cek troubleshooting section di atas.
