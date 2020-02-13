var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var imgs = [];
let count;
let circleWidth;
let maxCircleWidth = 400;

function preload() {
  for (var i = 0; i < 4; i++) {
    imgs[i] = loadImage("images/emoji/" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true,
  };

  count = 0;

  if (windowWidth / 2 < maxCircleWidth) {
    circleWidth = windowWidth / 2;
  } else {
    circleWidth = maxCircleWidth;
  }

  middle = Bodies.circle(
    windowWidth / 2,
    windowHeight / 2,
    circleWidth / 2,
    options
  );

  World.add(world, middle);
}

function mousePressed() {
  const randomHeight = random(1, 2) * 50;
  boxes.push(new Box(mouseX, mouseY, randomHeight, randomHeight, random(imgs)));
}

function draw() {
  background(250);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  ellipse(middle.position.x, middle.position.y, circleWidth, circleWidth);

  const randomHeight = random(1, 2) * 20;

  if (count > 3) {
    boxes.push(
      new Box(
        random(0, windowWidth),
        -100,
        randomHeight,
        randomHeight,
        random(imgs)
      )
    );
    count = 0;
  }
  count++;

  boxes.filter(function(box) {
    return box.x > windowHeight;
  });
}
