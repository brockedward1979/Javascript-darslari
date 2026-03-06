

let login = document.getElementById("login");
let parol = document.getElementById("parol");
let btn = document.getElementById("btn");

let message = document.getElementById("message");


let urinishlar = 3;

btn.onclick = function kirish(){

	
	

	

		if(login.value == "Sobirjon" && parol.value == "2010"){

			window.location.href = "dashboard.html";
		}
		else{
	
			message.innerHTML = "xato";
			urinishlar--;

			if(urinishlar == 0)
		btn.disabled = true;
		
		}

		login.value = "";
		parol.value = "";
		login.focus();



	
}