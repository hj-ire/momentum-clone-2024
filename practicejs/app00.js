//0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
//범위에는 음수가 포함될 수 없습니다.
//실시간으로 범위 값을 업데이트해야 합니다.
//유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
//유저에게 게임의 승패를 알려야 합니다.

//Math.random
//<form> : 사용자로부터 입력을 받을 수 있는 입력 폼(form)을 정의할 때 사용하는 태그입니다. 입력된 정보를 제출할 수 있습니다.
//querySelector : CSS 선택자 형식을 사용해 HTML의 요소를 JS에서 사용하도록 가져올 수 있습니다.
//다만, 같은 클래스명을 가지고 있다면 가장 첫 번째 요소만을 가지고 옵니다. 참고 자료
//preventDefault() : 이벤트마다 가지고 있는 브라우저에서 발생하는 고유 동작을 막기 위해 사용할 수 있습니다. 참고 자료
//Math.ceil() : 주어진 숫자를 올림 하기 위해 사용하는 함수입니다. 숫자는 정수 형태로 반환됩니다. 참고 자료
//parseInt() : 주어진 문자열을 정수형으로 변환해서 반환하는 함수입니다. 참고 자료
//innerHTML : 요소 내에 포함된 HTML을 나타내는 프로퍼티입니다. HTML을 읽어들이거나 설정할 수 있습니다. 참고 자료

//1. put number in first_form
//2. Math.random() * first_form input value
//3. input number in second_form
//4. press play button
//5. You chose: second_form value, the machine chose:  Math.random() * first_form input value
//6. if they are same you win else you lose.

const firstForm = document.querySelector(".first_form");
const firstFormInput = document.querySelector(".first_form input");
const secondForm = document.querySelector(".second_form");
const secondFormInput = document.querySelector(
  ".second_form input:first-child"
);
const playButton = document.querySelector(".second_form input:last-child");

function onclickFirstFormInput(event) {
  event.preventDefault();
  const firstFormValue = firstFormInput.value;
  if (firstFormValue <= 0 && firstFormValue % 1 !== 0) {
    alert("Please enter a positive number");
  } else {
  }
}

firstForm.addEventListener("click", onclickFirstFormInput);
