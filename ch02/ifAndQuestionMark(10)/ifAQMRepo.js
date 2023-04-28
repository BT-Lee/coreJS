//if와 문자열0
if("0"){
    alert('Hello');
}
/**
 * 0은 falsthy값이지만, 문자열 "0"은 공백아 아닌 문자열 이므로. Hello가 출력된다.
 */

//자바스크립트의 공식 이름
let company = prompt("자바스크립트의 '공식' 이름은 무엇일까요?",'');

if(company=='ECMAScript'){
    alert('정답입니다!');
}   else{
    alert('모르셨나요? 정답은 ECMAScript입니다!');
}

//입력받은 숫자의 부호 표시하기
let num=prompt('숫자 하나를 입력해주세요.','');

if(num>0){
    alert(1);
} else if(num<0){
    alert(-1);
} else{
    alert(0);
}

//if를 ?로 교체하기
let result;
reslut=(a+b<4) ?'미만':'이상';

//if...else를 ?로 교체하기
let message;

(login=='직원')?message='안녕하세요.':
(login=='임원')?message='환영합니다.':
(login=='')?message='로그인이 필요합니다.':'';
