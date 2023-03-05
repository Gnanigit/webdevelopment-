
function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value);
}
function log() {
    screen.value = Math.log(screen.value);
}
function e() {
    screen.value = 2.71828182846;
}
function fact() {
    var i, num, f;
    f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f *= i;
    }
    i--;
    screen.value = f;
}
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}