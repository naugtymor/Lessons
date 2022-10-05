class Goods2 extends Goods {
    constructor(a, b, c, d, e, f) {
        super(a, b, c, d, e)
        this.sale = f;
    }
    draw() {
        if (this.sale == true) {
            document.querySelector(this.out).innerHTML = `<div>SALES <span class="material-icons">${this.image}</span> ${this.name} ${this.amount}</div>`;
        }
        else {
            document.querySelector(this.out).innerHTML = `<div><span class="material-icons">${this.image}</span> ${this.name} ${this.amount}</div>`;
        }
    }
}