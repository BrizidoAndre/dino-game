class Entity {
    constructor(x, y, width, height, color = null) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get top() {
        return this.y;
    }

    get right() {
        return this.x + this.width;
    }

    get left() {
        return this.x;
    }

    get bottom() {
        return this.y + this.height;
    }

}