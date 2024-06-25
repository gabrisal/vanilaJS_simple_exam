// DOM 객체 연결
const container = document.getElementById("container")
const menuAdmin = document.getElementById("menuAdmin")
const buttonSubmit = document.getElementById("buttonSubmit")
const inputMenu = document.getElementById("inputMenu")
const menuList = document.getElementById("menuList")
const span = document.querySelector("span")

// 변수 초기화
let count = 0

// 리스트 템플릿 설계
function addListTemplate(inputMenuValue, count) {
    const listTemplate = `
    <div>
        <span id="spanMenuName">${inputMenuValue}</span>
        <button id="modify_${count}" class="modify">수정</button>
        <button id="delete_${count}" class="delete">삭제</button>
    </div>
    `

    menuList.innerHTML += listTemplate
    localStorage.setItem(`${inputMenuValue}`, inputMenuValue)
    // count = menuList.querySelectorAll("div").length
}

// 리스트 템플릿 수정
function modifyListTemplate(inputMenuValue, count) {
    window.addEventListener("click", function(e) {
        if(e.target.classList.contains("modify") && e.target.id == `modify_${count}`) {
            const modifyCoffee = this.prompt("수정할 음료이름을 알려주세요!")
            const spanName = e.target.parentElement.querySelector("#spanMenuName")
            spanName.innerHTML = modifyCoffee
            this.localStorage.setItem(`${inputMenuValue}`, inputMenuValue)
        }
    })
}

// 리스트 템플릿 삭제
function deleteListTemplate(inputMenuValue, count) {
    window.addEventListener("click", function(e) {
        if(e.target.classList.contains("delete") && e.target.id == `delete_${count}`) {
            const spanName = e.target.parentElement.querySelector("#spanMenuName")
            this.alert(`${spanName.innerText}을 리스트에서 지웠습니다.`)
            this.localStorage.removeItem(`${inputMenuValue}`)
            e.target.parentElement.remove()
        }
    })
}

// 버튼 클릭 시
function buttonClicked() {
    buttonSubmit.addEventListener("click", function(e) {
        count++
        const inputMenuValue = inputMenu.value
        addListTemplate(inputMenuValue, count)
        modifyListTemplate(inputMenuValue, count)
        deleteListTemplate(inputMenuValue, count)
    })
}

// 메인 컨트롤
function main() {
    setInterval(count, buttonClicked())
}

main()