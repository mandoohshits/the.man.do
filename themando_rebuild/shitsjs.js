// ── FIREBASE CONFIG (same as lab) ──────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyDu8b0WNWBmwc6KF-5CWZi_kJNEf9JQVos",
  authDomain:        "themando-31bb4.firebaseapp.com",
  databaseURL:       "https://themando-31bb4-default-rtdb.firebaseio.com",
  projectId:         "themando-31bb4",
  storageBucket:     "themando-31bb4.firebasestorage.app",
  messagingSenderId: "1053943854976",
  appId:             "1:1053943854976:web:fd26ae659ee4f43e37f365"
};

// Only init if not already done
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const shitsDB = firebase.database();

// ── AUTO LOAD UPLOADED PHOTOS FROM FIREBASE ─────────
// Runs on page load — listens for new uploads in real time
function loadUploadedPhotos() {
  shitsDB.ref('uploaded_photos').on('value', snapshot => {
    const data = snapshot.val();
    if (!data) return;

    Object.entries(data).forEach(([firebaseKey, photo]) => {
      // Use firebaseKey as unique ID so it never clashes with manual PHOTOS
      const id = 'fb_' + firebaseKey;
      if (PHOTOS[id]) return; // already added — skip

      PHOTOS[id] = {
        imgSrc:    photo.imgSrc,
        title:     photo.title     || 'UNTITLED',
        date:      photo.date      || '2025',
        location:  photo.location  || 'UAE',
        letter:    photo.letter    || '',
        sign:      photo.sign      || '— M',
        riddle:    photo.riddle    || 'Who are you?',
        answer:    photo.answer    || 'mandooh',
        quote:     photo.quote     || '',
        ...(photo.music ? { music: photo.music } : {}),
      };

      // Add to grid live
      addPhotoToGrid(id, photo.imgSrc);
    });
  });
}

// Add a photo cell to the grid dynamically
function addPhotoToGrid(id, imgSrc) {
  const grid = document.querySelector('.photo-grid');
  if (!grid) return;

  // Don't add duplicates
  if (grid.querySelector(`[data-fb-id="${id}"]`)) return;

  const cell = document.createElement('div');
  cell.className = 'photo-cell';
  cell.setAttribute('data-fb-id', id);
  cell.setAttribute('onclick', `openPhoto('${id}')`);
  cell.innerHTML = `
    <img src="${imgSrc}" alt="">
    <div class="photo-overlay"><span class="overlay-hint">READ →</span></div>
  `;

  // Insert before the PASTE MORE comment
  const comments = Array.from(grid.childNodes).filter(n => n.nodeType === 8);
  if (comments.length > 0) grid.insertBefore(cell, comments[0]);
  else grid.appendChild(cell);
}

window.addEventListener('load', loadUploadedPhotos);

// ── PHOTO DATA ──────────────────────────────────────

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
  },

  // ══════════════════════════════════════════════
  // HOW TO ADD MULTIPLE PHOTOS (carousel):
  // Instead of imgSrc use images: [array of paths]
  // ══════════════════════════════════════════════
  // 12: {
  //   images:   ['photos/Shits/sh12a.jpg', 'photos/Shits/sh12b.jpg', 'photos/Shits/sh12c.jpg'],
  //   title:    'THREE OF US',
  //   date:     '2024',
  //   location: 'Dubai',
  //   letter:   'Your letter here.',
  //   sign:     '— M',
  //   riddle:   'Your riddle',
  //   answer:   'answer',
  //   quote:    'unlocked quote',
  // },

  // ══════════════════════════════════════════════
  // HOW TO ADD A GIF:
  // Just use imgSrc with a .gif path — works automatically
  // ══════════════════════════════════════════════
  // 13: {
  //   imgSrc:   'photos/Shits/moment.gif',
  //   title:    'THAT MOMENT',
  //   date:     '2024',
  //   location: 'UAE',
  //   letter:   'Your letter.',
  //   sign:     '— M',
  //   riddle:   '',
  //   answer:   '',
  //   quote:    '',
  // },

  // ADD MORE PHOTOS HERE ↓
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
/* ── CAROUSEL STATE ── */
let carouselIndex  = 0;
let carouselImages = [];

