class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() { return this.sides.length }

    get perimeter() { return this.sides.reduce((acc, cV) => acc + cV) }
}

class Triangle extends Polygon {
    get isValid() { 
        if (this.countSides === 3 && this.sides[0] + this.sides[1] > this.sides[2] && this.sides[2] + this.sides[1] > this.sides[0]) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4 && this.sides.every(s => s === this.sides[0])) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        if (this.isValid) {
            return this.sides[0] * this.sides[1]
        }
    }
}

