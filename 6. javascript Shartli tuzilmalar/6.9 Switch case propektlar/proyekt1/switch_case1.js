const statusText = document.getElementById("status-text");
const messageText = document.getElementById("message-text");
const icon = document.getElementById("status-icon");
const progress = document.getElementById("progress-line");

// Parametrsiz funksiyalar - Har bir bosqich uchun
const stepAccepted = () => {
	statusText.innerText = "Qabul qilindi";
	messageText.innerText =
		"Sizning buyurtmangiz do'kon tomonidan qabul qilindi.";
	icon.innerText = "📑";
	progress.style.width = "33%";
	icon.style.transform = "scale(1.2)";
};

const stepShipped = () => {
	statusText.innerText = "Yo'lda";
	messageText.innerText = "Kuryer buyurtmani olib manzilingizga shoshilmoqda.";
	icon.innerText = "🚚";
	progress.style.width = "66%";
	icon.style.transform = "rotate(10deg)";
};

const stepDelivered = () => {
	statusText.innerText = "Yetkazib berildi";
	messageText.innerText =
		"Buyurtma manzilingizga yetib keldi. Yoqimli ishtaha!";
	icon.innerText = "🎁";
	progress.style.width = "100%";
	icon.style.transform = "bounce";
};

const resetOrder = () => {
	statusText.innerText = "Buyurtma berildi";
	messageText.innerText = "Harakatni boshlash uchun tugmalarni bosing.";
	icon.innerText = "📦";
	progress.style.width = "0%";
};

// DINAMIK BOSHQARUVCHI
function updateApp(action) {
	switch (action) {
		case "step1":
			stepAccepted();
			break;
		case "step2":
			stepShipped();
			break;
		case "step3":
			stepDelivered();
			break;
		case "reset":
			resetOrder();
			break;
		default:
			console.error("Noto'g'ri buyruq");
	}
}
