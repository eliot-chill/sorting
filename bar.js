class Bar {
    constructor(currentSketch, y, h, w, value) {
        this.y = y
        this.h = h;
        this.w = w;
        this.value = value;
        this.active = undefined;
        this.currentSketch = currentSketch;
    }

    show(x) {
        if (this.active == "sorted") {
            this.currentSketch.push();
            this.currentSketch.fill(76, 175, 80);
            this.currentSketch.rect(x, this.y, this.w, this.h);
            this.currentSketch.pop();
        } else {
            this.currentSketch.rect(x, this.y, this.w, this.h);
        }
    }

    setState(state) {
        this.active = state;
    }
}