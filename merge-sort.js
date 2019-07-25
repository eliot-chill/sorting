class MergeSort{
    constructor(collection){
        this.collection = collection;
        this.i = 0;
        this.temporaryCollection = this.collection.bars.map(bar => [bar]);
    }

    sort(){
        if(this.temporaryCollection.length > 1){
            const oddNumbered = this.temporaryCollection.length % 2 !==0;
            let temp = [];

            for(let i = 0; i < this.temporaryCollection.length; i+=2){
                let a = this.temporaryCollection[i];
                let b = this.temporaryCollection[i+1];

                if(oddNumbered && i === (this.temporaryCollection.length -3)){
                    b = this.merge(b, this.temporaryCollection[i+2]);
                    i++;
                }
                temp.push(this.merge(a,b));
            }
            this.temporaryCollection = temp;
            this.collection.bars = [].concat.apply([], this.temporaryCollection);
        }
        if(this.temporaryCollection.length <= 1){
            for (let k = 0; k < this.collection.bars.length; k++) {
                this.collection.bars[k].setState("sorted");
            }
        }
        
    }
    
    merge(left, right){
        var result = [];
    
        while (left.length > 0 && right.length > 0){
            if (left[0].value < right[0].value){
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
    
        result = result.concat(left).concat(right);
        
        //make sure remaining arrays are empty
        left.splice(0, left.length);
        right.splice(0, right.length);
        
        return result;
    }
}