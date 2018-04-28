let stars = [];
let introStars = [];
let fakeStars = [];
let maxStars = 300;
let maxIntroStars = 300;
let introFrames = 100;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < maxIntroStars; i++) {
    introStars.push(new Star(1));
  }
  for (let i = 0; i < maxStars; i++) {
    fakeStars.push(new Star(0));
  }
}

function draw () {
  background(0);
  fill(255);
  stroke(255);
  translate(width/2, height/2);

  strokeWeight(2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  strokeWeight(1);
  for (let i = 0; i < fakeStars.length; i++) {
    point(fakeStars[i].x, fakeStars[i].y);
  }

  strokeWeight(2);
  if (introFrames > 0) {
    for (let i = 0; i < floor(maxStars/100); i++) {
      stars.push(new Star(1));
    }

    for (let i = 0; i < introStars.length; i++) {
      introStars[i].update();
      introStars[i].show();
    }

    textSize(introFrames);
    strokeWeight(0);
    fill("rgba(244, 66, 66, 255)");
    textAlign(CENTER, CENTER);
    text("ENGAGING HYPERDRIVE", 0, 0);
    introFrames-=0.5;
  }
}

function mouseClicked() {
  noLoop();
}
