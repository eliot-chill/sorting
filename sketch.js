let animate = false;
let barWidth = 10;
let fps = 10;

function baseCanvas(b, barWidth, fRate) {
  b.createCanvas(320, 240);
  b.frameRate(fRate);
  b.fill(102);
  b.strokeWeight(.5);
  b.c = new Collection(b, b.width, b.height, barWidth);
  b.c.generateBars();
  b.c.shuffleBars();
}

let bubble = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth, fps);
    b.bSort = new BubbleSort(b.c);
  }

  b.draw = function () {
    b.background(51);

    for (let i = 0; i < b.c.bars.length; i++) {
      b.c.bars[i].show(i * barWidth);
    }

    if (animate) {
      b.bSort.sort();
    }
  }
}

let selection = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth, fps);
    b.sSort = new SelectionSort(b.c);
  }

  b.draw = function () {
    b.background(51);

    for (let i = 0; i < b.c.bars.length; i++) {
      b.c.bars[i].show(i * barWidth);
    }

    if (animate) {
      b.sSort.sort();
    }
  }
}

let insertion = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth, fps);
    b.iSort = new InsertionSort(b.c);
  }

  b.draw = function () {
    b.background(51);
    for (let i = 0; i < b.c.bars.length; i++) {
      b.c.bars[i].show(i * barWidth);
    }
    if (animate) {
      b.iSort.sort();
    }
  }
}

let merge = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth, fps);
    b.mSort = new MergeSort(b.c);
  }

  b.draw = function () {
    b.background(51);
    for (let i = 0; i < b.c.bars.length; i++) {
      if (Array.isArray(b.c.bars[i])) {
        b.c.bars[i][0].show(i * barWidth);
      } else {
        b.c.bars[i].show(i * barWidth);
      }
    }
    if (animate) {
      b.mSort.sort();
    }
  }
}

let quick = function (b) {

  b.setup = function () {
    baseCanvas(b, barWidth, fps);
    b.qSort = new QuickSort(b.c);
  }

  b.draw = function () {
    b.background(51);
    for (let i = 0; i < b.c.bars.length; i++) {
      b.c.bars[i].show(i * barWidth);
    }
    if (animate) {
      b.qSort.sort();
    }
  }
}


let containers = [];

containers.push(new p5(bubble, "bubble"));
containers.push(new p5(selection, "selection"));
containers.push(new p5(insertion, "insertion"));
containers.push(new p5(merge, "merge"));
containers.push(new p5(quick, "quick"));




$('.play').click(function () {
  animate = !animate;
  var $this = $(this);
  if (animate) {
    $this.text('Pause');
  } else {
    $this.text('Play');
  }
});


$('.reset').click(function () {
  resetSketch();
});

function resetSketch() {
  animate = false;
  $('.play').text('Play');
  containers.forEach(container => {
    container.setup();
  });
}

$('.barWidth').change(function () {
  barWidth = $(this).val();
  resetSketch();
});

$('.frameRate').change(function() {
  changeFPS($(this).val());
  resetSketch();
});

function changeFPS(value){
  fps = parseInt(value);
}