class QuickSort {
    constructor(collection) {
        this.collection = collection
        this.i = 1;
        this.low = 0;
        this.high = this.collection.bars.length - 1;
        this.stack = [];
        this.top = -1;
        this.stack[++this.top] = this.low;
        this.stack[++this.top] = this.high;
    }

    sort() {
        if (this.top >= 0) {
            this.high = this.stack[this.top--];
            this.low = this.stack[this.top--];

            let p = this.partition(this.collection.bars, this.low, this.high)

            if (p - 1 > this.low) {
                this.stack[++this.top] = this.low;
                this.stack[++this.top] = p - 1;
            }

            if (p + 1 < this.high) {
                this.stack[++this.top] = p + 1;
                this.stack[++this.top] = this.high;
            }
        }
        if (this.top < 0) {
            for (let k = 0; k < this.collection.bars.length; k++) {
                this.collection.bars[k].setState("sorted");
            }
        }
    }

    partition(arr, low, high) {
        let temp;
        let pivot = arr[high];

        let i = (low - 1);

        for (let j = low; j <= high - 1; j++) {
            if (arr[j].value <= pivot.value) {
                i++;

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}