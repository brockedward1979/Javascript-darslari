// 1. Dependency (Qaramlik) bo'ladigan turli xil ma'lumotlar
const userProfile = {
	title: "Nurbek Aliyev",
	description: "Full-stack dasturchi",
	category: "Foydalanuvchi",
};

const productInfo = {
	title: "Samsung S24 Ultra",
	description: "Narxi: 12,000,000 so'm",
	category: "Mahsulot",
};

// 2. Service ob'ekti
const uiManager = {
	container: document.getElementById("app"),

	// Method Injection: 'data' ob'ekti parametr orqali "inject" qilinadi
	displayCard: function (data) {
		// Metod o'ziga berilgan 'data' ichida nima borligini oldindan bilmaydi,
		// faqat uning strukturasiga tayanib ish bajaradi.
		this.container.innerHTML = `
					<div class="card">
							<small>${data.category}</small>
							<h2>${data.title}</h2>
							<p>${data.description}</p>
					</div>
			`;
	},
};

// 3. Hodisalarni bog'lash (Metodga dependency yuborish)
document.getElementById("btnUser").onclick = () => {
	// 'userProfile' ob'ektini metodga inject qilyapmiz
	uiManager.displayCard(userProfile);
};

document.getElementById("btnProduct").onclick = () => {
	// 'productInfo' ob'ektini metodga inject qilyapmiz
	uiManager.displayCard(productInfo);
};
