var calc = {};
calc.add = function(a, b){
    return a + b;   
}

calc.sub = function(a, b){
    return a - b;
}

calc.multiply = function(a, b){
    return a * b;
}

calc.divide = function(a, b){
    return a / b;
}

module.exports = calc;