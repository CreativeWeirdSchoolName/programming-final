function setup() {
    createCanvas (1080, 1080)
}

function draw() {
    background(153, 0, 0);
    drawOctagon1_1();
    drawOctagon1_2();
    drawOctagon1_3();
    drawOctagon1_4();
    drawOctagon1_5();
    drawOctagon1_6();
    drawbelly();
    drawChest1();
    drawUpperLegRight();
    drawUpperNeeRight();
    drawLowerNeeRight();
    drawFootRight1();
    drawFootRight2();
    drawLowerLegRight1();
    drawLowerLegRight2();
    drawUpperLegLeft();
    drawLowerLegLeft1();
    drawNeeLeft();
    drawLowerLegLeft2();
    drawLowerLegLeft3();
    drawfootleft1();
    drawfootleft2();
    drawLowerArmRight1();
    drawUpperArmRight1();
    drawUpperArmRight2();
    drawHandRight1();
    drawChestLine();
    drawArmLineRight1();
    drawArmLineRight2();
    drawUpperArmLeft1();
    drawLowerArmLeft1();
    drawNeck();
    drawHead1();
    drawHead2();

}

function drawOctagon1_1() {
    fill(255, 153, 51);
    stroke(255, 153, 5);
    quad(60, 0, 900, 0, 750, 125, 200, 140);
}

function drawOctagon1_2() {
    fill(255, 153, 51);
    stroke(255, 153, 5);
    quad(0, 135, 60, 0, 200, 140, 0, 525);
}

function drawOctagon1_3() {
    fill(255, 153, 51);
    stroke(255, 153, 51);
    quad(0, 565, 280, 1080, 80, 1080, 0, 955);
}

function drawOctagon1_4() {
    fill(255, 153, 51);
    stroke(255, 153, 51);
    quad(900, 0, 1080, 190, 1080, 485, 750, 125);
}

function drawOctagon1_5() {
    fill(255, 153, 51);
    stroke(255, 153, 51);
    quad(860, 1080, 1080, 750, 1080, 405, 650, 1080);
}

function drawOctagon1_6() {
    fill(255, 153, 51);
    stroke(255, 153, 51);
    quad(160, 1080, 680, 1080, 780, 900, 150, 960);
}

function drawbelly() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    quad(560, 420, 640, 520, 550, 640, 440, 580);
}

function drawChest1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    quad(640, 290, 800, 450, 640, 520, 550, 420);
}

function drawUpperLegRight() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 4);
    rect(610, 500, 60, 120);
}

function drawUpperNeeRight() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -4);
    quad(477, 725, 538, 730, 512, 805, 482, 800);
}

function drawLowerNeeRight() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    quad(462, 855, 517, 870, 512, 805, 482, 800);
}

function drawLowerLegRight1() {
    fill(0, 0, 0);
    stroke(255, 153, 51);
    rotate(QUARTER_PI / 2);
    rect(790, 605, 20, 110);
}

function drawLowerLegRight2() {
    fill(0, 0, 0);
    stroke(255, 153, 51);
    rotate(QUARTER_PI / -2);
    triangle(496, 865, 461, 856, 467, 935);
}

function drawFootRight1() {
    fill(0, 0, 0);
    stroke(255, 0, 0);
    quad(455, 1010, 490, 1015, 480, 950, 456, 960);
}

function drawFootRight2() {
    fill(0, 0, 0);
    stroke(255, 0, 0);
    quad(455, 1010, 490, 1015, 480, 1030, 460, 1025);
}

function drawUpperLegLeft() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -1);
    rect(-100, 590, 60, 130);
}

function drawLowerLegLeft1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 1);
    rotate(QUARTER_PI / 1);
    rect(540, 80, 60, 120);
}

function drawNeeLeft() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -1);
    triangle(390, 445, 334, 446, 361, 473);
}

function drawLowerLegLeft2() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 1);
    rect(540, 200, 30, 120);
}

function drawLowerLegLeft3() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -1);
    triangle(208, 600, 260, 544, 280, 563);
}

function drawfootleft1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    triangle(100, 530, 130, 650, 180, 630);
}

function drawfootleft2() {
    fill(255, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -3);
    rect(-70, 536, 30, 125);
}

function drawLowerArmRight1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 3);
    rotate(QUARTER_PI / 2);
    rect(870, 90, 140, 60);
}

function drawUpperArmRight1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -2);
    quad(860, 350, 960, 380, 870, 520, 830, 450);
}

function drawUpperArmRight2() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    quad(860, 350, 960, 380, 980, 250, 940, 220);
}

function drawHandRight1() {
    fill(255, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 1);
    rect(790, -600, 100, 90, 20);
}

function drawUpperArmLeft1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -1);
    rotate(QUARTER_PI / -5);

    rect(450, 370, 140, 50);
}

function drawLowerArmLeft1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 5);
    quad(510, 345, 370, 230, 400, 225, 500, 290);
}

function drawChestLine() {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    quad(840, -220, 810, -100, 800, -120, 820, -230);
}

function drawArmLineRight1() {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    quad(965, -260, 820, -190, 830, -220, 965, -280);
}

function drawArmLineRight2() {
    fill(255, 0, 0);
    stroke(255, 0, 0);
    quad(870, -520, 840, -520, 930, -250, 965, -280);
}


function drawNeck() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / 1);
    rect(730, -290, 50, 70);
}

function drawHead1() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rotate(QUARTER_PI / -1);
    circle(805, 250, 150);
}

function drawHead2() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    quad(750, 200, 860, 300, 760, 380, 680, 300);
}