// DOM 객체 만들기
const yourChoice = document.getElementById("yourChoice")
const back = document.getElementById("back")
const front = document.getElementById("front")
const backendContainer = document.getElementById("backendContainer")
const frontendContainer = document.getElementById("frontendContainer")
const h1 = document.querySelector("h1")
const developerContainer = document.getElementById("developerContainer")

// 변수 초기화
let backendContainerClicked = 0
let frontendContainerClicked = 0
let totalClicked = 0

// 배열 나열
backendText = ["차기능", "수학", "야구", "기계", "게임"]
frontendText = ["차디자인", "영어", "농구", "교과서", "만화"]

// 질문 변경
function showQuestion(backendContainerClicked, frontendContainerClicked){
    if (totalClicked>=1) {
        back.innerHTML = `<div class="back">${backendText[0]}</div>`
        front.innerHTML = `<div class="front">${frontendText[0]}</div>`
    }
    if (totalClicked>=2) {
        back.innerHTML = `<div class="back">${backendText[1]}</div>`
        front.innerHTML = `<div class="front">${frontendText[1]}</div>`
    }
    if (totalClicked>=3) {
        back.innerHTML = `<div class="back">${backendText[2]}</div>`
        front.innerHTML = `<div class="front">${frontendText[2]}</div>`
    }
    if (totalClicked>=4) {
        back.innerHTML = `<div class="back">${backendText[3]}</div>`
        front.innerHTML = `<div class="front">${frontendText[3]}</div>`
    }
    if (totalClicked>=5) {
        back.innerHTML = `<div class="back">${backendText[4]}</div>`
        front.innerHTML = `<div class="front">${frontendText[4]}</div>`
    }
    if (totalClicked==5 && backendContainerClicked > frontendContainerClicked) {
        h1.innerHTML = `<div>당신은 백엔드 개발자!</div>`
        developerContainer.style.display = "none"
        yourChoice.style.display = "none"
        }
        if (totalClicked==5 && backendContainerClicked < frontendContainerClicked) {
            h1.innerHTML = `<div>당신은 프론트엔드 개발자!</div>`
            developerContainer.style.display = "none"
            yourChoice.style.display = "none"
    }
}

// 박스 클릭 시
backendContainer.addEventListener("click", function(e){
    backendContainerClicked++
    totalClicked = backendContainerClicked + frontendContainerClicked
    showQuestion(backendContainerClicked, frontendContainerClicked, totalClicked)
})
frontendContainer.addEventListener("click", function(e){
    frontendContainerClicked++
    totalClicked = backendContainerClicked + frontendContainerClicked
    showQuestion(backendContainerClicked, frontendContainerClicked, totalClicked)
})