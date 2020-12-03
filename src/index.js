const result = document.querySelector(".result"),
    zero = document.querySelector(".zero"),
    one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five"),
    six = document.querySelector(".six"),
    seven = document.querySelector(".seven"),
    eight = document.querySelector(".eight"),
    nine = document.querySelector(".nine"),
    plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    multiply = document.querySelector(".multiply"),
    divide = document.querySelector(".divide"),
    equals = document.querySelector(".equals"),
    reset = document.querySelector(".reset");

let keystate = 0, number1 = 0, number2 = 0, currentNum = 0, ticket = "",
    keystate1 = 0;

function pressedNumber() {
    keystate += 1;
}

function handleZeroClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 0;
    } else {
        pressedNumber();
        number2 = 0;
    }
    result.innerText = event.target.value;
}

function handleOneClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 1;
    } else {
        pressedNumber();
        number2 = 1;
    }
    result.innerText = event.target.value;
}

function handleTwoClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 2;
    } else {
        pressedNumber();
        number2 = 2;
    }
    result.innerText = event.target.value;
}

function handleThreeClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 3;
    } else {
        pressedNumber();
        number2 = 3;
    }
    result.innerText = event.target.value;
}

function handleFourClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 4;
    } else {
        pressedNumber();
        number2 = 4;
    }
    result.innerText = event.target.value;
}

function handleFiveClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 5;
    } else {
        pressedNumber();
        number2 = 5;
    }
    result.innerText = event.target.value;
}

function handleSixClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 6;
    } else {
        pressedNumber();
        number2 = 6;
    }
    result.innerText = event.target.value;
}

function handleSevenClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 7;
    } else {
        pressedNumber();
        number2 = 7;
    }
    result.innerText = event.target.value;
}

function handleEightClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 8;
    } else {
        pressedNumber();
        number2 = 8;
    }
    result.innerText = event.target.value;
}

function handleNineClick(event) {
    if(keystate%2 === 0) {
        pressedNumber();
        number1 = 9;
    } else {
        pressedNumber();
        number2 = 9;
    }
    result.innerText = event.target.value;
}

function handlePlusClick(event) {
    ticket = "+";
    if(keystate1 === 0) {
        keystate1 += 1;
        currentNum = number1;
    } else if(keystate1%2 === 1) {
        keystate1 += 1;
        currentNum += number2;
        result.innerText = currentNum;
    } else {
        keystate1 += 1;
        currentNum += number1;
        result.innerText = currentNum;
    }
}

function handleMinusClick(event) {
    ticket = "-";
    if(keystate1 === 0) {
        keystate1 += 1;
        currentNum = number1;
    } else if(keystate1%2 === 1) {
        keystate1 += 1;
        currentNum -= number2;
        result.innerText = currentNum;
    } else {
        keystate1 += 1;
        currentNum -= number1;
        result.innerText = currentNum;
    }
}

function handleMultiplyClick(event) {
    ticket = "*";
    if(keystate1 === 0) {
        keystate1 += 1;
        currentNum = number1;
    } else if(keystate1%2 === 1) {
        keystate1 += 1;
        currentNum *= number2;
        result.innerText = currentNum;
    } else {
        keystate1 += 1;
        currentNum *= number1;
        result.innerText = currentNum;
    }
}

function handleDivideClick(event) {
    ticket = "/";
    if(keystate1 === 0) {
        keystate1 += 1;
        currentNum = number1;
    } else if(keystate1%2 === 1) {
        keystate1 += 1;
        currentNum /= number2;
        result.innerText = currentNum;
    } else {
        keystate1 += 1;
        currentNum /= number1;
        result.innerText = currentNum;
    }
}

function handleEqualsClick(event) {
    if(keystate === 2){   
        switch(ticket){
            case "+": result.innerText = number1 + number2; break;
            case "-": result.innerText = number1 - number2; break;
            case "*": result.innerText = number1 * number2; break;
            case "/": result.innerText = number1 / number2; break;
            default : if(number2 === 0) result.innerText = number1;
                else result.innerText = number2;
        }
    } else if(keystate > 2) {
        if(keystate%2 === 1) {
            switch(ticket) {
                case "+": result.innerText = currentNum + number1; break;
                case "-": result.innerText = currentNum - number1; break;
                case "*": result.innerText = currentNum * number1; break;
                case "/": result.innerText = currentNum / number1; break;
                default: break;
            } 
        } else {
            switch(ticket) {
                case "+": result.innerText = currentNum + number2; break;
                case "-": result.innerText = currentNum - number2; break;
                case "*": result.innerText = currentNum * number2; break;
                case "/": result.innerText = currentNum / number2; break;
                default: break;
            }
        }
    }
}


function handleResetClick(event) {
    number1 = 0;
    number2 = 0;
    keystate = 0;
    ticket = "";
    keystate1 = 0;
    result.innerText = "0";
}

function init() {
    result.innerText = "0";
    zero.addEventListener("click", handleZeroClick);
    one.addEventListener("click", handleOneClick);
    two.addEventListener("click", handleTwoClick);
    three.addEventListener("click", handleThreeClick);
    four.addEventListener("click", handleFourClick);
    five.addEventListener("click", handleFiveClick);
    six.addEventListener("click", handleSixClick);
    seven.addEventListener("click", handleSevenClick);
    eight.addEventListener("click", handleEightClick);
    nine.addEventListener("click", handleNineClick);
    plus.addEventListener("click", handlePlusClick);
    minus.addEventListener("click", handleMinusClick);
    multiply.addEventListener("click", handleMultiplyClick);
    divide.addEventListener("click", handleDivideClick);
    equals.addEventListener("click", handleEqualsClick);
    reset.addEventListener("click", handleResetClick);
}

init();