const reverseString = function(palabra) {
    let pseparada =[];
    let salida ="";
    pseparada = palabra.split("");
    salida = pseparada.reverse().join("");
    return salida;

};

// Do not edit below this line
module.exports = reverseString;
