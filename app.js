// Lista de verbos irregulares
const irregularVerbs = [
    { infinitive: "be", past: "was/were", participle: "been", spanish: "ser/estar" },
    { infinitive: "beat", past: "beat", participle: "beaten", spanish: "golpear" },
    { infinitive: "become", past: "became", participle: "become", spanish: "convertirse" },
    { infinitive: "begin", past: "began", participle: "begun", spanish: "empezar" },
    { infinitive: "bite", past: "bit", participle: "bitten", spanish: "morder" },
    { infinitive: "blow", past: "blew", participle: "blown", spanish: "soplar" },
    { infinitive: "break", past: "broke", participle: "broken", spanish: "romper" },
    { infinitive: "bring", past: "brought", participle: "brought", spanish: "traer" },
    { infinitive: "burn", past: "burnt/burned", participle: "burnt/burned", spanish: "quemar" },
    { infinitive: "build", past: "built", participle: "built", spanish: "construir" },
    { infinitive: "buy", past: "bought", participle: "bought", spanish: "comprar" },
    { infinitive: "can", past: "could", participle: "—", spanish: "poder" },
    { infinitive: "catch", past: "caught", participle: "caught", spanish: "coger/atrapar" },
    { infinitive: "choose", past: "chose", participle: "chosen", spanish: "elegir" },
    { infinitive: "come", past: "came", participle: "come", spanish: "venir" },
    { infinitive: "cost", past: "cost", participle: "cost", spanish: "costar" },
    { infinitive: "cut", past: "cut", participle: "cut", spanish: "cortar" },
    { infinitive: "do", past: "did", participle: "done", spanish: "hacer" },
    { infinitive: "draw", past: "drew", participle: "drawn", spanish: "dibujar" },
    { infinitive: "dream", past: "dreamt/dreamed", participle: "dreamt/dreamed", spanish: "soñar" },
    { infinitive: "drink", past: "drank", participle: "drunk", spanish: "beber" },
    { infinitive: "drive", past: "drove", participle: "driven", spanish: "conducir" },
    { infinitive: "eat", past: "ate", participle: "eaten", spanish: "comer" },
    { infinitive: "fall", past: "fell", participle: "fallen", spanish: "caer" },
    { infinitive: "feed", past: "fed", participle: "fed", spanish: "alimentar" },
    { infinitive: "feel", past: "felt", participle: "felt", spanish: "sentir" },
    { infinitive: "fight", past: "fought", participle: "fought", spanish: "luchar/pelear" },
    { infinitive: "find", past: "found", participle: "found", spanish: "encontrar" },
    { infinitive: "fly", past: "flew", participle: "flown", spanish: "volar" },
    { infinitive: "forget", past: "forgot", participle: "forgotten", spanish: "olvidar" },
    { infinitive: "forgive", past: "forgave", participle: "forgiven", spanish: "perdonar" },
    { infinitive: "get", past: "got", participle: "got/gotten", spanish: "obtener/conseguir" },
    { infinitive: "give", past: "gave", participle: "given", spanish: "dar" },
    { infinitive: "go", past: "went", participle: "gone", spanish: "ir" },
    { infinitive: "grow", past: "grew", participle: "grown", spanish: "crecer" },
    { infinitive: "have", past: "had", participle: "had", spanish: "tener" },
    { infinitive: "hear", past: "heard", participle: "heard", spanish: "oír" },
    { infinitive: "hide", past: "hid", participle: "hidden", spanish: "esconder" },
    { infinitive: "hit", past: "hit", participle: "hit", spanish: "golpear" },
    { infinitive: "hold", past: "held", participle: "held", spanish: "sostener" },
    { infinitive: "keep", past: "kept", participle: "kept", spanish: "mantener/guardar" },
    { infinitive: "know", past: "knew", participle: "known", spanish: "saber/conocer" },
    { infinitive: "learn", past: "learnt/learned", participle: "learnt/learned", spanish: "aprender" },
    { infinitive: "leave", past: "left", participle: "left", spanish: "dejar/marcharse" },
    { infinitive: "lend", past: "lent", participle: "lent", spanish: "prestar" },
    { infinitive: "let", past: "let", participle: "let", spanish: "permitir/dejar" },
    { infinitive: "lie", past: "lay", participle: "lain", spanish: "tumbarse/yacer" },
    { infinitive: "lose", past: "lost", participle: "lost", spanish: "perder" },
    { infinitive: "make", past: "made", participle: "made", spanish: "hacer/fabricar" },
    { infinitive: "meet", past: "met", participle: "met", spanish: "conocer/encontrarse" },
    { infinitive: "pay", past: "paid", participle: "paid", spanish: "pagar" },
    { infinitive: "put", past: "put", participle: "put", spanish: "poner" },
    { infinitive: "read", past: "read", participle: "read", spanish: "leer" },
    { infinitive: "ride", past: "rode", participle: "ridden", spanish: "montar/conducir (bici, moto...)" },
    { infinitive: "ring", past: "rang", participle: "rung", spanish: "sonar/llamar por teléfono" },
    { infinitive: "run", past: "ran", participle: "run", spanish: "correr" },
    { infinitive: "say", past: "said", participle: "said", spanish: "decir" },
    { infinitive: "see", past: "saw", participle: "seen", spanish: "ver" },
    { infinitive: "sell", past: "sold", participle: "sold", spanish: "vender" },
    { infinitive: "send", past: "sent", participle: "sent", spanish: "enviar" },
    { infinitive: "set", past: "set", participle: "set", spanish: "colocar/establecer" },
    { infinitive: "shake", past: "shook", participle: "shaken", spanish: "agitar" },
    { infinitive: "shine", past: "shone", participle: "shone", spanish: "brillar" },
    { infinitive: "show", past: "showed", participle: "shown", spanish: "mostrar" },
    { infinitive: "shut", past: "shut", participle: "shut", spanish: "cerrar" },
    { infinitive: "sing", past: "sang", participle: "sung", spanish: "cantar" },
    { infinitive: "sit", past: "sat", participle: "sat", spanish: "sentarse" },
    { infinitive: "sleep", past: "slept", participle: "slept", spanish: "dormir" },
    { infinitive: "speak", past: "spoke", participle: "spoken", spanish: "hablar" },
    { infinitive: "spell", past: "spelt/spelled", participle: "spelt/spelled", spanish: "deletrear" },
    { infinitive: "spend", past: "spent", participle: "spent", spanish: "gastar/pasar (tiempo)" },
    { infinitive: "stand", past: "stood", participle: "stood", spanish: "estar de pie" },
    { infinitive: "steal", past: "stole", participle: "stolen", spanish: "robar" },
    { infinitive: "swim", past: "swam", participle: "swum", spanish: "nadar" },
    { infinitive: "take", past: "took", participle: "taken", spanish: "tomar/llevar" },
    { infinitive: "teach", past: "taught", participle: "taught", spanish: "enseñar" },
    { infinitive: "tell", past: "told", participle: "told", spanish: "decir/contar" },
    { infinitive: "think", past: "thought", participle: "thought", spanish: "pensar" },
    { infinitive: "throw", past: "threw", participle: "thrown", spanish: "lanzar/tirar" },
    { infinitive: "understand", past: "understood", participle: "understood", spanish: "entender" },
    { infinitive: "wake", past: "woke", participle: "woken", spanish: "despertar" },
    { infinitive: "wear", past: "wore", participle: "worn", spanish: "llevar puesto/vestir" },
    { infinitive: "win", past: "won", participle: "won", spanish: "ganar" },
    { infinitive: "write", past: "wrote", participle: "written", spanish: "escribir" }
];

