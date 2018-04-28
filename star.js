class Star {
  constructor (type) {
    if (type == 1) {
      // Moving stars
      let r = random(width/60);
      let angle = random(0, 2*PI);
      this.x = r * Math.cos(angle);
      this.y = r * Math.sin(angle);
      this.z = random(0.95*width,width);
      this.life = 0;
    } else {
      // Background stars
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);
    }
  }

  update () {
    this.z -= 10;
    this.life++;
    if (this.z < 1) {
      this.x = random(-width/20, width/20);
      this.y = random(-height/20, height/20);
      this.z = random(width*0.5, width);
      this.life = 0;
    }
  }

  show () {
    var tempx = map (this.x / this.z, -0.5, 0.5, -width/2, width/2);
    var tempy = map (this.y / this.z, -0.5*height/width, 0.5*height/width, -height/2, height/2);

    let r = map(this.z, 1, width, 40, 0.1) * Math.min(1, this.life/15);
    let angle = Math.atan2(this.y, this.x);

    let x1 = tempx + r * Math.cos(angle);
    let y1 = tempy + r * Math.sin(angle);

    line(tempx, tempy, x1, y1);
  }
}
