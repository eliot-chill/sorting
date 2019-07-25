class InsertionSort {
    constructor(collection) {
        this.collection = collection
        this.i = 1;
    }

    sort() {
        if (this.i < this.collection.bars.length) {
            let j = this.i;
            while (j > 0 && this.collection.bars[j - 1].value > this.collection.bars[j].value) {
                this.collection.swapBars(j, j - 1);
                j--;
            }

        }
        this.i++;
        if (this.i > this.collection.bars.length) {
            for (let k = 0; k < this.collection.bars.length; k++) {
                this.collection.bars[k].setState("sorted");
            }
        }
    }

}