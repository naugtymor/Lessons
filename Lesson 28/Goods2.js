class Goods2 extends Goods {
    constructor(a, b, c, d, e, f) {
        super(a, b, c, d, e)
        this.sale = f;
    }
    draw() {
        if (this.sale == true) {
            document.querySelector(this.out).innerHTML = `Sales`;
        }
        else {
            document.querySelector(this.out).innerHTML = `Sales not found`;
        }
    }
}