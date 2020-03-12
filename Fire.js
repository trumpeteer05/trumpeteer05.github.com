class Ball {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.yspeed = -10;

    }

    move() {

        this.y += this.yspeed;

    }

    show() {

        fill(255, 0, 0);
        noStroke();
        ellipse(this.x, this.y, 5, 5);

    }

}
