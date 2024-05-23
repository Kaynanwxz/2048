const box = document.querySelectorAll("#box");
const scoreView = document.getElementById("score");

for (let i = 0; i < box.length; i++) {
  box[i].innerHTML = `<h1 id="${i}"></h1>`;
}

let n = [];
for (let i = 0; i <= 15; i++) {
  n.push(document.getElementById(i.toString()));
}

function random() {
  let r = Math.floor(Math.random() * 16);
  let r2 = Math.floor(Math.random() * 100);
  r2 < 90 ? (r2 = 2) : (r2 = 4);
  n[r].innerHTML == "" ? (n[r].innerHTML = 2) : random();
}

function score() {
  random();
  random()
  n.forEach((element) => {
    parseInt(scoreView.innerHTML) < parseInt(element.innerHTML) &&
      (scoreView.innerHTML = parseInt(element.innerHTML));
  });
}
document.addEventListener("keydown", (event) => {
  event.key == "ArrowUp" && new turnOn(4, 0, 8, 4, 12, 8, true);
  event.key == "ArrowRight" && new turnOn(2, 1, 3, 2, 4, 3, false);
  event.key == "ArrowDown" && new turnOn(8, 12, 4, 8, 0, 8, true);
  event.key == "ArrowLeft" && new turnOn(3, 4, 2, 3, 1, 2, false);
});
score();
