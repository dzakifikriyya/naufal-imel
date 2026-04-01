// ============ COUNTDOWN TIMER ============
function updateCountdown() {
    const weddingDate = new Date('2024-06-15T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px;"><h3 style="font-size: 1.5rem; color: var(--primary-color); margin-bottom: 10px;">🎊 Acara Telah Berlangsung 🎊</h3><p style="color: #999;">Terima kasih telah merayakan bersama kami!</p></div>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// Update countdown setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();

// ============ SMOOTH SCROLL ============
function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToSection(sectionId) {
    smoothScroll(sectionId);
}

// ============ GALLERY FILTER ============
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button active state
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.filter-btn').classList.add('active');
    
    // Filter items dengan animasi
    items.forEach((item, index) => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'semua' || itemCategory === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, index * 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Set initial style untuk gallery items
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
    });
});

// ============ GALLERY/LIGHTBOX ============
let currentPhotoIndex = 0;
const galleryPhotos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg'
];

function openLightbox(index) {
    currentPhotoIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = galleryPhotos[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function nextPhoto(event) {
    event.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex + 1) % galleryPhotos.length;
    document.getElementById('lightbox-img').src = galleryPhotos[currentPhotoIndex];
}

function prevPhoto(event) {
    event.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    document.getElementById('lightbox-img').src = galleryPhotos[currentPhotoIndex];
}

// Keyboard navigation untuk lightbox
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (event.key === 'ArrowRight') {
            nextPhoto(event);
        } else if (event.key === 'ArrowLeft') {
            prevPhoto(event);
        } else if (event.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ============ RSVP FORM ============
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value.trim();

    // Validasi
    if (!name || !email || !attendance || !guests) {
        showRsvpMessage('❌ Mohon isi semua field yang diperlukan!', 'error');
        return;
    }

    // Validasi panjang nama
    if (name.length < 3) {
        showRsvpMessage('❌ Nama minimal harus 3 karakter!', 'error');
        return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showRsvpMessage('❌ Format email tidak valid!', 'error');
        return;
    }

    // Validasi jumlah tamu
    if (guests < 1 || guests > 5) {
        showRsvpMessage('❌ Jumlah tamu harus antara 1-5 orang!', 'error');
        return;
    }

    // Simpan ke localStorage
    const rsvpData = {
        name,
        email,
        attendance,
        guests,
        message,
        timestamp: new Date().toLocaleString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    let rsvpList = JSON.parse(localStorage.getItem('rsvpList')) || [];
    rsvpList.push(rsvpData);
    localStorage.setItem('rsvpList', JSON.stringify(rsvpList));

    showRsvpMessage('✅ Terima kasih! Konfirmasi kehadiran Anda telah kami terima.', 'success');
    
    // Reset form dengan animasi
    const form = document.getElementById('rsvp-form');
    form.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        form.reset();
        form.style.animation = 'none';
    }, 300);

    // Scroll to message
    setTimeout(() => {
        document.getElementById('rsvp-message').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
});

function showRsvpMessage(text, type) {
    const messageDiv = document.getElementById('rsvp-message');
    messageDiv.textContent = text;
    messageDiv.className = 'rsvp-message ' + type;
    
    setTimeout(() => {
        messageDiv.className = 'rsvp-message';
    }, 5000);
}

// ============ COMMENTS/UCAPAN ============
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsContainer = document.getElementById('comments-container');
    
    if (comments.length === 0) {
        commentsContainer.innerHTML = '<p class="no-comments">😊 Belum ada ucapan. Jadilah yang pertama!</p>';
        return;
    }

    commentsContainer.innerHTML = '';
    comments.reverse().forEach((comment, index) => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });
}

