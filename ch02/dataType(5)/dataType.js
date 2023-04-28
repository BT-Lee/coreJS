'use strict';
//숫자형
let n=123;
n=123456;
//숫자형은 정수 및 부동소수점 숫자(floating point number)
//사칙연산 및 Infinity, -Infinity, NaN 같은 특수 숫자 값이 포함
alert(1/0); //무한대
alert(Infinity); //무한대
alert("숫자가 아님"/2); // NaN, 문자열을 숫자로 나누면 오류가 발생
alert("숫자가 아님"/2+5); // Nan
/*
BigInt -> 처음보는 형식
내부 표현 방식 때문에 (2^53-1)(9007199254740991) 보다 큰 값 혹은 -(2^53-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없습니다.
BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있다.
BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.
const bigInt=1234567890123456789012345678901234567890n;
*/
//자바스크립트에선 문자열을 따옴표로 묶는다.
let str="Hello";
let str2='Single quotes are ok too';
let phrase=`can embed another ${str}`;
/*따옴표는 세 종류가 있다.
1. 큰따옴표 : "Hello"
2. 작은따옴표 : 'Hello' 
3. 역 따옴표(백틱, backtick): `Hello`
큰따옴표, 작은 따옴표 기본적인 따옴표, 자바스크립트에서 이 둘에 차이를 두지 않는다.
역 따옴표로 변수나 표현식을 감싼 후 ${}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을
문자열 중간에 손쉽게 넣을 수 있다.*/
let name="John";

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); //Hello, John!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1+2}`); // the result is 3

/*${} 안에는 name 같은 변수나 1+2 같은 수학 관련 표현식을 넣을 수 있다.
무엇이든 들어갈 수 있다. 
문자열 중간에 들어간 변수나 표현식은 평가가 끝난 후 문자열의 일부가 된다.

큰,작은 따옴표를 사용하면 중간에 표현식을 넣을 수 없다는 점에 주의해야한다.
이 방법은 역 따옴표를 써야만 가능하다.*/
alert("the result is ${1+2}"); //큰따옴표는 확장 기능을 지원하지 않는다.
/* JS는 글자형(Character)형을 따로 지원하지 않고, 문자형만 있다 */

let nameFieldChecked = true;
let ageFieldChecked = false;

//불린 값은 비교 결과를 저장할 때도 사용된다.
let isGreater = 4>1;
alert(isGreater); // true (비교 결과: "yes")

/*
null 값은 지금까지 소개한 자료형 중 어느 자료형에도 속하지 않는 값이다.
null 값은 오로지 null 값만 포함하는 별도의 자료형을 만든다.
*/
let age=null;

/*
자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다. 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용합니다.
하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
let age = null;은 나이(age)를 알 수 없거나 그 값이 비어있음을 보여줍니다.
*/

/*
undefined값
null 값 처럼 자신만의 자료형을 형성
'값이 할당되지 않은 상태'를 나타낼 때 사용한다.
변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당
 */

//let age=100;
age=undefined;
alert(age)
//변수가 비어있거나 알 수 없는 상태 ->null 사용, undefined의 경우 할당되지 않은 변수의 초기값을 위해 예약어로 남기자
/* 객체와 심볼
객체(object)형은 특수한 자료형입니다.
객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다. 반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.
이런 특징 때문에 자바스크립트에서 객체는 좀 더 특별한 취급을 받습니다. 자세한 내용은 원시형을 배우고 난 후 객체에서 다루도록 하겠습니다.
심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다. 심볼형에 대해선 객체를 학습하고 난 이후에 자세히 알아보겠습니다.
*/
//typeof -> 연사자 함수형 괄호가 있든 없든 결과가 동일하다.
typeof undefined
typeof 0
typeof 10n
typeof true
typeof "foo"
typeof Symbol("id") // symbol
typeof Math //"object"
typeof null
typeof alert //function ->함수형은 존재하지 않고 객체형이다. 오래전에 만드어져 하위 호환성 유지를 위해 남겨진 상태