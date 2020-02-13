function Box(x, y, w, h, img) {
  var options = {
    friction: 0.3,
    restitution: 0.6,
  };
  this.body = Bodies.circle(x, y, w / 2, options);
  this.w = w;
  this.h = h;
  this.alive = true;
  World.add(world, this.body);

  this.remove = function() {
    Matter.Composite.remove(world, this.body);
    this.alive = false;
  };

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.alive) {
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(127);
      image(img, -this.h / 2, -this.w / 2, this.w, this.h);
      pop();
    }
    if (pos.y > windowHeight) {
      this.remove();
    }
  };
}
