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

// Submit Comment (Gabungan RSVP + Ucapan)
function submitComment() {
    const name = document.getElementById('comment-name').value.trim();
    const email = document.getElementById('comment-email').value.trim();
    const attendance = document.getElementById('comment-attendance').value;
    const guests = document.getElementById('comment-guests').value;
    const text = document.getElementById('comment-text').value.trim();
    
    // Validasi
    if (!name || !email || !attendance || !guests || !text) {
        showCommentMessage('❌ Semua field yang bertanda * harus diisi!', 'error');
        return;
    }
    
    // Buat object comment (gabungan RSVP + Ucapan)
    const commentEntry = {
        name: name,
        email: email,
        attendance: attendance,
        guests: guests,
        text: text,
        timestamp: new Date().toISOString()
    };
    
    // Get existing comments
    let commentsData = JSON.parse(localStorage.getItem('commentsData') || '[]');
    
    // Check if email already exists
    const existingIndex = commentsData.findIndex(c => c.email.toLowerCase() === email.toLowerCase());
    
    if (existingIndex !== -1) {
        // Update existing
        commentsData[existingIndex] = commentEntry;
        showCommentMessage('✓ Data Anda telah diperbarui!', 'success');
    } else {
        // Add new
        commentsData.push(commentEntry);
        showCommentMessage('✓ Terima kasih! Ucapan dan konfirmasi Anda sudah kami terima!', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('commentsData', JSON.stringify(commentsData));
    
    // Reset form
    document.getElementById('comment-form').reset();
    
    // Reload comments
    loadComments();
    
    // Log for debugging
    console.log('💬 Comment & RSVP Saved:', commentsData);
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

// Load and Display Comments (Gabungan RSVP + Ucapan)
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
        
        // Status badge
        let statusBadge = '';
        if (comment.attendance) {
            const statusClass = `status-${comment.attendance}`;
            const statusText = comment.attendance === 'hadir' ? '✓ Hadir' : 
                              comment.attendance === 'tidak' ? '✗ Tidak Hadir' : 
                              '? Mungkin';
            statusBadge = `<span class="status-badge ${statusClass}">${statusText}</span>`;
        }
        
        // Guests info
        const guestsInfo = comment.guests ? `<p style="color: #999; font-size: 12px; margin-top: 8px;"><i class="fas fa-users"></i> ${comment.guests} orang</p>` : '';
        
        return `
            <div class="comment-item">
                <div class="comment-header">
                    <div>
                        <span class="comment-name">${escapeHtml(comment.name)}</span>
                        ${statusBadge}
                    </div>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                ${guestsInfo}
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
