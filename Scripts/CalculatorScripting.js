// import math from "/node_modules/mathjs";mathjs
// import mathjs from "C:\Users\Micah\WebstormProjects\CalculatorPrototyping\node_modules";
// import {create, all} from "/mathjs";
//
// const config = { }
// const math = create(all, config)

const calcForm = document.getElementById("CalcForm");
const oneBtn = document.getElementById("One");
const twoBtn = document.getElementById("Two");
const threeBtn = document.getElementById("Three");
const fourBtn = document.getElementById("Four");
const fiveBtn = document.getElementById("Five");
const sixBtn = document.getElementById("Six");
const sevenBtn = document.getElementById("Seven");
const eightBtn = document.getElementById("Eight");
const nineBtn = document.getElementById("Nine");
const zeroBtn = document.getElementById("Zero");
const equalsBtn = document.getElementById("Equals");
const addBtn = document.getElementById("Add");
const subtractBtn = document.getElementById("Subtract");
const multiplyBtn = document.getElementById("Multiply");
const divideBtn = document.getElementById("Divide");
const openParenBtn = document.getElementById("OpenParen");
const closeParenBtn = document.getElementById("CloseParen");
const allClearBtn = document.getElementById("AC");
const backspaceBtn = document.getElementById("Backspace");
const decimalPointBtn = document.getElementById("DecimalPoint");

/*calcForm.contentEditable = "false";*/

document.addEventListener("keydown", e = function keydownChecker(e) {
    // e.stopPropagation();
    if (e.key === "1") {
        displayOne();
    } else if (e.key === "2") {
        displayTwo();
    } else if (e.key === "3") {
        displayThree();
    } else if (e.key === "4") {
        displayFour();
    } else if (e.key === "5") {
        displayFive();
    } else if (e.key === "6") {
        displaySix();
    } else if (e.key === "7") {
        displaySeven();
    } else if (e.key === "8") {
        displayEight();
    } else if (e.key === "9") {
        displayNine();
    } else if (e.key === "0") {
        displayZero();
    } else if (e.key === "+") {
        displayPlus();
    } else if (e.key === "-") {
        displayMinus();
    } else if (e.key === "*") {
        displayMultiply();
    } else if (e.key === "/") {
        displayDivide();
    } else if (e.key === "(") {
        displayOpenParen();
    } else if (e.key === ")") {
        displayCloseParen();
    } else if (e.key === "=") {
        calcForm.CalcDisplay.value = returnValue();
    } else if (e.key === "Backspace") {
        backspaceDeletion();
    } else if (e.key === ".") {
        displayDecimal();
    }
});

oneBtn.addEventListener("click", () => {
    displayOne();
});

twoBtn.addEventListener("click", () => {
    displayTwo();
});

threeBtn.addEventListener("click", () => {
    displayThree();
});

fourBtn.addEventListener("click", () => {
    displayFour();
});

fiveBtn.addEventListener("click", () => {
    displayFive();
});

sixBtn.addEventListener("click", () => {
    displaySix();
});

sevenBtn.addEventListener("click", () => {
    displaySeven();
});

eightBtn.addEventListener("click", () => {
    displayEight();
});

nineBtn.addEventListener("click", () => {
    displayNine();
});

zeroBtn.addEventListener("click", () => {
    displayZero();
});

addBtn.addEventListener("click", () => {
    displayPlus();
});

subtractBtn.addEventListener("click", () => {
    displayMinus();
});

multiplyBtn.addEventListener("click", () => {
    displayMultiply();
});

divideBtn.addEventListener("click", () => {
    displayDivide();
});

openParenBtn.addEventListener("click", () => {
    displayOpenParen();
});

closeParenBtn.addEventListener("click", () => {
    displayCloseParen();
});

equalsBtn.addEventListener("click", () => {
    calcForm.CalcDisplay.value = returnValue();
// calcForm.CalcDisplay.value = new Function(calcForm.CalcDisplay.value).toString();
// calcForm.CalcDisplay.value = (Function ("return calcForm.CalcDisplay.value.valueOf();"));//returnValue(); //(Function ("return calcForm.CalcDisplay.value.valueOf();"))();
});

