function isoView(p1) {
    const h = 600;
    const w = 600;

    p1.setup = function () {
        p1.createCanvas(w, h, p1.WEBGL);
    }

    p1.draw = function () {
        p1.background(51);

        p1.strokeWeight(2)
        p1.stroke(255);
        p1.fill(255);
        p1.line(0, 0, 0, middleLinkX * Math.cos(-angleZ), middleLinkY, middleLinkY * Math.sin(-angleZ));
        p1.line(middleLinkX * Math.cos(-angleZ), middleLinkY, middleLinkY * Math.sin(-angleZ), finPosX * Math.cos(-angleZ), -finPosY, finPosX * Math.sin(-angleZ))

        p1.strokeWeight(10);
        p1.stroke(255, 0, 0);
        p1.fill(255, 0, 0);
        p1.point(0, 0, 0);
        p1.point(middleLinkX * Math.cos(-angleZ), middleLinkY, middleLinkY * Math.sin(-angleZ));
        p1.point(finPosX * Math.cos(-angleZ), -finPosY, finPosX * Math.sin(-angleZ));
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