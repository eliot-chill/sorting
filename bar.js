class Bar {
    constructor(currentSketch, x, y, h, w, value) {
        this.x = x;
        this.y = y
        this.h = h;
        this.w = w;
        this.value = value;
        this.active = undefined;
        this.currentSketch = currentSketch;
    }

    show() {
        if (this.active == "sorted") {
            this.currentSketch.push();
            this.currentSketch.fill(76, 175, 80);
            this.currentSketch.rect(this.x, this.y, this.w, this.h);
            this.currentSketch.pop();
        } else {
            this.currentSketch.rect(this.x, this.y, this.w, this.h);
        }
    }

    setState(state) {
        this.active = state;
    }
}