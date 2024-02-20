const removeFromArray = function(array,...args) {
    let salida = [];
    for(let i=0; i<array.length ; i++){
        if (!args.includes(array[i])){
            salida.push(array[i]);
        }
    }
    return salida;
};

// Do not edit below this line
module.exports = removeFromArray;
