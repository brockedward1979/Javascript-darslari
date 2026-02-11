function checkOrder() {
	// 1. Ma'lumotlarni olish
	const mijoz_ismi = document.getElementById("ismi").value;
	const mahsulot_narxi = Number(document.getElementById("narxi").value);

	const default_ismi = document.getElementById("default_ismi");
	const chegirma_narxi = document.getElementById("narx_chegirma");
	const promoMsg = document.getElementById("promo-msg");

	// --- SHORT-CIRCUIT || (Default qiymat) ---
	// Agar ism kiritilmasa, "Hurmatli mijoz" deb yoziladi
	const mijoz = mijoz_ismi || "Hurmatli mijoz";
	default_ismi.innerText = "Mijoz: " + mijoz;

	// --- SHORT-CIRCUIT && (Amalni bajarish sharti) ---
	// Faqat summa 0 dan katta bo'lsagina, hisobni ko'rsatamiz
	mahsulot_narxi > 0 &&
		(chegirma_narxi.innerText = "Jami summa: " + mahsulot_narxi + " so'm");

	// --- MURAKKAB SHORT-CIRCUIT && (Chegirma mantiqi) ---
	// Agar summa 100,000 dan oshsa - 10% chegirma borligini ko'rsatamiz
	const chegirmaBormi = mahsulot_narxi >= 100000;

	// Matnni tozalash (eski xabar qolib ketmasligi uchun)
	promoMsg.innerText = "";

	// Faqat chegirmaga loyiq bo'lsa xabar chiqadi
	chegirmaBormi &&
		(promoMsg.innerText = "🎁 Tabriklaymiz! Sizga 10% chegirma berildi!");

	// Agar chegirma bo'lsa, yangi summani hisoblab ko'rsatamiz
	chegirmaBormi &&
		(chegirma_narxi.innerText =
			"Chegirma bilan: " + mahsulot_narxi * 0.9 + " so'm");

	// --- SHORT-CIRCUIT OGOHLANTIRISH ---
	// Summa kiritilmagan bo'lsa alert chiqarish

	mahsulot_narxi || alert("Iltimos, buyurtma summasini kiriting!");
}
