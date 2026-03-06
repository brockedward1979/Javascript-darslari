const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const userInp = document.getElementById("username");
const passInp = document.getElementById("password");

let urinishlar = 3; // Maksimal urinishlar soni
const user = "admin";
const password = "12345";

loginBtn.onclick = function () {
	let user = userInp.value.trim();
	let pass = passInp.value.trim();

	if (user === user && pass === password) {
		window.location.href = "home.html";
	} else {
		urinishlar--;

		if (urinishlar > 0) {
			message.innerHTML = `<span class="error">Xato! Imkoniyat: ${urinishlar}</span>`;
		} else {
			message.innerHTML = `<span class="error">Tizim bloklandi!</span>`;
			loginBtn.disabled = true;
			userInp.disabled = true;
			passInp.disabled = true;
		}
	}

	passInp.value = "";
};
