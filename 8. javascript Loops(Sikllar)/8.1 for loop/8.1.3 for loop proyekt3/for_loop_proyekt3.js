// 1. Savollar bazasi (JSON formatida)
const questions = [
	{ q: "5 + 5 necha bo'ladi?", a: 10 },
	{ q: "25 ning kvadrati nechaga teng?", a: 625 },
	{ q: "O'zbekiston mustaqilligi nechanchi yil?", a: 1991 },
	{ q: "1 soatda necha minut bor?", a: 60 },
];

// Savollarni ekranga chiqarish (Loop yordamida)
const quizArea = document.getElementById("quizArea");

for (let i = 0; i < questions.length; i++) {
	quizArea.innerHTML += `
			<div class="question-block">
					<p>${i + 1}. ${questions[i].q}</p>
					<input type="number" id="answer${i}" placeholder="Javobni yozing">
			</div>
	`;
}

function checkResults() {
	let correctCount = 0;

	// 2. FOR loop: Har bir savolni bittalab tekshiramiz
	for (let i = 0; i < questions.length; i++) {
		// 3. getElementById: Foydalanuvchi javobini olamiz
		const userInput = document.getElementById(`answer${i}`).value;

		// 4. Type Conversion: Inputdan kelgan matnni songa o'tkazamiz
		const convertedAnswer = Number(userInput);

		// 5. Taqqoslash operatori: To'g'ri javob bilan solishtiramiz
		if (convertedAnswer === questions[i].a) {
			correctCount++;
		}
	}

	showFinalScore(correctCount);
}

function showFinalScore(count) {
	const resultBox = document.getElementById("resultBox");
	const scoreText = document.getElementById("scoreText");
	const feedbackMsg = document.getElementById("feedbackMsg");

	// Natijani foizda hisoblash
	const percent = (count / questions.length) * 100;

	resultBox.classList.remove("hidden");
	document.getElementById("submitBtn").classList.add("hidden");

	scoreText.innerText = `Natija: ${count} / ${questions.length}`;

	// Taqqoslash orqali xulosa berish
	if (percent === 100) {
		feedbackMsg.innerText =
			"Ajoyib! Siz barcha savollarga to'g'ri javob berdingiz! 🏆";
		feedbackMsg.style.color = "green";
	} else if (percent >= 50) {
		feedbackMsg.innerText =
			"Yomon emas, bilimingizni oshirishda davom eting! 👍";
		feedbackMsg.style.color = "orange";
	} else {
		feedbackMsg.innerText = "Ko'proq tayyorlanishingiz kerak. 📚";
		feedbackMsg.style.color = "red";
	}
}
