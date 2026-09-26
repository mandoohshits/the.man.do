/* ═══════════════════════════════════════════════════
   SHITSJS.JS — THE.MAN.DO
   Photos + Videos + Riddles + Music + Carousel
═══════════════════════════════════════════════════ */

/* ── PHOTOS DATA ─────────────────────────────────── */
const PHOTOS = {
  1: {
    images: [
    'photos/Shits/sh1.png',   // ← first photo
    'photos/Shits/sh1a.jpg',  // ← swipe right
    'photos/Shits/sh1b.jpg',  // ← swipe right again
  ],
    title: 'stings', date: '2024', location: 'Dubai',
    letter: 'Can a glance carry more information than a thousand words?',
    sign: '— M', riddle: 'Who is the person with me?', answer: 'minhaj',
    quote: 'fuck you minhaajjjjjj', music: 'music/sm11.mp3',
  },
  2: {
    images:[
      'photos/Shits/sh2.png',
      'photos/Shits/sh2a.jpg',
      'photos/Shits/sh2b.jpg',
      'photos/Shits/sh2c.jpg',
    ],
    title: 'SALT FLATS', date: '2024', location: 'Kannur',
    letter: 'I recommend Vodka.',
    sign: '— v', riddle: 'who is my fav yellow', answer: 'mom',
    quote: 'I wanted to take a moment to write this to you ummi simply because people like you are so rare.',
    music: 'music/sm2.mp3',
  },
  3: {
    images: [
      'photos/Shits/sh3.png',
      'photos/Shits/sh3a.jpg',
      'photos/Shits/sh3b.jpg',
      'photos/Shits/sh3c.jpg',
    ],
    title: 'DESERT HOUR', date: '2024', location: 'Empty Quarter',
    letter: "I'd stay in the garden",
    sign: '— M', riddle: 'there is a word under the skeleton', answer: 'manduchiii',
    quote: 'vodka shot bhai mera hot',
  },
  4: {
    images:[
      'photos/Shits/sh4.png',
      'photos/Shits/sh4a.jpg',
      'photos/Shits/sh4b.jpg',
      'photos/Shits/sh4c.jpg',
    ],
     title: 'eyniverse', date: '2017', location: 'mars',
    letter: 'BiTCHASTIC', sign: '— E',
    riddle: 'what is the worst and good thing i have?', answer: 'ego',
    quote: "Hey Irappi You are honestly one of the best gifts—and most chaotic humans—life has ever thrown at me.",
    music: 'music/sm4.mp3',
  },
  5: {
     images:[
      'photos/Shits/sh5.png',
      'photos/Shits/sh5a.jpg',
      'photos/Shits/sh5b.jpg',
      'photos/Shits/sh5c.jpg',
    ],
    title: 'illusion', date: '2017', location: 'neptune',
    letter: 'street cultures', sign: '— m',
    riddle: 'what makes people cry?', answer: 'memories',
    quote: "Friends change, life gets busy, and people drift into different schedules, but the good ones always leave a mark.",
    music: 'music/sm5.mp3',
  },
  6: {
     images:[
      'photos/Shits/sh6.png',
      'photos/Shits/sh6a.JPG',
      'photos/Shits/sh6b.JPG',
      'photos/Shits/sh6c.jpg',
    ],
    title: 'india', date: '2024', location: 'Meeshapulimala',
    letter: 'sherikkum evdiyaa ennu choicha enikanne valla pidiyilla..',
    sign: '— M', riddle: 'where is the place?', answer: 'lonavala',
    quote: 'its funny even though i am still trying to figure out who i truly am loving the world and everything in it only reminds me MORE of how good it is to just simply exist with you brother',
    music: 'music/sm6.mp3',
  },
  7: {
     images:[
      'photos/Shits/sh7.png',
      'photos/Shits/sh7a.JPG',
      'photos/Shits/sh7b.JPG',
      'photos/Shits/sh7c.JPG',
    ], 
    title: '------------', date: '2024', location: 'tharavad',
    letter: 'cinco rat', sign: '— M', riddle: 'ut__er_i', answer: 'uttergi',
    quote: 'I was going to buy you a really expensive, thoughtful, life-changing gift this year.',
    music: 'music/sm7.mp3',
  },
  8: {
      images:[
      'photos/Shits/sh8.png',
      'photos/Shits/sh8a.jpeg',
      'photos/Shits/sh8b.jpeg',
      'photos/Shits/sh8c.jpeg',
    ],
    
    title: '------------', date: '2024', location: 'tharavad',
    letter: 'ONAM', sign: '— M', riddle: 'ut__er_i', answer: 'uttergi',
    quote: 'I was going to buy you a really expensive, thoughtful, life-changing gift this year.',
    music: 'music/sm8.m4a',
  },
  9: {
     images:[
      'photos/Shits/sh9.png',
      'photos/Shits/sh9a.jpg',
      'photos/Shits/sh9b.jpg',
      'photos/Shits/sh9c.jpg',
    ],
    title: '------------', date: '2024', location: 'tharavad',
    letter: 'payamballam', sign: '— M', riddle: 'w__d', answer: 'uttergi',
    quote: 'em iam not high bruhh its just acting', music: 'music/sm9.m4a',
  },
  10: {
      images:[
      'photos/Shits/sh10.png',
      'photos/Shits/sh10a.jpg',
      'photos/Shits/sh10b.jpg',
      'photos/Shits/sh10c.JPG',
    ],
    
    title: '------------', date: '2024', location: 'eye',
    letter: '', sign: '--p',
    riddle: 'The black opening that regulates how much light enters the eye.', answer: 'pupil',
    quote: "Im always proud to stand by your side and remind you that you are one of the most genuine, sweetest human beings Ive ever met.",
    music: 'music/sm10.mp3',
  },
  11: {
       images:[
      'photos/Shits/sh11.png',
      'photos/Shits/sh11a.jpg',
      'photos/Shits/sh11b.jpg',
      'photos/Shits/sh11c.jpg',
    ],
    title: '------------', date: '2002', location: '',
    letter: '', sign: '', riddle: '', answer: '', quote: '', music: 'music/sm11.mp3',
  },

   12: {
       images:[
      'photos/Shits/sh12.png',
      'photos/Shits/sh12a.jpg',
      'photos/Shits/sh12b.jpg',
      'photos/Shits/sh12c.jpg',
    ],
    title: '------------', date: '2002', location: '',
    letter: '', sign: '', riddle: '', answer: '', quote: '', music: 'music/sm11.mp3',
  },
  // ADD MORE PHOTOS HERE:
  // 12: {
  //   imgSrc: 'photos/Shits/sh12.jpg',   ← single photo
  //   images: ['a.jpg','b.jpg','c.jpg'],  ← OR multiple photos (carousel)
  //   title: 'TITLE', date: '2024', location: 'UAE',
  //   letter: 'your letter', sign: '— M',
  //   riddle: 'your riddle', answer: 'answer', quote: 'unlocked quote',
  //   music: 'music/sm12.mp3',
  // },
};

