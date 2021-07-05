// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector('#username');
let elInputPassword = document.querySelector('#password');
let elInputPasswordRetype = document.querySelector('#password-retype');

// elFailureMessage.style.display = 'none';
// elFailureMessage.classList.remove('hide');

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');
let elMismatchMessage = document.querySelector('.mismatch-message');
let elMatchMessage = document.querySelector('.match-message');

// onkeyup 키보드 눌리면
// function() 이벤트 핸들러

elInputUsername.onkeyup = function (){ // 아이디 입력창에 글자를 키보드로 입력할 떄
  console.log(elInputUsername.value);

  if(isMoreThan4Length(elInputUsername.value)){   // 글자수가 4개 이상이면
    elSuccessMessage.classList.remove('hide');   // 사용할 수 있는 아이디 입니다 메시지 출력
    elFailureMessage.classList.add('hide');
  }
  else{
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}

elInputPassword.onkeyup = function () {
  console.log(elInputPassword.value);
}

elInputPasswordRetype.onkeyup = function () {
  console.log(elInputPasswordRetype.value);

  if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMatchMessage.classList.remove('hide');
    elMismatchMessage.classList.add('hide');
  }
  else {
    elMatchMessage.classList.add('hide');
    elMismatchMessage.classList.remove('hide');
  }
}



function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}


function isMatch (password1, password2) {
  return String(password1) === String(password2);
}