// Variables del juego
let currentVerb = null;
let currentMode = null;
let usedVerbs = [];
let sessionVerbs = []; // Verbos para esta sesión
let correctCount = 0;
let incorrectCount = 0;
let streakCount = 0;
let maxStreak = 0;

// Almacenamiento local para estadísticas
const STORAGE_KEY = 'verbos-irregulares-stats';

// Obtener estadísticas del almacenamiento
function getStats() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    // Inicializar estadísticas para cada verbo
    const stats = {};
    irregularVerbs.forEach(verb => {
        stats[verb.infinitive] = {
            attempts: 0,
            correct: 0,
            incorrect: 0,
            lastAttempt: null
        };
    });
    return stats;
}

// Guardar estadísticas en el almacenamiento
function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

// Registrar un intento
function recordAttempt(verbInfinitive, isCorrect) {
    const stats = getStats();
    if (!stats[verbInfinitive]) {
        stats[verbInfinitive] = {
            attempts: 0,
            correct: 0,
            incorrect: 0,
            lastAttempt: null
        };
    }
    
    stats[verbInfinitive].attempts++;
    if (isCorrect) {
        stats[verbInfinitive].correct++;
    } else {
        stats[verbInfinitive].incorrect++;
    }
    stats[verbInfinitive].lastAttempt = new Date().toISOString();
    
    saveStats(stats);
}

