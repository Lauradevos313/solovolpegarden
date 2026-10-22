/* Bron voor dit script: https://stackoverflow.com/questions/37751759/generating-a-random-link-through-javascript-html */
/* wanneer er op "play" wordt geklikt, wordt er een van deze 4 links geopent in hetzelfde tabblad */
var sites = [
  "https://minesweeperonline.com/",
  "https://dos.zone/microsoft-3d-pinball-space-cadet/",
  "https://playsnake.org",
  "https://youtu.be/dQw4w9WgXcQ?si=BR2DAPBB2RrRakdo",
];

function randomSite() {
  const a = document.createElement("test");
  var i = parseInt(Math.random() * sites.length);
  location.href = sites[i];
}

/* code voor als de gebruiker cookies niet accepteert op 1e bezoek van de pagina, de playknop wordt gedisabled*/
function testing() {
  var element = document.getElementById("playsite");
  element.classList.remove("disabled");
}

/* code van de webring.js */
function testForCookie(data = undefined) {
  // test for the existence of cookie
  if (localStorage.getItem(`consent`)) {
    console.log("Waarde consent cookie: " + localStorage.getItem(`consent`));
    return localStorage.getItem(`consent`);
  }
  return false;
}

function setCookie(data = undefined) {
  localStorage.setItem(`consent`, true);
  document.querySelector("body").classList.add("consent");
  // test of links al bestaan
  getWebringLinks();
  return true;
}

function unsetCookie(data = undefined) {
  localStorage.setItem(`consent`, false);
  document.querySelector("body").classList.remove("consent");
  return false;
}
