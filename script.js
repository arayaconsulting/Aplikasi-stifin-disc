// Data Pertanyaan DISC (Sesuai dengan file yang Anda berikan)
const quizQuestions = [
    {
        question: "1. Saat dihadapkan pada keputusan penting, saya cenderung:",
        options: [
            { text: "Mengambil keputusan cepat dan tegas", type: "D" },
            { text: "Berdiskusi dengan orang lain sebelum memutuskan", type: "I" },
            { text: "Menimbang perasaan semua pihak terlebih dahulu", type: "S" },
            { text: "Menganalisis data dan informasi sebelum memutuskan", type: "C" }
        ]
    },
    {
        question: "2. Dalam menghadapi konflik, saya biasanya:",
        options: [
            { text: "Menghadapinya secara langsung dan cepat", type: "D" },
            { text: "Berusaha mencairkan suasana dengan humor", type: "I" },
            { text: "Menenangkan semua orang agar tidak terjadi ketegangan", type: "S" },
            { text: "Mengumpulkan fakta sebelum menyimpulkan", type: "C" }
        ]
    },
    {
        question: "3. Ketika bekerja dalam tim, saya cenderung:",
        options: [
            { text: "Mengambil peran pemimpin dan mengarahkan", type: "D" },
            { text: "Menjaga semangat tim dan membangun hubungan", type: "I" },
            { text: "Menjadi pendengar dan penengah yang baik", type: "S" },
            { text: "Menjaga struktur dan memastikan ketepatan", type: "C" }
        ]
    },
    {
        question: "4. Saat menghadapi perubahan, saya biasanya:",
        options: [
            { text: "Segera bertindak dan menyesuaikan diri", type: "D" },
            { text: "Menyambut dengan antusias dan semangat baru", type: "I" },
            { text: "Membutuhkan waktu untuk merasa nyaman", type: "S" },
            { text: "Menganalisis terlebih dahulu dampaknya", type: "C" }
        ]
    },
    {
        question: "5. Gaya komunikasi saya lebih cenderung:",
        options: [
            { text: "Langsung, singkat, dan jelas", type: "D" },
            { text: "Ceria, ekspresif, dan spontan", type: "I" },
            { text: "Tenang, penuh empati, dan ramah", type: "S" },
            { text: "Terstruktur, sopan, dan berbasis data", type: "C" }
        ]
    },
    {
        question: "6. Dalam menghadapi tekanan deadline, saya:",
        options: [
            { text: "Fokus pada hasil dan cepat menyelesaikan tugas", type: "D" },
            { text: "Mencari bantuan atau mengajak kolaborasi", type: "I" },
            { text: "Menjaga suasana agar tetap tenang dan nyaman", type: "S" },
            { text: "Membuat daftar prioritas dan mengikuti langkah kerja", type: "C" }
        ]
    },
    {
        question: "7. Saat menyampaikan ide, saya lebih suka:",
        options: [
            { text: "Menyampaikan inti ide dengan tegas", type: "D" },
            { text: "Menceritakan dengan semangat dan antusiasme", type: "I" },
            { text: "Menyesuaikan cara bicara agar tidak menyinggung", type: "S" },
            { text: "Menyusun data pendukung sebelum berbicara", type: "C" }
        ]
    },
    {
        question: "8. Ketika bertugas di proyek baru, saya:",
        options: [
            { text: "Langsung mulai dan cari tantangan", type: "D" },
            { text: "Senang bertemu orang baru dan bekerja kelompok", type: "I" },
            { text: "Ingin tahu siapa saja yang akan saya bantu", type: "S" },
            { text: "Membaca semua panduan terlebih dahulu", type: "C" }
        ]
    },
    {
        question: "9. Jika ada masalah di tim, saya cenderung:",
        options: [
            { text: "Segera selesaikan dan ambil tindakan", type: "D" },
            { text: "Mencairkan suasana agar tidak tegang", type: "I" },
            { text: "Mendengarkan semua pihak terlebih dahulu", type: "S" },
            { text: "Mencari tahu penyebab pastinya dengan teliti", type: "C" }
        ]
    },
    {
        question: "10. Dalam mengambil keputusan penting, saya:",
        options: [
            { text: "Fokus pada hasil dan objektif", type: "D" },
            { text: "Melibatkan orang lain agar lebih dinamis", type: "I" },
            { text: "Memastikan semua orang nyaman", type: "S" },
            { text: "Berdasarkan data dan pertimbangan matang", type: "C" }
        ]
    },
    {
        question: "11. Dalam menyelesaikan tugas, saya:",
        options: [
            { text: "Suka tantangan dan hasil cepat", type: "D" },
            { text: "Butuh suasana menyenangkan", type: "I" },
            { text: "Perlu kenyamanan dan ritme stabil", type: "S" },
            { text: "Senang membuat checklist dan analisis", type: "C" }
        ]
    },
    {
        question: "12. Saat diskusi tim, saya:",
        options: [
            { text: "Menyampaikan pendapat dengan yakin", type: "D" },
            { text: "Antusias dan ekspresif", type: "I" },
            { text: "Mendukung dan menenangkan tim", type: "S" },
            { text: "Teliti dan hati-hati dalam berpendapat", type: "C" }
        ]
    },
    {
        question: "13. Ketika diberikan kebebasan, saya:",
        options: [
            { text: "Menentukan tujuan dan langsung bekerja", type: "D" },
            { text: "Mencari teman kerja dan kolaborasi", type: "I" },
            { text: "Menyesuaikan ritme dan membantu tim", type: "S" },
            { text: "Membuat rencana dan evaluasi risiko", type: "C" }
        ]
    },
    {
        question: "14. Gaya kerja saya lebih ke arah:",
        options: [
            { text: "Cepat, to the point, dan kompetitif", type: "D" },
            { text: "Energik, kreatif, dan spontan", type: "I" },
            { text: "Stabil, ramah, dan suportif", type: "S" },
            { text: "Teliti, logis, dan sistematis", type: "C" }
        ]
    },
    {
        question: "15. Jika tim dalam kondisi tidak ideal, saya:",
        options: [
            { text: "Tetap fokus dan dorong hasil", type: "D" },
            { text: "Menghibur agar semangat kembali", type: "I" },
            { text: "Menenangkan agar suasana kondusif", type: "S" },
            { text: "Analisis masalah dan cari akar penyebab", type: "C" }
        ]
    },
    {
        question: "16. Saat presentasi, saya:",
        options: [
            { text: "Langsung ke inti pesan dan solusi", type: "D" },
            { text: "Gunakan humor dan energi tinggi", type: "I" },
            { text: "Jaga suasana nyaman dan terhubung", type: "S" },
            { text: "Beri data, grafik, dan penjelasan runtut", type: "C" }
        ]
    },
    {
        question: "17. Jika atasan memberi kritik, saya:",
        options: [
            { text: "Terima dan segera perbaiki", type: "D" },
            { text: "Tanyakan sambil tersenyum", type: "I" },
            { text: "Pikirkan dulu dan renungkan", type: "S" },
            { text: "Catat dan evaluasi", type: "C" }
        ]
    },
    {
        question: "18. Dalam tim, saya dikenal sebagai orang yang:",
        options: [
            { text: "Tegas dan berani ambil keputusan", type: "D" },
            { text: "Ceria dan penuh semangat", type: "I" },
            { text: "Sabar dan penengah", type: "S" },
            { text: "Teliti dan detail", type: "C" }
        ]
    },
    {
        question: "19. Ketika mendapat tugas baru, saya:",
        options: [
            { text: "Ingin segera menyelesaikan sebaik mungkin", type: "D" },
            { text: "Cari teman kerja untuk diskusi", type: "I" },
            { text: "Lihat bagaimana dampaknya pada orang lain", type: "S" },
            { text: "Minta SOP dan instruksi terlebih dahulu", type: "C" }
        ]
    },
    {
        question: "20. Dalam situasi darurat, saya:",
        options: [
            { text: "Langsung bertindak", type: "D" },
            { text: "Ajak orang lain bekerja sama", type: "I" },
            { text: "Pastikan semua aman secara emosional", type: "S" },
            { text: "Pikirkan konsekuensi dan langkah terstruktur", type: "C" }
        ]
    },
    {
        question: "21. Saat bekerja, saya lebih suka:",
        options: [
            { text: "Tujuan yang jelas dan hasil cepat", type: "D" },
            { text: "Lingkungan seru dan tidak kaku", type: "I" },
            { text: "Ritme tenang dan tidak terburu-buru", type: "S" },
            { text: "Struktur kerja yang jelas dan detail", type: "C" }
        ]
    },
    {
        question: "22. Jika harus memilih peran, saya lebih suka:",
        options: [
            { text: "Pemimpin atau pengambil keputusan", type: "D" },
            { text: "Presenter atau penghubung tim", type: "I" },
            { text: "Pendengar dan penyeimbang", type: "S" },
            { text: "Pengelola data dan sistem kerja", type: "C" }
        ]
    },
    {
        question: "23. Saat diberi target tinggi, saya:",
        options: [
            { text: "Tertantang dan siap ngebut", type: "D" },
            { text: "Ajukan ide kreatif dan libatkan tim", type: "I" },
            { text: "Minta arahan jelas dan waktu stabil", type: "S" },
            { text: "Minta acuan data dan strategi jelas", type: "C" }
        ]
    },
    {
        question: "24. Kalau tim tidak kompak, saya akan:",
        options: [
            { text: "Tegur dan ambil alih kendali", type: "D" },
            { text: "Bikin games atau candaan", type: "I" },
            { text: "Dampingi yang merasa tertekan", type: "S" },
            { text: "Identifikasi masalah sistem dan peran", type: "C" }
        ]
    }
];

