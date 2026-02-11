function hisobla() {
	let summa = Number(document.getElementById("summa").value);
	let natijaJoyi = document.getElementById("natija");

	// Zanjirsimon shartlar: Birinchisi to'g'ri kelsa, qolgani tashlab ketiladi
	if (summa >= 100000) {
		natijaJoyi.innerText = "💰 Sizga 20% chegirma berildi!";
		natijaJoyi.style.color = "green";
	} else if (summa >= 50000) {
		natijaJoyi.innerText = "💵 Sizga 10% chegirma berildi!";
		natijaJoyi.style.color = "blue";
	} else if (summa >= 10000) {
		natijaJoyi.innerText = "🎫 Sizga 5% chegirma berildi!";
		natijaJoyi.style.color = "orange";
	} else {
		natijaJoyi.innerText = "❌ Chegirma mavjud emas.";
		natijaJoyi.style.color = "red";
	}
}
