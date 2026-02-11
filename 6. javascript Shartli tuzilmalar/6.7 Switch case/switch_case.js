


let input = document.getElementById("input");
let select = document.getElementById("valyutalar");

let natija = document.getElementById("natija");


function hisobla(){

	switch(select.value){

		case "USD": natija.innerText = input.value*12800 + " UZS";
		break;

		case "EUR": natija.innerText = input.value*13900 + " UZS";
		break;

		case "RUB": natija.innerText = input.value*145 + " UZS";
		break;
	}

}
