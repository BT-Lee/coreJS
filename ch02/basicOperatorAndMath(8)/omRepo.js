//전위형과 후위형
// let a=1,b=1;

// let c = ++a; //2
// let d= b++; //1

//할당 후 결과 예측하기
// let a=2;

// let x=1+(a*=2);
// a=4 x=5

/**
 * 1. ""+1+0=1 틀림 "10" ""+1 에서 1은 문자형으로 변환된다. 0도 같은 규칙이 적용
 * 2. ""-1+0=-1 -는 숫자형만을 인수로 받는다. ""는 숫자 0
 * 3. true + false = 0 1 true -> 1 false ->0
 * 4. 6/"3" = 2
 * 5. "2"*"3" = 6
 * 6. 4+5+"px"= 45px -> 4+5문자열로 변환되는 줄 알았다. 하지만 문자열을 만나지 않았기 때문에 9후 문자열과 병합
 * 7. "$"+4+5 = $9 -> 문자열을 만나 $45
 * 8."4"-2 = 2
 * 9. "4px" -2 = -2 //문자열에 숫자말고 다른 것이 있으면 NaN
 * 10. 7/0 = Infinity
 * 11. "  -9  "+5 = -4 -> " -9 5 " -> 피 연산자 중 하나가 문자열이므로 숫자 5가 문자열로 변환
 * 12. "  -9  "-5 = -14
 * 13. null+1 ->error // 1-> null은 숫자형 변환 시 0
 * 14. undefined+1 ->error -> undefined 숫자형 변환 시 NaN
 * 15. " \t \n" -2 //-2 답은 맞지만 풀이가 틀렸다. \t와 \n그 사이의 일반적인 공백으로 구성.
 * 따라서 변환 시 길이가 0인 문자열로 취급 받아 숫자 0이 된다.
 */

/**
 * 아래 코드는 사용자에게 숫자 2개를 입력받은 다음 그 합을 보여줍니다.

그런데 의도한 대로 예시가 동작하지 않습니다. 프롬프트 창에 세팅한 기본값을 수정하지 않은 경우 덧셈의 결과는 12가 됩니다.

왜 그럴까요? 예시가 제대로 동작하도록 코드를 수정해 보세요. 결과는 3이 되어야 합니다.

 * let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(a + b); // 12
 */

let a = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(a + b); // 12