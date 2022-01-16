function paraView(p1) {
    const h = 600;
    const w = 600;

    p1.setup = function () {
        p1.createCanvas(w, h);
    }

    p1.draw = function () {
        p1.background(51);

        // Heading
        p1.stroke(255);
        p1.strokeWeight(1);
        p1.textSize(32);
        p1.fill(255);
        p1.text("Parameters View", w / 2 - 140, 50);

        // Angle Calculated Result
        p1.stroke(255);
        p1.strokeWeight(1);
        p1.textSize(h / 15);
        p1.fill(255);
        p1.translate(100, -100);
        p1.text("Axis 1: " + angleX.toFixed(0) + " deg", 0, h - h / 15 * 3);
        p1.text("Axis 2: " + angleY.toFixed(0) + " deg", 0, h - h / 15 * 2);
        p1.text("Axis 3: " + p1.degreesFromRadians(angleZ).toFixed(0) + " deg", 0, h - h / 15 * 1);
        p1.text("Position X: " + (finPosX * Math.cos(-angleZ)).toFixed(0), 0, h - h / 15 * 6);
        p1.text("Position Y: " + (finPosY).toFixed(0), 0, h - h / 15 * 5);
        p1.text("Position Z: " + -(finPosX * Math.sin(-angleZ)).toFixed(0), 0, h - h / 15 * 4);
        p1.translate(-100, 100);
    }

    p1.degreesFromRadians = function (rad) {
        let deg = rad * 180 / Math.PI;
        return deg;
    }

    p1.radiansFromDegrees = function (deg) {
        let rad = deg * Math.PI / 180;
        return rad;
    }
}
