🚀 QUICK START GUIDE - SEMUA FITUR
═══════════════════════════════════════════════════════════

📊 STRUKTUR HALAMAN

http://192.168.1.100/wedding/
├── hub.html                    ← MULAI DARI SINI (Dashboard)
├── index.html                  ← Halaman undangan utama
├── url-generator.html          ← Buat URL personal
├── qrcode-generator.html       ← Buat QR Code
├── admin.html                  ← Lihat data RSVP
└── script.js                   ← Backend logic

═══════════════════════════════════════════════════════════

⚡ 5 MENIT QUICK START

STEP 1: Buka Dashboard
───────────────────────
http://192.168.1.100/wedding/hub.html

Akan tampil 4 card:
✓ Halaman Undangan (untuk tamu)
✓ Generate URL (untuk host)
✓ QR Code Generator (untuk tools)
✓ Admin Dashboard (untuk monitoring)


STEP 2: Test Halaman Undangan (Tanpa Parameter)
────────────────────────────────────────────────
Klik card "Halaman Undangan"
→ Buka: http://192.168.1.100/wedding/

Apa yang terjadi:
- Halaman undangan tampil normal
- Tidak ada nama tamu (tidak ada parameter ?to=)


STEP 3: Generate URL Personal
──────────────────────────────
Klik card "Generate URL"
→ Buka: http://192.168.1.100/wedding/url-generator.html

1. Masukkan nama: "Ipal & Partner"
2. Klik "GENERATE URL"
3. URL akan tampil:
   http://192.168.1.100/wedding/?to=Ipal%20%26%20Partner

4. Klik tombol "Copy" → URL ter-copy ke clipboard


STEP 4: Test URL yang Dihasilkan
─────────────────────────────────
1. Buka tab baru
2. Paste URL tadi
3. Halaman undangan tampil
4. Di header akan tertulis: "Ipal & Partner" ✨

Bedanya dengan STEP 2:
- STEP 2: Tidak ada nama (tampil umum)
- STEP 4: Ada nama "Ipal & Partner" (personal)


STEP 5: Generate QR Code
────────────────────────
Klik card "QR Code Generator"
→ Buka: http://192.168.1.100/wedding/qrcode-generator.html

MODE 1 - Single QR Code:
1. Masukkan nama: "Ipal & Partner"
2. Klik "Generate QR Code"
3. QR Code akan tampil
4. Klik "Download QR Code"
5. File .png ter-download

MODE 2 - Bulk QR Code:
1. Klik tab "Bulk QR Code"
2. Masukkan 3+ nama (satu per baris):
   Ipal & Partner
   Budi Santoso
   Keluarga Ahmad
3. Klik "Generate Semua"
4. 3 QR Code akan tampil
5. Klik "Download ZIP" → Download CSV dengan URL semua


STEP 6: Share ke Tamu via WhatsApp
───────────────────────────────────
Dari halaman url-generator.html:
1. Masukkan nama tamu
2. Klik "Generate URL"
3. Klik tombol "SHARE WHATSAPP"
4. WhatsApp terbuka dengan template siap kirim
5. Edit pesan jika perlu
6. Pilih kontak tamu
7. Kirim! 🎉


STEP 7: Share via Email
───────────────────────
Dari halaman url-generator.html:
1. Masukkan nama tamu
2. Klik "Generate URL"
3. Klik tombol "SHARE EMAIL"
4. Aplikasi email terbuka
5. Tambahkan recipient
6. Kirim! 📧


STEP 8: Monitor RSVP di Admin Dashboard
─────────────────────────────────────────
Klik card "Admin Dashboard"
→ Buka: http://192.168.1.100/wedding/admin.html

Password: admin123

Akan tampil:
- Statistik (Total RSVP, Total Hadir, Total Tamu, Ucapan)
- Tab "Data RSVP" (Lihat semua RSVP)
- Tab "Ucapan & Doa" (Lihat semua ucapan)
- Tab "Export" (Download data)

═══════════════════════════════════════════════════════════

🎯 WORKFLOW LENGKAP

Skenario: Share undangan ke 5 tamu

OPSI 1 - Via WhatsApp (Recommended)
──────────────────────────────────
1. Buka: hub.html
2. Klik "Generate URL"
3. Masukkan nama tamu 1
4. Klik "Generate URL"
5. Klik "SHARE WHATSAPP"
6. Kirim ke WhatsApp
7. Ulangi untuk tamu 2-5

