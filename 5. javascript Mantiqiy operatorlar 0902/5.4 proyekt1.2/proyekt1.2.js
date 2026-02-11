function hisobla() {
	let name = document.getElementById("ism").value;
	let money = document.getElementById("summa").value;

	let customer = document.getElementById("mijoz_ismi");
	let total = document.getElementById("jami_summa");

	customer.innerHTML = name || "Hurmatli mijoz";
	money >= 100000 && (total.innerHTML = "Jami summa: " + money * 0.9 + "som");
	money < 100000 && (total.innerHTML = "Jami summa: " + money + "som");
}
