const repeatString = function(string,num) {
    let repeticion ="";

    if(num<0){
        return repeticion="ERROR";
    }
    else{
        for(let i=0 ; i<num ; i++){
            repeticion += string;
        }
        return repeticion
    }


};

// Do not edit below this line
module.exports = repeatString;
