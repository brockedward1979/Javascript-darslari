let content = document.getElementById("content");
let btn = document.getElementById("btn");

btn.onclick = function korsat() {
	for (let i = 1; i < 10; i++) {
		content.innerHTML += `<img src="./images/coffee${i}.jpg"  alt="Rasm ${i}">`;
	}
};
