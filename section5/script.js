// DOM 객체 연결
const container = document.getElementById("container")
const img = document.querySelector("img")
const name = document.getElementById("name")
const sex = document.getElementById("sex")
const age = document.getElementById("age")
const earning = document.getElementById("earning")
const locationHome = document.getElementById("locationHome")
const nextPerson = document.getElementById("nextPerson")

// 변수 초기화
let personInfo = []

let male = ""
let female = ""

// user api 가져오기
async function getPersonaApi() {
    const response = await fetch("http://randomuser.me/api/")
    const jsonResponse = await response.json()
    const person = jsonResponse.results[0]
    const checkPersonData = {
        img: `${person.picture.medium}`,
        name: `이름: ${person.name.title}_${person.name.first} ${person.name.last}`,
        sex: `성별: ${changeEnglishToKorean(person.gender)}`,
        age: `나이: ${person.dob.age}`,
        earning: `월급: ${Math.floor(Math.random()*10000000)}원`,
        location: `국가: ${person.location.country}, 주: ${person.location.state}, 도시: ${person.location.city}`,
    }

    personInfoData(checkPersonData)
}

// 성별 영어문자 한글로 치환
function changeEnglishToKorean(genderObj) {
    if(genderObj == "male") {
        male = "남"
        return male
    }
    if(genderObj == "female") {
        female = "여"
        return female
    }
    return "중성"
}

// 변수 personInfo 배열 월급 데이터 넣기
function personInfoData(jsonObj) {
    personInfo.push(jsonObj)
}

// 메인 컨트롤 기능 담당
async function main() {
   await  getPersonaApi()
    for(info of personInfo) {
        img.src = info.img
        name.innerText = info.name
        sex.innerText = info.sex
        age.innerText = info.age
        earning.innerText = info.earning
        locationHome.innerText = info.location
    }
}

nextPerson.addEventListener("click", function(e){
    e.preventDefault()
    main()
})