
var calc = {
    run: function(op, n1, n2) {
        var result;
        if (op == "add") {
            result = n1 + n2;
        } else if (op == "sub" ) {
            result = n1 - n2;
        } else if (op == "mult" ) {
            result = n1 * n2;
        } else if (op == "div" ) {
            result = n1 / n2;
        }
        return result;
    }
}
 
calc.run("sub", 5, 3); //2


var calc = {
    add : function(a,b) {
        return a + b;
    },
    sub : function(a,b) {
        return a - b;
    },
    mult : function(a,b) {
        return a * b;
    },
    div : function(a,b) {
        return a / b;
    },
    run: function(fn, a, b) {
        return fn && fn(a,b);
    }
}
calc.run(calc.mult, 7, 4); //28
