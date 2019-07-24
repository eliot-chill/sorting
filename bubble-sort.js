class BubbleSort{
    constructor(collection){
        this.collection = collection
        this.i = 0;
    }
    
    sort(){
        if (this.i < this.collection.bars.length) {
            for (let j = 0; j < this.collection.bars.length - this.i - 1; j++) {
              let a = this.collection.bars[j].value;
              let b = this.collection.bars[j + 1].value;
              if (a > b) {
                this.collection.swapBars(j, j + 1);
                
              }
            }
            this.collection.bars[this.collection.bars.length-this.i-1].setState("sorted");
          }
          else {
            noLoop();
          }
        this.i++;
        
    }
}