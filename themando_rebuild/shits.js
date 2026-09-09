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
  riddleBox.dataset.answer = data.answer;
  document.getElementById('riddleQuestion').textContent = data.riddle;
  document.getElementById('unlockedQuote').textContent  = data.quote;

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

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') { 
    document.getElementById('lightbox').classList.remove('open'); 
    document.body.style.overflow = ''; 
  } 
});

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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.riddle-input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') checkRiddle(input.nextElementSibling);
    });
  });
});

function unlockPhoto(btn) {
  const cell   = btn.closest('.photo-cell');
  const input  = cell.querySelector('.lock-input');
  const wrong  = cell.querySelector('.lock-wrong');
  const answer = cell.dataset.answer.toLowerCase().trim();
  const guess  = input.value.toLowerCase().trim();

  if (guess === answer) {
    cell.classList.add('unlocked');
    setTimeout(() => {
      cell.style.cursor = 'pointer';
    }, 800);
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
  document.querySelectorAll('.lock-input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') unlockPhoto(input.nextElementSibling);
    });
  });
});

const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%     { transform: translateX(-6px); }
    40%     { transform: translateX(6px); }
    60%     { transform: translateX(-4px); }
    80%     { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);

// JAVASCRIPT TAB SWITCHING LOGIC
    function switchShitsTab(tabName, clickedBtn) {
      // 1. Remove 'active' class from all tab buttons
      document.querySelectorAll('.shits-tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });

      // 2. Remove 'active' class from all media panels
      document.querySelectorAll('.shits-panel').forEach(panel => {
        panel.classList.remove('active');
      });

      // 3. Add 'active' class to the clicked button
      clickedBtn.classList.add('active');

      // 4. Find the matching panel by ID and add 'active' class to show it
      document.getElementById('panel-' + tabName).classList.add('active');
    }

