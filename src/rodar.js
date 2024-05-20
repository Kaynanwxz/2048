class rodar {
  constructor(direction) {
    if (direction == "ArrowUp") {
      this.on(4, 0, true);
      this.on(8, 4, true);
      this.on(4, 0, true);
      this.on(12, 8, true);
      this.on(8, 4, true);
      this.on(4, 0, true);
    }
    if (direction == "ArrowRight") {
      this.on(2, 1, false);
      this.on(3, 2, false);
      this.on(2, 1, false);
      this.on(4, 3, false);
      this.on(3, 2, false);
      this.on(2, 1, false);
    }
    if (direction == "ArrowDown") {
      this.on(8, 12, true);
      this.on(4, 8, true);
      this.on(8, 12, true);
      this.on(0, 4, true);
      this.on(4, 8, true);
      this.on(8, 12, true);
    }
    if (direction == "ArrowLeft") {
      this.on(3, 4, false);
      this.on(2, 3, false);
      this.on(3, 4, false);
      this.on(1, 2, false);
      this.on(2, 3, false);
      this.on(3, 4, false);
    }
    pontos();
  }
  on(a, b, isPositive) {
    for (let i = 0; i < 4; i++) {
      isPositive == true
        ? engrenagem(
            document.getElementById(`${i + a}`),
            document.getElementById(`${i + b}`)
          )
        : engrenagem(
            document.getElementById(`${(i + 1) * 4 - a}`),
            document.getElementById(`${(i + 1) * 4 - b}`)
          );
    }
  }
}
