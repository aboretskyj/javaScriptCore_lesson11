//The task:
//Create function truncate (str, maxlength), which checks the length of the string str, 
//and if it exceeds maxlength - the function replace the end of str with "...", 
//so that the lenght of the str becomes equal to maxlength. 

var firstStr = "Ось, що мені хотілося б сказати на цю тему:";
var secString = "Всім привіт!"

show(firstStr = truncate(firstStr, 20));

show(secString = truncate(secString, 20));


// functions

function truncate(str, maxlength){
    if (str.length > maxlength) {
        str = str.substr(0, maxlength - 4) + " ...";
    } 
    return str;
}

function show(data) {
    console.log(data);
}