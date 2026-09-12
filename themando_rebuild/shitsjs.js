// ── PHOTO DATA ──
const PHOTOS = {
  1: {
    imgSrc:   'photos/Shits/sh1.png',
    title:    'stings',
    date:     '2024',
    location: 'Dubai',
    letter:   'Can a glance carry more information than a thousand words?.',
    sign:     '— M',
    riddle:   'Who is the person with me?',
    answer:   'minhaj',
    quote:    'fuck you minhaajjjjjj',
    music:    'music/sm11.mp3',
  },
  2: {
    imgSrc:   'photos/Shits/sh2.png',
    title:    'SALT FLATS',
    date:     '2024',
    location: 'Kannur',
    letter:   'I recommend Vodka.',
    sign:     '— v',
    riddle:   'who is my fav yellow',
    answer:   'mom',
    quote:    'I wanted to take a moment to write this to you ummi simply because people like you are so rare. In a world where it often feels like everyone is in a rush to react offer unsolicited advice or form quick opinions being around you is a complete breath of fresh air.',
    music:    'music/sm2.mp3',
  },
  3: {
    imgSrc:   'photos/Shits/sh3.png',
    title:    'DESERT HOUR',
    date:     '2024',
    location: 'Empty Quarter',
    letter:   "I'd stay in the garden ",
    sign:     '— M',
    riddle:   'there is a word under the skeleton',
    answer:   'manduchiii',
    quote:    'vodka shot bhai mera hot',
  },
  4: {
    imgSrc:   'photos/Shits/sh4.png',
    title:    'eyniverse',
    date:     '2017',
    location: 'mars',
    letter:   "BiTCHASTIC",
    sign:     "— E",
    riddle:   "what is the worst and good thing i have?",
    answer:   "ego",
    quote:    "Hey Irappi You are honestly one of the best gifts—and most chaotic humans—life has ever thrown at me.",
    music:    'music/sm4.mp3',
  },
  5: {
    imgSrc:   'photos/Shits/sh5.png',
    title:    'illusion',
    date:     '2017',
    location: 'neptune',
    letter:   "street cultures",
    sign:     "— m",
    riddle:   "what makes people cry?",
    answer:   "memories",
    quote:    "Friends change, life gets busy, and people drift into different schedules, but the good ones always leave a mark.",
    music:    'music/sm5.mp3',
  },
  6: {
    imgSrc:   'photos/Shits/sh6.png',
    title:    'india',
    date:     '2024',
    location: 'Meeshapulimala',
    letter:   'sherikkum evdiyaa ennu choicha enikanne valla pidiyilla..',
    sign:     '— M',
    riddle:   'where is the place?',
    answer:   'lonavala',
    quote:    'its funny even though i am still trying to figure out who i truly am loving the world and everything in it only reminds me MORE of how good it is to just simply exist with you brother',
    music:    'music/sm6.mp3',
  },
  7: {
    imgSrc:   'photos/Shits/sh7.png',
    title:    '------------',
    date:     '2024',
    location: 'tharavad',
    letter:   'cinco rat',
    sign:     '— M',
    riddle:   'ut__er_i',
    answer:   'uttergi',
    quote:    'I was going to buy you a really expensive, thoughtful, life-changing gift this year.',
    music:    'music/sm7.mp3',
  },
  8: {
    imgSrc:   'photos/Shits/sh8.jpeg',
    title:    '------------',
    date:     '2024',
    location: 'tharavad',
    letter:   'ONAM',
    sign:     '— M',
    riddle:   'ut__er_i',
    answer:   'uttergi',
    quote:    'I was going to buy you a really expensive, thoughtful, life-changing gift this year.',
    music:    'music/sm8.m4a',
  },
  9: {
    imgSrc:   'photos/Shits/sh9.png',
    title:    '------------',
    date:     '2024',
    location: 'tharavad',
    letter:   'payamballam',
    sign:     '— M',
    riddle:   'w__d',
    answer:   'uttergi',
    quote:    'em iam not high bruhh its just acting',
    music:    'music/sm9.m4a',
  },
  10: {
    imgSrc:   'photos/Shits/sh10.png',
    title:    '------------',
    date:     '2024',
    location: 'eye',
    letter:   '',
    sign:     '--p',
    riddle:   'The black opening that regulates how much light enters the eye.',
    answer:   'pupil',
    quote:    'Im always proud to stand by your side and remind you that you are one of the most genuine, sweetest human beings Ive ever met.',
    music:    'music/sm10.mp3',
  },
  11: {
    imgSrc:   'photos/Shits/sh11.png',
    title:    '------------',
    date:     '2002',
    location: '',
    letter:   '',
    sign:     '',
    riddle:   '',
    answer:   '',
    quote:    '',
    music:    'music/sm11.mp3',
  }
};

