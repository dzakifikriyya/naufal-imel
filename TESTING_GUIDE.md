# 📋 PANDUAN LENGKAP - Dari Form RSVP sampai Data Masuk ke Admin

## 🎯 STEP-BY-STEP GUIDE

### **STEP 1: Buka Website Undangan**

1. Di komputer/HP, buka browser
2. Ketik URL:
   ```
   http://192.168.1.100/wedding
   ```
   *(Ganti IP sesuai milik Anda)*

3. Website undangan akan tampil

---

### **STEP 2: Scroll ke Bagian RSVP**

1. Scroll down sampai ketemu form RSVP
2. Form akan terlihat dengan field:
   - 👤 Nama Lengkap
   - 📧 Email
   - ✓ Konfirmasi Kehadiran (Hadir/Tidak/Mungkin)
   - 👥 Jumlah Tamu
   - 💬 Pesan untuk Pengantin (opsional)

---

### **STEP 3: Isi Form RSVP**

**Contoh:**
- Nama: `Budi Santoso`
- Email: `budi@email.com`
- Status: `Hadir` ✓
- Jumlah Tamu: `3` orang
- Pesan: `Selamat dan sukses untuk pernikahan kalian!`

---

### **STEP 4: Klik "KIRIM KONFIRMASI"**

1. Klik tombol hijau **"KIRIM KONFIRMASI"**
2. Tunggu popup success:
   ```
   ✓ Terima kasih! Konfirmasi Anda sudah kami terima!
   ```

3. **Data sudah tersimpan di localStorage!** 📊

---

### **STEP 5: Scroll ke Bagian Ucapan**

1. Scroll down sampai ketemu form Ucapan
2. Isi:
   - Nama: `Budi Santoso`
   - Ucapan: `Semoga lancar dan bahagia selamanya! 💕`

3. Klik **"KIRIM UCAPAN"**
4. Popup sukses akan muncul

---

### **STEP 6: Buka Admin Dashboard**

Sekarang kita lihat data yang sudah masuk!

1. **Di browser yang sama**, buka URL baru:
   ```
   http://192.168.1.100/wedding/admin.html
   ```

2. **Masukkan Password:**
   ```
   admin123
   ```

3. Klik tombol "Masuk"

---

### **STEP 7: Lihat Data RSVP di Dashboard**

Setelah login, Anda akan melihat:

**Tab "Data RSVP":**
```
┌─────────────────────────────────────────────────────────────┐
│ No │ Nama           │ Status │ Tamu │ Pesan             │
├─────────────────────────────────────────────────────────────┤
│ 1  │ Budi Santoso   │ Hadir  │ 3    │ Selamat dan sukses│
└─────────────────────────────────────────────────────────────┘
```

**Statistik:**
- Total RSVP: 1
- Total Hadir: 1
- Total Tamu: 3
- Total Ucapan: 1

---

### **STEP 8: Lihat Ucapan di Dashboard**

1. Klik tab **"Ucapan & Doa"**
2. Lihat ucapan yang sudah masuk:
   ```
   👤 Budi Santoso
   "Semoga lancar dan bahagia selamanya! 💕"
   ```

---

### **STEP 9: Export Data**

1. Klik tab **"Export"**
2. Pilih format:
   - **CSV** - Buka di Excel
   - **JSON** - Untuk backup
   - **Excel** - Format .xls siap pakai

3. File akan otomatis download

---

## ✅ CHECKLIST - Pastikan Semuanya Sudah Bekerja

- [ ] ✓ Website undangan bisa dibuka
- [ ] ✓ Form RSVP bisa diisi
- [ ] ✓ Setelah submit, muncul pesan sukses
- [ ] ✓ Admin dashboard bisa dibuka
- [ ] ✓ Password admin berfungsi
- [ ] ✓ Data RSVP tampil di admin
- [ ] ✓ Data ucapan tampil di admin
- [ ] ✓ Export data berfungsi

---

## 🔍 DEBUGGING - Jika Ada Masalah

### **Masalah: Data tidak muncul di admin**

1. **Buka Developer Tools** (F12)
2. Klik tab **"Console"**
3. Cari pesan:
   ```
   📊 RSVP Data Saved: [...]
   💬 Comment Saved: [...]
   ```

4. Jika ada error, tampilkan ke Copilot

### **Masalah: Form tidak bisa submit**

1. Pastikan semua field * diisi
2. Email harus valid (ada @)
3. Jumlah tamu minimal 1

### **Masalah: Admin password tidak bekerja**

1. Refresh halaman (Ctrl+F5)
2. Pastikan password benar: `admin123`
3. Cek capslock

---

## 📱 TEST DARI HP

1. **Dari HP yang sama WiFi:**
   - Buka: `http://192.168.1.100/wedding`
   - Isi form RSVP
   - Lihat di admin: `http://192.168.1.100/wedding/admin.html`

2. **Data akan sinkron** di semua device yang buka dari IP yang sama

---

## 🎓 TIPS PENTING

1. **Hapus Cache** jika data tidak update:
   - Tekan: `Ctrl + Shift + Delete`
   - Pilih "All time"
   - Hapus

2. **Backup Data Berkala:**
   - Export data setiap minggu
   - Simpan file CSV/JSON

3. **Share Admin Link** ke pacar/keluarga:
   ```
   http://192.168.1.100/wedding/admin.html
   Password: admin123
   ```

---

## 🚀 SEKARANG SIAP TEST!

**Mari kita mulai:**

1. ✓ Buka halaman undangan
2. ✓ Isi form RSVP test
3. ✓ Isi form ucapan test
4. ✓ Buka admin dashboard
5. ✓ Lihat data masuk

**Jika semua berhasil, selamat! 🎉**

---

## ❓ ADA PERTANYAAN?

Kasih tahu saya:
1. Ada error apa?
2. Data masuk atau tidak?
3. Admin bisa login atau tidak?

Saya siap bantu! 💪
