/* universe.js — THE.MAN.DO */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ── */
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  cursor.style.opacity = '0';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0, curX = 0, curY = 0, started = false;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (!started) {
      curX = mouseX; curY = mouseY;
      started = true;
      cursor.style.opacity = '1';
    }
  });

  (function animateCursor() {
    curX += (mouseX - curX) * 0.18;
    curY += (mouseY - curY) * 0.18;
    cursor.style.left = curX + 'px';
    cursor.style.top  = curY + 'px';
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll('a, button, .nav-module, .lab-card, .photo-cell, .item-card, .dept-tab, .video-wrap, .proof-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(2.5)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
  });

  /* ── ACTIVE NAV ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.universe-nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── STAGGER FADE ── */
  document.querySelectorAll('.lab-card, .item-card, .writing-entry, .proof-card, .video-post').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 50 + i * 60);
  });

});

/* ── CHAT ── */
function toggleChat() {
  const box = document.getElementById('chatBox');
  const btn = document.getElementById('chatBtn');
  if (!box) return;
  box.classList.toggle('active');
  btn.textContent = box.classList.contains('active') ? 'CLOSE' : 'MSG';
}
