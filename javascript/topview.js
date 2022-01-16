function topView(p1) {
    const h = 600;
    const w = 600;

    const linkLength = w / 5;
    const xTranspose = w / 2;
    const yTranspose = h / 2;

    p1.setup = function () {
        p1.createCanvas(w, h);
        p1.background(51);
    }

    p1.mousePressed = function () {
        if (p1.mouseX >= 0 && p1.mouseX <= w && p1.mouseY >= 0 && p1.mouseY <= h) {
            if (p1.mouseX >= w / 2) {
                angleZ = Math.atan(-(p1.mouseY - yTranspose) / (p1.mouseX - xTranspose));
            }
            if (p1.mouseX <= w / 2 && p1.mouseY >= h / 2) {
                angleZ = -Math.PI + Math.atan(-(p1.mouseY - yTranspose) / (p1.mouseX - xTranspose));
            }
            if (p1.mouseX <= w / 2 && p1.mouseY <= h / 2) {
                angleZ = Math.PI + Math.atan(-(p1.mouseY - yTranspose) / (p1.mouseX - xTranspose));
            }
        }
    }

    p1.mouseDragged = function () {
        if (p1.mouseX >= 0 && p1.mouseX <= w && p1.mouseY >= 0 && p1.mouseY <= h) {
            if (p1.mouseX >= w / 2) {
                angleZ = Math.atan(-(p1.mouseY - yTranspose) / (p1.mouseX - xTranspose));
            }
            if (p1.mouseX <= w / 2 && p1.mouseY >= h / 2) {
                angleZ = -Math.PI + Math.atan(-(p1.mouseY - yTranspose) / (p1.mouseX - xTranspose));
            }
            if (p1.mouseX <= w / 2 && p1.mouseY <= h / 2) {
                angleZ = Math.PI + Math.atan(-(p1.mouseY - yTranspose) / (p1.mouseX - xTranspose));
            }
        }
    }

    p1.draw = function () {

        const xFinal = finPosX;
        const yFinal = -finPosY;
        const zAngle = angleZ;
        const d = Math.sqrt(xFinal * xFinal + yFinal * yFinal);
        const apparentLength1 = linkLength * Math.cos(p1.radiansFromDegrees(angleX));
        const apparentLength2 = linkLength * Math.cos(p1.radiansFromDegrees(angleY));

        const theta1 = Math.atan(xFinal / yFinal);
        const theta2 = Math.acos(d / (2 * linkLength));
        let xMiddle = linkLength * Math.cos(theta1 + theta2);
        let yMiddle = linkLength * Math.sin(theta1 + theta2);

        let line_x1 = xTranspose;
        let line_y1 = yTranspose;

        p1.background(51);

        // Heading
        p1.stroke(255);
        p1.strokeWeight(1);
        p1.textSize(32);
        p1.fill(255);
        p1.text("Top View", w / 2 - 70, 50);

        // Boundary Region            
        p1.stroke(0, 255, 255);
        p1.strokeWeight(1)
        p1.fill(100);
        p1.ellipse(xTranspose, yTranspose, 4 * linkLength, 4 * linkLength);

        // Draw Angle Arc
        p1.stroke(255, 0, 0);
        p1.fill(0, 255, 0);
        p1.strokeWeight(1);
        p1.arc(xTranspose, yTranspose, 50, 50, -zAngle, 0);

        // Connecting Rods
        p1.strokeWeight(2);
        p1.stroke(255, 255, 0);
        p1.line(xTranspose, yTranspose, middleLinkX * Math.cos(-zAngle) + xTranspose, middleLinkX * Math.sin(-zAngle) + yTranspose);
        p1.stroke(255, 0, 255);
        p1.line(middleLinkX * Math.cos(-zAngle) + xTranspose, middleLinkX * Math.sin(-zAngle) + yTranspose, finPosX * Math.cos(-zAngle) + xTranspose, finPosX * Math.sin(-zAngle) + yTranspose);

        // Joints
        p1.strokeWeight(10);
        p1.stroke(255, 0, 0);
        p1.point(middleLinkX * Math.cos(-zAngle) + xTranspose, middleLinkX * Math.sin(-zAngle) + yTranspose);
        p1.point(finPosX * Math.cos(-zAngle) + xTranspose, finPosX * Math.sin(-zAngle) + yTranspose);
        p1.point(line_x1, line_y1);

        // Angle Calculated Result
        p1.stroke(255);
        p1.strokeWeight(1);
        p1.textSize(h / 30);
        p1.fill(255);
        p1.text("Axis 3: " + p1.degreesFromRadians(zAngle).toFixed(0) + " deg", 0, h - h / 30 * 1);

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