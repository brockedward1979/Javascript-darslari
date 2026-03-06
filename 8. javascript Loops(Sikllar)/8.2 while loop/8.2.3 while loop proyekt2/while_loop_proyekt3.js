// 1. Ma'lumotlar bazasi
const questions = [
	{
		q: "Eng katta sayyora qaysi?",
		a: ["Yer", "Mars", "Yupiter", "Venera"],
		correct: "Yupiter",
	},
	{
		q: "JavaScript-da o'zgaruvchi e'lon qilish kalit so'zi?",
		a: ["var", "let", "const", "Hammasi"],
		correct: "Hammasi",
	},
	{
		q: "Dunyoning eng baland cho'qqisi?",
		a: ["Everest", "K2", "Kilimanjaro"],
		correct: "Everest",
	},
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question-text");
const optionsEl = document.getElementById("options");
const statusEl = document.getElementById("status");

// 2. Savolni ko'rsatish funksiyasi
function showQuestion() {
	if (currentIndex < questions.length) {
		let currentQ = questions[currentIndex];
		questionEl.innerText = currentQ.q;
		optionsEl.innerHTML = "";

		// WHILE sikli orqali javob tugmalarini chiqarish
		let i = 0;
		while (i < currentQ.a.length) {
			let option = currentQ.a[i];
			optionsEl.innerHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
			i++; // Sanoqni oshirish (WHILE uchun majburiy)
		}

		statusEl.innerText = "Savol: " + (currentIndex + 1) + " / " + questions.length;
	} else {
		showResult();
	}
}

// 3. Javobni tekshirish
function checkAnswer(selected) {
	if (selected === questions[currentIndex].correct) {
		score++;
	}
	currentIndex++;
	showQuestion();
}

// 4. Natijani ko'rsatish
function showResult() {
	questionEl.innerText = "O'yin tugadi! 🎊";
	optionsEl.innerHTML = "<h3>Natijangiz: " + questions.length + " tadan " + score + " ta to'g'ri</h3>";
	statusEl.innerText = "Natija hisoblandi.";

	optionsEl.innerHTML += `<button style="background-color: #2ecc71; color: white;" onclick="location.reload()">Qayta boshlash</button>`;
}

// Ishga tushirish
showQuestion();
