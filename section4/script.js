// DOM 객체 만들기
const moviesContainer = document.getElementById("moviesContainer")
const loader = document.getElementById("loader")
const movieImages = document.getElementById("movieImages")

// 변수 초기화
var imgSrc = ""
var imagesCount = 0
var totalCount = 100

// api 설정
const apiUrl = "https://random.imagecdn.app/v1/image?width=500&height=500&format=json"

// loader 보이기
function showLoader() {
    loader.hidden = false
}

// loader 숨김
function hideLoader() {
    loader.hidden = true
}

// api 데이터 가져오기
async function getApiData() {
    imagesCount++
    if(imagesCount <= totalCount) {
        const response = await fetch(apiUrl)
        const movieData = await response.json()
        const movieDataUrl = movieData.url
        moviesContainer.insertAdjacentHTML("beforebegin", `<img src="${movieDataUrl}" style="padding-top:20px>`)
    }
    hideLoader()
}

// 메인컨트롤  
window.addEventListener("scroll", function(e) {
    showLoader()
    if((window.innerHeight + this.window.scrollY) >= this.document.body.offsetHeight) {
        this.setTimeout(getApiData, 1000)
    }
    hideLoader()
})