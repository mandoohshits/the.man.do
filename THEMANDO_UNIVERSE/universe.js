/* universe.js — THE.MAN.DO Interactive Layer */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ── */
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    curX += (mouseX - curX) * 0.18;
    curY += (mouseY - curY) * 0.18;
    cursor.style.left = curX + 'px';
    cursor.style.top  = curY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .nav-module, .lab-card, .earth-card, .mix-module, .video-artifact-container, .chat-trigger').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(3)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
  });

  /* ── AUTO ACTIVE NAV ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.universe-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  /* ── STAGGER FADE IN ── */
  document.querySelectorAll('.lab-card, .earth-card, .mix-module, .writing-entry, .book-featured').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 80 + i * 80);
  });

  /* ── VIDEO LOADER STATE ── */
  const video  = document.getElementById('thingVideo');
  const loader = document.querySelector('.video-loader');
  if (video && loader) {
    video.addEventListener('waiting', () => loader.classList.add('active'));
    video.addEventListener('playing', () => loader.classList.remove('active'));
    video.addEventListener('canplay', () => loader.classList.remove('active'));
  }

});

/* ── CHAT TOGGLE (global) ── */
function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  const chatBtn = document.getElementById('chatBtn');
  if (!chatBox) return;
  chatBox.classList.toggle('active');
  chatBtn.textContent = chatBox.classList.contains('active') ? 'CLOSE' : 'MSG';
}

/* ── VIDEO TOGGLE (shits page) ── */
function toggleVideoSize() {
  const video = document.getElementById('thingVideo');
  if (!video) return;
  video.classList.toggle('expanded');
  video.muted = !video.classList.contains('expanded');
}
