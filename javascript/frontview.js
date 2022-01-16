function frontView(p1) {
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
        const d = Math.sqrt((p1.mouseX - xTranspose) * (p1.mouseX - xTranspose) + (p1.mouseY - yTranspose) * (p1.mouseY - yTranspose));
        if (d <= 2 * linkLength) {
            if (p1.mouseX >= 0 && p1.mouseX <= w && p1.mouseY >= 0 && p1.mouseY <= h) {
                finPosX = p1.mouseX - xTranspose;
                finPosY = -(p1.mouseY - yTranspose);
            }
        }
    }

    p1.mouseDragged = function () {
        const d = Math.sqrt((p1.mouseX - xTranspose) * (p1.mouseX - xTranspose) + (p1.mouseY - yTranspose) * (p1.mouseY - yTranspose));
        if (d <= 2 * linkLength) {
            if (p1.mouseX >= 0 && p1.mouseX <= w && p1.mouseY >= 0 && p1.mouseY <= h) {
                finPosX = p1.mouseX - xTranspose;
                finPosY = -(p1.mouseY - yTranspose);
            }
        }
    }

    p1.draw = function () {

        const xFinal = finPosX;
        const yFinal = -finPosY;
        const d = Math.sqrt(xFinal * xFinal + yFinal * yFinal);

        if (d <= 2 * linkLength) {

            const theta1 = Math.atan(xFinal / yFinal);
            const theta2 = Math.acos(d / (2 * linkLength));
            let xMiddle = linkLength * Math.cos(theta1 + theta2);
            let yMiddle = linkLength * Math.sin(theta1 + theta2);

            let angle1;
            let angle2;
            let angle3;

            let line_x1 = xTranspose;
            let line_y1 = yTranspose;
            let line_x2;
            let line_y2;
            let line_x3 = xFinal + xTranspose;
            let line_y3 = yFinal + yTranspose;

            if (yFinal <= 0) {
                line_x2 = -yMiddle + xTranspose;
                line_y2 = -xMiddle + yTranspose;
            }

            else {
                line_x2 = yMiddle + xTranspose;
                line_y2 = xMiddle + yTranspose;
            }

            middleLinkX = line_x2 - xTranspose;
            middleLinkY = line_y2 - yTranspose;

            angle1 = p1.angleOfLines(line_x1, line_y1, line_x2, line_y2);
            angle2 = p1.angleOfLines(line_x2, line_y2, line_x3, line_y3);
            angle3 = 180 - angle1 + angle2;

            angleX = angle1;
            angleY = angle3;

            p1.background(51);

            // Heading
            p1.stroke(255);
            p1.strokeWeight(1);
            p1.textSize(32);
            p1.fill(255);
            p1.text("Front View", w / 2 - 70, 50);

            // Boundary Region            
            p1.stroke(0, 255, 255);
            p1.strokeWeight(1)
            p1.fill(100);
            p1.ellipse(xTranspose, yTranspose, 4 * linkLength, 4 * linkLength);

            // Draw Angle Arc
            p1.stroke(255, 0, 0);
            p1.fill(0, 255, 0);
            p1.strokeWeight(1);
            p1.arc(line_x1, line_y1, 50, 50, - p1.radiansFromDegrees(angle1), 0);
            p1.arc(line_x2, line_y2, 50, 50, - p1.radiansFromDegrees(angle2), p1.radiansFromDegrees(angle3 - angle2));

            // Connecting Rods
            p1.strokeWeight(2);
            p1.stroke(255, 255, 0);
            p1.line(line_x1, line_y1, line_x2, line_y2);
            p1.stroke(255, 0, 255);
            p1.line(line_x2, line_y2, line_x3, line_y3);

            // Joints
            p1.strokeWeight(10);
            p1.stroke(255, 0, 0);
            p1.point(line_x2, line_y2);
            p1.point(line_x3, line_y3);
            p1.point(line_x1, line_y1);

            // Angle Calculated Result
            p1.stroke(255);
            p1.strokeWeight(1);
            p1.textSize(h / 30);
            p1.fill(255);
            p1.text("Axis 1: " + angle1.toFixed(0) + " deg", 0, h - h / 30 * 4);
            p1.text("Axis 2: " + angle3.toFixed(0) + " deg", 0, h - h / 30 * 3);
        }
    }

    p1.degreesFromRadians = function (rad) {
        let deg = rad * 180 / Math.PI;
        return deg;
    }

    p1.radiansFromDegrees = function (deg) {
        let rad = deg * Math.PI / 180;
        return rad;
    }

    p1.angleOfLines = function (x1, y1, x2, y2) {
        if (y1 > y2) {
            let angle = Math.atan((x2 - x1) / (y2 - y1));
            angle = p1.degreesFromRadians(angle);
            return 90 + angle;
        }

        else {
            let angle = Math.atan((x2 - x1) / (y2 - y1));
            angle = p1.degreesFromRadians(angle);
            return 90 + angle - 180;
        }
    }
}