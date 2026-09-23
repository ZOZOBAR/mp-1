function Plus() {
    let UserInputOne = document.getElementById('First').value;
    UserInputOne = Number(UserInputOne);
    // or we could write UserInputOne = +UserInputOne : It's a Implicit Conversion in JS， Same function like what Number() did
    let UserInputTwo = document.getElementById('Second').value;
    UserInputTwo = Number(UserInputTwo);

    let Result =  UserInputOne + UserInputTwo;
    Detector(Result);



}


function Mins() {
    let UserInputOne = document.getElementById('First').value;
    UserInputOne = Number(UserInputOne);

    let UserInputTwo = document.getElementById('Second').value;
    UserInputTwo = Number(UserInputTwo);

    let Result =  UserInputOne - UserInputTwo;
    Detector(Result);
}


function Mut() {
    let UserInputOne = document.getElementById('First').value;
    UserInputOne = Number(UserInputOne);

    let UserInputTwo = document.getElementById('Second').value;
    UserInputTwo = Number(UserInputTwo);

    let Result =  UserInputOne * UserInputTwo;
    Detector(Result);


}

function Div() {
    let UserInputOne = document.getElementById('First').value;
    UserInputOne = Number(UserInputOne);
    // or we could write UserInputOne = +UserInputOne : It's a Implicit Conversion in JS， Same function like what Number() did
    let UserInputTwo = document.getElementById('Second').value;
    UserInputTwo = Number(UserInputTwo);

    let Result =  UserInputOne / UserInputTwo;
    Detector(Result);
}

function doPow() {
    let UserInputOne = document.getElementById('First').value;
    UserInputOne = Number(UserInputOne);
    // or we could write UserInputOne = +UserInputOne : It's a Implicit Conversion in JS， Same function like what Number() did
    let UserInputTwo = document.getElementById('Second').value;
    UserInputTwo = Number(UserInputTwo);

    let Result = 1;
    for (let i = 0; i < UserInputTwo; i++) {
        Result = UserInputOne * Result;
    }
   Detector(Result);
}

// clear all the result by pressing this botton
function doClean(){
    document.getElementById('First').value ='';
    document.getElementById('Second').value = '';
    document.getElementById('Result').innerHTML = '';
}


function Detector(Answer){
    // if it negative turn red else turn black
    if(Answer < 0){

    document.getElementById('Result').style.color = 'red';
} else {
    document.getElementById('Result').style.color = 'black';
    }
    // print the result to the html pages and change the datatype to stirng
    document.getElementById('Result').innerHTML = String(Answer);
}


