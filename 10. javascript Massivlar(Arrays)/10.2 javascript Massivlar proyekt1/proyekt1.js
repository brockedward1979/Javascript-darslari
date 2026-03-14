// MASSIV: Har bir element bitta obyekt. Tartib raqami (indeks) 0 dan boshlanadi.
let stillar = [
	{
		bg_color: "#2c3e50",
		text_color: "yellow",
		border_radius: "0px",
		haqida: "Dark Mode: Klassik qora uslub",
		inner_html: "<h1 class='h1_lar'>Dark Mode</h1><p>Klassik qora uslub</p>",
	}, // Indeks: 0
	{
		bg_color: "orangeRed",
		text_color: "cyan",
		border_radius: "30px",
		haqida: "Soft Mode: Yumshoq burchaklar",
		inner_html: "<h1 class='h1_lar'>Soft Mode</h1><p>Yumshoq burchaklar</p>",

	}, // Indeks: 1
	{
		bg_color: "#00ff00",
		text_color: "#000000",
		border_radius: "100px 0px 100px 0px",
		haqida: "Neon Mode: G'ayritabiiy shakl",
		inner_html: "<h1 class='h1_lar'>Neon Mode</h1><p>G'ayritabiiy shakl</p>",
	}, // Indeks: 2
];


let quti = document.getElementById("quti");



// Bu yerda parametrli arrow function yaratdik va uni tanlangan_stil o'zgaruvchisiga tengladik. Bu funksiya tanlangan indeksni qabul qiladi va shu indeksga mos keladigan stilni quti elementiga qo'llaydi.

// MAQSAD: HTML qismida buttonlarning onclick hodisalarida bu tanlangan_stil funksiyasini parametrlar berib chaqiramiz va shu orqali quti elementining uslubini o'zgartiramiz.
// tanlangan_stil(0) -> 0 indeksdagi stilni quti elementiga qo'llaydi
// tanlangan_stil(1) -> 1 indeksdagi stilni quti elementiga qo'llaydi
// tanlangan_stil(2) -> 2 indeksdagi stilni quti elementiga qo'llaydi

// Bu stillar esa yuqoridagi massivda joylashgan obyektlar orqali aniqlanadi. Har bir obyektning bg_color, text_color, border_radius va inner_html xossalari quti elementining uslubini va ichidagi matnni o'zgartirish uchun ishlatiladi.

const tanlangan_stil = (tanlangan) => {

	quti.style.backgroundColor = stillar[tanlangan].bg_color;
	quti.style.color = stillar[tanlangan].text_color;
	quti.style.borderRadius = stillar[tanlangan].border_radius;
	quti.innerHTML = stillar[tanlangan].inner_html;


}








// const stilni_uzgartir = (massiv_indeksi) => {
// 	// 1. Massivdan indeks orqali obyektni olamiz
// 	// Bu massivning eng asosiy tushunchasi: styles[0], styles[1] va h.k.
// 	let tanlangan = stillar[massiv_indeksi];

// 	// 2. HTML elementlarini topamiz
// 	let div = document.getElementById("box");
// 	let text = document.getElementById("title");

// 	// 3. Obyekt ichidagi xossalarni (property) o'qib, CSS-ga beramiz
// 	div.style.backgroundColor = tanlangan.bg_color;
// 	div.style.color = tanlangan.text_color;
// 	div.style.borderRadius = tanlangan.border_radius;

// 	// 4. Matnni ham obyekt ichidagi tavsifga o'zgartiramiz
// 	text.innerText = selected.haqida;
// };
