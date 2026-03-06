/* ============================================================
   CIÊNCIAS REVISADA — App Logic
   SPA routing, gamification, quiz engine
   ============================================================ */

// ---- State ----
let state = {
    name: '',
    xp: 0,
    watchedVideos: [],   // ["6ano-1-0", "7ano-2-1"]
    quizResults: {},     // { "6ano-1-0": { correct: 2, total: 3 } }
    badges: [],          // ["first_video", "first_quiz"]
    streak: 0,
    lastStudyDate: null,
    currentTurma: null,
    currentBimestre: null,
    currentVideoIndex: null
};

// ---- Init ----
function init() {
    loadState();
    if (state.name) {
        document.getElementById('navProfileBtn').style.display = 'flex';
        updateNavXP();
        navigateTo('turma');
    } else {
        navigateTo('welcome');
    }
}

// ---- LocalStorage ----
function saveState() {
    localStorage.setItem('cienciasRevisadaState', JSON.stringify(state));
}
function loadState() {
    const saved = localStorage.getItem('cienciasRevisadaState');
    if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
    }
}

// ---- Navigation ----
function navigateTo(screenName) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById('screen-' + screenName);
    if (screen) {
        screen.classList.remove('active');
        // Force re-trigger animation
        void screen.offsetWidth;
        screen.classList.add('active');
    }

    // Build screen content
    switch (screenName) {
        case 'turma': renderGrades(); break;
        case 'bimestre': renderBimestres(); break;
        case 'videos': renderVideos(); break;
        case 'player': renderPlayer(); break;
        case 'profile': renderProfile(); break;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Start App (Welcome screen) ----
function startApp() {
    const nameInput = document.getElementById('studentName');
    const name = nameInput.value.trim();
    if (!name) {
        nameInput.focus();
        nameInput.style.borderColor = '#ef4444';
        setTimeout(() => nameInput.style.borderColor = '', 1500);
        return;
    }
    state.name = name;
    updateStreak();
    saveState();
    document.getElementById('navProfileBtn').style.display = 'flex';
    updateNavXP();
    navigateTo('turma');
}

// Handle Enter key on name input
document.getElementById('studentName').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') startApp();
});

// ---- Render Grades ----
function renderGrades() {
    const grid = document.getElementById('gradeGrid');
    const colors = ['#7c3aed', '#3b82f6', '#f97316', '#ec4899'];
    let html = '';
    let i = 0;
    for (const [key, turma] of Object.entries(VIDEOS_DATA)) {
        const totalVideos = Object.values(turma.bimestres).reduce((acc, b) => acc + b.videos.length, 0);
        const watchedCount = state.watchedVideos.filter(v => v.startsWith(key + '-')).length;
        html += `
            <div class="grade-card" style="--card-color: ${colors[i % 4]}" onclick="selectTurma('${key}')">
                <span class="grade-emoji">${turma.emoji}</span>
                <div class="grade-name">${turma.nome}</div>
                <div class="grade-count">${watchedCount}/${totalVideos} vídeos assistidos</div>
            </div>
        `;
        i++;
    }
    grid.innerHTML = html;
}

// ---- Select Grade ----
function selectTurma(turmaKey) {
    state.currentTurma = turmaKey;
    navigateTo('bimestre');
}

