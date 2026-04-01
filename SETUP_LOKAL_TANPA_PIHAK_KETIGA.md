# 🚀 SETUP WEBSITE TANPA PIHAK KETIGA (Pure Local Network)

## 📌 KONSEP

Website hanya menggunakan:
- ✅ **Laragon** (server lokal)
- ✅ **IP Address lokal** (192.168.x.x)
- ✅ **WiFi rumah/kantor** (network yang sama)
- ❌ **TIDAK perlu** ngrok, hosting online, atau pihak ketiga lainnya

---

## 🎯 LANGKAH SETUP (SANGAT MUDAH)

### **1️⃣ Pastikan Laragon Berjalan**
```
✓ Buka Laragon
✓ Klik "Start All"
✓ Apache harus hijau (running)
```

### **2️⃣ Cari IP Address Komputer**
```
Buka Command Prompt:
- Tekan Win + R
- Ketik: cmd
- Tekan Enter

Ketik command:
ipconfig

Catat "IPv4 Address" (contoh: 192.168.1.100)
```

### **3️⃣ Akses QR Code Page via IP Address**
```
Di browser ketik:
http://192.168.1.100/wedding/qrcode.html

(Ganti 192.168.1.100 dengan IP Anda)
```

### **4️⃣ QR Code Otomatis Terbuat**
```
✓ QR Code akan muncul otomatis
✓ QR Code berisi: http://192.168.1.100/wedding
✓ Download atau bagikan langsung!
```

---

## 📱 CARA UNDANGAN SCAN QR CODE

### **Persyaratan:**
- ✅ Undangan terhubung **WiFi YANG SAMA** dengan komputer
- ✅ Laragon tetap running di komputer
- ✅ QR Code berisi IP Address lokal

### **Langkah Scan:**
```
1. Undangan arahkan kamera HP ke QR Code
2. Klik notifikasi yang muncul
3. Otomatis buka website di browser
4. Website terbuka! Bisa lihat foto, RSVP, komentar, dll
```

---

## 🔧 MEMBUAT QR CODE YANG BENAR

### **PENTING: Akses via IP Address, BUKAN localhost!**

❌ **SALAH** (tidak akan bekerja di HP lain):
```
http://localhost/wedding/qrcode.html
```

✅ **BENAR** (bisa scan dari HP manapun dalam WiFi sama):
```
http://192.168.1.100/wedding/qrcode.html
```

### **Cara Generate QR yang Benar:**

1. Buka `get-ip.bat` untuk dapat IP
2. Di browser, ketik: `http://[IP-ANDA]/wedding/qrcode.html`
3. QR Code otomatis menyesuaikan dengan IP Anda
4. Download QR Code

---

## 📥 SHARE QR CODE KE UNDANGAN

### **Opsi 1: Via WhatsApp**
```
1. Buka qrcode.html
2. Klik "Share WhatsApp"
3. Pesan + link otomatis ter-copy
4. Bagikan ke group/chat undangan
5. Tambahkan instruksi:
   "Scan QR Code ini dari HP Anda (harus WiFi rumah kami)"
```

### **Opsi 2: Cetak & Tempel**
```
1. Download QR Code dari qrcode.html
2. Print gambar QR
3. Tempel di undangan fisik
4. Tulis: "Scan QR Code untuk buka undangan digital"
```

### **Opsi 3: Email**
```
1. Download QR Code (PNG)
2. Attach ke email
3. Kirim ke undangan
4. Instruksi: "Scan QR untuk buka undangan digital"
```

---

## ✅ FLOW LENGKAP TANPA PIHAK KETIGA

```
STEP 1: Setup Laragon
├─ Buka Laragon
├─ Klik Start All
└─ Apache hijau

STEP 2: Cari IP
├─ Buka CMD
├─ Ketik ipconfig
└─ Catat IPv4 (contoh: 192.168.1.100)

STEP 3: Buka QR Page
├─ Browser: http://192.168.1.100/wedding/qrcode.html
├─ QR Code otomatis terbuat
└─ Download atau screenshot

STEP 4: Share ke Undangan
├─ Via WhatsApp
├─ Via Email
├─ Via Print
└─ Instruksi: "Scan QR + pastikan WiFi sama"

STEP 5: Undangan Scan
├─ Undangan scan QR Code
├─ Buka di browser (harus WiFi rumah)
└─ Website terbuka! ✨
```

---

## 🔐 KEAMANAN & PRIVACY

✅ **100% Private** - Hanya dalam network lokal  
✅ **Tidak ada data online** - Semua di komputer Anda  
✅ **Tidak tracking** - Tidak ada analytics pihak ketiga  
✅ **Aman untuk undangan** - Data RSVP & komentar lokal saja  

---

## 🆘 TROUBLESHOOTING

### **"QR Code tidak bisa di-scan"**
❌ Kemungkinan akses via localhost
✅ Solusi: Akses via IP Address (bukan localhost)

### **"Undangan tidak bisa buka website"**
❌ Kemungkinan WiFi berbeda
✅ Solusi: Pastikan undangan terhubung WiFi yang sama

### **"Website tidak bisa dibuka dari HP"**
❌ Kemungkinan Laragon tidak running
✅ Solusi: Buka Laragon & klik "Start All"

### **"IP Address berubah setiap restart"**
❌ IP dinamis
✅ Solusi: Atur static IP (lihat di bawah)

---

## 📍 ATUR STATIC IP (Optional tapi Recommended)

Agar IP tidak berubah setiap kali restart:

### **Windows:**
```
1. Settings > Network & Internet
2. Advanced network settings
3. Cari adapter WiFi Anda
4. Klik "Edit"
5. IP settings > Manual > On
6. Masukkan IP yang ingin Anda gunakan
7. Simpan
```

### **Mac:**
```
1. System Preferences > Network
2. Advanced > IPv4
3. Pilih "Using DHCP with manual address"
4. Masukkan IP yang ingin Anda gunakan
5. OK
```

---

## 📊 PERBANDINGAN: DENGAN vs TANPA PIHAK KETIGA

| Aspek | Tanpa Pihak Ketiga | Dengan Pihak Ketiga |
|-------|-------------------|-------------------|
| **Setup** | ⭐ Mudah | ⭐⭐ Agak sulit |
| **Akses** | WiFi sama | Dari mana saja |
| **Privacy** | ✅ 100% Private | ❌ Data di cloud |
| **Kecepatan** | ⭐⭐⭐ Cepat | ⭐⭐ Tergantung internet |
| **Biaya** | ✅ Gratis | ❌ Mungkin berbayar |
| **Kontrol** | ✅ Penuh kontrol | ❌ Terbatas |

---

## 💡 BEST PRACTICES

1. **Atur Static IP** - Agar IP tidak berubah
2. **Tes sebelum share** - Scan QR dari HP lain dulu
3. **Beri instruksi jelas** - "Harus WiFi yang sama"
4. **Backup IP** - Catat IP di notes
5. **Laragon always running** - Jangan matikan selama acara

---

## 🎉 SELESAI!

Sekarang website Anda:
- ✅ Tanpa pihak ketiga
- ✅ Pure local network
- ✅ Bisa di-scan via QR Code
- ✅ 100% private & aman
- ✅ Siap untuk undangan scan!

**Untuk QR Code: Akses `http://[IP-ANDA]/wedding/qrcode.html`**

Ganti `[IP-ANDA]` dengan IP Address komputer Anda (contoh: 192.168.1.100)