// Peta (Mapping) untuk nama lengkap DISC
const discNames = {
    "D": "Dominance",
    "I": "Influence",
    "S": "Steadiness",
    "C": "Conscientiousness"
};

// Data untuk hasil STIFIn (berdasarkan numerologi)
const stifinDescriptions = {
    1: { title: "Thinking introvert" },
    2: { title: "Feeling ekstrovert" },
    3: { title: "Sensing introvert" },
    4: { title: "Sensing ekstrovert" },
    5: { title: "Feeling introvert" },
    6: { title: "Intuiting ekstrovert" },
    7: { title: "Intuiting introvert" },
    8: { title: "Thinking ekstrovert" },
    9: { title: "Insting" }
};

// Variabel Kontrol
let currentQuestionIndex = 0;
let userAnswers = {};
let discScores = {
    "D": 0,
    "I": 0,
    "S": 0,
    "C": 0
};
let userName = "";
let birthDate = "";
let bloodType = "";

// Dapatkan Elemen HTML
const introContainer = document.getElementById('intro-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const userForm = document.getElementById('user-form');
const userNameInput = document.getElementById('user-name');
const birthDateInput = document.getElementById('birth-date');
const bloodTypeSelect = document.getElementById('blood-type');
const restartButton = document.getElementById('restart-button');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const progressBar = document.getElementById('progress-bar');

// Fungsi Utama
function calculateNumerology(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    let sum = day + month + year;
    
    function reduceToSingleDigit(number) {
        while (number > 9) {
            number = String(number).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return number;
    }
    
    return reduceToSingleDigit(sum);
}

function startQuiz() {
    introContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    userAnswers = {};
    discScores = { "D": 0, "I": 0, "S": 0, "C": 0 };
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionText.textContent = `(${currentQuestionIndex + 1}/24) ${currentQuestion.question}`;
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option-button');
            if (userAnswers[currentQuestionIndex] === option.type) {
                button.classList.add('selected');
            }
            button.addEventListener('click', () => selectAnswer(option.type));
            optionsContainer.appendChild(button);
        });

        prevButton.classList.toggle('hidden', currentQuestionIndex === 0);
        nextButton.textContent = currentQuestionIndex === quizQuestions.length - 1 ? 'Selesai' : 'Selanjutnya';
        
        const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

    } else {
        // Ini tidak akan dipanggil
    }
}

