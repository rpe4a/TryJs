var root = document.getElementById("result");
var array = [1, 2, 3, 4, 5];

var ShowResult = function(result) {
    var div = document.createElement("div");

    div.innerText = result;

    root.appendChild(div);
};

ShowResult(Math.max.apply(null, array));

ShowResult(Math.min.apply(null, array));

/* var count = 1;

while (count <= 100) {
    if (count % (3 * 5) == 0) {
        console.log(count + " - FizzBuzz");
    } else if (count % 3 == 0) {
        console.log(count + " - Fizz");
    } else if (count % 5 == 0) {
        console.log(count + " - Buzz");
    }

    count++;
}; */



function getChessDeck(x, y) {
    var row = "";

    function odd(number) {
        return number % 2;

    }

    for (var i = 1; i <= x; i++) {
        for (var j = 1; j <= y; j++) {
            row += odd(i) ? (odd(j) ? "#" : " ") : (odd(j) ? " " : "#")
        }

        console.log(row);
        row = "";
    }
}

getChessDeck(12, 12)