// ── TAB SWITCHING ──
function switchShitsTab(tabName, clickedBtn) {
  document.querySelectorAll('.shits-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.shits-panel').forEach(panel => panel.classList.remove('active'));
  
  clickedBtn.classList.add('active');
  const targetPanel = document.getElementById('panel-' + tabName);
  if (targetPanel) targetPanel.classList.add('active');
}

// ── LIGHTBOX FUNCTIONS ──
function openPhoto(id) {
  const data = PHOTOS[id];
  if (!data) return;

  const lbPhoto = document.getElementById('lbPhoto');
  lbPhoto.innerHTML = data.imgSrc
    ? `<img src="${data.imgSrc}" alt="${data.title}">`
    : `<div class="lb-placeholder">${data.title}</div>`;

  document.getElementById('lbFrom').textContent   = 'FROM — THE.MAN.DO';
  document.getElementById('lbDate').textContent   = data.date + ' · ' + data.location;
  document.getElementById('lbTitle').textContent  = data.title;
  document.getElementById('lbBody').textContent   = data.letter;
  document.getElementById('lbSign').textContent   = data.sign;

  const riddleBox = document.getElementById('riddleBox');
  riddleBox.classList.remove('unlocked-state');
  document.getElementById('riddleInput').value = '';
  document.getElementById('riddleWrong').classList.remove('show');
  riddleBox.dataset.answer = data.answer || '';
  document.getElementById('riddleQuestion').textContent = data.riddle || '';
  document.getElementById('unlockedQuote').textContent  = data.quote || '';

  const music = document.getElementById('photoMusic');
  const src   = document.getElementById('photoMusicSrc');
  if (data.music) {
    src.src = data.music;
    music.load();
    music.volume = 0;
    music.play().catch(() => {});
    let vol = 0;
    const fadeIn = setInterval(() => {
      vol = Math.min(vol + 0.05, 0.4);
      music.volume = vol;
      if (vol >= 0.4) clearInterval(fadeIn);
    }, 80);
  } else {
    music.pause();
    music.currentTime = 0;
  }

  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lb-close')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  const music = document.getElementById('photoMusic');
  const fadeOut = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume = Math.max(0, music.volume - 0.05);
    } else {
      music.pause();
      music.currentTime = 0;
      clearInterval(fadeOut);
    }
  }, 80);
}

// ── VIDEO SYSTEM ──     
const VIDEO_LIST = [
  { playerId:'yt-1', videoId:'gCXoltKq36s', wrapId:'wrap-1', skelId:'skel-1', barId:'bar-1' },
  { playerId:'yt-2', videoId:'mSW_NBeRB48', wrapId:'wrap-2', skelId:'skel-2', barId:'bar-2' },
  { playerId:'yt-3', videoId:'J4Plb1Zc1h0', wrapId:'wrap-3', skelId:'skel-3', barId:'bar-3' },
  { playerId:'yt-4', videoId:'LdWUKZFOgyc', wrapId:'wrap-4', skelId:'skel-4', barId:'bar-4' },
];

const players  = {};
const YT_STATE = { UNSTARTED:-1, ENDED:0, PLAYING:1, PAUSED:2, BUFFERING:3, CUED:5 };

function onYouTubeIframeAPIReady() {
  VIDEO_LIST.forEach(v => {
    const container = document.getElementById(v.playerId);
    if (!container) return;

    players[v.playerId] = new YT.Player(v.playerId, {
      videoId: v.videoId,
      playerVars: { autoplay:0, controls:1, modestbranding:1, rel:0, playsinline:1, fs:1 },
      events: {
        onReady:       () => setBar(v.barId, 'idle'),
        onStateChange: (e) => onStateChange(e, v),
      }
    });
  });
}

function onStateChange(e, v) {
  const wrap = document.getElementById(v.wrapId);
  const skel = document.getElementById(v.skelId);
  const ytEl = document.getElementById(v.playerId);
  if (e.data === YT_STATE.BUFFERING) { setBar(v.barId, 'buffering'); }
  if (e.data === YT_STATE.PLAYING) {
    if (ytEl) ytEl.style.opacity = '1';
    if (skel) skel.classList.add('hidden');
    if (wrap) wrap.classList.add('expanded');
    setBar(v.barId, 'playing');
  }
  if (e.data === YT_STATE.PAUSED) { if (wrap) wrap.classList.remove('expanded'); setBar(v.barId, 'paused'); }
  if (e.data === YT_STATE.ENDED)  { if (wrap) wrap.classList.remove('expanded'); setBar(v.barId, 'idle'); }
}