// ---- Render Bimestres ----
function renderBimestres() {
    const turma = VIDEOS_DATA[state.currentTurma];
    if (!turma) return;

    document.getElementById('bimestreTitle').innerHTML =
        `${turma.emoji} ${turma.nome} — <span class="gradient-text">Bimestres</span>`;

    const grid = document.getElementById('bimestreGrid');
    let html = '';
    for (const [key, bim] of Object.entries(turma.bimestres)) {
        const totalVideos = bim.videos.length;
        const watchedCount = bim.videos.filter((_, idx) =>
            state.watchedVideos.includes(`${state.currentTurma}-${key}-${idx}`)
        ).length;
        html += `
            <div class="bimestre-card" style="--bim-color: ${bim.cor}" onclick="selectBimestre('${key}')">
                <span class="bimestre-icon">${bim.icone}</span>
                <div class="bimestre-name">${bim.titulo}</div>
                <div class="bimestre-videos">${watchedCount}/${totalVideos} vídeos</div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

// ---- Select Bimestre ----
function selectBimestre(bimestreKey) {
    state.currentBimestre = bimestreKey;
    navigateTo('videos');
}

// ---- Render Video Gallery ----
function renderVideos() {
    const turma = VIDEOS_DATA[state.currentTurma];
    const bimestre = turma?.bimestres[state.currentBimestre];
    if (!turma || !bimestre) return;

    document.getElementById('videosTitle').innerHTML =
        `${turma.nome} — ${bimestre.titulo}`;
    document.getElementById('videosSubtitle').textContent =
        `${bimestre.videos.length} vídeo(s) disponível(is) 🎯`;

    const grid = document.getElementById('videosGrid');
    let html = '';
    bimestre.videos.forEach((video, idx) => {
        const videoKey = `${state.currentTurma}-${state.currentBimestre}-${idx}`;
        const isWatched = state.watchedVideos.includes(videoKey);
        const quizDone = state.quizResults[videoKey];
        const thumbUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

        html += `
            <div class="video-card ${isWatched ? 'watched' : ''}" onclick="selectVideo(${idx})">
                <div class="video-thumb">
                    <img src="${thumbUrl}" alt="${video.titulo}" loading="lazy">
                    <div class="video-play-overlay">
                        <div class="video-play-icon"><i class="fas fa-play"></i></div>
                    </div>
                </div>
                <div class="video-info">
                    <h3>${video.titulo}</h3>
                    <div class="video-info-meta">
                        <span class="video-tag"><i class="fas fa-tag"></i> ${video.assunto}</span>
                        ${quizDone
                ? `<span class="video-xp">✅ Quiz: ${quizDone.correct}/${quizDone.total}</span>`
                : `<span class="video-xp">🎯 +${10 + video.perguntas.length * 20} XP</span>`
            }
                    </div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// ---- Select Video ----
function selectVideo(idx) {
    state.currentVideoIndex = idx;
    navigateTo('player');
}

// ---- Render Video Player ----
function renderPlayer() {
    const turma = VIDEOS_DATA[state.currentTurma];
    const bimestre = turma?.bimestres[state.currentBimestre];
    const video = bimestre?.videos[state.currentVideoIndex];
    if (!video) return;

    const videoKey = `${state.currentTurma}-${state.currentBimestre}-${state.currentVideoIndex}`;
    const isWatched = state.watchedVideos.includes(videoKey);

    // Set video
    document.getElementById('videoPlayer').src =
        `https://www.youtube.com/embed/${video.id}?rel=0`;
    document.getElementById('playerTitle').textContent = video.titulo;
    document.getElementById('playerSubject').innerHTML =
        `<i class="fas fa-tag"></i> ${video.assunto}`;

    // Watched button
    const btn = document.getElementById('watchedBtn');
    const btnText = document.getElementById('watchedBtnText');
    if (isWatched) {
        btn.classList.add('done-watching');
        btnText.textContent = '✅ Já assistido!';
    } else {
        btn.classList.remove('done-watching');
        btnText.textContent = 'Marcar como Assistido (+10 XP)';
    }

    // Quiz
    renderQuiz(video, videoKey);
}

// ---- Mark as Watched ----
function markAsWatched() {
    const videoKey = `${state.currentTurma}-${state.currentBimestre}-${state.currentVideoIndex}`;
    if (state.watchedVideos.includes(videoKey)) return;

    state.watchedVideos.push(videoKey);
    addXP(10, '🎬 Vídeo assistido!');

    const btn = document.getElementById('watchedBtn');
    const btnText = document.getElementById('watchedBtnText');
    btn.classList.add('done-watching');
    btnText.textContent = '✅ Já assistido!';

    // Check badges
    checkBadge('first_video', state.watchedVideos.length >= 1);
    checkBadge('five_videos', state.watchedVideos.length >= 5);
    checkBadge('ten_videos', state.watchedVideos.length >= 10);

    // Check if all videos in bimestre are watched
    const bimestre = VIDEOS_DATA[state.currentTurma].bimestres[state.currentBimestre];
    const allWatched = bimestre.videos.every((_, idx) =>
        state.watchedVideos.includes(`${state.currentTurma}-${state.currentBimestre}-${idx}`)
    );
    checkBadge('all_bimestre', allWatched);

    updateStreak();
    saveState();
    updateNavXP();
}

// ---- Quiz Engine ----
function renderQuiz(video, videoKey) {
    const container = document.getElementById('quizContent');
    const existingResult = state.quizResults[videoKey];

    if (existingResult) {
        // Show completed quiz summary
        const pct = Math.round((existingResult.correct / existingResult.total) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 70 ? '👏' : pct >= 50 ? '👍' : '📚';
        container.innerHTML = `
            <div class="quiz-result-summary">
                <div class="result-emoji">${emoji}</div>
                <h4>Quiz já respondido!</h4>
                <p>Você acertou ${existingResult.correct} de ${existingResult.total} perguntas</p>
                <div class="quiz-xp-earned">+${existingResult.correct * 20} XP ganhos</div>
            </div>
        `;
        return;
    }

    if (!video.perguntas || video.perguntas.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text-muted);">Nenhuma pergunta disponível para este vídeo.</p>';
        return;
    }

    let html = '';
    video.perguntas.forEach((q, qIdx) => {
        const letters = ['A', 'B', 'C', 'D', 'E'];
        html += `
            <div class="quiz-question-card" id="quizQ${qIdx}">
                <div class="quiz-q-number">Pergunta ${qIdx + 1}</div>
                <div class="quiz-q-text">${q.pergunta}</div>
                <div class="quiz-options">
                    ${q.opcoes.map((opt, oIdx) => `
                        <button class="quiz-option" 
                                data-question="${qIdx}" 
                                data-option="${oIdx}"
                                onclick="selectQuizOption(${qIdx}, ${oIdx})">
                            <span class="quiz-option-letter">${letters[oIdx]}</span>
                            <span>${opt}</span>
                        </button>
                    `).join('')}
                </div>
                <div id="quizFeedback${qIdx}"></div>
            </div>
        `;
    });

    html += `
        <button class="btn btn-primary" id="submitQuizBtn" onclick="submitQuiz()" style="width:100%;justify-content:center;margin-top:16px;">
            <i class="fas fa-check-circle"></i> Enviar Respostas
        </button>
    `;

    container.innerHTML = html;
}

// Track selected answers
let quizAnswers = {};

function selectQuizOption(questionIdx, optionIdx) {
    // Deselect other options for this question
    document.querySelectorAll(`[data-question="${questionIdx}"]`).forEach(btn => {
        btn.classList.remove('selected');
    });
    // Select this one
    const btn = document.querySelector(`[data-question="${questionIdx}"][data-option="${optionIdx}"]`);
    btn.classList.add('selected');
    quizAnswers[questionIdx] = optionIdx;
}

function submitQuiz() {
    const turma = VIDEOS_DATA[state.currentTurma];
    const bimestre = turma.bimestres[state.currentBimestre];
    const video = bimestre.videos[state.currentVideoIndex];
    const videoKey = `${state.currentTurma}-${state.currentBimestre}-${state.currentVideoIndex}`;

    const totalQuestions = video.perguntas.length;

    // Check if all questions answered
    if (Object.keys(quizAnswers).length < totalQuestions) {
        showToast('⚠️', 'Responda todas as perguntas antes de enviar!');
        return;
    }

    let correctCount = 0;

    video.perguntas.forEach((q, qIdx) => {
        const selected = quizAnswers[qIdx];
        const isCorrect = selected === q.correta;
        if (isCorrect) correctCount++;

        // Disable all options
        document.querySelectorAll(`[data-question="${qIdx}"]`).forEach(btn => {
            btn.classList.add('disabled');
            const optIdx = parseInt(btn.dataset.option);
            if (optIdx === q.correta) {
                btn.classList.add('correct');
            } else if (optIdx === selected && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Show feedback
        const feedbackEl = document.getElementById(`quizFeedback${qIdx}`);
        if (isCorrect) {
            feedbackEl.innerHTML = `<div class="quiz-feedback correct-feedback">✅ Correto! Parabéns!</div>`;
        } else {
            const letters = ['A', 'B', 'C', 'D', 'E'];
            feedbackEl.innerHTML = `<div class="quiz-feedback wrong-feedback">❌ A resposta correta é: ${letters[q.correta]}) ${q.opcoes[q.correta]}</div>`;
        }
    });

    // Save result
    state.quizResults[videoKey] = {
        correct: correctCount,
        total: totalQuestions
    };

    // Add XP for correct answers
    const xpEarned = correctCount * 20;
    if (xpEarned > 0) {
        addXP(xpEarned, `🧠 Quiz: ${correctCount}/${totalQuestions} corretas!`);
    }

    // Check badges
    checkBadge('first_quiz', Object.keys(state.quizResults).length >= 1);
    checkBadge('perfect_quiz', correctCount === totalQuestions);

    // Replace submit button with result
    const pct = Math.round((correctCount / totalQuestions) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 70 ? '👏' : pct >= 50 ? '👍' : '📚';
    document.getElementById('submitQuizBtn').outerHTML = `
        <div class="quiz-result-summary">
            <div class="result-emoji">${emoji}</div>
            <h4>${pct === 100 ? 'Perfeito!' : pct >= 70 ? 'Muito bem!' : pct >= 50 ? 'Bom trabalho!' : 'Continue estudando!'}</h4>
            <p>Você acertou ${correctCount} de ${totalQuestions} perguntas</p>
            <div class="quiz-xp-earned">+${xpEarned} XP</div>
        </div>
    `;

    quizAnswers = {};
    saveState();
    updateNavXP();
}

// ---- XP System ----
function addXP(amount, message) {
    const oldLevel = getLevel(state.xp);
    state.xp += amount;
    const newLevel = getLevel(state.xp);

    showToast('⭐', `${message} <span class="toast-xp">+${amount} XP</span>`);

    // Level up?
    if (newLevel.nome !== oldLevel.nome) {
        setTimeout(() => showLevelUpModal(newLevel), 800);
    }

    // XP badges
    checkBadge('xp_500', state.xp >= 500);
    checkBadge('xp_1000', state.xp >= 1000);

    saveState();
    updateNavXP();
}

function getLevel(xp) {
    let current = LEVELS[0];
    for (const level of LEVELS) {
        if (xp >= level.minXP) current = level;
        else break;
    }
    return current;
}

function getNextLevel(xp) {
    for (const level of LEVELS) {
        if (xp < level.minXP) return level;
    }
    return LEVELS[LEVELS.length - 1];
}

function getLevelProgress(xp) {
    const current = getLevel(xp);
    const next = getNextLevel(xp);
    if (current === next) return 100;
    const progress = ((xp - current.minXP) / (next.minXP - current.minXP)) * 100;
    return Math.min(100, Math.max(0, progress));
}

// ---- Update Nav XP ----
function updateNavXP() {
    document.getElementById('navXP').textContent = `${state.xp} XP`;
    document.getElementById('navXPFill').style.width = getLevelProgress(state.xp) + '%';
}

// ---- Streak System ----
function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastStudyDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (state.lastStudyDate === yesterday.toDateString()) {
        state.streak++;
    } else if (state.lastStudyDate !== today) {
        state.streak = 1;
    }

    state.lastStudyDate = today;

    checkBadge('streak_3', state.streak >= 3);
    checkBadge('streak_7', state.streak >= 7);

    saveState();
}

// ---- Badges ----
function checkBadge(badgeId, condition) {
    if (!condition) return;
    if (state.badges.includes(badgeId)) return;

    state.badges.push(badgeId);
    const badge = BADGES.find(b => b.id === badgeId);
    if (badge) {
        setTimeout(() => showBadgeModal(badge), 1200);
    }
    saveState();
}

// ---- Profile ----
function renderProfile() {
    document.getElementById('profileName').textContent = state.name;

    const level = getLevel(state.xp);
    const nextLevel = getNextLevel(state.xp);
    const progress = getLevelProgress(state.xp);

    document.getElementById('profileAvatar').textContent = level.emoji;
    document.getElementById('profileLevel').textContent = level.nome;
    document.getElementById('profileXPFill').style.width = progress + '%';
    document.getElementById('profileXPCurrent').textContent = state.xp;
    document.getElementById('profileXPNext').textContent = nextLevel.minXP;

    document.getElementById('statXP').textContent = state.xp;
    document.getElementById('statVideos').textContent = state.watchedVideos.length;
    document.getElementById('statQuizzes').textContent = Object.keys(state.quizResults).length;
    document.getElementById('statStreak').textContent = state.streak;

    // Badges
    const badgesGrid = document.getElementById('badgesGrid');
    badgesGrid.innerHTML = BADGES.map(badge => {
        const unlocked = state.badges.includes(badge.id);
        return `
            <div class="badge-item ${unlocked ? 'unlocked' : 'locked'}" title="${badge.desc}">
                <span class="badge-emoji">${badge.emoji}</span>
                <div class="badge-name">${badge.nome}</div>
            </div>
        `;
    }).join('');
}

// ---- Back Navigation ----
function goBackFromVideos() {
    navigateTo('bimestre');
}
function goBackFromPlayer() {
    quizAnswers = {};
    // Stop video when going back
    document.getElementById('videoPlayer').src = '';
    navigateTo('videos');
}

// ---- Toast Notification ----
function showToast(icon, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ---- Level Up Modal ----
function showLevelUpModal(level) {
    document.getElementById('newLevelName').textContent = `${level.emoji} ${level.nome}`;
    document.getElementById('levelUpModal').style.display = 'flex';
    createConfetti();
}
function closeLevelUpModal() {
    document.getElementById('levelUpModal').style.display = 'none';
}

// ---- Badge Modal ----
function showBadgeModal(badge) {
    document.getElementById('badgeModalIcon').textContent = badge.emoji;
    document.getElementById('badgeModalText').textContent = badge.desc;
    document.getElementById('badgeModal').style.display = 'flex';
}
function closeBadgeModal() {
    document.getElementById('badgeModal').style.display = 'none';
}

// ---- Confetti ----
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    container.innerHTML = '';
    const colors = ['#7c3aed', '#f97316', '#ec4899', '#10b981', '#3b82f6', '#eab308', '#ef4444'];
    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';
        container.appendChild(piece);
    }
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', init);
