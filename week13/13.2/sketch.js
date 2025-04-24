var pos;
var slider;
var slider2;

function setup() {

    createCanvas(500, 500);
    angleMode(DEGREES);
    slider = createSlider(0, 3, 0);
    slider2 = createSlider(0, 3, 0);

    pos = 0.0;
    inc = 4.0;

    pos2 = 0.0;
    inc2 = 10.0;

}

function draw() {

    fill(0, 10);
    stroke("pink");

    clear();

    translate(width/2, height/2);

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 100;
    amplified2 = mySinVal2 * 100;

    for (x = 0; x <= 360; x = x + .75) {
        ellipse(amplified, amplified2, amplified, 100)
        rotate(x)
    };

    pos = pos + slider.value();
    pos2 = pos2 + slider2.value();
}