/* ── CAROUSEL STATE ──────────────────────────────── */
let carouselImages = [];
let carouselIndex  = 0;

/* ── OPEN PHOTO ──────────────────────────────────── */
function openPhoto(id, evt) {
  // Stop click from bubbling to lightbox backdrop
  if (evt) evt.stopPropagation();

  const data = PHOTOS[id];
  if (!data) return;

  // Build image array
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
    track.innerHTML = carouselImages.map(src =>
      `<div class="carousel-slide">
        <img src="${src}" alt="" style="${src.match(/\.gif$/i) ? 'object-fit:contain' : 'object-fit:cover'}">
      </div>`
    ).join('');

    dots.innerHTML = carouselImages.length > 1
      ? carouselImages.map((_, i) =>
          `<button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="carouselGo(${i})"></button>`
        ).join('')
      : '';

    if (ph) ph.style.display = 'none';
    wrap.style.display = 'block';
    updateCarousel();
  } else {
    wrap.style.display = 'none';
    if (ph) ph.style.display = 'flex';
  }

  // Letter
  document.getElementById('lbFrom').textContent  = 'FROM — THE.MAN.DO';
  document.getElementById('lbDate').textContent  = (data.date || '') + (data.location ? ' · ' + data.location : '');
  document.getElementById('lbTitle').textContent = data.title  || '';
  document.getElementById('lbBody').textContent  = data.letter || '';
  document.getElementById('lbSign').textContent  = data.sign   || '— M';

  // Riddle
  const box = document.getElementById('riddleBox');
  box.classList.remove('unlocked-state');
  document.getElementById('riddleInput').value     = '';
  document.getElementById('riddleWrong').classList.remove('show');
  box.dataset.answer = (data.answer || '').toLowerCase();
  document.getElementById('riddleQuestion').textContent = data.riddle || '';
  document.getElementById('unlockedQuote').textContent  = data.quote  || '';

  // Music
  const music    = document.getElementById('photoMusic');
  const musicSrc = document.getElementById('photoMusicSrc');
  if (music && data.music) {
    musicSrc.src = data.music;
    music.load();
    music.volume = 0;
    music.play().catch(() => {});
    let v = 0;
    const fi = setInterval(() => {
      v = Math.min(v + 0.05, 0.35);
      music.volume = v;
      if (v >= 0.35) clearInterval(fi);
    }, 80);
  } else if (music) {
    music.pause();
    music.currentTime = 0;
  }

  // Mark grid cell as multi if has multiple images
  document.querySelectorAll('.photo-cell').forEach(cell => {
    cell.classList.remove('is-active-multi');
  });

  // Show/hide swipe hint
  const hint = document.getElementById('carouselHint');
  if (hint) hint.style.display = carouselImages.length > 1 ? 'block' : 'none';

  // Open lightbox
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── CLOSE LIGHTBOX ──────────────────────────────── */
function closeLightbox(e) {
  if (e) {
    const isBackdrop = e.target === document.getElementById('lightbox');
    const isClose    = e.target.classList.contains('lb-close');
    if (!isBackdrop && !isClose) return;
  }

  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';

  // Fade out music
  const music = document.getElementById('photoMusic');
  if (music) {
    const fo = setInterval(() => {
      if (music.volume > 0.05) {
        music.volume = Math.max(0, music.volume - 0.05);
      } else {
        music.pause();
        music.currentTime = 0;
        clearInterval(fo);
      }
    }, 60);
  }
}

