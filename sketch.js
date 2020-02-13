var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var emojis = [];
var imgs = [];
var pics = [];
let count;
let count2;
let circleWidth;
let maxCircleWidth = 400;
let minCircleWidth = 400;
let size;

function preload() {
  for (var i = 0; i < 6; i++) {
    emojis[i] = loadImage("images/emoji/" + i + ".png");
  }
  for (var i = 0; i < 7; i++) {
    pics[i] = loadImage("images/pics/" + i + ".jpeg");
  }
  for (var i = 0; i < 1; i++) {
    pics[i] = loadImage("images/pics/" + i + ".gif");
  }
  song = loadSound("sounds/sound.mp3");
  laser = loadSound("sounds/laser.mp3");
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
  count2 = 0;
  size = 0.1;

  if (windowWidth / 2 < maxCircleWidth) {
    circleWidth = windowWidth / 2;
  } else if (windowWidth / 2 > minCircleWidth) {
    circleWidth = minCircleWidth;
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
  song.play();
}

function mousePressed() {
  const randomHeight = random(1, 2) * 50;
  boxes.push(
    new Box(mouseX, mouseY, randomHeight, randomHeight, random(emojis))
  );
  laser.play();
}

function draw() {
  if (!song.isPlaying()) {
  }

  background(250);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill("#FFC0CB");
  rectMode(CENTER);
  ellipse(middle.position.x, middle.position.y, circleWidth, circleWidth);
  textSize(32 * size);
  fill(30);
  text(
    "Happy Valentines",
    windowWidth / 2 - 120 * size,
    windowHeight / 2 - 20 * size
  );
  textSize(50 * size);
  fill(20);
  text("Catherine", windowWidth / 2 - 110 * size, windowHeight / 2 + 50 * size);

  const randomHeight = random(1, 2) * 20;

  if (count > 50) {
    boxes.push(new Box(random(0, windowWidth), -100, 100, 150, random(pics)));
    count = 0;
  }
  count++;

  if (size < 1) {
    size += 0.01;
  }

  if (count2 > 2) {
    boxes.push(
      new Box(
        random(0, windowWidth),
        -100,
        randomHeight,
        randomHeight,
        random(emojis)
      )
    );
    count2 = 0;
  }
  count2++;

  boxes.filter(function(box) {
    return box.x > windowHeight;
  });
}
