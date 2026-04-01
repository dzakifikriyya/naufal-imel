# 🎊 Undangan Pernikahan Digital

Website undangan pernikahan digital yang elegan dan responsif dengan fitur lengkap untuk menyambut tamu undangan.

## ✨ Fitur Utama

### 1. **Galeri Foto Pengantin**
- Grid galeri yang responsif dengan 6 foto
- Lightbox viewer untuk melihat foto dalam ukuran penuh
- Navigasi dengan tombol panah atau keyboard (← →)
- Hover effects yang menarik
- Dukungan untuk keyboard navigation (Esc untuk tutup)

### 2. **Sistem Komentar & Ucapan**
- Pengunjung dapat meninggalkan ucapan dan doa
- Validasi input (nama dan ucapan)
- Anti-spam dengan delay 5 detik antar komentar
- Batas karakter: nama (100), ucapan (1000)
- Komentar disimpan di localStorage
- Tampilan real-time dengan sorting terbaru di atas
- Timestamp otomatis untuk setiap komentar

### 3. **RSVP (Konfirmasi Kehadiran)**
- Form konfirmasi dengan validasi lengkap
- Input: Nama, Email, Status Kehadiran, Jumlah Tamu, Pesan
- Validasi email otomatis
- Data tersimpan di localStorage
- Notifikasi sukses/error

### 4. **Countdown Timer**
- Perhitungan mundur otomatis hingga hari H
- Update real-time setiap detik
- Menampilkan: Hari, Jam, Menit, Detik

### 5. **Navigasi Smooth**
- Menu navigasi sticky di atas halaman
- Smooth scroll ke setiap section
- Link aktif dengan styling

### 6. **Responsive Design**
- Fully responsive untuk semua ukuran layar
- Optimasi untuk mobile, tablet, dan desktop
- Menu adaptif

### 7. **Peta Lokasi**
- Tombol untuk membuka Google Maps
- Integrasi dengan lokasi event

## 📁 Struktur File

```
wedding/
├── index.html          # File HTML utama
├── styles.css          # File CSS styling
├── script.js           # File JavaScript untuk fungsionalitas
├── images/             # Folder untuk foto galeri
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Setup Folder Images
Buat folder `images` di direktori root dan masukkan 6 foto dengan nama:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- `photo5.jpg`
- `photo6.jpg`

### 2. Kustomisasi Data Pengantin
Edit di **index.html**:
- Ganti nama pengantin (Budi & Siti)
- Ganti tanggal pernikahan
- Ganti waktu acara
- Ganti lokasi

### 3. Update Countdown
Edit di **script.js** (baris ~12):
```javascript
const weddingDate = new Date('2024-06-15T10:00:00').getTime();
```
Ubah tanggal sesuai jadwal pernikahan.

### 4. Update Lokasi Map
Edit di **script.js** di function `openMap()`:
```javascript
const latitude = -6.1751;   // Ganti dengan latitude lokasi
const longitude = 106.8650; // Ganti dengan longitude lokasi
```

## 🎨 Customization

### Warna
Edit di **styles.css** bagian `:root`:
```css
:root {
    --primary-color: #d4af37;      /* Warna emas */
    --secondary-color: #8b7355;    /* Warna cokelat */
    --dark-color: #2c1810;         /* Warna gelap */
    --light-color: #f5f5f5;        /* Warna terang */
    --accent-color: #e91e63;       /* Warna aksen */
}
```

### Font
Font saat ini menggunakan 'Segoe UI'. Ubah di `body` di styles.css untuk menggunakan font lain.

## 💾 Penyimpanan Data

Website ini menggunakan **localStorage** untuk menyimpan:
- **RSVP Data**: Konfirmasi kehadiran pengunjung
- **Comments**: Ucapan dan doa dari tamu

Data tersimpan di browser lokal pengunjung. Untuk implementasi production:
- Gunakan database (MySQL, MongoDB, dll)
- Setup backend server untuk handle form submission
- Implementasi authentication dan security

## 📱 Browser Support

- Chrome (modern)
- Firefox (modern)
- Safari (modern)
- Edge (modern)
- Mobile browsers

## 🔧 Advanced Features

### Menambah Photo Gallery
Tambahkan ke array `galleryPhotos` di script.js:
```javascript
const galleryPhotos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    // ... tambahkan di sini
    'images/photo7.jpg'
];
```

Dan tambahkan div di gallery-grid di index.html.

### Export RSVP Data
Tambahkan function di script.js untuk export data:
```javascript
function exportRSVPData() {
    const rsvpList = JSON.parse(localStorage.getItem('rsvpList')) || [];
    console.table(rsvpList);
    // Atau gunakan library seperti papaparse untuk CSV export
}
```

### Share ke Social Media
Function sudah tersedia:
- `shareToWhatsApp()` - Share ke WhatsApp
- `shareToFacebook()` - Share ke Facebook

Tambahkan tombol di HTML:
```html
<button onclick="shareToWhatsApp()">Share WhatsApp</button>
<button onclick="shareToFacebook()">Share Facebook</button>
```

## 🎯 Tips

1. **Foto Berkualitas**: Gunakan foto berkualitas tinggi (1200x1600px recommended)
2. **Optimasi Gambar**: Compress foto untuk loading lebih cepat
3. **Mobile First**: Test di mobile sebelum deployment
4. **SEO**: Update meta tags untuk SEO yang lebih baik
5. **SSL Certificate**: Gunakan HTTPS di production

## 📋 Checklist Pre-Launch

- [ ] Update nama pengantin
- [ ] Update tanggal dan waktu
- [ ] Update lokasi
- [ ] Update countdown date
- [ ] Upload 6 foto galeri
- [ ] Test form RSVP
- [ ] Test komentar
- [ ] Test di mobile
- [ ] Test lightbox gallery
- [ ] Periksa responsive design

## 💡 Saran Pengembangan

1. Tambah section timeline acara
2. Tambah guest book dengan tanda tangan digital
3. Tambah live streaming embed
4. Tambah FAQ section
5. Tambah musik latar
6. Integrasi dengan Google Calendar
7. Sistem notifikasi email untuk admin
8. QR code untuk check-in

## 📝 Lisensi

Website ini bebas digunakan untuk keperluan pribadi. Modifikasi sesuai kebutuhan Anda.

## 👨‍💻 Support

Untuk pertanyaan atau masalah teknis, hubungi developer atau konsultasikan ke forum web development.

---

**Selamat menikah! 💑**
