// document.querySelector("button").addEventListener("click", function(){
// })
var drumBtns = document.querySelectorAll(".drum");
for (i = 0; i < drumBtns.length; i++) {

    drumBtns[i].addEventListener('click', function () {
        // alert('i got cliked');
        
        var btnInnerHtml = this.innerHTML;
        // switch syntax
        switch(btnInnerHtml) {
            case "w":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
            case "a":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
            case "s":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
            case "d":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
            case "j":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
            case "k":
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
            case "l":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
            
            default:
                console.log(this);
        }

    });
}

// constructor function 
// objects
function HouseKeeper(yrsOfExp, name, cleaningRepertorie) {
    this.yrsOfExp = yrsOfExp;
    this.name = name;
    this.cleaningRepertorie = cleaningRepertorie;
}

var houseKeeper1= new HouseKeeper(8,"Shilla",["hall", "room"]);
console.log(houseKeeper1);


// function add (num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function calc(num1, num2, operator) {
//     return operator(num1, num2);
// }

// calc(3,5, add);
// calc(3,5, multiply);


// Calculator functions
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     if (num2 === 0) {
//         return "Cannot divide by zero";
//     }
//     return num1 / num2;
// }

// // Calculator program
// function calculator() {
//     // Get user input
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let operator = prompt("Enter the operator (+, -, *, /):");
//     let num2 = parseFloat(prompt("Enter the second number:"));

//     // Perform calculation based on operator
//     let result;
//     switch (operator) {
//         case '+':
//             result = add(num1, num2);
//             break;
//         case '-':
//             result = subtract(num1, num2);
//             break;
//         case '*':
//             result = multiply(num1, num2);
//             break;
//         case '/':
//             result = divide(num1, num2);
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     // Display the result
//     console.log(`Result: ${result}`);
//     alert(`Result: ${result}`);
// }

// // Run the calculator program
// calculator();