OPSI 2 - Via QR Code (Untuk Cetak)
──────────────────────────────────
1. Buka: hub.html
2. Klik "QR Code Generator"
3. Klik tab "Bulk QR Code"
4. Masukkan 5 nama tamu
5. Klik "Generate Semua"
6. Lihat preview QR Code
7. Klik "Download ZIP"
8. Download CSV dengan semua URL
9. Print QR Code di kartu atau undangan cetak

OPSI 3 - Via Direct URL (Simple)
────────────────────────────────
1. Buka: hub.html
2. Klik "Generate URL"
3. Masukkan nama tamu
4. Copy URL
5. Share manual ke WhatsApp/SMS/Email

═══════════════════════════════════════════════════════════

📱 TESTING DARI HP

1. Pastikan HP terhubung WiFi yang sama
2. Di HP, buka: http://192.168.1.100/wedding/hub.html
3. Klik "Halaman Undangan"
4. Coba isi form RSVP dari HP
5. Klik "Kirim Konfirmasi"
6. Lihat data muncul di admin dashboard (dari komputer)

═══════════════════════════════════════════════════════════

🔍 TROUBLESHOOTING

Problem: Nama tidak tampil di halaman undangan
Solusi:
✓ Pastikan URL format: ?to=NamaTamu
✓ Gunakan URL Generator (jangan manual)
✓ Refresh halaman (Ctrl+F5)

Problem: WhatsApp tidak terbuka
Solusi:
✓ Gunakan mobile browser (lebih reliable)
✓ WhatsApp Desktop sudah login
✓ Gunakan Share URL biasa dulu

Problem: QR Code tidak bisa di-scan
Solusi:
✓ Download QR Code sebagai file
✓ Print dengan ukuran lebih besar
✓ Test dengan aplikasi QR Scanner

Problem: Admin password tidak bekerja
Solusi:
✓ Refresh halaman (Ctrl+F5)
✓ Password: admin123 (case-sensitive)
✓ Buka di tab baru

═══════════════════════════════════════════════════════════

✅ CHECKLIST - FITUR TESTING

[ ] Hub page bisa dibuka
[ ] Halaman undangan bisa dibuka (tanpa nama)
[ ] URL Generator berfungsi
[ ] URL menampilkan nama tamu
[ ] QR Code single bisa di-generate
[ ] QR Code single bisa di-download
[ ] QR Code bulk bisa di-generate
[ ] CSV bisa di-download
[ ] WhatsApp share berfungsi
[ ] Email share berfungsi
[ ] Admin bisa login
[ ] Data RSVP bisa dilihat
[ ] Data Ucapan bisa dilihat
[ ] Export berfungsi

═══════════════════════════════════════════════════════════

🎓 TIPS & TRICKS

1. URL Personalisation
   - Nama bisa pakai karakter spesial: &, !, @, dll
   - Automatic di-encode dalam URL
   - Contoh: "Ipal & Partner" → "Ipal%20%26%20Partner"

2. QR Code
   - Scan dari smartphone untuk test
   - Download dan print untuk undangan cetak
   - CSV bisa di-import ke Excel untuk label

3. Admin Dashboard
   - Bisa lihat kapan tamu submit RSVP
   - Statistik real-time update
   - Backup data berkala dengan Export

4. Sharing
   - WhatsApp paling cepat
   - Email untuk formal
   - QR Code untuk cetak

═══════════════════════════════════════════════════════════

🚀 NEXT STEPS SETELAH OK

1. [ ] Customize data (nama, tanggal, lokasi)
2. [ ] Ganti password admin
3. [ ] Share QR Code ke undangan
4. [ ] Monitor RSVP berkala
5. [ ] Export data untuk printing/reminder
6. [ ] Setup backup otomatis (weekly)

═══════════════════════════════════════════════════════════

📞 SUPPORT

Ada masalah? Kasih tahu:
1. Halaman mana yang error?
2. Error apa yang muncul?
3. Screenshot jika perlu
4. Browser apa yang dipakai?

Saya siap bantu! 💪

═══════════════════════════════════════════════════════════

🎉 READY?

Ketikkan: "OK SIAP TEST SEMUA FITUR"

Mari kita mulai! 🚀
