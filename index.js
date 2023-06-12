// aboutsection
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// nav-bar rsponsivnes
var sideMenu = document.getElementById("sidemenu");
function openmenu() {
  sideMenu.style.right = "0";
}
function closemenu() {
  sideMenu.style.right = "-200px";
}

// form data sending in to google form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwL_hn7iOaeqyN11EG9pKHgRB7nJPuV03HpqwnhMK6CX6N0TvtivWmJIZUzE-YL9X7G/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent sucsussfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
