// DOM 객체 연결
const examDay = document.getElementById("examDay")
const popUp = document.getElementById("popUp")

// 배열 초기화
const quoteArray =
[
"제자가 계속 제자로만 남는다면 스승에 대한 고약한 보답이다."
,"누구나 다 읽기를 배우게 하면 하면 결국 글쓰기 뿐 아니라 사고도 망쳐버릴 것이다."
,"아이들에게 순종을 제외한 모든 것을 기대하는 오늘날과 달리 아이들에게 순종 외에는 아무 것도 기대하지 않았던 시절이 있었다."
,"중요한 것은 학습을 중단하지 않고, 도전을 즐기고, 애매모호함을 받아들이는 것이다. 종국에는 확실한 해답은 없기 마련이다."
,"네 책의 복사본 보내줘서 고마워. 읽느라 시간 낭비하지 않을께."
,"실패가 나태함에 대한 유일한 징벌은 아니다. 다른 이들의 성공도 있지 않은가."
,"신이 인간에게 미래를 밝혀주실 그날까지 인간의 모든 지혜는 오직 다음 두 마디 속에 있다는 것을 잊지 마십시오. 기다려라! 그리고 희망을 가져라!"
,"조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿는다."
,"도전을 받아들여라. 그러면 승리의 쾌감을 맛볼 지도 모른다."
,"난관은 낙담이 아닌 분발을 위한 것이다. 인간의 정신은 투쟁을 통해 강해진다."
]

// 수능 디데이 업데이트
function leftTimeUpdate() {
    const currentYear = new Date()
    const examinationFinalDay = new Date('November 14, 2024 08:10:00')
    const leftTime = examinationFinalDay - currentYear
    const leftSeconds = Math.floor( (leftTime/1000) % 60 );
    const leftMinutes = Math.floor( (leftTime/1000/60) % 60 );
    const leftHours = Math.floor( (leftTime/(1000*60*60)) % 24 );
    const leftDays = Math.floor( leftTime/(1000*60*60*24) );
    examDay.innerHTML = `${leftDays}일 ${leftHours}시간 ${leftMinutes}분 ${leftSeconds}초`
    return leftTime
}

// 수능 종료 팝업 노출
function popUpQuote() {
    const randomNumber = Math.floor(Math.random() * quoteArray.length)
    popUp.innerHTML = `<div id="quote">${quoteArray[randomNumber]}</div>`
    popUp.style.display = "block"
}

// 메인 컨트롤
function main() {
    setInterval(leftTimeUpdate, 1000)
    let leftTime = leftTimeUpdate()
    if (leftTime == 0) {
        popUpQuote()
    }
}

// 실행
main()