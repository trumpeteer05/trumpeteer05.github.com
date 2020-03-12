var spaceship;
var spaceship2;

function preload() {

    spaceship = loadImage('spaceship.png');
    spaceship2 = loadImage('spaceship2.png');

}

// ---------------------------------------------

var circles = [];
var enemies = [];
var alive = true;
var wave = 1;
var deadEnemies = 0;

// ---------------------------------------------

function setup() {
    createCanvas(600, 600);

    // ---------------------------------------------

    for (var i = 0; i < (20 * wave); i++) {

        enemies.push(new Enemy(random(0, width), -50, random(2, 6)));

    }

}

// ---------------------------------------------

function draw() {

    background(0);

    if (alive == true) {

        image(spaceship2, mouseX - 12.5, 537.5);


        // ---------------------------------------------

        for (var i = 0; i < circles.length; i++) {

            circles[i].move();
            circles[i].show();

        }

        // ---------------------------------------------

        for (var i = 0; i < enemies.length; i++) {

            enemies[i].move();
            enemies[i].show();

        }


        // ---------------------------------------------

        collisionCheck();
        newWave();
        scoreDisplay();

    } else {

        endScreen();

    }

}

// ---------------------------------------------

function mousePressed() {

    if (alive == true) {

        circles.push(new Ball(mouseX, 550));

    }

    if (alive == false) {

        restart();

    }

}


// ---------------------------------------------

function collisionCheck() {

    for (var i = 0; i < enemies.length; i++) {

        // ---------------------------------------------

        for (var a = 0; a < circles.length; a++) {

            // ---------------------------------------------

            if (dist(enemies[i].x, enemies[i].y, circles[a].x, circles[a].y) < 12.5) {

                // ---------------------------------------------

                enemies[i].y = 650;
                circles[a].y = -55;
                deadEnemies += 1;

            }

        }

        // ---------------------------------------------

        if (dist(enemies[i].x, enemies[i].y, mouseX, 550) < 12.5) {

            enemies[i].y = 650;
            alive = false;

        }

    }

}

// ---------------------------------------------

function newWave() {

    if (deadEnemies == wave * 20) {

        wave += 1;
        deadEnemies = 0;
        circles = [];
        enemies = [];

        for (var i = 0; i < (20 * wave); i++) {

            enemies.push(new Enemy(random(0, width), -50, random(2, 6)));

        }

    }

}

// ---------------------------------------------

function scoreDisplay() {

    fill(255, 0, 0);
    textSize(32);
    text('Wave:', 230, 30);
    text(wave, 330, 30);

}

// ---------------------------------------------

function endScreen() {

    fill(255, 0, 0);
    textSize(32);
    text('Game Over', 220, 150);
    text('Click to restart', 200, 250);
    text('Wave:', 240, 350);
    text(wave, 340, 350);

}

// ---------------------------------------------

function restart() {

    circles = [];
    enemies = [];
    alive = true;
    wave = 1;
    deadEnemies = 0;

    for (var i = 0; i < (20 * wave); i++) {

        enemies.push(new Enemy(random(0, width), -50, random(2, 6)));

    }

}

// ---------------------------------------------
