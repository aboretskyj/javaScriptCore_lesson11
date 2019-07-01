//The task: 
//Create function extractCurrencyValue (str), which selects only number values from string.
var cash = "$ 120";

show(extractCurrencyValue(cash));


// functions

function extractCurrencyValue(str){
    str = +str.slice(1);
    return str;
}

function show(data) {
    console.log(data);
}