// Obtener verbos más fallados
function getMostFailedVerbs(count = 20) {
    const stats = getStats();
    const verbsWithStats = irregularVerbs.map(verb => {
        const verbStats = stats[verb.infinitive] || { attempts: 0, correct: 0, incorrect: 0 };
        const failRate = verbStats.attempts > 0 ? verbStats.incorrect / verbStats.attempts : 0;
        return {
            verb: verb,
            stats: verbStats,
            failRate: failRate
        };
    });
    
    // Ordenar por tasa de fallo descendente, luego por número de intentos
    verbsWithStats.sort((a, b) => {
        if (b.failRate !== a.failRate) {
            return b.failRate - a.failRate;
        }
        return b.stats.attempts - a.stats.attempts;
    });
    
    // Filtrar solo los que tienen al menos un intento
    const withAttempts = verbsWithStats.filter(v => v.stats.attempts > 0);
    
    // Si no hay suficientes con intentos, devolver aleatorios
    if (withAttempts.length < count) {
        const remaining = count - withAttempts.length;
        const noAttempts = verbsWithStats.filter(v => v.stats.attempts === 0);
        const shuffled = noAttempts.sort(() => Math.random() - 0.5);
        return [...withAttempts.slice(0, count), ...shuffled.slice(0, remaining)].map(v => v.verb);
    }
    
    return withAttempts.slice(0, count).map(v => v.verb);
}

// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const studyScreen = document.getElementById('study-screen');
const promptText = document.getElementById('prompt-text');
const givenVerb = document.getElementById('given-verb');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const verbCountSelect = document.getElementById('verb-count');
const selectionModeSelect = document.getElementById('selection-mode');
const startPositionGroup = document.getElementById('start-position-group');
const startPositionInput = document.getElementById('start-position');
const keyboardLettersDiv = document.getElementById('keyboard-letters');

// Control del input activo
let activeInput = null;

// Event listeners para cambiar el input activo
input1.addEventListener('click', () => setActiveInput(input1));
input2.addEventListener('click', () => setActiveInput(input2));

// Establecer input activo
function setActiveInput(input) {
    activeInput = input;
    input1.classList.remove('active');
    input2.classList.remove('active');
    input.classList.add('active');
}

// Generar el teclado virtual con las letras necesarias
function generateKeyboard() {
    if (!currentVerb) return;
    
    // Obtener todas las letras únicas necesarias para las respuestas
    const correct1 = input1.dataset.correct.toLowerCase();
    const correct2 = input2.dataset.correct.toLowerCase();
    
    // Extraer letras únicas (ignorando espacios y caracteres especiales)
    const allText = (correct1 + correct2).replace(/[^a-z]/g, '');
    const uniqueLetters = [...new Set(allText.split(''))].sort();
    
    // Añadir algunas letras extra aleatorias para dificultar un poco
    const extraLetters = ['a', 'e', 'i', 'o', 'u', 's', 'r', 'n', 't', 'l'];
    const lettersToAdd = extraLetters.filter(l => !uniqueLetters.includes(l)).slice(0, 3);
    const allLetters = [...uniqueLetters, ...lettersToAdd].sort();
    
    // Generar botones
    keyboardLettersDiv.innerHTML = '';
    allLetters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'key-btn';
        btn.textContent = letter;
        btn.onclick = () => addLetter(letter);
        keyboardLettersDiv.appendChild(btn);
    });
    
    // Añadir botón para slash (para variantes como was/were)
    if (correct1.includes('/') || correct2.includes('/')) {
        const slashBtn = document.createElement('button');
        slashBtn.className = 'key-btn';
        slashBtn.textContent = '/';
        slashBtn.onclick = () => addLetter('/');
        keyboardLettersDiv.appendChild(slashBtn);
    }
    
    // Añadir botón para espacio
    const spaceBtn = document.createElement('button');
    spaceBtn.className = 'key-btn';
    spaceBtn.textContent = '␣';
    spaceBtn.title = 'Espacio';
    spaceBtn.onclick = () => addLetter(' ');
    keyboardLettersDiv.appendChild(spaceBtn);
    
    // Añadir botones de control (borrar y limpiar)
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'key-btn';
    deleteBtn.textContent = '⌫';
    deleteBtn.title = 'Borrar último carácter';
    deleteBtn.onclick = deleteLastChar;
    keyboardLettersDiv.appendChild(deleteBtn);
    
    const clearBtn = document.createElement('button');
    clearBtn.className = 'key-btn';
    clearBtn.textContent = '✕';
    clearBtn.title = 'Limpiar campo';
    clearBtn.onclick = clearCurrentInput;
    keyboardLettersDiv.appendChild(clearBtn);
}

