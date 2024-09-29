//  function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

// function toggleMobileMenu(menu) {
//     menu.classList.toggle("open");
//     }

// const d = new Date();
// let year = d.getFullYear();
// document.getElementById("currentyear").innerHTML = year;

// let text = document.lastModified;
// document.getElementById("lastModified").innerHTML = text;
// note
// const $year = document.querySelector("#currentyear");
// const $lastModified = document.querySelector("#lastModified");
// const $btnBurguer = document.querySelector("#btnBurguer");
// const $navBar = document.querySelector("#navBar");

// const today = new Date();

// $year.innerHTML = today.getFullYear();
// $lastModified.innerHTML = "Last Modification: ${document.lastModified}";

// $btnBurguer.addEventListener("click", () => {
//   $navBar.classList.toggle("display");
//   if ($navBar.classList.contains("display")) {
//     $btnBurguer.textContent = "⛌";
//   } else {
//     $btnBurguer.textContent = "☰";
//   }
// });


const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;