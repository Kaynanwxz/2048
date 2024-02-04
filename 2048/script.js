const box = document.querySelectorAll("#box");
const score = document.getElementById('score');

for (let i = 0; i < box.length; i++) {
  box[i].innerHTML = `<h1 id="${i}"></h1>`;
}
let perdeu = 0;
let n1 = document.getElementById("0");
let n2 = document.getElementById("1");
let n3 = document.getElementById("2");
let n4 = document.getElementById("3");
let n5 = document.getElementById("4");
let n6 = document.getElementById("5");
let n7 = document.getElementById("6");
let n8 = document.getElementById("7");
let n9 = document.getElementById("8");
let n10 = document.getElementById("9");
let n11 = document.getElementById("10");
let n12 = document.getElementById("11");
let n13 = document.getElementById("12");
let n14 = document.getElementById("13");
let n15 = document.getElementById("14");
let n16 = document.getElementById("15");

let n = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16];

function pontos() {
  n.forEach(element => {
    if (parseInt(score.innerHTML) < parseInt(element.innerHTML)){
      score.innerHTML = parseInt(element.innerHTML)
    }
  });
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
random();
random();
pontos()



document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      mover("cima");
      break;

    case "ArrowRight":
      mover("direita");
      break;

    case "ArrowDown":
      mover("baixo");
      break;

    case "ArrowLeft":
      mover("esquerda");
      break;

    default:
      break;
  }
});

function mover(direcao) {
  switch (direcao) {
    case "cima":
      moverCima();
      break;
    case "direita":
      moverDireita();
      break;
    case "baixo":
      moverBaixo();
      break;
    case "esquerda":
      moverEsquerda();
      break;

    default:
      break;
  }
}