function selectAnswer(type) {
    userAnswers[currentQuestionIndex] = type;
    const buttons = optionsContainer.querySelectorAll('.option-button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    const selectedButton = Array.from(buttons).find(btn => btn.textContent === quizQuestions[currentQuestionIndex].options.find(opt => opt.type === type).text);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function calculateAndShowResult() {
    for (const key in userAnswers) {
        if (userAnswers.hasOwnProperty(key)) {
            discScores[userAnswers[key]]++;
        }
    }

    let dominantDiscType = '';
    let maxDiscScore = 0;
    for (const type in discScores) {
        if (discScores.hasOwnProperty(type) && discScores[type] > maxDiscScore) {
            maxDiscScore = discScores[type];
            dominantDiscType = type;
        }
    }
    
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');

    const numerologyNumber = calculateNumerology(birthDate);
    const stifinResult = stifinDescriptions[numerologyNumber].title;

    const dominantDiscName = discNames[dominantDiscType];
    
    resultTitle.textContent = `Hasil DISC Anda: ${dominantDiscName} & Hasil STIFIn Anda: ${stifinResult}`;
    resultDescription.textContent = "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama Mas Ali Mahfud.";
}

function restartQuiz() {
    resultContainer.classList.add('hidden');
    introContainer.classList.remove('hidden');
}

// Event Listeners
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    userName = userNameInput.value;
    birthDate = birthDateInput.value;
    bloodType = bloodTypeSelect.value;
    startQuiz();
});

restartButton.addEventListener('click', restartQuiz);
prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});
nextButton.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex]) {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            calculateAndShowResult();
        }
    } else {
        alert('Mohon pilih satu jawaban sebelum melanjutkan.');
    }
});
