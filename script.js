/* ============================================================
   Labiba NS – Belajar Bersama!
   script.js – Data soal, logika kuis, audio, dan animasi
   ============================================================ */

/* ============================================================
   DATA SOAL
   ============================================================ */
const CATEGORIES = [
  {
    id: "warna",
    label: "Tebak Warna",
    icon: "🎨",
    count: 5,
    questions: [
      {
        q: "Warna apa ini? 🔴",
        img: "🔴",
        type: "Tebak Warna",
        options: [
          { label: "Merah", icon: "🔴" },
          { label: "Biru", icon: "🔵" },
          { label: "Hijau", icon: "🟢" },
          { label: "Kuning", icon: "🟡" },
        ],
        correct: 0,
        hint: "Warna apel dan tomat!",
      },
      {
        q: "Warna apa ini? 🟡",
        img: "🟡",
        type: "Tebak Warna",
        options: [
          { label: "Ungu", icon: "🟣" },
          { label: "Kuning", icon: "🟡" },
          { label: "Oranye", icon: "🟠" },
          { label: "Putih", icon: "⚪" },
        ],
        correct: 1,
        hint: "Warna matahari dan pisang!",
      },
      {
        q: "Warna apa ini? 🔵",
        img: "🔵",
        type: "Tebak Warna",
        options: [
          { label: "Merah", icon: "🔴" },
          { label: "Hijau", icon: "🟢" },
          { label: "Biru", icon: "🔵" },
          { label: "Coklat", icon: "🟤" },
        ],
        correct: 2,
        hint: "Warna langit dan laut!",
      },
      {
        q: "Warna apa ini? 🟢",
        img: "🟢",
        type: "Tebak Warna",
        options: [
          { label: "Merah", icon: "🔴" },
          { label: "Hijau", icon: "🟢" },
          { label: "Biru", icon: "🔵" },
          { label: "Kuning", icon: "🟡" },
        ],
        correct: 1,
        hint: "Warna pohon dan rumput!",
      },
      {
        q: "Warna apa ini? 🟠",
        img: "🟠",
        type: "Tebak Warna",
        options: [
          { label: "Oranye", icon: "🟠" },
          { label: "Merah", icon: "🔴" },
          { label: "Hijau", icon: "🟢" },
          { label: "Ungu", icon: "🟣" },
        ],
        correct: 0,
        hint: "Warna jeruk manis!",
      },
    ],
  },
  {
    id: "bentuk",
    label: "Tebak Bentuk",
    icon: "🔷",
    count: 5,
    questions: [
      {
        q: "Bentuk apakah ini?",
        img: "⭕",
        type: "Tebak Bentuk",
        options: [
          { label: "Lingkaran", icon: "⭕" },
          { label: "Kotak", icon: "🟥" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Bintang", icon: "⭐" },
        ],
        correct: 0,
        hint: "Tidak ada sudut, bulat sempurna!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "🟥",
        type: "Tebak Bentuk",
        options: [
          { label: "Lingkaran", icon: "⭕" },
          { label: "Persegi", icon: "🟥" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Berlian", icon: "🔷" },
        ],
        correct: 1,
        hint: "Mempunyai 4 sisi yang sama panjang!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "🔺",
        type: "Tebak Bentuk",
        options: [
          { label: "Oval", icon: "🥚" },
          { label: "Kotak", icon: "🟥" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Persegi Panjang", icon: "▬" },
        ],
        correct: 2,
        hint: "Mempunyai 3 sudut!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "⭐",
        type: "Tebak Bentuk",
        options: [
          { label: "Bunga", icon: "🌸" },
          { label: "Bintang", icon: "⭐" },
          { label: "Matahari", icon: "☀️" },
          { label: "Berlian", icon: "🔷" },
        ],
        correct: 1,
        hint: "Sering kita lihat di langit malam!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "🔷",
        type: "Tebak Bentuk",
        options: [
          { label: "Lingkaran", icon: "⭕" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Berlian", icon: "🔷" },
          { label: "Persegi", icon: "🟥" },
        ],
        correct: 2,
        hint: "Seperti batu permata berharga!",
      },
    ],
  },
  {
    id: "hewan",
    label: "Mengenal Hewan",
    icon: "🐾",
    count: 5,
    questions: [
      {
        q: "Hewan apa ini?",
        img: "🐘",
        type: "Mengenal Hewan",
        options: [
          { label: "Singa", icon: "🦁" },
          { label: "Gajah", icon: "🐘" },
          { label: "Kuda", icon: "🐴" },
          { label: "Sapi", icon: "🐄" },
        ],
        correct: 1,
        hint: "Hewan terbesar di darat, punya belalai panjang!",
      },
      {
        q: "Hewan apa ini?",
        img: "🦁",
        type: "Mengenal Hewan",
        options: [
          { label: "Macan", icon: "🐯" },
          { label: "Kucing", icon: "🐱" },
          { label: "Singa", icon: "🦁" },
          { label: "Serigala", icon: "🐺" },
        ],
        correct: 2,
        hint: "Raja hutan yang gagah!",
      },
      {
        q: "Hewan apa ini?",
        img: "🐧",
        type: "Mengenal Hewan",
        options: [
          { label: "Burung", icon: "🐦" },
          { label: "Bebek", icon: "🦆" },
          { label: "Ayam", icon: "🐔" },
          { label: "Penguin", icon: "🐧" },
        ],
        correct: 3,
        hint: "Hidup di salju dan tidak bisa terbang!",
      },
      {
        q: "Hewan apa ini?",
        img: "🐬",
        type: "Mengenal Hewan",
        options: [
          { label: "Ikan", icon: "🐟" },
          { label: "Hiu", icon: "🦈" },
          { label: "Lumba-lumba", icon: "🐬" },
          { label: "Paus", icon: "🐋" },
        ],
        correct: 2,
        hint: "Hewan laut yang pintar dan suka melompat!",
      },
      {
        q: "Hewan apa ini?",
        img: "🦋",
        type: "Mengenal Hewan",
        options: [
          { label: "Lebah", icon: "🐝" },
          { label: "Lalat", icon: "🪰" },
          { label: "Kupu-kupu", icon: "🦋" },
          { label: "Belalang", icon: "🦗" },
        ],
        correct: 2,
        hint: "Muncul dari kepompong, sayapnya indah!",
      },
    ],
  },
  {
    id: "buah",
    label: "Mengenal Buah",
    icon: "🍎",
    count: 5,
    questions: [
      {
        q: "Buah apa ini?",
        img: "🍎",
        type: "Mengenal Buah",
        options: [
          { label: "Apel", icon: "🍎" },
          { label: "Tomat", icon: "🍅" },
          { label: "Stroberi", icon: "🍓" },
          { label: "Ceri", icon: "🍒" },
        ],
        correct: 0,
        hint: "Buah merah yang renyah!",
      },
      {
        q: "Buah apa ini?",
        img: "🍌",
        type: "Mengenal Buah",
        options: [
          { label: "Mangga", icon: "🥭" },
          { label: "Pisang", icon: "🍌" },
          { label: "Pepaya", icon: "🍈" },
          { label: "Nanas", icon: "🍍" },
        ],
        correct: 1,
        hint: "Monyet suka makan buah ini, berwarna kuning!",
      },
      {
        q: "Buah apa ini?",
        img: "🍇",
        type: "Mengenal Buah",
        options: [
          { label: "Bluberi", icon: "🫐" },
          { label: "Anggur", icon: "🍇" },
          { label: "Plum", icon: "🫒" },
          { label: "Ceri", icon: "🍒" },
        ],
        correct: 1,
        hint: "Buah ungu yang tumbuh berkelompok!",
      },
      {
        q: "Buah apa ini?",
        img: "🍉",
        type: "Mengenal Buah",
        options: [
          { label: "Melon", icon: "🍈" },
          { label: "Semangka", icon: "🍉" },
          { label: "Alpukat", icon: "🥑" },
          { label: "Jeruk", icon: "🍊" },
        ],
        correct: 1,
        hint: "Hijau di luar, merah di dalam, banyak airnya!",
      },
      {
        q: "Buah apa ini?",
        img: "🍍",
        type: "Mengenal Buah",
        options: [
          { label: "Durian", icon: "🌵" },
          { label: "Mangga", icon: "🥭" },
          { label: "Nanas", icon: "🍍" },
          { label: "Kelapa", icon: "🥥" },
        ],
        correct: 2,
        hint: "Buah berduri dengan mahkota daun di atas!",
      },
    ],
  },
  {
    id: "huruf",
    label: "Huruf & Angka",
    icon: "🔤",
    count: 5,
    questions: [
      {
        q: "Huruf apakah ini?",
        img: "🅰️",
        type: "Huruf & Angka",
        options: [
          { label: "A" },
          { label: "B" },
          { label: "C" },
          { label: "D" },
        ],
        correct: 0,
        hint: "Huruf pertama dalam alfabet!",
      },
      {
        q: "Angka berapa ini?",
        img: "5️⃣",
        type: "Huruf & Angka",
        options: [
          { label: "3" },
          { label: "7" },
          { label: "5" },
          { label: "8" },
        ],
        correct: 2,
        hint: "Jari tangan kita ada 5!",
      },
      {
        q: "Huruf apakah ini?",
        img: "🅱️",
        type: "Huruf & Angka",
        options: [
          { label: "P" },
          { label: "B" },
          { label: "D" },
          { label: "R" },
        ],
        correct: 1,
        hint: "Bola namanya diawali huruf ini!",
      },
      {
        q: "Angka berapa ini?",
        img: "🔟",
        type: "Huruf & Angka",
        options: [
          { label: "8" },
          { label: "9" },
          { label: "10" },
          { label: "6" },
        ],
        correct: 2,
        hint: "Jari tangan kiri + kanan = ?",
      },
      {
        q: 'Huruf apa yang bunyi "Ka"?',
        img: "🔤",
        type: "Huruf & Angka",
        options: [
          { label: "G" },
          { label: "K" },
          { label: "C" },
          { label: "Q" },
        ],
        correct: 1,
        hint: "Kucing diawali bunyi ini!",
      },
    ],
  },
  {
    id: "hitung",
    label: "Hitung Benda",
    icon: "🔢",
    count: 5,
    questions: [
      {
        q: "Ada berapa bintang?",
        img: "⭐⭐⭐",
        type: "Hitung Benda",
        options: [
          { label: "2" },
          { label: "3" },
          { label: "4" },
          { label: "5" },
        ],
        correct: 1,
        hint: "Hitunglah satu per satu!",
      },
      {
        q: "Ada berapa apel?",
        img: "🍎🍎🍎🍎🍎",
        type: "Hitung Benda",
        options: [
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
        ],
        correct: 2,
        hint: "Jari tanganmu satu tangan!",
      },
      {
        q: "Ada berapa balon?",
        img: "🎈🎈",
        type: "Hitung Benda",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Hitunglah dengan pelan!",
      },
      {
        q: "Ada berapa kupu-kupu?",
        img: "🦋🦋🦋🦋",
        type: "Hitung Benda",
        options: [
          { label: "2" },
          { label: "3" },
          { label: "4" },
          { label: "5" },
        ],
        correct: 2,
        hint: "Hitunglah gambarnya!",
      },
      {
        q: "Ada berapa ikan?",
        img: "🐟🐟🐟🐟🐟🐟",
        type: "Hitung Benda",
        options: [
          { label: "4" },
          { label: "5" },
          { label: "6" },
          { label: "7" },
        ],
        correct: 2,
        hint: "Enam = setengah dari dua belas!",
      },
    ],
  },
  {
    id: "matematika",
    label: "Penjumlahan",
    icon: "➕",
    count: 5,
    questions: [
      {
        q: "1 + 1 = ?",
        img: "🍎 + 🍎",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Satu apel ditambah satu apel!",
      },
      {
        q: "2 + 2 = ?",
        img: "🐣🐣 + 🐣🐣",
        type: "Matematika",
        options: [
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
        ],
        correct: 1,
        hint: "Gunakan jari tanganmu untuk menghitung!",
      },
      {
        q: "3 + 1 = ?",
        img: "⭐⭐⭐ + ⭐",
        type: "Matematika",
        options: [
          { label: "3" },
          { label: "5" },
          { label: "4" },
          { label: "6" },
        ],
        correct: 2,
        hint: "Tiga bintang ditambah satu bintang!",
      },
      {
        q: "2 + 3 = ?",
        img: "🐟🐟 + 🐟🐟🐟",
        type: "Matematika",
        options: [
          { label: "4" },
          { label: "6" },
          { label: "5" },
          { label: "7" },
        ],
        correct: 2,
        hint: "Dua ikan ditambah tiga ikan!",
      },
      {
        q: "4 + 1 = ?",
        img: "🌸🌸🌸🌸 + 🌸",
        type: "Matematika",
        options: [
          { label: "4" },
          { label: "5" },
          { label: "6" },
          { label: "3" },
        ],
        correct: 1,
        hint: "Empat bunga ditambah satu bunga!",
      },
    ],
  },
  {
    id: "pengurangan",
    label: "Pengurangan",
    icon: "➖",
    count: 5,
    questions: [
      {
        q: "3 - 1 = ?",
        img: "🍎🍎🍎 - 🍎",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Tiga dikurangi satu!",
      },
      {
        q: "4 - 2 = ?",
        img: "🌟🌟🌟🌟 - 🌟🌟",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Empat bintang dikurangi dua bintang!",
      },
      {
        q: "5 - 3 = ?",
        img: "🐥🐥🐥🐥🐥 - 🐥🐥🐥",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Lima dikurangi tiga!",
      },
      {
        q: "3 - 2 = ?",
        img: "🍓🍓🍓 - 🍓🍓",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "0" },
        ],
        correct: 0,
        hint: "Tiga dikurangi dua tersisa?",
      },
      {
        q: "5 - 1 = ?",
        img: "🐠🐠🐠🐠🐠 - 🐠",
        type: "Matematika",
        options: [
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
        ],
        correct: 1,
        hint: "Lima ikan dikurangi satu ikan!",
      },
    ],
  },
];

/* ============================================================
   STATE APLIKASI
   ============================================================ */
let soundOn = true;
let currentCategory = null;
let currentQ = 0;
let score = 0;
let answered = false;

/* ============================================================
   AUDIO – Web Audio API (tanpa file eksternal)
   ============================================================ */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let actx = null;

function getACtx() {
  if (!actx) actx = new AudioCtx();
  return actx;
}

function playTone(freq, type, dur, vol = 0.3) {
  if (!soundOn) return;
  try {
    const ctx = getACtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + dur);
  } catch (e) {}
}

function playCorrectSound() {
  playTone(523, "sine", 0.15);
  setTimeout(() => playTone(659, "sine", 0.15), 100);
  setTimeout(() => playTone(784, "sine", 0.3), 200);
}

function playWrongSound() {
  playTone(330, "sawtooth", 0.2, 0.2);
  setTimeout(() => playTone(220, "sawtooth", 0.3, 0.15), 150);
}

function playClickSound() {
  playTone(440, "sine", 0.08, 0.15);
}

function toggleSound() {
  soundOn = !soundOn;
  const icon = soundOn ? "🔊" : "🔇";
  document.getElementById("soundToggle").textContent = icon;
  document.getElementById("soundToggle2").textContent = icon;
}

/* ============================================================
   NAVIGASI LAYAR
   ============================================================ */
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goToCategory() {
  playClickSound();
  buildCategoryGrid();
  showScreen("category");
}

/* ============================================================
   GRID KATEGORI
   ============================================================ */
function buildCategoryGrid() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";

  CATEGORIES.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-label">${cat.label}</span>
      <span class="cat-count">${cat.count} soal</span>
    `;
    card.onclick = () => startQuiz(cat);
    grid.appendChild(card);
  });
}

/* ============================================================
   LOGIKA KUIS
   ============================================================ */
function startQuiz(cat) {
  playClickSound();
  currentCategory = cat;
  currentQ = 0;
  score = 0;
  document.getElementById("scoreBadge").textContent = "⭐ 0";
  document.getElementById("quizCategoryLabel").textContent =
    cat.icon + " " + cat.label;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = currentCategory.questions[currentQ];
  const total = currentCategory.questions.length;

  // Update progress bar
  const pct = (currentQ / total) * 100;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressLabel").textContent =
    currentQ + 1 + " / " + total;

  // Render kartu soal
  document.getElementById("questionCard").innerHTML = `
    <div class="question-type-badge">${q.type}</div>
    <div class="question-text">${q.q}</div>
    <span class="question-img">${q.img}</span>
  `;

  // Reset hint
  const hintBox = document.getElementById("hintBox");
  hintBox.classList.remove("show");
  document.getElementById("hintText").textContent = q.hint;

  // Sembunyikan tombol Next
  document.getElementById("nextBtn").style.display = "none";

  // Render tombol jawaban
  const grid = document.getElementById("answersGrid");
  grid.innerHTML = "";
  const hasCols4 = q.options.length === 4 && !q.options[0].icon;
  grid.className = "answers-grid" + (hasCols4 ? " cols-4" : "");

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "ans-btn";
    btn.innerHTML = opt.icon
      ? `<span class="ans-icon">${opt.icon}</span><span>${opt.label}</span>`
      : `<span style="font-size:2rem">${opt.label}</span>`;
    btn.onclick = () => handleAnswer(idx, btn, q);
    grid.appendChild(btn);
  });
}

function handleAnswer(idx, btn, q) {
  if (answered) return;
  answered = true;
  playClickSound();

  const allBtns = document.querySelectorAll(".ans-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (idx === q.correct) {
    btn.classList.add("correct");
    score += 20;
    document.getElementById("scoreBadge").textContent = "⭐ " + score;
    showFeedback(true);
    playCorrectSound();
    spawnConfetti();
  } else {
    btn.classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
    showFeedback(false);
    playWrongSound();

    // Tampilkan modal petunjuk lembut
    setTimeout(() => {
      document.getElementById("modalTitle").textContent = "Hampir Benar! 😊";
      document.getElementById("modalBody").innerHTML =
        `Jawaban yang benar adalah <strong>${q.options[q.correct].label}</strong>.<br>💡 ${q.hint}`;
      document.getElementById("modalOverlay").classList.remove("hidden");
    }, 700);
  }

  setTimeout(() => {
    hideFeedback();
    document.getElementById("nextBtn").style.display = "";
  }, 1200);
}

/* Pesan acak feedback */
const CORRECT_MSGS = [
  "Hebat! 🌟",
  "Benar Sekali! 🎉",
  "Luar Biasa! ✨",
  "Pintar! 🏆",
  "Keren! 🚀",
];
const WRONG_MSGS = [
  "Hampir Benar! 😊",
  "Coba Lagi! 💪",
  "Semangat! 🌈",
  "Jangan Menyerah! ⭐",
];

function showFeedback(correct) {
  const el = document.getElementById("feedbackBanner");
  el.className = "feedback-banner " + (correct ? "correct" : "wrong");
  const msgs = correct ? CORRECT_MSGS : WRONG_MSGS;
  el.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  el.classList.add("show");
}

function hideFeedback() {
  document.getElementById("feedbackBanner").classList.remove("show");
}

function showHint() {
  playClickSound();
  document.getElementById("hintBox").classList.add("show");
}

function nextQuestion() {
  playClickSound();
  currentQ++;
  if (currentQ >= currentCategory.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

/* ============================================================
   LAYAR HASIL
   ============================================================ */
function showResult() {
  showScreen("result");

  const total = currentCategory.questions.length * 20;
  const pct = score / total;
  let title, msg, stars, owl;

  if (pct >= 1) {
    title = "SEMPURNA! 🏆";
    msg = "Selamat! Kamu mendapatkan nilai sempurna! Pertahankan terus ya!";
    stars = "⭐⭐⭐";
    owl = "🦉";
    playCorrectSound();
    spawnConfetti(120);
  } else if (pct >= 0.6) {
    title = "BAGUS SEKALI! 🌟";
    msg = "Kamu hebat! Terus belajar dan kamu bisa lebih baik lagi!";
    stars = "⭐⭐";
    owl = "🦉";
    playCorrectSound();
    spawnConfetti(60);
  } else {
    title = "TERUS SEMANGAT! 💪";
    msg = "Latihan terus ya! Semakin banyak belajar, semakin pintar!";
    stars = "⭐";
    owl = "😊";
    playTone(440, "sine", 0.5, 0.2);
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultScore").textContent = score;
  document.getElementById("resultMsg").textContent = msg;
  document.getElementById("resultStars").textContent = stars;
  document.getElementById("resultOwl").textContent = owl;
}

function repeatCategory() {
  playClickSound();
  startQuiz(currentCategory);
}

/* ============================================================
   CONFETTI
   ============================================================ */
function spawnConfetti(count = 60) {
  const colors = [
    "#F5C857",
    "#3A9AFF",
    "#FF6B6B",
    "#4CAF50",
    "#FF9800",
    "#9C27B0",
    "#E91E63",
  ];

  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.cssText = `
        left:${Math.random() * 100}vw;
        top:-10px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        width:${6 + Math.random() * 10}px;
        height:${6 + Math.random() * 10}px;
        border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
        animation-duration:${1.5 + Math.random() * 2.5}s;
        animation-delay:${Math.random() * 0.5}s;
        transform:rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 20);
  }
}

/* ============================================================
   MODAL
   ============================================================ */
function closeModal() {
  playClickSound();
  document.getElementById("modalOverlay").classList.add("hidden");
}

/* ============================================================
   INIT – jalankan saat halaman siap
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  buildCategoryGrid();
});
