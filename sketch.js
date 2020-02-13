var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var imgs = [];

function preload() {
  for (var i = 0; i < 1; i++) {
    imgs[i] = loadImage("images/emoji/" + i + ".jpg");
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

  ground = Bodies.circle(windowWidth / 2, windowHeight / 2, 40, options);

  World.add(world, ground);
}

function mousePressed() {
  boxes.push(
    new Box(
      mouseX,
      mouseY,
      random(10, 40),
      random(10, 40),
      imgs[random(0, imgs.length)]
    )
  );
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
  ellipse(ground.position.x, ground.position.y, 100, 100);

  // boxes.push(
  //   new Box(random(0, windowWidth), -10, random(10, 40), random(10, 40))
  // );
}
