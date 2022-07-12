var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
if (d1 < d2) {
  document.querySelector("h1").innerHTML = "😎 Player 2 Wins";
} else if (d1 > d2) {
  document.querySelector("h1").innerHTML = "😎 Player 1 Wins";
} else {
  document.querySelector("h1").innerHTML = "✌️ Draw";
}
var img1 = "dice" + d1 + ".png";
var img2 = "dice" + d2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);
