document.addEventListener('DOMContentLoaded', function() {
	//INPUTS:

	var zero = document.getElementById('zero');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var dot = document.getElementById('dot');
    var acclear = document.getElementById('acclear');
    var clear = document.getElementById('clear');

    zero.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '0';
        } else {
            document.getElementById("numbox").value += '0';
        }
    });

    one.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '1';
        } else {
            document.getElementById("numbox").value += '1';
        }
    });

    two.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '2';
        } else {
            document.getElementById("numbox").value += '2';
        }
    });

    three.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '3';
        } else {
            document.getElementById("numbox").value += '3';
        }
    });

    four.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '4';
        } else {
            document.getElementById("numbox").value += '4';
        }
    });

    five.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '5';
        } else {
            document.getElementById("numbox").value += '5';
        }
    });

    six.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '6';
        } else {
            document.getElementById("numbox").value += '6';
        }
    });

    seven.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '7';
        } else {
            document.getElementById("numbox").value += '7';
        }
    });

    eight.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '8';
        } else {
            document.getElementById("numbox").value += '8';
        }
    });

    nine.addEventListener('click', function() {
        if (document.getElementById("numbox").value == '0') {
            document.getElementById("numbox").value = '9';
        } else {
            document.getElementById("numbox").value += '9';
        }
    });

    dot.addEventListener('click', function() {
        var str = document.getElementById("numbox").value;
        if (str.slice(-1) == '.') {
        } else {
            for (var i = str.length; i > 0; i--) {
                if (str.charAt(i) == '+' || str.charAt(i) == '-' || str.charAt(i) == '*' || str.charAt(i) == '/'){
                    document.getElementById("numbox").value += '.';
                    break;
                } else if (str.charAt(i) == '.'){
                    break;
                }
                if (i == 1){
                    document.getElementById("numbox").value += '.';
                }
            }
        }
    });

    acclear.addEventListener('click', function() {
        document.getElementById("numbox").value = '0';
    });

    clear.addEventListener('click', function() {
        document.getElementById("numbox").value = '0';
    });

    ////OPERATIONS:
    var add = document.getElementById('add');
    var subtract = document.getElementById('subtract');
    var times = document.getElementById('times');
    var divide = document.getElementById('divide');
    var equals = document.getElementById('equals');

    add.addEventListener('click', function() {
        if ((document.getElementById("numbox").value).slice(-1) == '+') {
        } else {
            document.getElementById("numbox").value += '+';
        }
    });

    subtract.addEventListener('click', function() {
        if ((document.getElementById("numbox").value).slice(-1) == '-') {
        } else {
            document.getElementById("numbox").value += '-';
        }
    });

    times.addEventListener('click', function() {
        if ((document.getElementById("numbox").value).slice(-1) == '*') {
        } else {
            document.getElementById("numbox").value += '*';
        }
    });

    divide.addEventListener('click', function() {
        if ((document.getElementById("numbox").value).slice(-1) == '/') {
        } else {
            document.getElementById("numbox").value += '/';
        }
    });

    var input = document.getElementById("numbox");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("equals").click();
        }
    });

    equals.addEventListener('click', function() {
        document.getElementById("numbox").value = eval(document.getElementById("numbox").value);
    });
});
