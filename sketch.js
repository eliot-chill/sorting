var bubble = function (b) {

  b.setup = function () {
    b.createCanvas(640, 480);
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

    b.bSort.sort();
  }
}

var selection = function (b) {

  b.setup = function () {
    b.createCanvas(640, 480);
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

    b.sSort.sort();
  }
}

var myp5_1 = new p5(bubble);
var myp5_2 = new p5(selection);
//let myp5 = new p5(bubble);