// Añadir letra al input activo
function addLetter(letter) {
    if (!activeInput) {
        activeInput = input1;
        setActiveInput(input1);
    }
    
    activeInput.value += letter;
}

// Borrar último carácter
function deleteLastChar() {
    if (!activeInput) {
        activeInput = input1;
        setActiveInput(input1);
    }
    
    activeInput.value = activeInput.value.slice(0, -1);
}

// Limpiar input actual
function clearCurrentInput() {
    if (!activeInput) {
        activeInput = input1;
        setActiveInput(input1);
    }
    
    activeInput.value = '';
}

// Event listener para mostrar/ocultar posición inicial
selectionModeSelect.addEventListener('change', function() {
    if (this.value === 'sequential') {
        startPositionGroup.style.display = 'block';
    } else {
        startPositionGroup.style.display = 'none';
    }
});

// Función para normalizar respuestas (minúsculas y sin espacios extra)
function normalizeAnswer(answer) {
    return answer.toLowerCase().trim();
}

// Función para verificar si la respuesta es correcta (acepta múltiples variantes)
function isAnswerCorrect(userAnswer, correctAnswer) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);
    
    // Si la respuesta correcta tiene variantes (ej: "was/were", "got/gotten")
    if (normalizedCorrect.includes('/')) {
        const variants = normalizedCorrect.split('/');
        return variants.some(variant => normalizeAnswer(variant) === normalizedUser);
    }
    
    return normalizedUser === normalizedCorrect;
}

// Iniciar el juego
function startGame(mode) {
    currentMode = mode;
    
    // Configurar los verbos para esta sesión
    setupSessionVerbs();
    
    usedVerbs = [];
    correctCount = 0;
    incorrectCount = 0;
    streakCount = 0;
    maxStreak = 0;
    updateStats();
    
    startScreen.classList.remove('active');
    studyScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    nextVerb();
}

// Configurar verbos para la sesión
function setupSessionVerbs() {
    const verbCount = verbCountSelect.value;
    const selectionMode = selectionModeSelect.value;
    
    if (verbCount === 'all') {
        sessionVerbs = [...irregularVerbs];
    } else {
        const count = parseInt(verbCount);
        
        if (selectionMode === 'random') {
            // Selección aleatoria
            sessionVerbs = [];
            const availableVerbs = [...irregularVerbs];
            for (let i = 0; i < count && availableVerbs.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availableVerbs.length);
                sessionVerbs.push(availableVerbs[randomIndex]);
                availableVerbs.splice(randomIndex, 1);
            }
        } else if (selectionMode === 'sequential') {
            // Selección correlativa
            const startPos = parseInt(startPositionInput.value) - 1;
            const validStartPos = Math.max(0, Math.min(startPos, irregularVerbs.length - 1));
            sessionVerbs = [];
            
            for (let i = 0; i < count; i++) {
                const index = (validStartPos + i) % irregularVerbs.length;
                sessionVerbs.push(irregularVerbs[index]);
            }
        } else if (selectionMode === 'review') {
            // Modo repaso: verbos más fallados
            const reviewCount = Math.min(count, irregularVerbs.length);
            sessionVerbs = getMostFailedVerbs(reviewCount);
        }
    }
}

