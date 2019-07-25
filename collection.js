class Collection {
    constructor(currentSketch, collectionWidth, collectionHeight, barWidth) {
        this.currentSketch = currentSketch
        this.collectionWidth = collectionWidth;
        this.collectionHeight = collectionHeight;
        this.barWidth = barWidth;
        this.bars = [];
    }

    generateBars() {
        for (let i = 0; i < this.currentSketch.round(this.collectionWidth / this.barWidth); i++) {
            this.bars.push(new Bar(
                this.currentSketch,
                i * this.barWidth,
                this.collectionHeight - ((this.collectionHeight / this.collectionWidth) * i * this.barWidth),
                (this.collectionHeight / this.collectionWidth) * i * this.barWidth,
                this.barWidth,
                i + 1
                ));
        }
    }

    shuffleBars() {
        for (let i = this.bars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.bars[i], this.bars[j]] = [this.bars[j], this.bars[i]];
            [this.bars[i].x, this.bars[j].x] = [this.bars[j].x, this.bars[i].x];
        }
    }

    swapBars(a, b) {
        [this.bars[a], this.bars[b]] = [this.bars[b], this.bars[a]];
        [this.bars[a].x, this.bars[b].x] = [this.bars[b].x, this.bars[a].x];
    }
}