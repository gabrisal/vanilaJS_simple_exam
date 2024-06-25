// DOM 객체 연결
const quoteContainer = document.getElementById("quoteContainer")
const quote = document.getElementById("quote")
const loader = document.getElementById("loader")
const quotePick = document.getElementById("quotePick")
const quotePickList = document.getElementById("quotePickList")
const nextQuote = document.getElementById("nextQuote")
const selectQuote = document.getElementById("selectQuote")

// 초기화 변수
let quotesTrumpPersonalized = ""
let randomNumber = 0
let resultQuote = ""
let onClickButton = false

// loader 기능 보이기
function showLoader() {
    loader.hidden = false
    quoteContainer.hidden = true
}
// loader 기능 숨기기
function hideLoader() {
    loader.hidden = true
    quoteContainer.hidden = false
}

// 트럼프 명언 api 가져오기
async function getQuoteApi() {
    showLoader();
    const api = "https://api.whatdoestrumpthink.com/api/v1/quotes"
    try {
        const response = await fetch(api)
        const quotes = await response.json()
        quotesTrumpPersonalized = quotes.messages.personalized
        randomNumber = Math.floor(Math.random() * quotesTrumpPersonalized.length)
        newQuoteGenerator()
    } catch(error) {
        newQuoteGenerator()
    }
}

// 새로운 명언 발생기능
function newQuoteGenerator() {
    showLoader()
    quote.innerText = quotesTrumpPersonalized[randomNumber]
    resultQuote = quotesTrumpPersonalized[randomNumber]
    localStorage.setItem("resultQuote", resultQuote)
    hideLoader()
}

//  리스트 데이터 넣기
function putDataInContainer() {
    if(!onClickButton) {
        onClickButton = true
        const resultQuote = localStorage.getItem("resultQuote")
        quotePickList.insertAdjacentHTML("beforebegin", `<li>${resultQuote}</li>`)
        onClickButton = false
    }else if (onClickButton){
        onClickButton = false
    }
}
// 다음 버튼 클릭 시, addEventListener() 만들기
nextQuote.addEventListener('click', getQuoteApi)
// 선택 버튼 클릭 시, addEventListener() 만들기
selectQuote.addEventListener('click', putDataInContainer)
// 최종실행
getQuoteApi()