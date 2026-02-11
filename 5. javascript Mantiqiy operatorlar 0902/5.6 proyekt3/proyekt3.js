// // Mavzular obyekti (global)
const tema_data = {
	dark: { bg: "#121212", text: "#ffffff" },
	light: { bg: "#ffffff", text: "#000000" },
	green: { bg: "#2ecc71", text: "#ffffff" },
};

// // 1. Dark mavzu uchun funksiya
// function setDark() {
// 	const config = tema_data.dark;
// 	document.body.style.backgroundColor = config.bg;
// 	document.body.style.color = config.text;
// }

// // 2. Light mavzu uchun funksiya
// function setLight() {
// 	const config = tema_data.light;
// 	document.body.style.backgroundColor = config.bg;
// 	document.body.style.color = config.text;
// }

// // 3. Green mavzu uchun funksiya
// function setGreen() {
// 	const config = tema_data.green;
// 	document.body.style.backgroundColor = config.bg;
// 	document.body.style.color = config.text;
// }

// const mavzu = {
// 	light: { bg: "#ffffff", text: "#000000" },
// 	dark: { bg: "#121212", text: "#ffffff" },
// 	green: { bg: "#2ecc71", text: "#ffffff" },
// };

// function setLight() {
// 	const cfig = mavzu.light;
// 	dokument.body.style.backgroundColor = config.bg;
// 	ducument.body.style.color = config.text;
// }
let mavzu = document.getElementById("mavzu");
let buttons = document.getElementById("buttons");

let knopka = buttons.style;

function setRed() {
	document.body.style.backgroundColor = "red";
	mavzu.style.backgroundColor = "darkslategrey";
	mavzu.style.color = "white";
	mavzu.style.borderRadius = "10px";
	mavzu.style.padding = "10px";
	mavzu.style.textAlign = "center";
	mavzu.style.fontSize = "25px";
	mavzu.style.transition = "color 5s ease";

	knopka.display = "flex";
	knopka.flexDirection = "column";
	knopka.justifyContent = "center";
	knopka.alignItems = "center";
	knopka.gap = "10px";
	knopka.marginTop = "2px";

	knopka.backgroundColor = "darkslategrey";
	knopka.color = "white";
	knopka.padding = "12px 25px";
	knopka.border = "2px solid #ccc";
	knopka.borderRadius = "25px";
	knopka.cursor = "pointer";
	knopka.fontWeight = "bold";
	knopka.transition = "0.3s";

	knopka.transition = "background 5s ease, color 0.5s ease";
}

function setBlue() {
	document.body.style.backgroundColor = "blue";
	mavzu.style.color = "yellow";

	knopka.style.all = "initial";
}

function setGreen() {
	document.body.style.backgroundColor = "green";
	mavzu.style.color = "black";
}
