let animate = false;

var bubble = function (b) {

  b.setup = function () {
    b.createCanvas(320, 240);
    b.frameRate(10);
    b.fill(102);
    b.c = new Collection(b, b.width, b.height, 10);
    b.c.generateBars();
    b.c.shuffleBars();
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

var selection = function (b) {

  b.setup = function () {
    b.createCanvas(320, 240);
    b.frameRate(10);
    b.fill(102);
    b.c = new Collection(b, b.width, b.height, 10);
    b.c.generateBars();
    b.c.shuffleBars();
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

var container1 = new p5(bubble, "bubble");
var container2 = new p5(selection, "selection");


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
  animate = false;
  $('.play').text('Play');
  container1.setup();
  container2.setup();
});
