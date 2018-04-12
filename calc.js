
function calc(add, sub, multiply, divide, clear) {
    var a = document.getElementById("val1").value;
    var b = document.getElementById("val2").value;
    add(a, b)
    sub(a, b)
    multiply(a, b)
    divide(a, b)
    clear(a, b)
}

calc(
    add = function(a, b) {
        var c = parseInt(a, b);
        var d = a + b
        console.log(c)
        document.getElementById("total").innerHTML = d;
    },
    sub = function(a, b){
        var c = a - b
        document.getElementById("total").innerHTML = c;
    },
    multiply = function(a, b) {
        var c = a * b;
        document.getElementById("total").innerHTML = c;
    },
    divide = function(a, b) {
        var c = a / b;
        document.getElementById("total").innerHTML = c;
    },
    clear = function(a, b) {
        document.getElementById("total").innerHTML = "null";
    }
)


