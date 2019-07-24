function setup() {
  createCanvas(640, 480);
  frameRate(10);
  fill(102);
  c = new Collection(width, height, 10);
  c.generateBars();
  c.shuffleBars();
  bSort = new BubbleSort(c);
}

function draw() {
  background(51);
  c.bars.forEach(bar => {
    bar.show();
  });

  bSort.sort();
}
