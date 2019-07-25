let animate = false;
let barWidth = 10;


function baseCanvas(b, barWidth) {
  b.createCanvas(320, 240);
  b.frameRate(10);
  b.fill(102);
  b.strokeWeight(.5);
  b.c = new Collection(b, b.width, b.height, barWidth);
  b.c.generateBars();
  b.c.shuffleBars();  
}

let bubble = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth);
    b.bSort = new BubbleSort(b.c);
  }

  b.draw = function () {
    b.background(51);
    b.c.bars.forEach(bar => {
      bar.show();
    });
    if(animate){
    b.bSort.sort();
  }
  }
}

let selection = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth);
    b.sSort = new SelectionSort(b.c);
  }

  b.draw = function () {
    b.background(51);
    b.c.bars.forEach(bar => {
      bar.show();
    });
    if(animate){
    b.sSort.sort();
    }
  }
}

let merge = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth);
    b.mSort = new MergeSort(b.c);
  }

  b.draw = function () {
    b.background(51);
    b.c.bars.forEach(bar => {
      if(Array.isArray(bar)){
        bar[0].show()}
        else {bar.show();
        }
    });
    if(animate){
    b.mSort.sort();
    }
  }
}


let containers = [];

containers.push(new p5(bubble, "bubble"))
containers.push(new p5(selection, "selection"))
containers.push(new p5(merge, "merge"))



$('.play').click(function(){
  animate = !animate;
  var $this = $(this);
  if(animate){
      $this.text('Pause');         
  } else {
      $this.text('Play');
  }
});


$('.reset').click(function(){
  resetSketch();
});

function resetSketch(){
  animate = false;
  $('.play').text('Play');
  containers.forEach(container => {
    container.setup();
  });
}

$('.barWidth').change(function(){
  barWidth = $(this).val();
  resetSketch();
});
