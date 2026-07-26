




let btn_stil_ber = document.querySelector("#btn_stil_ber")

let bolalar = document.querySelectorAll(".bolalar")

btn_stil_ber.onclick = () => {
  bolalar.forEach((element) => {
    element.classList.toggle("bolaga_stil");
  }
  )
}











