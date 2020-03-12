class Enemy {

    constructor(x, y, yspeed) {

        this.x = x;
        this.y = y;
        this.yspeed = yspeed;
        this.spaceshipVar= loadImage('spaceship.png');
    }

    move() {

        this.y += this.yspeed;

        if (this.y >= width && this.y <  650) {

            this.y = -50;
            this.x = random(0, width);

        }

    }

    show() {

        image(this.spaceshipVar, this.x - 12.5, this.y - 12.5);
        //fill(0, 0, 255);
        //noStroke();
        //ellipse(this.x, this.y, 25, 25);

    }

}