function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment-item';
    div.style.animation = `slideIn 0.3s ease`;
    div.style.animationDelay = '0.1s';
    
    const header = document.createElement('div');
    header.className = 'comment-header';
    header.innerHTML = `
        <span class="comment-name">👤 ${escapeHtml(comment.name)}</span>
        <span class="comment-date">📅 ${comment.date}</span>
    `;
    
    const text = document.createElement('div');
    text.className = 'comment-text';
    text.innerHTML = `💬 ${escapeHtml(comment.text)}`;
    
    div.appendChild(header);
    div.appendChild(text);
    
    return div;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();

    // Validasi
    if (!name || !text) {
        showCommentMessage('❌ Mohon isi semua field!', 'error');
        return;
    }

    if (name.length < 2) {
        showCommentMessage('❌ Nama minimal 2 karakter!', 'error');
        return;
    }

    if (name.length > 100) {
        showCommentMessage('❌ Nama terlalu panjang (maksimal 100 karakter)!', 'error');
        return;
    }

    if (text.length < 5) {
        showCommentMessage('❌ Ucapan minimal 5 karakter!', 'error');
        return;
    }

    if (text.length > 1000) {
        showCommentMessage('❌ Ucapan terlalu panjang (maksimal 1000 karakter)!', 'error');
        return;
    }

    // Cek spam - jangan submit lebih dari 1 komentar dalam 5 detik
    const lastCommentTime = parseInt(localStorage.getItem('lastCommentTime')) || 0;
    const now = Date.now();
    if (now - lastCommentTime < 3000) {
        showCommentMessage('⏱️ Tunggu beberapa saat sebelum mengirim komentar lagi', 'error');
        return;
    }

    // Simpan komentar
    const comment = {
        name,
        text,
        date: new Date().toLocaleString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    localStorage.setItem('lastCommentTime', now.toString());

    showCommentMessage('✅ Ucapan Anda telah dikirim! Terima kasih.', 'success');
    
    // Reset form dengan animasi
    const form = document.getElementById('comment-form');
    form.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        form.reset();
        form.style.animation = 'none';
    }, 300);

    // Load comments
    loadComments();

    // Scroll ke comments
    setTimeout(() => {
        document.getElementById('comments-container').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
});

function showCommentMessage(text, type) {
    const messageDiv = document.getElementById('comment-message');
    messageDiv.textContent = text;
    messageDiv.className = 'comment-message ' + type;
    
    setTimeout(() => {
        messageDiv.className = 'comment-message';
    }, 4000);
}

// ============ MAP FUNCTION ============
function openMap() {
    // Ganti dengan koordinat lokasi sebenarnya
    const latitude = -6.1751;
    const longitude = 106.8650;
    const mapsUrl = `https://www.google.com/maps/search/${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    // Load comments saat halaman dimuat
    loadComments();
    
    // Initialize gallery items
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
    });
    
    // Add animation to elements on scroll
    observeElements();
});

// ============ ADDITIONAL FEATURES ============
// Animate elements on scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.gallery-item, .event-item, .comment-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

// Jalankan saat halaman selesai dimuat
window.addEventListener('load', observeElements);

// ============ SHARE FUNCTIONALITY ============
// Share functionality (opsional)
function shareToWhatsApp() {
    const text = '✨ Aku diundang ke pernikahan Budi & Siti! 💕 Kamu juga diundang! 🎊';
    const url = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}

function shareToFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}

// ============ KEYBOARD SHORTCUTS ============
// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Alt + S untuk share ke WhatsApp
    if (event.altKey && event.key === 's') {
        shareToWhatsApp();
    }
    
    // Alt + G untuk scroll ke galeri
    if (event.altKey && event.key === 'g') {
        smoothScroll('gallery');
    }
    
    // Alt + R untuk scroll ke RSVP
    if (event.altKey && event.key === 'r') {
        smoothScroll('rsvp');
    }
    
    // Alt + C untuk scroll ke komentar
    if (event.altKey && event.key === 'c') {
        smoothScroll('comments');
    }
});

// ============ UTILITY FUNCTIONS ============
// Format number dengan leading zero
function padZero(num) {
    return String(num).padStart(2, '0');
}

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get stored data count
function getDataStats() {
    const rsvpList = JSON.parse(localStorage.getItem('rsvpList')) || [];
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    return {
        rsvp: rsvpList.length,
        comments: comments.length,
        attending: rsvpList.filter(r => r.attendance === 'hadir').length,
        notAttending: rsvpList.filter(r => r.attendance === 'tidak').length
    };
}