function handleClick(playerId, wrapId, skelId, barId) {
  const wrap = document.getElementById(wrapId);
  const skel = document.getElementById(skelId);
  const player = players[playerId];

  if (!player || typeof player.getPlayerState !== 'function') return;

  if (player.getPlayerState() === YT_STATE.PLAYING) {
    player.pauseVideo();
  } else {
    if (skel) skel.classList.add('loading');
    setBar(barId, 'buffering');
    player.unMute(); player.setVolume(100); player.playVideo();
  }
}

function setBar(barId, state) {
  const bar = document.getElementById(barId);
  if (bar) bar.className = 'video-status-bar vsb-' + state;
}

function checkRiddle(btn) {
  const box    = btn.closest('.riddle-box');
  const input  = box.querySelector('.riddle-input');
  const wrong  = box.querySelector('.riddle-wrong');
  const answer = box.dataset.answer.toLowerCase().trim();
  const guess  = input.value.toLowerCase().trim();
  if (guess === answer) {
    box.classList.add('unlocked-state');
  } else {
    wrong.classList.add('show');
    input.value = '';
    input.focus();
    setTimeout(() => wrong.classList.remove('show'), 2000);
  }
}

function toggleChat() {
  const box = document.getElementById('chatBox');
  const btn = document.getElementById('chatBtn');
  if (!box) return;
  box.classList.toggle('active');
  btn.textContent = box.classList.contains('active') ? 'CLOSE' : 'MSG';
}

function unlockPhoto(btn) {
  const cell   = btn.closest('.photo-cell');
  const input  = cell.querySelector('.lock-input');
  const wrong  = cell.querySelector('.lock-wrong');
  const answer = cell.dataset.answer.toLowerCase().trim();
  const guess  = input.value.toLowerCase().trim();

  if (guess === answer) {
    // Glitch reveal 🔥
    cell.classList.add('unlocked');
    setTimeout(() => {
      cell.style.cursor = 'pointer';
    }, 800);
  } else {
    wrong.classList.add('show');
    input.value = '';
    input.focus();
    // Shake
    cell.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
      wrong.classList.remove('show');
      cell.style.animation = '';
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Add shake + glitch keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%     { transform: translateX(-6px); }
      40%     { transform: translateX(6px); }
      60%     { transform: translateX(-4px); }
      80%     { transform: translateX(4px); }
    }
    @keyframes glitchReveal {
      0%   { opacity:0; clip-path:inset(100% 0 0 0); transform:skewX(0deg); }
      10%  { opacity:1; clip-path:inset(60% 0 0 0);  transform:skewX(-8deg); }
      20%  { clip-path:inset(40% 0 20% 0);            transform:skewX(5deg); filter:hue-rotate(90deg); }
      30%  { clip-path:inset(20% 0 40% 0);            transform:skewX(-3deg); }
      40%  { clip-path:inset(0% 0 60% 0);             transform:skewX(6deg); filter:hue-rotate(0deg); }
      60%  { clip-path:inset(0% 0 10% 0);             transform:skewX(1deg); }
      100% { opacity:1; clip-path:inset(0%);           transform:skewX(0deg) scaleX(1); filter:none; }
    }
    .photo-cell.locked { position:relative; background:#080808; cursor:default; overflow:hidden; }
    .photo-cell.locked .locked-photo { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;pointer-events:none; }
    .photo-cell.locked.unlocked .locked-photo { opacity:1;pointer-events:all;animation:glitchReveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
    .photo-cell.locked .lock-overlay { position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;z-index:3;padding:8px;transition:opacity 0.3s; }
    .photo-cell.locked.unlocked .lock-overlay { opacity:0;pointer-events:none; }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('.riddle-input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') checkRiddle(input.nextElementSibling);
    });
  });

  document.querySelectorAll('.lock-input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') unlockPhoto(input.nextElementSibling);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('lightbox').classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});


// ══════════════════════════════════════════════════════
// ADMIN UPLOAD SYSTEM
// ══════════════════════════════════════════════════════

