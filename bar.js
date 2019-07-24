class Bar {
    constructor(x, y, h, w, value) {
        this.x = x;
        this.y = y
        this.h = h;
        this.w = w;
        this.value = value;
        this.active = undefined;
    }

    show() {
        if (this.active == "sorted") {
            push();
            fill(76, 175, 80);
            rect(this.x, this.y, this.w, this.h);
            pop();
        } else {
            rect(this.x, this.y, this.w, this.h);
        }
    }

    setState(state) {
        this.active = state;
    }
}