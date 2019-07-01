//The task:
//Create function myFunct(str), which returns string str with capitalized first symbol

var name = "petEr";

show(myFunct(name));

// functions

function myFunct(str) {
    str = (str.charAt(0).toUpperCase()) + str.substring(1).toLowerCase();
    return str;
}

function show(data) {
    console.log(data);
}