allClearBtn.addEventListener("click", () => {
    displayAllClear();
});

backspaceBtn.addEventListener("click", () => {
    backspaceDeletion();
});

decimalPointBtn.addEventListener("click", () => {
    displayDecimal();
});

function displayOne() {
    calcForm.CalcDisplay.value += "1";
}

function displayTwo() {
    calcForm.CalcDisplay.value += "2";
}

function displayThree() {
    calcForm.CalcDisplay.value += "3";
}

function displayFour() {
    calcForm.CalcDisplay.value += "4";
}

function displayFive() {
    calcForm.CalcDisplay.value += "5";
}

function displaySix() {
    calcForm.CalcDisplay.value += "6";
}

function displaySeven() {
    calcForm.CalcDisplay.value += "7";
}

function displayEight() {
    calcForm.CalcDisplay.value += "8";
}

function displayNine() {
    calcForm.CalcDisplay.value += "9";
}

function displayZero() {
    calcForm.CalcDisplay.value += "0";
}

function displayPlus() {
    calcForm.CalcDisplay.value += "+";
}

function displayMinus() {
    calcForm.CalcDisplay.value += "-";
}

function displayMultiply() {
    calcForm.CalcDisplay.value += "*";
}

function displayDivide() {
    calcForm.CalcDisplay.value += "/";
}

function displayOpenParen() {
    calcForm.CalcDisplay.value += "(";
}

function displayCloseParen() {
    calcForm.CalcDisplay.value += ")";
}

function displayAllClear() {
    calcForm.CalcDisplay.value = "";
}

function displayDecimal() {
    calcForm.CalcDisplay.value += ".";
}

function returnValue() {
    if (emptyDisplayChecker())
        return calcForm.CalcDisplay.value = "";
    else
        return returnEquation();
}

function emptyDisplayChecker() {
    /*if (calcForm.CalcDisplay. === undefined) {
        return calcForm.CalcDisplay.value = "";
    } else*/
        var resultCheck = Function("return " + calcForm.CalcDisplay.value)();
        if (resultCheck === undefined) {
            return true;
        }
}

function returnEquation() {
    var secondResultCheck = Function("return " + calcForm.CalcDisplay.value)(); // return Function("return " + calcForm.CalcDisplay.value)();
    return secondResultCheck;
}

function backspaceDeletion() {
    var slicedValue = calcForm.CalcDisplay.value.slice(0, -1);
    calcForm.CalcDisplay.value = slicedValue;

    /*for (var i in calcForm.CalcDisplay.value.length-1) {
        for (var j = 0; j < calcForm.CalcDisplay.value.length; j++) {
            calcForm.CalcDisplay.value.replace(lastCharacter, "");
        }
    }*/

    /*var lastCharacter = calcForm.CalcDisplay.value.charAt(calcForm.CalcDisplay.value.length - 1);
    console.log(lastCharacter);
    calcForm.CalcDisplay.value.replace(lastCharacter, "");*/

    /*for (var i = 0; i === calcForm.CalcDisplay.value.length; i++) {
        var val = calcForm.CalcDisplay.innerText --;
    }*/
}

/*function keydownChecker(event) {
    var keyCharCode = event.charCode;
    var keycode = event.keyCode;
    var keyWhich = event.which;

    if (event.key === "1") {
        calcForm.CalcDisplay.value += "1";
    } else if (event.key === "2") {
        calcForm.CalcDisplay.value += "2";
    } else if (event.key === "3") {
        calcForm.CalcDisplay.value += "3";
    } else if (event.key === "4") {
        calcForm.CalcDisplay.value += "4";
    } else if (event.key === "5") {
        calcForm.CalcDisplay.value += "5";
    } else if (event.key === "6") {
        calcForm.CalcDisplay.value += "6";
    } else if (event.key === "7") {
        calcForm.CalcDisplay.value += "7";
    } else if (event.key === "8") {
        calcForm.CalcDisplay.value += "8";
    } else if (event.key === "9") {
        calcForm.CalcDisplay.value += "9";
    } else if (event.key === "0") {
        calcForm.CalcDisplay.value += "0";
    }
}*/
