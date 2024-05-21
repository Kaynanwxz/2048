const box = document.querySelectorAll("#box");
const score = document.getElementById("score");

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

function pontos() {
  random();
  random();
  n.forEach((element) => {
    parseInt(score.innerHTML) < parseInt(element.innerHTML) &&
      (score.innerHTML = parseInt(element.innerHTML));
  });
}
pontos();

document.addEventListener("keydown", (event) => {
  if (
    event.key == "ArrowUp" ||
    event.key == "ArrowRight" ||
    event.key == "ArrowDown" ||
    event.key == "ArrowLeft"
  ) {
    new rodar(event.key);

  }
});
function engrenagem(x, z) {
  if (x.innerHTML != "") {
    if (z.innerHTML != "") {
      if (z.innerHTML == x.innerHTML) {
        z.innerHTML = parseInt(x.innerHTML) + parseInt(z.innerHTML);
        x.innerHTML = "";
      }
    } else {
      z.innerHTML = x.innerHTML;
      x.innerHTML = "";
    }
  }
}
