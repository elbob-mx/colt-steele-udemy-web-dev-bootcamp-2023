class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
const cadetBlue = new Color(95, 158, 160, "cadetBlue");

document.body.style.backgroundColor = cadetBlue.rgba(0.8);
document.getElementById("onlyDiv").style.backgroundColor = red.rgb(0.5);
