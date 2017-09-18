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
            row += odd(i) ? (odd(j) ? "#" : " ") : odd(j) ? " " : "#";
        }

        console.log(row);
        row = "";
    }
}

getChessDeck(12, 12);

function countChar(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i].toUpperCase() === char.toUpperCase()) count++;
    }

    return count;
}

ShowResult(countChar("Конатоходец", "к"));

function range(start, end, step) {
    if (step == undefined) step = 1;

    var array = [];

    if (start <= end) {
        for (; start <= end; start += step) {
            array.push(start);
        }
    } else {
        for (; start >= end; start += step) {
            array.push(start);
        }
    }

    return array;
}

function summArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function every(array, f) {
    var isevery = false;

    for (var i = 0; i < array.length; i++) {
        if (!(isevery = f(array[i]))) return isevery;
    }

    return isevery;
}

function some(array, f) {
    var isevery = false;

    for (var i = 0; i < array.length; i++) {
        if ((isevery = f(array[i]))) return isevery;
    }
    return isevery;
}

console.log(summArray(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, NaN], isNaN));
console.log(some([2, 3, 4], isNaN));

window.addEventListener(
    "beforeunload",
    function(e) {
        var confirmationMessage = "Вы точно хотите покинуть страницу?";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    },
    false
);