// ── CONFIG — fill these in ─────────────────────────────
const CLOUDINARY_CLOUD_NAME  = 'YOUR_CLOUD_NAME';   // ← from Cloudinary dashboard
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET'; // ← Settings → Upload → Unsigned preset
const JSONBIN_API_KEY        = '$2a$10$JRpAvbI7jgF3IofvCI49beHmYwpJ/PfaoX34h5BxhSXaSpDAyD4KW';
const JSONBIN_BIN_ID         = 'YOUR_PHOTOS_BIN_ID'; // ← create a new bin at jsonbin.io for photos
const ADMIN_PASSWORD         = 'mandooh2025';        // ← change this to your own password

// ── STATE ─────────────────────────────────────────────
let adminUnlocked  = false;
let drawerOpen     = false;
let selectedFile   = null;
let photosFromDB   = {};  // photos loaded from JSONBin

// ── ADMIN LOGIN ───────────────────────────────────────
function checkAdminPassword() {
  const pw = prompt('Enter admin password:');
  if (pw === ADMIN_PASSWORD) {
    adminUnlocked = true;
    document.getElementById('adminPanel').style.display = 'block';
    openDrawer();
  } else {
    alert('Wrong password.');
  }
}

function toggleAdminPanel() {
  if (!adminUnlocked) {
    checkAdminPassword();
    return;
  }
  if (drawerOpen) closeDrawer();
  else openDrawer();
}

function openDrawer() {
  drawerOpen = true;
  document.getElementById('adminDrawer').style.transform = 'translateY(0)';
  document.getElementById('adminToggleBtn').style.color = 'rgba(240,160,20,0.8)';
  document.getElementById('adminToggleBtn').style.borderColor = 'rgba(240,160,20,0.4)';
}

function closeDrawer() {
  drawerOpen = false;
  document.getElementById('adminDrawer').style.transform = 'translateY(100%)';
  document.getElementById('adminToggleBtn').style.color = 'rgba(240,160,20,0.3)';
  document.getElementById('adminToggleBtn').style.borderColor = 'rgba(240,160,20,0.15)';
}

// ── FILE SELECT + PREVIEW ─────────────────────────────
function handleFileSelect(input) {
  const file = input.files[0];
  if (!file) return;
  selectedFile = file;

  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('previewImg').src = e.target.result;
    document.getElementById('dropZonePreview').style.display = 'block';
    document.getElementById('dropZoneText').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

// ── DRAG AND DROP ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const zone = document.getElementById('dropZone');
  if (!zone) return;

  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.style.borderColor = 'rgba(240,160,20,0.5)';
    zone.style.background  = 'rgba(240,160,20,0.04)';
  });

  zone.addEventListener('dragleave', () => {
    zone.style.borderColor = 'rgba(240,160,20,0.2)';
    zone.style.background  = 'rgba(255,255,255,0.01)';
  });

  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.style.borderColor = 'rgba(240,160,20,0.2)';
    zone.style.background  = 'rgba(255,255,255,0.01)';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      selectedFile = file;
      const reader = new FileReader();
      reader.onload = ev => {
        document.getElementById('previewImg').src = ev.target.result;
        document.getElementById('dropZonePreview').style.display = 'block';
        document.getElementById('dropZoneText').style.display = 'none';
      };
      reader.readAsDataURL(file);
    }
  });
});

// ── SHOW STATUS ───────────────────────────────────────
function showStatus(msg, type = 'info') {
  const el = document.getElementById('uploadStatus');
  el.style.display = 'block';
  el.textContent   = msg;
  el.style.background = type === 'success' ? 'rgba(80,200,100,0.08)'
    : type === 'error' ? 'rgba(220,80,60,0.08)'
    : 'rgba(240,160,20,0.06)';
  el.style.color = type === 'success' ? 'rgba(80,200,100,0.8)'
    : type === 'error' ? 'rgba(220,80,60,0.7)'
    : 'rgba(240,160,20,0.6)';
  el.style.border = `1px solid ${type === 'success' ? 'rgba(80,200,100,0.15)'
    : type === 'error' ? 'rgba(220,80,60,0.15)'
    : 'rgba(240,160,20,0.15)'}`;
}

