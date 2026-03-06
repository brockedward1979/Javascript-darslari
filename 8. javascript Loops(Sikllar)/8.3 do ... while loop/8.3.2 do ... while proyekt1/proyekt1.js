// Savollar bazasi
var questions = [
	{ q: "JS nima?", a: "Tilm", o: ["Tilm", "Taom", "Kiyim"] },
	{ q: "2*2?", a: "4", o: ["3", "4", "5"] },
	{ q: "O'zgaruvchi?", a: "let", o: ["let", "if", "for"] },
	{ q: "Massiv?", a: "[]", o: ["[]", "{}", "()"] },
	{ q: "Boolean?", a: "true", o: ["true", "10", "string"] },
	{ q: "Loop?", a: "while", o: ["while", "const", "var"] },
	{ q: "Function?", a: "function", o: ["func", "def", "function"] },
	{ q: "String?", a: "''", o: ["''", "12", "null"] },
	{ q: "Object?", a: "{}", o: ["{}", "[]", "void"] },
	{ q: "Undefined?", a: "undefined", o: ["0", "null", "undefined"] },
];

// Global holat (State)
var score = 0;
var attempts = 1;
var currentQuestionIdx = 0;
var isQuizActive = false;

function nextStep() {
	if (!isQuizActive) {
		startNewAttempt();
	}
}

function startNewAttempt() {
	isQuizActive = true;
	score = 0;
	currentQuestionIdx = 0;
	document.getElementById("main-btn").classList.add("hidden");
	updateUI();
	renderQuestion();
}

function renderQuestion() {
	var q = questions[currentQuestionIdx];
	document.getElementById("question-text").innerText = currentQuestionIdx + 1 + ". " + q.q;

	var optionsArea = document.getElementById("options-area");
	optionsArea.innerHTML = "";

	// Oddiy for sikli
	for (var i = 0; i < q.o.length; i++) {
		var btn = document.createElement("button");
		btn.className = "option-btn";
		btn.innerText = q.o[i];
		btn.setAttribute("onclick", "checkAnswer('" + q.o[i] + "')");
		optionsArea.appendChild(btn);
	}
}

function checkAnswer(userChoice) {
	if (userChoice === questions[currentQuestionIdx].a) {
		score++;
	}

	currentQuestionIdx++;
	updateUI();

	// 10-savoldan keyin tekshiruv
	if (currentQuestionIdx >= questions.length) {
		validateMastery();
	} else {
		renderQuestion();
	}
}

function validateMastery() {
	// MANA SHU YERDA DO-WHILE MANTIQI
	// Tizim ballni tekshiradi, agar 8 dan kam bo'lsa, hamma narsani
	// "Reset" qilib, qaytadan 'startNewAttempt' ga yuboradi.

	if (score < 8) {
		attempts++;
		document.getElementById("question-text").innerText = "Natija past (" + score + "). Qayta urinish boshlanmoqda!";
		document.getElementById("options-area").innerHTML = "";

		// setTimeout o'rniga foydalanuvchi "Qayta urinish" tugmasini bosishi shart
		var btn = document.getElementById("main-btn");
		btn.innerText = "QAYTA URINISH";
		btn.classList.remove("hidden");
		isQuizActive = false;
	} else {
		// Shart bajarildi: Ball >= 8
		document.getElementById("game-area").classList.add("hidden");
		document.getElementById("final-screen").classList.remove("hidden");
	}
}

function updateUI() {
	document.getElementById("score-ui").innerText = score;
	document.getElementById("attempt-ui").innerText = attempts;
}
