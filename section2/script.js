const $ = (selector) => document.querySelector(selector)
const $all = (selectorAll) => document.querySelectorAll(selectorAll)
const $id = (selectorId) => document.getElementById(selectorId)
const $class = (selectorClass) => document.getElementsByClassName(selectorClass)

const screen = $id("screen")
const buttons = $all("button")

let buttonText = 0;

// 정규식
// 사칙연산자(+,-,\*,/)를 구별하게 해주는 정규표현식
const reOperator = /^(\d+|\*\*|[+\-*/])$/; 
const reNumber = /[0-9]/g; // 숫자를 구별해주는 정규표현식

// 숫자 스크린에 작성하기
function writingNumbersInScreen(numbers) {
    screen.value += numbers
}

// 연산자 스크린에 작성하기
function writingOperatorsInScreen(operators) {
    screen.value += operators
}

// 스크린 데이터 초기화
function screenDataRecall() {
    screen.value = ""
}

// 사칙연산자 기능부여

// 더하기
function plus(inputArray) {
    let resultPlus = Number(inputArray[0]) +Number( inputArray[1])
    return resultPlus
}

// 빼기
function minus(inputArray) {
    let resultMinus = Number(inputArray[0]) - Number(inputArray[1])
    return resultMinus
}

// 곱하기
function multiply(inputArray) {
    let resultMultiply = Number(inputArray[0]) * Number(inputArray[1])
    return resultMultiply
}

// 나누기
function divide(inputArray) {
    let resultDivide = Number(inputArray[0]) / Number(inputArray[1])
    return resultDivide
}

function checkCalculator() {
    for(item of buttons) {
        item.addEventListener("click", function(e) {
            e.preventDefault()
            console.log(e)
            buttonText = e.target.innerText
            if (buttonText.match(reOperator)) {
                writingOperatorsInScreen(buttonText)
                return
            }
            // operator = buttonText.match(reOperator)

            // switch(operator[0]) {
            //     case "+":
            //         writingOperatorsInScreen(buttonText)
            //         break
            //     case "-":
            //         writingOperatorsInScreen(buttonText)
            //         break
            //     case "-":
            //         writingOperatorsInScreen(buttonText)
            //         break
            //     case "/":
            //         writingOperatorsInScreen(buttonText)
            //         break
            // }

            // 숫자들
            buttonText = e.target.innerText
            if (buttonText.match(reNumber)) {
                writingNumbersInScreen(buttonText)
                return
            }

            // numbers = buttonText.match(reNumber)
            // switch(numbers[0]) {
            //     case "0":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "1":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "2":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "3":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "4":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "5":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "6":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "7":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "8":
            //         writingNumbersInScreen(buttonText)
            //         break
            //     case "9":
            //         writingNumbersInScreen(buttonText)
            //         break
            // }
        })
    }
}

// -------최종기능실행-------- //
// 리셋버튼 클릭
$id("resetButton").addEventListener("click", function(e) {
    screenDataRecall()
})

$id("result").addEventListener("click", function(e) {
    let screenValue = screen.value
    if(screenValue.split("").includes("+")) {
        const numbersString = screen.value.split("+")
        const answerPlus = plus(numbersString)
        screen.value = ""
        screen.value = answerPlus;
    }
    if(screenValue.split("").includes("-")) {
        const numbersString = screen.value.split("-")
        const answerMinus = minus(numbersString)
        screen.value = ""
        screen.value = answerMinus;
    }
    if(screenValue.split("").includes("*")) {
        const numbersString = screen.value.split("*")
        const answerMultiply = multiply(numbersString)
        screen.value = ""
        screen.value = answerMultiply;
    }
    if(screenValue.split("").includes("/")) {
        const numbersString = screen.value.split("/")
        const answerDivide = divide(numbersString)
        screen.value = ""
        screen.value = answerDivide;
    }
})

checkCalculator()