/*
 Outline of sort:
    1. Go through whole unsorted array
    2. Find smallest element
    3. Add to sorted array
    4. Repeat till unsorted array is empty
*/ 

class SelectionSort{
    constructor(collection)
    {
        this.collection = collection
        this.i = 0;
    }

    sort(){
        if (this.i < this.collection.bars.length){
            let min_value = this.i;
            for (let j = this.i; j < this.collection.bars.length; j++) {
                if (this.collection.bars[j].value < this.collection.bars[min_value].value){
                    min_value = j;
                }
            }
            this.collection.swapBars(this.i, min_value)
        this.collection.bars[this.i].setState("sorted");
        }
        
        this.i++;
    }
}