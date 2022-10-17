let num1 = 0;
let num2 = 0;
let answer = 0;
let streak = 0;




function generateAddNums(){
    console.log("gen add");
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    answer = num1 + num2;
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("streak").innerText = streak;

}

function generateSubNums(){
    console.log("gen sub");
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    answer = num1 - num2;
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("streak").innerText = streak;

}


function generateMultiNums(){
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 * num2;
    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("streak").innerText = streak;
}

function generateDivisNums(){
    let divisNum = Math.floor(Math.random() * 3) + 1;
    console.log(divisNum);
    if(divisNum == 1){
        num1 = 480;
        num2 = 10;
        answer = num1 / num2;
    }else if( divisNum == 2){
        num1 = 24;
        num2 = 3;
        answer = num1 / num2;
    }else{
        num1 = 20;
        num2 = 5;
        answer = num1 / num2;
    }
    console.log(num1);
    console.log(num2);

    document.getElementById("num1").innerText = num1;
    document.getElementById("num2").innerText = num2;
    document.getElementById("streak").innerText = streak;
}


function checkAddAnswer(){
    let userAnswer = document.getElementById("userAnswer").value;
    if(isNaN(userAnswer)){
        alert(userAnswer + " is not a number, try again!");
    }else{
        if(answer == userAnswer){
            alert("THAT IS CORRECT! GOOD JOB!");
            streak = streak + 1;
            console.log(streak);
        }else{
            alert("Sorry, that is incorrect. The Correct answer is " + answer);
            streak = 0;
            console.log(streak);
        }
    }

    generateAddNums();
}

function checkSubAnswer(){
    let userSubAnswer = document.getElementById("userSubAnswer").value;
    if(isNaN(userSubAnswer)){
        alert(userSubAnswer + " is not a number, try again!");
    }else{
        if(answer == userSubAnswer){
            alert("THAT IS CORRECT! GOOD JOB!");
            streak = streak + 1;
            console.log(streak);
        }else{
            alert("Sorry, that is incorrect. The Correct answer is " + answer);
            streak = 0;
            console.log(streak);
        }
    }

    generateSubNums();
}

function checkMultiAnswer(){
    let userMultiAnswer = document.getElementById("userAnswer").value;
    if(isNaN(userMultiAnswer)){
        alert(userMultiAnswer + " is not a number, try again!");
    }else{
        if(answer == userMultiAnswer){
            alert("THAT IS CORRECT! GOOD JOB!");
            streak = streak + 1;
            console.log(streak);
        }else{
            alert("Sorry, that is incorrect. The Correct answer is " + answer);
            streak = 0;
            console.log(streak);
        }
    }

    generateMultiNums();
}

function checkDivisAnswer(){
    let userDivisAnswer = document.getElementById("userAnswer").value;
    if(isNaN(userDivisAnswer)){
        alert(userDivisAnswer + " is not a number, try again!");
    }else{
        if(answer == userDivisAnswer){
            alert("THAT IS CORRECT! GOOD JOB!");
            streak = streak + 1;
            console.log(streak);
        }else{
            alert("Sorry, that is incorrect. The Correct answer is " + answer);
            streak = 0;
            console.log(streak);
        }
    }

    generateDivisNums();
}

