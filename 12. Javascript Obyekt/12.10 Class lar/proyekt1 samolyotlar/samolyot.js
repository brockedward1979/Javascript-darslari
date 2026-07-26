class Samalyot {
	constructor({ nomi, rasm, sarf, turi, narx = 12500 }) {
		this.nomi = nomi;
		this.rasm = rasm;
		this.sarf = sarf; // 1 km ga litr hisobida
		this.turi = turi;
		this.narx = narx;
	}

	// Umumiy yoqilg'i miqdorini hisoblash
	getLitr(km) {
		return km * this.sarf;
	}

	// Umumiy summani hisoblash va formatlash
	getSumma(km) {
		const jami = this.getLitr(km) * this.narx;
		return jami.toLocaleString("uz-UZ");
	}
}

// 10 ta real samolyot ma'lumotlari
const samolyotlar = [
	new Samalyot({
		nomi: "Cessna 172 Skyhawk",
		rasm: "./samolyotlar/cessna 172 skyhawk.jpg",
		sarf: 0.15,
		turi: "Yengil",
	}),
	new Samalyot({
		nomi: "Bombardier CRJ200",
		rasm: "./samolyotlar/Bombardier CRJ200.jpg",
		sarf: 3.2,
		turi: "Regional",
	}),
	new Samalyot({ 
		nomi: "Airbus A320neo", 
		rasm: "./samolyotlar/Airbus A320neo.jpg", 
		sarf: 3.7, 
		turi: "O'rta masofa" }),
	new Samalyot({ 
		nomi: "Boeing 737-800", 
		rasm: "./samolyotlar/Boeing 737-800.jpg", 
		sarf: 4.1, 
		turi: "O'rta masofa" }),
	new Samalyot({ 
		nomi: "Boeing 757-200", 
		rasm: "./samolyotlar/Boeing 757-200.jpg", 
		sarf: 6.4, 
		turi: "Keng fyuzelyaj" }),
	new Samalyot({ 
		nomi: "Airbus A350-900", 
		rasm: "./samolyotlar/Airbus A350-900.jpg", 
		sarf: 8.5, 
		turi: "Uzoq masofa" }),
	new Samalyot({ 
		nomi: "Boeing 787 Dreamliner", 
		rasm: "./samolyotlar/Boeing 787 Dreamliner.jpg", 
		sarf: 9.1, 
		turi: "Uzoq masofa" }),
	new Samalyot({ 
		nomi: "Boeing 777-300ER", 
		rasm: "./samolyotlar/Boeing 777-300ER.jpg", 
		sarf: 11.8, 
		turi: "Yirik" }),
	new Samalyot({ 
		nomi: "Boeing 747-8", 
		rasm: "./samolyotlar/Boeing 747-8.jpg", 
		sarf: 14.5, 
		turi: "Gigant" }),
	new Samalyot({ 
		nomi: "Airbus A380", 
		rasm: "./samolyotlar/Airbus A380.jpg", 
		sarf: 17.2, 
		turi: "Eng yirik" }),
];

const grid = document.getElementById("plane-grid");
const distanceInput = document.getElementById("distance");

function updateUI() {
	const km = parseFloat(distanceInput.value) || 0;
	grid.innerHTML = ""; // Ekranni tozalash

	samolyotlar.forEach((plane) => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
					<img src="${plane.rasm}" alt="${plane.nomi}">
					<div class="card-content">
							<h2>${plane.nomi}</h2>
							<div class="specs">
									<span>Turi: ${plane.turi}</span><br>
									<span>Sarf: ${plane.sarf} L/km</span>
							</div>
							<div class="cost-box">
									<span class="cost-label">${km} km uchun xarajat:</span>
									<span class="cost-value">${plane.getSumma(km)} so'm</span>
							</div>
					</div>
			`
		grid.appendChild(card);
	});
}

// Input o'zgarganda hisoblash
distanceInput.addEventListener("input", updateUI);

// Sahifa yuklanganda birinchi marta chiqarish
updateUI();
