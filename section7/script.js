// DOM 객체 연결
const leftTime = document.getElementById("leftTime")
const score = document.getElementById("score")
const word = document.getElementById("word")
const wordInput = document.getElementById("wordInput")
const gameOver = document.getElementById("gameOver")

// 변수 초기화
let time = 7
let scoreText = 0
let randomWord = ""

// 단어 집합(정답배열) 기능 설계
const wordsArray = ["The","milkman","brought","donuts","cheese","along","with","milk","and","a","bottle","of","whiskey","to","10","houses"]

// 랜덤으로 단어 얻기
function getRandomWord() {
    return wordsArray[Math.floor(Math.random() * wordsArray.length)]
}

// 남은 시간 초기화
function returnLeftTime() {
    time = 7
}

// 남은 시간 구하기
function getLeftTime() {
    var timeInterval = setInterval(function() {
        time--
        leftTime.innerHTML = `남은시간 : ${time}`
        if (time == 0) {
            clearInterval(timeInterval)
            showFail()
        }
    }, 1000)
}

// 실패 결과창 노출
function showFail() {
    gameOver.style.display = "block"
    gameOver.innerHTML = `
        <div>
            <h1>당신의 점수는 ${scoreText} 입니다.</h1>
            <button conclick="location.reload()" id="reload">다시시작</button>
        </div>
    `
}

// input 포커싱
function wordInputFocus() {
    wordInput.focus()
}

// 점수 구하기
function getScore() {
    scoreText++
    score.innerHTML = `점수 : ${scoreText}`
}

// 단어 보여주기
function showWord() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord
}

// input 변화 감지
const inputEventListener = wordInput.addEventListener("input", function(e) {
    resultText = e.target.value

    if (resultText == randomWord) {
        showWord()
        getScore()
        e.target.value = ""
        returnLeftTime()
    }
})

// 메인 컨트롤
function main() {
    showWord()
    inputEventListener
}
main()
getLeftTime()