function openPhoto(id) {
  const data = PHOTOS[id];
  if (!data) return;

  // Build image array — supports single imgSrc OR array of images
  carouselImages = Array.isArray(data.images)
    ? data.images
    : (data.imgSrc ? [data.imgSrc] : []);

  carouselIndex = 0;

  // Setup carousel
  const wrap  = document.getElementById('carouselWrap');
  const track = document.getElementById('carouselTrack');
  const dots  = document.getElementById('carouselDots');
  const ph    = document.getElementById('lbPlaceholder');

  if (carouselImages.length > 0) {
    // Build slides
    track.innerHTML = carouselImages.map(src => `
      <div class="carousel-slide">
        ${src.match(/\.gif$/i)
          ? `<img src="${src}" alt="" style="object-fit:contain;">`
          : `<img src="${src}" alt="">`}
      </div>
    `).join('');

    // Build dots
    dots.innerHTML = carouselImages.length > 1
      ? carouselImages.map((_,i) => `<button class="carousel-dot ${i===0?'active':''}" onclick="carouselGo(${i})"></button>`).join('')
      : '';

    wrap.classList.add('active');
    if (ph) ph.style.display = 'none';
    updateCarousel();
  } else {
    wrap.classList.remove('active');
    if (ph) ph.style.display = 'flex';
    track.innerHTML = '';
    dots.innerHTML  = '';
  }

  // Letter content
  document.getElementById('lbFrom').textContent  = 'FROM — THE.MAN.DO';
  document.getElementById('lbDate').textContent  = data.date + ' · ' + data.location;
  document.getElementById('lbTitle').textContent = data.title;
  document.getElementById('lbBody').textContent  = data.letter;
  document.getElementById('lbSign').textContent  = data.sign;

  // Riddle
  const riddleBox = document.getElementById('riddleBox');
  riddleBox.classList.remove('unlocked-state');
  document.getElementById('riddleInput').value = '';
  document.getElementById('riddleWrong').classList.remove('show');
  riddleBox.dataset.answer = data.answer || '';
  document.getElementById('riddleQuestion').textContent = data.riddle || '';
  document.getElementById('unlockedQuote').textContent  = data.quote  || '';

  // Music
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


/* ══════════════════════════════════════════════════════
   CAROUSEL CONTROLS
══════════════════════════════════════════════════════ */
function updateCarousel() {
  const track   = document.getElementById('carouselTrack');
  const prev    = document.getElementById('carouselPrev');
  const next    = document.getElementById('carouselNext');
  const counter = document.getElementById('carouselCounter');
  const dots    = document.querySelectorAll('.carousel-dot');
  const total   = carouselImages.length;

  if (!track) return;

  // Move track
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;

  // Update arrows
  if (prev) prev.disabled = carouselIndex === 0;
  if (next) next.disabled = carouselIndex === total - 1;

  // Show/hide arrows — only if more than 1 image
  const showArrows = total > 1;
  if (prev) prev.style.display = showArrows ? 'flex' : 'none';
  if (next) next.style.display = showArrows ? 'flex' : 'none';

  // Update dots
  dots.forEach((d,i) => d.classList.toggle('active', i === carouselIndex));
}

function carouselMove(dir) {
  const total = carouselImages.length;
  carouselIndex = Math.max(0, Math.min(total - 1, carouselIndex + dir));
  updateCarousel();
}

function carouselGo(i) {
  carouselIndex = i;
  updateCarousel();
}

// Keyboard left/right arrow navigation inside lightbox
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox')?.classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  carouselMove(-1);
  if (e.key === 'ArrowRight') carouselMove(1);
});

// Touch swipe on lightbox photo
(function() {
  let startX = 0;
  const lbPhoto = document.getElementById('lbPhoto') || document.body;
  document.addEventListener('touchstart', e => {
    if (!document.getElementById('lightbox')?.classList.contains('open')) return;
    startX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    if (!document.getElementById('lightbox')?.classList.contains('open')) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) carouselMove(diff > 0 ? 1 : -1);
  }, { passive: true });
})();