// ── MAIN UPLOAD FUNCTION ──────────────────────────────
async function uploadPhoto() {
  if (!selectedFile) { showStatus('Please select a photo first.', 'error'); return; }

  const title    = document.getElementById('up_title').value.trim();
  const date     = document.getElementById('up_date').value.trim()     || '2025';
  const location = document.getElementById('up_location').value.trim() || 'UAE';
  const letter   = document.getElementById('up_letter').value.trim();
  const sign     = document.getElementById('up_sign').value.trim()     || '— M';
  const riddle   = document.getElementById('up_riddle').value.trim()   || 'Who are you?';
  const answer   = document.getElementById('up_answer').value.trim()   || 'mandooh';
  const quote    = document.getElementById('up_quote').value.trim()    || '';
  const music    = document.getElementById('up_music').value.trim()    || null;

  if (!title)  { showStatus('Title is required.', 'error'); return; }
  if (!letter) { showStatus('Letter is required.', 'error'); return; }

  // ── STEP 1: Upload to Cloudinary ──────────────────
  showStatus('Uploading photo to Cloudinary...', 'info');

  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('folder', 'themando/shits');

  let imageUrl;
  try {
    const res  = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    imageUrl = data.secure_url;
    showStatus('Photo uploaded ✓ Saving data...', 'info');
  } catch (err) {
    showStatus('Cloudinary upload failed: ' + err.message, 'error');
    return;
  }

  // ── STEP 2: Load existing photos from JSONBin ──────
  let existingPhotos = {};
  let binVersion = null;
  try {
    const res  = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    const data = await res.json();
    existingPhotos = data.record?.photos || {};
    binVersion     = data.metadata?.version;
  } catch (err) {
    // Bin might be empty — that's fine
  }

  // ── STEP 3: Add new photo entry ───────────────────
  const newId = Date.now();
  existingPhotos[newId] = {
    imgSrc: imageUrl,
    title, date, location, letter, sign,
    riddle, answer, quote,
    ...(music ? { music } : {}),
    uploadedAt: new Date().toISOString(),
  };

  // ── STEP 4: Save back to JSONBin ──────────────────
  try {
    await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type':  'application/json',
        'X-Master-Key':  JSONBIN_API_KEY,
      },
      body: JSON.stringify({ photos: existingPhotos }),
    });
  } catch (err) {
    showStatus('JSONBin save failed: ' + err.message, 'error');
    return;
  }

  // ── STEP 5: Add to live grid immediately ──────────
  PHOTOS[newId] = existingPhotos[newId];
  addPhotoToGrid(newId, imageUrl);

  showStatus('Photo added to grid ✓', 'success');

  // Reset form
  selectedFile = null;
  document.getElementById('photoFileInput').value = '';
  document.getElementById('previewImg').src       = '';
  document.getElementById('dropZonePreview').style.display = 'none';
  document.getElementById('dropZoneText').style.display    = 'block';
  ['up_title','up_date','up_location','up_letter','up_sign',
   'up_riddle','up_answer','up_quote','up_music'].forEach(id => {
    document.getElementById(id).value = '';
  });

  setTimeout(() => closeDrawer(), 1500);
}

// ── ADD PHOTO TO GRID (live, no reload) ───────────────
function addPhotoToGrid(id, imgSrc) {
  const grid = document.querySelector('.photo-grid');
  if (!grid) return;

  const marker = grid.querySelector('<!-- PASTE MORE PHOTOS HERE -->');
  const cell   = document.createElement('div');
  cell.className = 'photo-cell';
  cell.setAttribute('onclick', `openPhoto(${id})`);
  cell.innerHTML = `
    <img src="${imgSrc}" alt="">
    <div class="photo-overlay"><span class="overlay-hint">READ →</span></div>
  `;

  // Insert before the last comment marker or append
  const comment = Array.from(grid.childNodes).find(n => n.nodeType === 8);
  if (comment) grid.insertBefore(cell, comment);
  else grid.appendChild(cell);
}

// ── LOAD PHOTOS FROM JSONBIN ON PAGE LOAD ─────────────
async function loadPhotosFromDB() {
  if (JSONBIN_BIN_ID === 'YOUR_PHOTOS_BIN_ID') return; // not configured yet
  try {
    const res  = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
      headers: { 'X-Master-Key': JSONBIN_API_KEY }
    });
    const data = await res.json();
    const dbPhotos = data.record?.photos || {};

    Object.entries(dbPhotos).forEach(([id, photo]) => {
      // Only add if not already in hardcoded PHOTOS
      if (!PHOTOS[id]) {
        PHOTOS[id] = photo;
        addPhotoToGrid(id, photo.imgSrc);
      }
    });
  } catch (err) {
    console.log('Could not load photos from DB:', err);
  }
}

// Load DB photos when page opens
window.addEventListener('load', loadPhotosFromDB);

