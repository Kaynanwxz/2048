class turnOn {
  constructor(a1, b1, a2, b2, a3, b3, isPositive) {
    this.on(a1, b1, isPositive);
    this.on(a2, b2, isPositive);
    this.on(a1, b1, isPositive);
    this.on(a3, b3, isPositive);
    this.on(a2, b2, isPositive);
    this.on(a1, b1, isPositive);
    score();
  }
  on(a, b, isPositive) {
    for (let i = 0; i < 4; i++) {
      isPositive == true
        ? this.move(
            document.getElementById(`${i + a}`),
            document.getElementById(`${i + b}`)
          )
        : this.move(
            document.getElementById(`${(i + 1) * 4 - a}`),
            document.getElementById(`${(i + 1) * 4 - b}`)
          );
    }
  }
  move(x, z) {
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
}
