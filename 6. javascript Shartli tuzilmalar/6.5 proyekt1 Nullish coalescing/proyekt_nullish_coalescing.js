function processOrder() {
	let isHard = document.getElementById("hardcover").checked;
	let isColor = document.getElementById("colorImages").checked;
	let isEbook = document.getElementById("ebook").checked;
	let paper = document.getElementById("paperSelect").value;

	

	let total = 50000; // Baza narxi

	// 1. Checkboxlar narxini qo'shish
	total = total + (isHard ? 15000 : 0);
	total = total + (isColor ? 20000 : 0);
	total = total + (isEbook ? 10000 : 0);

	// 2. Qog'oz turi narxini qo'shish (Siz kutgan qism)
	// Bu yerda Nested Ternary ishlatamiz:
	// let paperPrice = (paper === "Premium") ? 5000 : paper === "Eco" ? 3000 : 0;

	let paperPrice;

	if (paper === "Premium") {
		paperPrice = 5000;
	} else if (paper === "Eco") {
		paperPrice = 3000;
	} else {
		paperPrice = 0;
	}

	total = total + paperPrice;

	// 3. Matnlarni aniqlash (Ternary + Nullish Coalescing)
	let format = (isEbook ? "Kitob + PDF" : null) ?? "Faqat kitob";
	let cover = (isHard ? "Qattiq muqova" : null) ?? "Yumshoq muqova";

	// 4. Qog'oz nomi (Nullish Coalescing)
	// (paper || null) yozishimizning sababi - select tanlanmasa "" (bo'sh) qaytadi,
	// Nullish esa faqat null ni taniydi. Shuning uchun "" ni null ga aylantiramiz.
	let paperName =
		(paper === "Premium"
			? "Oq qog'oz"
			: paper === "Eco"
			? "Sariq qog'oz"
			: null) ?? "Standart qog'oz";

	// 5. Natijani chiqarish
	document.getElementById("finalOptions").innerText =
		"Tanlov: " + format + ", " + cover;
	document.getElementById("finalPaper").innerText = "Qog'oz: " + paperName;
	document.getElementById("totalPrice").innerText =
		"Jami narx: " + total + " so'm";

	let status = total > 80000 ? "Status: VIP" : "Status: Oddiy";
	document.getElementById("statusTag").innerText = status;
}