function cima(letra) {
  switch (letra) {

    //primeira camada
    case "a":
      if (n5.innerHTML != "") {
        if (n1.innerHTML != "") {
          if (n1.innerHTML == n5.innerHTML) {
            n1.innerHTML = parseInt(n5.innerHTML) + parseInt(n1.innerHTML);
            n5.innerHTML = "";
          }
        } else {
          n1.innerHTML = n5.innerHTML;
          n5.innerHTML = "";
        }
      }
      break;
    case "b":
      if (n6.innerHTML != "") {
        if (n2.innerHTML != "") {
          if (n2.innerHTML == n6.innerHTML) {
            n2.innerHTML = parseInt(n6.innerHTML) + parseInt(n2.innerHTML);
            n6.innerHTML = "";
          }
        } else {
          n2.innerHTML = n6.innerHTML;
          n6.innerHTML = "";
        }
      }
      break;
    case "c":
      if (n7.innerHTML != "") {
        if (n3.innerHTML != "") {
          if (n3.innerHTML == n7.innerHTML) {
            n3.innerHTML = parseInt(n7.innerHTML) + parseInt(n3.innerHTML);
            n7.innerHTML = "";
          }
        } else {
          n3.innerHTML = n7.innerHTML;
          n7.innerHTML = "";
        }
      }
      break;
    case "d":
      if (n8.innerHTML != "") {
        if (n4.innerHTML != "") {
          if (n4.innerHTML == n8.innerHTML) {
            n4.innerHTML = parseInt(n8.innerHTML) + parseInt(n4.innerHTML);
            n8.innerHTML = "";
          }
        } else {
          n4.innerHTML = n8.innerHTML;
          n8.innerHTML = "";
        }
      }
      break;

        //segunda camada
    case "e":
      if (n9.innerHTML != "") {
        if (n5.innerHTML != "") {
          if (n5.innerHTML == n9.innerHTML) {
            n5.innerHTML = parseInt(n9.innerHTML) + parseInt(n5.innerHTML);
            n9.innerHTML = "";
          }
        } else {
          n5.innerHTML = n9.innerHTML;
          n9.innerHTML = "";
          cima("a");
        }
      }
      break;
    case "f":
      if (n10.innerHTML != "") {
        if (n6.innerHTML != "") {
          if (n6.innerHTML == n10.innerHTML) {
            n6.innerHTML = parseInt(n10.innerHTML) + parseInt(n6.innerHTML);
            n10.innerHTML = "";
          }
        } else {
          n6.innerHTML = n10.innerHTML;
          n10.innerHTML = "";
          cima("b");
        }
      }
      break;
    case "g":
      if (n11.innerHTML != "") {
        if (n7.innerHTML != "") {
          if (n7.innerHTML == n11.innerHTML) {
            n7.innerHTML = parseInt(n11.innerHTML) + parseInt(n7.innerHTML);
            n11.innerHTML = "";
          }
        } else {
          n7.innerHTML = n11.innerHTML;
          n11.innerHTML = "";
          cima("c");
        }
      }
      break;
    case "h":
      if (n12.innerHTML != "") {
        if (n8.innerHTML != "") {
          if (n8.innerHTML == n12.innerHTML) {
            n8.innerHTML = parseInt(n12.innerHTML) + parseInt(n8.innerHTML);
            n12.innerHTML = "";
          }
        } else {
          n8.innerHTML = n12.innerHTML;
          n12.innerHTML = "";
          cima("d");
        }
      }
      break;
      //terceira camada
    case "i":
      if (n13.innerHTML != "") {
        if (n9.innerHTML != "") {
          if (n9.innerHTML == n13.innerHTML) {
            n9.innerHTML = parseInt(n13.innerHTML) + parseInt(n9.innerHTML);
            n13.innerHTML = "";
          }
        } else {
          n9.innerHTML = n13.innerHTML;
          n13.innerHTML = "";
          cima("e");
        }
      }
      break;
    case "j":
      if (n14.innerHTML != "") {
        if (n10.innerHTML != "") {
          if (n10.innerHTML == n14.innerHTML) {
            n10.innerHTML = parseInt(n14.innerHTML) + parseInt(n10.innerHTML);
            n14.innerHTML = "";
          }
        } else {
          n10.innerHTML = n14.innerHTML;
          n14.innerHTML = "";
          cima("f");
        }
      }
      break;
    case "k":
      if (n15.innerHTML != "") {
        if (n11.innerHTML != "") {
          if (n11.innerHTML == n15.innerHTML) {
            n11.innerHTML = parseInt(n15.innerHTML) + parseInt(n11.innerHTML);
            n15.innerHTML = "";
          }
        } else {
          n11.innerHTML = n15.innerHTML;
          n15.innerHTML = "";
          cima("g");
        }
      }
      break;
    case "l":
      if (n16.innerHTML != "") {
        if (n12.innerHTML != "") {
          if (n12.innerHTML == n16.innerHTML) {
            n12.innerHTML = parseInt(n16.innerHTML) + parseInt(n12.innerHTML);
            n16.innerHTML = "";
          }
        } else {
          n12.innerHTML = n16.innerHTML;
          n16.innerHTML = "";
          cima("h");
        }
      }
      break;
    default:
      break;
  }
}
function direita(letra) {
  switch (letra) {
    case "a":
      if (n3.innerHTML != "") {
        if (n4.innerHTML != "") {
          if (n4.innerHTML == n3.innerHTML) {
            n4.innerHTML = parseInt(n3.innerHTML) + parseInt(n4.innerHTML);
            n3.innerHTML = "";
          }
        } else {
          n4.innerHTML = n3.innerHTML;
          n3.innerHTML = "";
        }
      }
      break;
    case "b":
      if (n7.innerHTML != "") {
        if (n8.innerHTML != "") {
          if (n8.innerHTML == n7.innerHTML) {
            n8.innerHTML = parseInt(n7.innerHTML) + parseInt(n8.innerHTML);
            n7.innerHTML = "";
          }
        } else {
          n8.innerHTML = n7.innerHTML;
          n7.innerHTML = "";
        }
      }
      break;
    case "c":
      if (n11.innerHTML != "") {
        if (n12.innerHTML != "") {
          if (n12.innerHTML == n11.innerHTML) {
            n12.innerHTML = parseInt(n11.innerHTML) + parseInt(n12.innerHTML);
            n11.innerHTML = "";
          }
        } else {
          n12.innerHTML = n11.innerHTML;
          n11.innerHTML = "";
        }
      }
      break;
    case "d":
      if (n15.innerHTML != "") {
        if (n16.innerHTML != "") {
          if (n16.innerHTML == n15.innerHTML) {
            n16.innerHTML = parseInt(n15.innerHTML) + parseInt(n16.innerHTML);
            n15.innerHTML = "";
          }
        } else {
          n16.innerHTML = n15.innerHTML;
          n15.innerHTML = "";
        }
      }
      break;
    case "e":
      if (n2.innerHTML != "") {
        if (n3.innerHTML != "") {
          if (n3.innerHTML == n2.innerHTML) {
            n3.innerHTML = parseInt(n2.innerHTML) + parseInt(n3.innerHTML);
            n2.innerHTML = "";
          }
        } else {
          n3.innerHTML = n2.innerHTML;
          n2.innerHTML = "";
          direita("a");
        }
      }
      break;
    case "f":
      if (n6.innerHTML != "") {
        if (n7.innerHTML != "") {
          if (n7.innerHTML == n6.innerHTML) {
            n7.innerHTML = parseInt(n6.innerHTML) + parseInt(n7.innerHTML);
            n6.innerHTML = "";
          }
        } else {
          n7.innerHTML = n6.innerHTML;
          n6.innerHTML = "";
          direita("b");
        }
      }
      break;
    case "g":
      if (n10.innerHTML != "") {
        if (n11.innerHTML != "") {
          if (n11.innerHTML == n10.innerHTML) {
            n11.innerHTML = parseInt(n10.innerHTML) + parseInt(n11.innerHTML);
            n10.innerHTML = "";
          }
        } else {
          n11.innerHTML = n10.innerHTML;
          n10.innerHTML = "";
          direita("c");
        }
      }
      break;
    case "h":
      if (n14.innerHTML != "") {
        if (n15.innerHTML != "") {
          if (n15.innerHTML == n14.innerHTML) {
            n15.innerHTML = parseInt(n14.innerHTML) + parseInt(n15.innerHTML);
            n14.innerHTML = "";
          }
        } else {
          n15.innerHTML = n14.innerHTML;
          n14.innerHTML = "";
          direita("d");
        }
      }
      break;
    case "i":
      if (n1.innerHTML != "") {
        if (n2.innerHTML != "") {
          if (n2.innerHTML == n1.innerHTML) {
            n2.innerHTML = parseInt(n1.innerHTML) + parseInt(n2.innerHTML);
            n1.innerHTML = "";
          }
        } else {
          n2.innerHTML = n1.innerHTML;
          n1.innerHTML = "";
          direita("e");
        }
      }
      break;
    case "j":
      if (n5.innerHTML != "") {
        if (n6.innerHTML != "") {
          if (n6.innerHTML == n5.innerHTML) {
            n6.innerHTML = parseInt(n5.innerHTML) + parseInt(n6.innerHTML);
            n5.innerHTML = "";
          }
        } else {
          n6.innerHTML = n5.innerHTML;
          n5.innerHTML = "";
          direita("f");
        }
      }
      break;
    case "k":
      if (n9.innerHTML != "") {
        if (n10.innerHTML != "") {
          if (n10.innerHTML == n9.innerHTML) {
            n10.innerHTML = parseInt(n9.innerHTML) + parseInt(n10.innerHTML);
            n9.innerHTML = "";
          }
        } else {
          n10.innerHTML = n9.innerHTML;
          n9.innerHTML = "";
          direita("g");
        }
      }
      break;
    case "l":
      if (n13.innerHTML != "") {
        if (n14.innerHTML != "") {
          if (n14.innerHTML == n13.innerHTML) {
            n14.innerHTML = parseInt(n13.innerHTML) + parseInt(n14.innerHTML);
            n13.innerHTML = "";
          }
        } else {
          n14.innerHTML = n13.innerHTML;
          n13.innerHTML = "";
          direita("h");
        }
      }
      break;

    default:
      break;
  }
}
function baixo(letra) {
  switch (letra) {
    case "a":
      if (n9.innerHTML != "") {
        if (n13.innerHTML != "") {
          if (n13.innerHTML == n9.innerHTML) {
            n13.innerHTML = parseInt(n9.innerHTML) + parseInt(n13.innerHTML);
            n9.innerHTML = "";
          }
        } else {
          n13.innerHTML = n9.innerHTML;
          n9.innerHTML = "";
        }
      }
      break;
    case "b":
      if (n10.innerHTML != "") {
        if (n14.innerHTML != "") {
          if (n14.innerHTML == n10.innerHTML) {
            n14.innerHTML = parseInt(n10.innerHTML) + parseInt(n14.innerHTML);
            n10.innerHTML = "";
          }
        } else {
          n14.innerHTML = n10.innerHTML;
          n10.innerHTML = "";
        }
      }
      break;
    case "c":
      if (n11.innerHTML != "") {
        if (n15.innerHTML != "") {
          if (n15.innerHTML == n11.innerHTML) {
            n15.innerHTML = parseInt(n11.innerHTML) + parseInt(n15.innerHTML);
            n11.innerHTML = "";
          }
        } else {
          n15.innerHTML = n11.innerHTML;
          n11.innerHTML = "";
        }
      }
      break;
    case "d":
      if (n12.innerHTML != "") {
        if (n16.innerHTML != "") {
          if (n16.innerHTML == n12.innerHTML) {
            n16.innerHTML = parseInt(n12.innerHTML) + parseInt(n16.innerHTML);
            n12.innerHTML = "";
          }
        } else {
          n16.innerHTML = n12.innerHTML;
          n12.innerHTML = "";
        }
      }
      break;
    case "e":
      if (n5.innerHTML != "") {
        if (n9.innerHTML != "") {
          if (n9.innerHTML == n5.innerHTML) {
            n9.innerHTML = parseInt(n5.innerHTML) + parseInt(n9.innerHTML);
            n5.innerHTML = "";
          }
        } else {
          n9.innerHTML = n5.innerHTML;
          n5.innerHTML = "";
          baixo("a");
        }
      }
      break;
    case "f":
      if (n6.innerHTML != "") {
        if (n10.innerHTML != "") {
          if (n10.innerHTML == n6.innerHTML) {
            n10.innerHTML = parseInt(n6.innerHTML) + parseInt(n10.innerHTML);
            n6.innerHTML = "";
          }
        } else {
          n10.innerHTML = n6.innerHTML;
          n6.innerHTML = "";
          baixo("b");
        }
      }
      break;
    case "g":
      if (n7.innerHTML != "") {
        if (n11.innerHTML != "") {
          if (n11.innerHTML == n7.innerHTML) {
            n11.innerHTML = parseInt(n7.innerHTML) + parseInt(n11.innerHTML);
            n7.innerHTML = "";
          }
        } else {
          n11.innerHTML = n7.innerHTML;
          n7.innerHTML = "";
          baixo("c");
        }
      }
      break;
    case "h":
      if (n8.innerHTML != "") {
        if (n12.innerHTML != "") {
          if (n12.innerHTML == n8.innerHTML) {
            n12.innerHTML = parseInt(n8.innerHTML) + parseInt(n12.innerHTML);
            n8.innerHTML = "";
          }
        } else {
          n12.innerHTML = n8.innerHTML;
          n8.innerHTML = "";
          baixo("d");
        }
      }
      break;
    case "i":
      if (n1.innerHTML != "") {
        if (n5.innerHTML != "") {
          if (n5.innerHTML == n1.innerHTML) {
            n5.innerHTML = parseInt(n1.innerHTML) + parseInt(n5.innerHTML);
            n1.innerHTML = "";
          }
        } else {
          n5.innerHTML = n1.innerHTML;
          n1.innerHTML = "";
          baixo("e");
        }
      }
      break;
    case "j":
      if (n2.innerHTML != "") {
        if (n6.innerHTML != "") {
          if (n6.innerHTML == n2.innerHTML) {
            n6.innerHTML = parseInt(n2.innerHTML) + parseInt(n6.innerHTML);
            n2.innerHTML = "";
          }
        } else {
          n6.innerHTML = n2.innerHTML;
          n2.innerHTML = "";
          baixo("f");
        }
      }
      break;
    case "k":
      if (n3.innerHTML != "") {
        if (n7.innerHTML != "") {
          if (n7.innerHTML == n3.innerHTML) {
            n7.innerHTML = parseInt(n3.innerHTML) + parseInt(n7.innerHTML);
            n3.innerHTML = "";
          }
        } else {
          n7.innerHTML = n3.innerHTML;
          n3.innerHTML = "";
          baixo("g");
        }
      }
      break;
    case "l":
      if (n4.innerHTML != "") {
        if (n8.innerHTML != "") {
          if (n8.innerHTML == n4.innerHTML) {
            n8.innerHTML = parseInt(n4.innerHTML) + parseInt(n8.innerHTML);
            n4.innerHTML = "";
          }
        } else {
          n8.innerHTML = n4.innerHTML;
          n4.innerHTML = "";
          baixo("h");
        }
      }
      break;

    default:
      break;
  }
}
function esquerda(letra) {
  switch (letra) {
    case "a":
      if (n2.innerHTML != "") {
        if (n1.innerHTML != "") {
          if (n1.innerHTML == n2.innerHTML) {
            n1.innerHTML = parseInt(n2.innerHTML) + parseInt(n1.innerHTML);
            n2.innerHTML = "";
          }
        } else {
          n1.innerHTML = n2.innerHTML;
          n2.innerHTML = "";
        }
      }
      break;
    case "b":
      if (n6.innerHTML != "") {
        if (n5.innerHTML != "") {
          if (n5.innerHTML == n6.innerHTML) {
            n5.innerHTML = parseInt(n6.innerHTML) + parseInt(n5.innerHTML);
            n6.innerHTML = "";
          }
        } else {
          n5.innerHTML = n6.innerHTML;
          n6.innerHTML = "";
        }
      }
      break;
    case "c":
      if (n10.innerHTML != "") {
        if (n9.innerHTML != "") {
          if (n9.innerHTML == n10.innerHTML) {
            n9.innerHTML = parseInt(n10.innerHTML) + parseInt(n9.innerHTML);
            n10.innerHTML = "";
          }
        } else {
          n9.innerHTML = n10.innerHTML;
          n10.innerHTML = "";
        }
      }
      break;
    case "d":
      if (n14.innerHTML != "") {
        if (n13.innerHTML != "") {
          if (n13.innerHTML == n14.innerHTML) {
            n13.innerHTML = parseInt(n14.innerHTML) + parseInt(n13.innerHTML);
            n14.innerHTML = "";
          }
        } else {
          n13.innerHTML = n14.innerHTML;
          n14.innerHTML = "";
        }
      }
      break;
    case "e":
      if (n3.innerHTML != "") {
        if (n2.innerHTML != "") {
          if (n2.innerHTML == n3.innerHTML) {
            n2.innerHTML = parseInt(n3.innerHTML) + parseInt(n2.innerHTML);
            n3.innerHTML = "";
          }
        } else {
          n2.innerHTML = n3.innerHTML;
          n3.innerHTML = "";
          esquerda("a");
        }
      }
      break;
    case "f":
      if (n7.innerHTML != "") {
        if (n6.innerHTML != "") {
          if (n6.innerHTML == n7.innerHTML) {
            n6.innerHTML = parseInt(n7.innerHTML) + parseInt(n6.innerHTML);
            n7.innerHTML = "";
          }
        } else {
          n6.innerHTML = n7.innerHTML;
          n7.innerHTML = "";
          esquerda("b");
        }
      }
      break;
    case "g":
      if (n11.innerHTML != "") {
        if (n10.innerHTML != "") {
          if (n10.innerHTML == n11.innerHTML) {
            n10.innerHTML = parseInt(n11.innerHTML) + parseInt(n10.innerHTML);
            n11.innerHTML = "";
          }
        } else {
          n10.innerHTML = n11.innerHTML;
          n11.innerHTML = "";
          esquerda("c");
        }
      }
      break;
    case "h":
      if (n15.innerHTML != "") {
        if (n14.innerHTML != "") {
          if (n14.innerHTML == n15.innerHTML) {
            n14.innerHTML = parseInt(n15.innerHTML) + parseInt(n14.innerHTML);
            n15.innerHTML = "";
          }
        } else {
          n14.innerHTML = n15.innerHTML;
          n15.innerHTML = "";
          esquerda("d");
        }
      }
      break;
    case "i":
      if (n4.innerHTML != "") {
        if (n3.innerHTML != "") {
          if (n3.innerHTML == n4.innerHTML) {
            n3.innerHTML = parseInt(n4.innerHTML) + parseInt(n3.innerHTML);
            n4.innerHTML = "";
          }
        } else {
          n3.innerHTML = n4.innerHTML;
          n4.innerHTML = "";
          esquerda("e");
        }
      }
      break;
    case "j":
      if (n8.innerHTML != "") {
        if (n7.innerHTML != "") {
          if (n7.innerHTML == n8.innerHTML) {
            n7.innerHTML = parseInt(n8.innerHTML) + parseInt(n7.innerHTML);
            n8.innerHTML = "";
          }
        } else {
          n7.innerHTML = n8.innerHTML;
          n8.innerHTML = "";
          esquerda("f");
        }
      }
      break;
    case "k":
      if (n12.innerHTML != "") {
        if (n11.innerHTML != "") {
          if (n11.innerHTML == n12.innerHTML) {
            n11.innerHTML = parseInt(n12.innerHTML) + parseInt(n11.innerHTML);
            n12.innerHTML = "";
          }
        } else {
          n11.innerHTML = n12.innerHTML;
          n12.innerHTML = "";
          esquerda("g");
        }
      }
      break;
    case "l":
      if (n16.innerHTML != "") {
        if (n15.innerHTML != "") {
          if (n15.innerHTML == n16.innerHTML) {
            n15.innerHTML = parseInt(n16.innerHTML) + parseInt(n15.innerHTML);
            n16.innerHTML = "";
          }
        } else {
          n15.innerHTML = n16.innerHTML;
          n16.innerHTML = "";
          esquerda("h");
        }
      }
      break;

    default:
      break;
  }
}

function moverCima() {
  cima("a");
  cima("b");
  cima("c");
  cima("d");
  cima("e");
  cima("f");
  cima("g");
  cima("h");
  cima("i");
  cima("j");
  cima("k");
  cima("l");
  random();
  pontos()
}

function moverDireita() {
  direita("a");
  direita("b");
  direita("c");
  direita("d");
  direita("e");
  direita("f");
  direita("g");
  direita("h");
  direita("i");
  direita("j");
  direita("k");
  direita("l");
  random();
  pontos()
}
function moverBaixo() {
  baixo("a");
  baixo("b");
  baixo("c");
  baixo("d");
  baixo("e");
  baixo("f");
  baixo("g");
  baixo("h");
  baixo("i");
  baixo("j");
  baixo("k");
  baixo("l");
  random();
  pontos()
}
function moverEsquerda() {
  esquerda("a");
  esquerda("b");
  esquerda("c");
  esquerda("d");
  esquerda("e");
  esquerda("f");
  esquerda("g");
  esquerda("h");
  esquerda("i");
  esquerda("j");
  esquerda("k");
  esquerda("l");
  random();
  pontos()
}