// Obtener el siguiente verbo
function nextVerb() {
    // Si se han usado todos los verbos de la sesión, terminar el juego
    if (usedVerbs.length >= sessionVerbs.length) {
        endGame();
        return;
    }
    
    // Seleccionar un verbo aleatorio que no se haya usado
    let randomVerb;
    do {
        randomVerb = sessionVerbs[Math.floor(Math.random() * sessionVerbs.length)];
    } while (usedVerbs.includes(randomVerb));
    
    usedVerbs.push(randomVerb);
    currentVerb = randomVerb;
    
    // Determinar qué forma mostrar según el modo
    let displayMode = currentMode;
    if (currentMode === 'random') {
        const modes = ['infinitive', 'past', 'participle'];
        displayMode = modes[Math.floor(Math.random() * modes.length)];
    }
    
    setupQuestion(displayMode);
    
    // Resetear inputs y feedback
    input1.value = '';
    input2.value = '';
    input1.classList.remove('correct', 'incorrect', 'active');
    input2.classList.remove('correct', 'incorrect', 'active');
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Establecer primer input como activo
    activeInput = input1;
    setActiveInput(input1);
    
    // Generar teclado virtual
    generateKeyboard();
    
    checkBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
}

// Configurar la pregunta según el modo
function setupQuestion(mode) {
    if (mode === 'infinitive') {
        promptText.textContent = `Escribe el pasado y participio de:`;
        givenVerb.textContent = currentVerb.infinitive;
        label1.textContent = `Pasado simple (Past Simple):`;
        label2.textContent = `Participio (Past Participle):`;
        input1.dataset.correct = currentVerb.past;
        input2.dataset.correct = currentVerb.participle;
    } else if (mode === 'past') {
        promptText.textContent = `Escribe el infinitivo y participio de:`;
        givenVerb.textContent = currentVerb.past;
        label1.textContent = `Infinitivo (Infinitive):`;
        label2.textContent = `Participio (Past Participle):`;
        input1.dataset.correct = currentVerb.infinitive;
        input2.dataset.correct = currentVerb.participle;
    } else if (mode === 'participle') {
        promptText.textContent = `Escribe el infinitivo y pasado de:`;
        givenVerb.textContent = currentVerb.participle;
        label1.textContent = `Infinitivo (Infinitive):`;
        label2.textContent = `Pasado simple (Past Simple):`;
        input1.dataset.correct = currentVerb.infinitive;
        input2.dataset.correct = currentVerb.past;
    }
}

// Comprobar la respuesta
function checkAnswer() {
    const answer1 = input1.value;
    const answer2 = input2.value;
    const correct1 = input1.dataset.correct;
    const correct2 = input2.dataset.correct;
    
    if (!answer1 || !answer2) {
        feedback.textContent = '⚠️ Por favor, completa ambos campos';
        feedback.className = 'feedback show-answer';
        return;
    }
    
    const isCorrect1 = isAnswerCorrect(answer1, correct1);
    const isCorrect2 = isAnswerCorrect(answer2, correct2);
    
    if (isCorrect1) {
        input1.classList.add('correct');
        input1.classList.remove('incorrect');
    } else {
        input1.classList.add('incorrect');
        input1.classList.remove('correct');
    }
    
    if (isCorrect2) {
        input2.classList.add('correct');
        input2.classList.remove('incorrect');
    } else {
        input2.classList.add('incorrect');
        input2.classList.remove('correct');
    }
    
    const isFullyCorrect = isCorrect1 && isCorrect2;
    
    // Registrar el intento
    recordAttempt(currentVerb.infinitive, isFullyCorrect);
    
    if (isFullyCorrect) {
        feedback.textContent = `¡Excelente! 🎉 (${currentVerb.spanish})`;
        feedback.className = 'feedback correct';
        correctCount++;
        streakCount++;
        maxStreak = Math.max(maxStreak, streakCount);
    } else {
        let message = '❌ ';
        if (!isCorrect1 && !isCorrect2) {
            message += `Respuestas incorrectas. Correcto: ${correct1} / ${correct2}`;
        } else if (!isCorrect1) {
            message += `Primera respuesta incorrecta. Correcto: ${correct1}`;
        } else {
            message += `Segunda respuesta incorrecta. Correcto: ${correct2}`;
        }
        message += ` (${currentVerb.spanish})`;
        feedback.textContent = message;
        feedback.className = 'feedback incorrect';
        incorrectCount++;
        streakCount = 0;
    }
    
    updateStats();
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    nextBtn.focus();
}

