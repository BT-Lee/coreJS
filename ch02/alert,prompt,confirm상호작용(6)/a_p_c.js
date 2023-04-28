/**
 *브라우저를 데모 환경으로 사용 중이므로 브라우저 환경에서 사용되는
    최소한의 사용자 인터페이스 alert, prompt, confirm
 */

    //alert
    alert("Hello");

/**
 * prompt 함수는 두 개의 인수를 받습니다.
 * 함수가 실행되면 텍스트 메시지와 입력 필드, 확인 및 취소 버튼이 있는 모달 창을 띄워준다.
 * title : 사용자에게 보여줄 문자열
 * default : 입력 필드의 초깃값(선택값)
 * 
 * 인수를 감싸는 대괄호 [...]의 의미
 * default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미한다.
 * 사용자가 입력을 취소한 경우는 null이 반환된다.
 */

    let age=prompt('나이를 입력해주세요.',100);
    alert(`당신의 나이는 ${age}살 입니다.`); //당신의 나이는 100살입니다.

    /*
    *Internet Explorer(IE)에서는 항상 '기본값'을 넣어줘야 한다.
    *모든 사용자에게 깔끔한 프롬프트를 보여주려면
        let test = prompt("TEST", '');
        같은 방식으로 입력한다.
     */

    /**
     * 컨펌 대화상자
     * result = confirm(question);
     * confirm 함수는 매개변수로 받은 question과 확인 및 취소 버튼이 있는 모달 창을 보여준다.
     * 사용자가 확인 버튼을 누르면 true, 그외의 경우에는 false를 반환
     * let isBoss = confirm("당신이 주인인가요?")
     * alert(isBoss); // 확인 버튼을 눌렀다면 true가 출력된다.
     */