// ESC key closes lightbox
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  carouselMove(-1);
  if (e.key === 'ArrowRight') carouselMove(1);
});

// Swipe to change photo on mobile
let _swipeX = 0;
document.addEventListener('touchstart', e => {
  if (document.getElementById('lightbox').classList.contains('open'))
    _swipeX = e.touches[0].clientX;
}, { passive: true });
document.addEventListener('touchend', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  const diff = _swipeX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) carouselMove(diff > 0 ? 1 : -1);
}, { passive: true });

/* ── CAROUSEL ────────────────────────────────────── */
function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const prev  = document.getElementById('carouselPrev');
  const next  = document.getElementById('carouselNext');
  const total = carouselImages.length;

  if (track) track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  if (prev)  prev.style.display  = total > 1 ? 'flex' : 'none';
  if (next)  next.style.display  = total > 1 ? 'flex' : 'none';
  if (prev)  prev.disabled = carouselIndex === 0;
  if (next)  next.disabled = carouselIndex === total - 1;

  document.querySelectorAll('.carousel-dot').forEach((d, i) =>
    d.classList.toggle('active', i === carouselIndex)
  );
}

function carouselMove(dir) {
  carouselIndex = Math.max(0, Math.min(carouselImages.length - 1, carouselIndex + dir));
  updateCarousel();
}

function carouselGo(i) {
  carouselIndex = i;
  updateCarousel();
}

/* ── RIDDLE ──────────────────────────────────────── */
function checkRiddle(btn) {
  const box    = btn.closest('.riddle-box');
  const input  = box.querySelector('.riddle-input');
  const wrong  = box.querySelector('.riddle-wrong');
  const answer = (box.dataset.answer || '').toLowerCase().trim();
  const guess  = input.value.toLowerCase().trim();

  if (guess === answer && answer !== '') {
    box.classList.add('unlocked-state');
  } else {
    wrong.classList.add('show');
    input.value = '';
    input.focus();
    setTimeout(() => wrong.classList.remove('show'), 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const ri = document.getElementById('riddleInput');
  if (ri) ri.addEventListener('keydown', e => {
    if (e.key === 'Enter') checkRiddle(ri.nextElementSibling);
  });
});

/* ── LOCKED PHOTO ────────────────────────────────── */
function unlockPhoto(btn) {
  const cell   = btn.closest('.photo-cell');
  const input  = cell.querySelector('.lock-input');
  const wrong  = cell.querySelector('.lock-wrong');
  const answer = (cell.dataset.answer || '').toLowerCase().trim();
  const guess  = input.value.toLowerCase().trim();

  if (guess === answer && answer !== '') {
    cell.classList.add('unlocked');
    setTimeout(() => { cell.style.cursor = 'pointer'; }, 900);
  } else {
    wrong.classList.add('show');
    input.value = '';
    input.focus();
    cell.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
      wrong.classList.remove('show');
      cell.style.animation = '';
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lock-input').forEach(inp => {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') unlockPhoto(inp.nextElementSibling);
    });
  });
});

