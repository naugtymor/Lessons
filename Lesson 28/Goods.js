class Goods {
    constructor(a, b, c, d, e) {
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
        this.out = e
    }
    draw() {
        document.querySelector(this.out).innerHTML = `<div><span class="material-icons">${this.image}</span> ${this.name} ${this.amount}</div>`;
    }
}