// Mostrar la respuesta sin registrar como correcta/incorrecta
function showAnswer() {
    const correct1 = input1.dataset.correct;
    const correct2 = input2.dataset.correct;
    
    input1.value = correct1;
    input2.value = correct2;
    
    feedback.textContent = `💡 Respuesta revelada: ${correct1} / ${correct2} (${currentVerb.spanish})`;
    feedback.className = 'feedback show-answer';
    
    // Registrar como incorrecto
    recordAttempt(currentVerb.infinitive, false);
    
    incorrectCount++;
    streakCount = 0;
    updateStats();
    
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    nextBtn.focus();
}

// Actualizar estadísticas
function updateStats() {
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('streak-count').textContent = streakCount;
}

// Terminar el juego
function endGame() {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    
    document.getElementById('final-correct').textContent = correctCount;
    document.getElementById('final-incorrect').textContent = incorrectCount;
    document.getElementById('final-streak').textContent = maxStreak;
}

// Volver al inicio
function backToStart() {
    startScreen.classList.add('active');
    gameScreen.classList.remove('active');
    endScreen.classList.remove('active');
    studyScreen.classList.remove('active');
    document.getElementById('stats-screen').classList.remove('active');
}

// Mostrar modo estudio
function showStudyMode() {
    startScreen.classList.remove('active');
    studyScreen.classList.add('active');
    populateTable();
}

// Mostrar modo estadísticas
function showStatsMode() {
    startScreen.classList.remove('active');
    document.getElementById('stats-screen').classList.add('active');
    populateStatsTable();
}

// Poblar la tabla de estadísticas
function populateStatsTable() {
    const tbody = document.getElementById('stats-table-body');
    tbody.innerHTML = '';
    
    const stats = getStats();
    
    // Crear array con estadísticas y ordenar por tasa de fallo
    const verbsWithStats = irregularVerbs.map(verb => {
        const verbStats = stats[verb.infinitive] || { attempts: 0, correct: 0, incorrect: 0 };
        const successRate = verbStats.attempts > 0 ? (verbStats.correct / verbStats.attempts) * 100 : 0;
        return {
            verb: verb,
            stats: verbStats,
            successRate: successRate
        };
    });
    
    // Ordenar: primero los que tienen intentos por tasa de éxito, luego los sin intentos
    verbsWithStats.sort((a, b) => {
        if (a.stats.attempts === 0 && b.stats.attempts === 0) return 0;
        if (a.stats.attempts === 0) return 1;
        if (b.stats.attempts === 0) return -1;
        return a.successRate - b.successRate;
    });
    
    verbsWithStats.forEach(item => {
        const row = document.createElement('tr');
        const successRate = item.successRate.toFixed(0);
        let rateClass = '';
        
        if (item.stats.attempts > 0) {
            if (item.successRate >= 80) {
                rateClass = 'success-rate-high';
            } else if (item.successRate >= 50) {
                rateClass = 'success-rate-medium';
            } else {
                rateClass = 'success-rate-low';
            }
        }
        
        row.innerHTML = `
            <td><strong>${item.verb.infinitive}</strong><br><small>${item.verb.spanish}</small></td>
            <td>${item.stats.attempts}</td>
            <td>${item.stats.correct}</td>
            <td>${item.stats.incorrect}</td>
            <td class="${rateClass}">${item.stats.attempts > 0 ? successRate + '%' : '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

// Borrar todas las estadísticas
function clearAllStats() {
    if (confirm('¿Estás segura de que quieres borrar todas las estadísticas? Esta acción no se puede deshacer.')) {
        localStorage.removeItem(STORAGE_KEY);
        populateStatsTable();
        alert('Estadísticas borradas correctamente.');
    }
}

// Poblar la tabla de verbos
function populateTable() {
    const tbody = document.getElementById('verbs-table-body');
    tbody.innerHTML = '';
    
    irregularVerbs.forEach((verb, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${verb.infinitive}</td>
            <td>${verb.past}</td>
            <td>${verb.participle}</td>
            <td>${verb.spanish}</td>
        `;
        tbody.appendChild(row);
    });
}

// Filtrar tabla por búsqueda
function filterTable() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const rows = document.querySelectorAll('#verbs-table tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    });
}