const sumAll = function(min,max) {
    let suma=0;
    if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    if (min<0 || max<0){
        return "ERROR";
    }
    if(max<min){
        [min,max] = [max,min];
    }
    for (let i=min;i<=max ;i++){
        suma += i;
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
