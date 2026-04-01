// ===== GET GUEST NAME FROM URL =====
function getGuestNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get('to');
    return guestName ? decodeURIComponent(guestName) : null;
}

// Display guest name in header
function displayGuestName() {
    const guestName = getGuestNameFromURL();
    const guestNameEl = document.getElementById('guestName');
    
    if (guestName) {
        guestNameEl.textContent = guestName;
        guestNameEl.style.display = 'block';
    } else {
        guestNameEl.style.display = 'none';
    }
}

// Smooth scroll function
function smoothScroll(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    smoothScroll(sectionId);
}

// Open map
function openMap() {
    // Ganti koordinat sesuai lokasi Anda
    const lat = -6.2088;
    const lng = 106.8456;
    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(mapUrl, '_blank');
}

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    // GANTI TANGGAL INI SESUAI ACARA ANDA
    const weddingDate = new Date('2026-06-15T10:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const diff = weddingDate - now;
        
        if (diff <= 0) {
            clearInterval(timer);
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ===== RSVP FORM HANDLING =====
document.addEventListener('DOMContentLoaded', () => {
    displayGuestName();
    updateCountdown();
    loadComments();
    
    // Handle RSVP Form Submit
    const rsvpForm = document.getElementById('rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitRSVP();
        });
    }
    
    // Handle Comment Form Submit
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitComment();
        });
    }
});

// Submit RSVP
function submitRSVP() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value.trim();
    
    // Validasi
    if (!name || !email || !attendance || !guests) {
        showRSVPMessage('❌ Semua field yang bertanda * harus diisi!', 'error');
        return;
    }
    
    // Buat object RSVP
    const rsvpEntry = {
        name: name,
        email: email,
        attendance: attendance,
        guests: guests,
        message: message,
        timestamp: new Date().toISOString()
    };
    
    // Get existing RSVP data
    let rsvpData = JSON.parse(localStorage.getItem('rsvpData') || '[]');
    
    // Check if email already exists
    const existingIndex = rsvpData.findIndex(r => r.email.toLowerCase() === email.toLowerCase());
    
    if (existingIndex !== -1) {
        // Update existing
        rsvpData[existingIndex] = rsvpEntry;
        showRSVPMessage('✓ Data RSVP Anda telah diperbarui!', 'success');
    } else {
        // Add new
        rsvpData.push(rsvpEntry);
        showRSVPMessage('✓ Terima kasih! Konfirmasi Anda sudah kami terima!', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('rsvpData', JSON.stringify(rsvpData));
    
    // Reset form
    document.getElementById('rsvp-form').reset();
    
    // Log for debugging
    console.log('📊 RSVP Data Saved:', rsvpData);
}

// Submit Comment
function submitComment() {
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    
    // Validasi
    if (!name || !text) {
        showCommentMessage('❌ Nama dan ucapan harus diisi!', 'error');
        return;
    }
    
    // Buat object comment
    const commentEntry = {
        name: name,
        text: text,
        timestamp: new Date().toISOString()
    };
    
    // Get existing comments
    let commentsData = JSON.parse(localStorage.getItem('commentsData') || '[]');
    
    // Add new comment
    commentsData.push(commentEntry);
    
    // Save to localStorage
    localStorage.setItem('commentsData', JSON.stringify(commentsData));
    
    // Show success
    showCommentMessage('✓ Ucapan Anda telah dikirim! Terima kasih!', 'success');
    
    // Reset form
    document.getElementById('comment-form').reset();
    
    // Reload comments
    loadComments();
    
    // Log for debugging
    console.log('💬 Comment Saved:', commentsData);
}

// Show RSVP Message
function showRSVPMessage(message, type) {
    const messageEl = document.getElementById('rsvp-message');
    messageEl.textContent = message;
    messageEl.className = `rsvp-message ${type}`;
    
    setTimeout(() => {
        messageEl.className = 'rsvp-message';
        messageEl.textContent = '';
    }, 5000);
}

// Show Comment Message
function showCommentMessage(message, type) {
    const messageEl = document.getElementById('comment-message');
    messageEl.textContent = message;
    messageEl.className = `comment-message ${type}`;
    
    setTimeout(() => {
        messageEl.className = 'comment-message';
        messageEl.textContent = '';
    }, 5000);
}

// Load and Display Comments
function loadComments() {
    const commentsData = JSON.parse(localStorage.getItem('commentsData') || '[]');
    const container = document.getElementById('comments-container');
    
    if (commentsData.length === 0) {
        container.innerHTML = '<p class="no-comments">Belum ada ucapan. Jadilah yang pertama!</p>';
        return;
    }
    
    container.innerHTML = commentsData.map((comment, index) => {
        const date = new Date(comment.timestamp);
        const formattedDate = date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        return `
            <div class="comment-item">
                <div class="comment-header">
                    <span class="comment-name">${escapeHtml(comment.name)}</span>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                <div class="comment-text">"${escapeHtml(comment.text)}"</div>
            </div>
        `;
    }).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
