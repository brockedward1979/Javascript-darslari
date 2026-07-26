

let user1 = {
  ism: "Nurbek",
  yosh: 25,
  

}

let user2 = {
  ismi: "Aslbek",
  yoshi: 15
}



let btn_ochirish_knopkalari = Array.from(document.getElementsByClassName("btn_ochirish"))


let super_admin = {
  ismi: "Rashidbek",
  yoshi: 30,
  foydalanuvchini_admin_qilish: function(foydalanuvchi){

    btn_ochirish_knopkalari.forEach((knopka) => {
      knopka.style.visibility = "visible";

      foydalanuvchi.ochir = function(){
        knopka.onclick = () => {
          knopka.parentElement.remove()
        }
        
      }

      foydalanuvchi.ochir()

    }
    )



  }

}



let btn_admin = document.getElementById("btn_admin")

btn_admin.onclick = () => {
  super_admin.foydalanuvchini_admin_qilish(user1)
}








  







