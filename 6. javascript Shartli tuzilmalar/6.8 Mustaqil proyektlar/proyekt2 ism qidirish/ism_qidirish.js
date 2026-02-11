function checkName() {
	// 1. Elementlarni ID orqali ushlash
	const inputField = document.getElementById("name-input");
	const resultText = document.getElementById("search-result");

	// 2. Ismlar Massivi (Array)
	const ismlar = ["ali", "vali", "gani", "admin"];

	// 3. Qiymatni olish va Nullish Coalescing (??) orqali default qiymat berish
	let searchName = inputField.value ?? "";

	// Matnni tozalash va kichik harfga o'tkazish
	searchName = searchName.trim().toLowerCase();

	// 4. Boolean Kontekst: Agar input bo'sh bo'lsa
	if (!searchName) {
		resultText.innerText = "⚠️ Iltimos, ism kiriting!";
		resultText.style.color = "#d63031";
		return;
	}

	// 5. Massiv indekslari va Mantiqiy OR (||) operatori orqali tekshirish
	// Bu metodlar (includes/indexOf)ning "qo'lda" qilingan varianti
	const isFound =
		searchName === ismlar[0] ||
		searchName === ismlar[1] ||
		searchName === ismlar[2] ||
		searchName === ismlar[3];

	// 6. If-Else va Ternary operator orqali natijani chiqarish
	if (isFound) {
		// Ternary operator orqali rang va matn tanlash
		let isAdmin = searchName === "admin";

		resultText.innerText = isAdmin
			? "👑 Xush kelibsiz, Admin!"
			: "✅ Ism topildi: " + searchName;
		resultText.style.color = isAdmin ? "#6c5ce7" : "#00b894";
	} else {
		resultText.innerText = "❌ Ism topilmadi!";
		resultText.style.color = "#d63031";
	}
}
