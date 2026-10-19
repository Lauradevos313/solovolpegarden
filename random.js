/* Bron voor dit script: https://stackoverflow.com/questions/37751759/generating-a-random-link-through-javascript-html */
var sites = [
  "https://minesweeperonline.com/",
  "https://dos.zone/microsoft-3d-pinball-space-cadet/",
  "https://playsnake.org",
  "https://youtu.be/dQw4w9WgXcQ?si=BR2DAPBB2RrRakdo",
];

function randomSite() {
  const a = document.createElement("a");
  var i = parseInt(Math.random() * sites.length);
  location.href = sites[i];
}
