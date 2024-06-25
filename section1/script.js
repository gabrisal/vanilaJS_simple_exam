const containerBox = document.querySelector("#containerBox")
const containerRegister = document.querySelector(".containerRegister")
const input = document.querySelector("input")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
const containerForm = document.querySelector("#containerForm")

// 1.input 태그 유효성검사 success시, input태그 테두리 색 파란색 변경
function showSuccess(input) {
    const containerControl = input.parentElement;
    containerControl.className = 'containerRegister success'
}
// 2.input 태그 유효성검사 fail시, input 태그 테두리 색 빨간색 변경
function showFail(input, message) {
    const containerControl = input.parentElement
    containerControl.className = 'containerRegister fail'
    const small = containerControl.querySelector("small")
    small.innerText = message
}
// 3.input 태그 값에 데이터가 없을 때(유효성검사)
function inputEmptyValueCheck(input) {
    if(input.value.trim()<=0) {
        showFail(input, "값을 입력해주세요")
    }
}
// 4.패스워드 일치, 불일치 검사(유효성검사)
function passwordsValueMatchCheck(input1, input2) {
    if(input1.value !== input2.value) {
        showFail(input2, "비밀번호가 같지 않습니다.")
    } else if (input == input2) {
        showSuccess(input1)
        showSuccess(input2)
    }
}
// 5.input값에 이메일 유효성검사가 틀렸을 때(유효성검사 -> 정규표현식)
function emailCheck(input) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
        showSuccess(input)
  } else {""
        showFail(input, "이메일을 다시 확인해주세요.")
  }
}

containerForm.addEventListener('submit', function(e) {
    e.preventDefault()
    inputEmptyValueCheck(input)
    passwordsValueMatchCheck(password, password2)
    emailCheck(email)
})