// DOM 생성
const resultSearch = document.getElementById("resultSearch")
const serachMusics = document.getElementById("searchMusics")
const searchButton = document.getElementById("searchButton")

// 변수 초기화
var searchMusicsValue = ""

// api url 정의
const apiUrl = 'https://api.lyrics.ovh'

// 인풋데이터 입력 및 검색
function searchMusicsFunc() {
    searchMusicsValue = serachMusics.value
    searchMusicsDatas(searchMusicsValue)
}

// api 가져오기
async function searchMusicsDatas(word) {
    const response = await fetch(`${apiUrl}/suggest/${word}`)
    const musicDataResponse = await response.json()
    const musicDataArray = musicDataResponse.data
    resultSearch.innerHTML = ""
    musicDataArray.forEach(v => {
        showTitleAndArtist(v)
    })
}

// musicDatas 보여주기
function showTitleAndArtist(object) {
    resultSearch.insertAdjacentHTML("afterbegin", `
        <img style="margin:0auto;" src="${object.album.cover_medium}"/>
        <p style-"text=align:center;">제목: ${object.title}, 가수: ${object.artist.name}</p></br>
        `)
}

// searchButton 눌렀을 때
searchButton.addEventListener("click", function (e) {
    e.preventDefault()
    searchMusicsFunc()
})

searchMusicsDatas("day6")