/* ── TABS (Photos / Videos) ──────────────────────── */
function switchShitsTab(tab, btn) {
  document.querySelectorAll('.shits-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.shits-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById('panel-' + tab);
  if (panel) panel.classList.add('active');
}

/* ── VIDEO SYSTEM ────────────────────────────────── */
const VIDEO_LIST = [
  { playerId:'yt-1', videoId:'gCXoltKq36s', wrapId:'wrap-1', skelId:'skel-1', barId:'bar-1' },
  { playerId:'yt-2', videoId:'mSW_NBeRB48', wrapId:'wrap-2', skelId:'skel-2', barId:'bar-2' },
  { playerId:'yt-3', videoId:'J4Plb1Zc1h0', wrapId:'wrap-3', skelId:'skel-3', barId:'bar-3' },
  { playerId:'yt-4', videoId:'LdWUKZFOgyc', wrapId:'wrap-4', skelId:'skel-4', barId:'bar-4' },
  // ADD MORE: { playerId:'yt-5', videoId:'YOUR_ID', wrapId:'wrap-5', skelId:'skel-5', barId:'bar-5' },
];

const players  = {};
const YT_STATE = { UNSTARTED:-1, ENDED:0, PLAYING:1, PAUSED:2, BUFFERING:3, CUED:5 };

function onYouTubeIframeAPIReady() {
  VIDEO_LIST.forEach(v => {
    const el = document.getElementById(v.playerId);
    if (!el) return;
    players[v.playerId] = new YT.Player(v.playerId, {
      videoId: v.videoId,
      playerVars: { autoplay:0, controls:1, modestbranding:1, rel:0, playsinline:1 },
      events: {
        onReady:       ()  => setBar(v.barId, 'idle'),
        onStateChange: (e) => onStateChange(e, v),
      }
    });
  });
}

function onStateChange(e, v) {
  const wrap = document.getElementById(v.wrapId);
  const skel = document.getElementById(v.skelId);
  const ytEl = document.getElementById(v.playerId);

  if (e.data === YT_STATE.BUFFERING) {
    setBar(v.barId, 'buffering');
  }
  if (e.data === YT_STATE.PLAYING) {
    if (ytEl) ytEl.style.opacity = '1';
    if (skel) { skel.classList.add('hidden'); skel.classList.remove('loading'); }
    if (wrap) wrap.classList.add('expanded');
    setBar(v.barId, 'playing');
  }
  if (e.data === YT_STATE.PAUSED) {
    setBar(v.barId, 'paused');
  }
  if (e.data === YT_STATE.ENDED) {
    if (wrap) wrap.classList.remove('expanded');
    setBar(v.barId, 'idle');
  }
}

function handleClick(playerId, wrapId, skelId, barId) {
  const wrap   = document.getElementById(wrapId);
  const skel   = document.getElementById(skelId);
  const player = players[playerId];

  // Expand the wrap immediately on click
  if (wrap) wrap.classList.add('expanded');

  if (!player || typeof player.getPlayerState !== 'function') {
    if (skel) skel.classList.add('loading');
    setBar(barId, 'buffering');
    return;
  }

  if (player.getPlayerState() === YT_STATE.PLAYING) {
    player.pauseVideo();
    if (wrap) wrap.classList.remove('expanded');
  } else {
    if (skel) skel.classList.add('loading');
    setBar(barId, 'buffering');
    player.unMute();
    player.setVolume(100);
    player.playVideo();
  }
}

function setBar(barId, state) {
  const bar = document.getElementById(barId);
  if (bar) bar.className = 'video-status-bar vsb-' + state;
}

/* ── VIDEO RIDDLE ────────────────────────────────── */
function checkVideoRiddle(btn) {
  const box    = btn.closest('.video-riddle-box');
  const input  = box.querySelector('.vriddle-input');
  const wrong  = box.querySelector('.vriddle-wrong');
  const answer = (box.dataset.answer || '').toLowerCase().replace(/\s/g,'');
  const guess  = input.value.toLowerCase().replace(/\s/g,'');

  if (guess === answer && answer !== '') {
    box.classList.add('vr-unlocked');
  } else {
    wrong.classList.add('show');
    input.value = '';
    input.focus();
    setTimeout(() => wrong.classList.remove('show'), 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.vriddle-input').forEach(inp => {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') checkVideoRiddle(inp.nextElementSibling);
    });
  });
});

/* ── CHAT ────────────────────────────────────────── */
function toggleChat() {
  const box = document.getElementById('chatBox');
  const btn = document.getElementById('chatBtn');
  if (!box) return;
  box.classList.toggle('active');
  btn.textContent = box.classList.contains('active') ? 'CLOSE' : 'MSG';
}

/* ── SHAKE KEYFRAME ──────────────────────────────── */
const _shakeStyle = document.createElement('style');
_shakeStyle.textContent = `
  @keyframes shake {
    0%,100%{ transform:translateX(0); }
    20%    { transform:translateX(-6px); }
    40%    { transform:translateX(6px); }
    60%    { transform:translateX(-4px); }
    80%    { transform:translateX(4px); }
  }
`;
document.head.appendChild(_shakeStyle);
