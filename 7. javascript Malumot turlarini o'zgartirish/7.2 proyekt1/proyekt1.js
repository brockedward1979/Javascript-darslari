const username = document.getElementById("username");
const age = document.getElementById("age");
const terms = document.getElementById("terms");
const checkBtn = document.getElementById("checkBtn");
let msg = document.getElementById("msg");

// Tekshirish funksiyasi
function validateForm() {
	// Boolean() yordamida har bir qiymatni tekshiramiz
	let isNameFilled = !!username.value; // trim() bo'sh joylarni olib tashlaydi
	let isAgeFilled = Boolean(age.value && Number(age.value) >= 18);
	let isTermsAccepted = Boolean(terms.checked);

	// Agar hamma shartlar true bo'lsa, disabled'ni olib tashlaymiz
	if (isNameFilled && isAgeFilled && isTermsAccepted) {
		checkBtn.disabled = false;
		checkBtn.style.opacity = "1"; // Tugmani yorqin qilish
		checkBtn.style.cursor = "pointer";

		msg.innerText = "Tasdiqlandi!!!";

		


	} else {
		checkBtn.disabled = true;
		checkBtn.style.opacity = "0.5"; // Tugmani xira qilish
		checkBtn.style.cursor = "not-allowed";

		msg.innerText = "Tasdiqlanmadi!!!";
	}
}

// Inputlarga "input" yoki "change" hodisasini bog'laymiz
username.oninput = validateForm;
age.oninput = validateForm;
terms.onchange = validateForm;

// Sahifa yuklanganda tugmani birinchi marta tekshirib qo'yamiz
validateForm();
