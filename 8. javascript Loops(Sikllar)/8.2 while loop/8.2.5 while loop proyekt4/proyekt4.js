const savollar = [
	{ s: "HTML nima?", j: "Belgilash tili", o: ["Dasturlash tili", "Belgilash tili", "Brauzer"] },
	{ s: "JS nima?", j: "Script tili", o: ["Ma'lumotlar bazasi", "Dizayn", "Script tili"] },
	{ s: "CSS nima?", j: "Uslublar jadvali", o: ["Uslublar jadvali", "Protokol", "Server"] },
	// ... qolgan savollar
];

let index = 0,
	ball = 0;

function savolniChiqar() {
	if (index >= savollar.length) return tugatish();

	let joriy = savollar[index];
	document.getElementById("question").innerText = joriy.s;

	let variantlar = "";
	let i = 0;
	while (i < joriy.o.length) {
		variantlar += `<button onclick="javobBer('${joriy.o[i]}')">${joriy.o[i]}</button>`;
		i++;
	}
	document.getElementById("options").innerHTML = variantlar;
}

function javobBer(tanlov) {
	if (tanlov === savollar[index].j) ball++;
	index++;
	savolniChiqar();
}

function tugatish() {
	document.getElementById("quiz-box").innerHTML = `<h1>Natija: ${ball} / ${savollar.length}</h1>`;
}

savolniChiqar();
