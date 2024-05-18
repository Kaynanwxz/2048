const box = document.querySelectorAll("#box");
const score = document.getElementById("score");

for (let i = 0; i < box.length; i++) {
  box[i].innerHTML = `<h1 id="${i}"></h1>`;
}

let n = [];
for (let i = 0; i <= 15; i++) {
  n.push(document.getElementById(i.toString()));
}

function pontos() {
  n.forEach((element) => {
    if (parseInt(score.innerHTML) < parseInt(element.innerHTML)) {
      score.innerHTML = parseInt(element.innerHTML);
    }
  });
  random();
  random();
}

function random() {
  let r = Math.floor(Math.random() * 16);
  let r2 = Math.floor(Math.random() * 100);
  if (r2 < 90) {
    r2 = 2;
  } else {
    r2 = 4;
  }
  if (n[r].innerHTML == "") {
    n[r].innerHTML = r2;
  } else {
    random();
  }
}
pontos();

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp" || "ArrowRight" || "ArrowDown" || "ArrowLeft") {
    for (let i = 1; i < 4; i++) {
      event.key == "ArrowUp" && cima(i);
      event.key == "ArrowRight" && direita(i);
      event.key == "ArrowDown" && baixo(i);
      event.key == "ArrowLeft" && esquerda(i);
    }
    pontos();
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
function cima(parte) {
  if (parte == 1) {
    for (let i = 0; i < 4; i++) {
      engrenagem(
        document.getElementById(`${i + 4}`),
        document.getElementById(`${i}`)
      );
    }
  }
  if (parte == 2) {
    for (let i = 0; i < 4; i++) {
      engrenagem(
        document.getElementById(`${i + 8}`),
        document.getElementById(`${i + 4}`)
      );
    }
    cima(1);
  }
  if (parte == 3) {
    for (let i = 0; i < 4; i++) {
      engrenagem(
        document.getElementById(`${i + 12}`),
        document.getElementById(`${i + 8}`)
      );
    }
    cima(2);
  }
}
function direita(parte) {
  if (parte == 1) {
    for (let i = 1; i < 5; i++) {
      engrenagem(
        document.getElementById(`${i * 4 - 2}`),
        document.getElementById(`${i * 4 - 1}`)
      );
    }
  }
  if (parte == 2) {
    for (let i = 1; i < 5; i++) {
      engrenagem(
        document.getElementById(`${i * 4 - 3}`),
        document.getElementById(`${i * 4 - 2}`)
      );
    }
    direita(1);
  }
  if (parte == 3) {
    for (let i = 1; i < 5; i++) {
      engrenagem(
        document.getElementById(`${i * 4 - 4}`),
        document.getElementById(`${i * 4 - 3}`)
      );
    }
    direita(2);
  }
}
function baixo(parte) {
  if (parte == 1) {
    for (let i = 0; i < 4; i++) {
      engrenagem(
        document.getElementById(`${i + 8}`),
        document.getElementById(`${i + 12}`)
      );
    }
  }
  if (parte == 2) {
    for (let i = 0; i < 4; i++) {
      engrenagem(
        document.getElementById(`${i + 4}`),
        document.getElementById(`${i + 8}`)
      );
    }
    baixo(1);
  }
  if (parte == 3) {
    for (let i = 0; i < 4; i++) {
      engrenagem(
        document.getElementById(`${i}`),
        document.getElementById(`${i + 4}`)
      );
    }
    baixo(2);
  }
}
function esquerda(parte) {
  if (parte == 1) {
    for (let i = 1; i < 5; i++) {
      engrenagem(
        document.getElementById(`${i * 4 - 3}`),
        document.getElementById(`${i * 4 - 4}`)
      );
    }
  }
  if (parte == 2) {
    for (let i = 1; i < 5; i++) {
      engrenagem(
        document.getElementById(`${i * 4 - 2}`),
        document.getElementById(`${i * 4 - 3}`)
      );
    }
    esquerda(1);
  }
  if (parte == 3) {
    for (let i = 1; i < 5; i++) {
      engrenagem(
        document.getElementById(`${i * 4 - 1}`),
        document.getElementById(`${i * 4 - 2}`)
      );
    }
    esquerda(2);
  }
}
