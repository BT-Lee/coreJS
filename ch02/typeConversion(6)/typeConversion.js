/**
 * 형 변환
 * 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환된다.
 * 이런 과정을 "형 변환(Type Conversion)이라고 한다."
 * 
 * alert가 전달받은 값의 자료형과 관계없이 이를 문자열로 자동 변환하여 보여주는 것이나,
 * 수학 관련 연산자가 전달받은 값을 숫자로 변환하는 경우가 형 변환의 대표적인 예시
 * 
 * 이 외에 전달받은 값을 의도를 갖고 원하는 타입으로 변환(명시적 변환)해 주는 경우도 형 변환이라고 할 수 있다.
 */

/**
 * 문자형으로 변환
 * alert 매서드는 매개변수로 문자형을 받기 떄문에, alert(value) 에서 value는 문자형이어야 한다.
 * 만약, 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환된다.
 * String(value) 함수를 호출해 전달받은 값을 문자열로 변환 할 수도 있다.
 */
'use strict';
    let value=true;
    alert(typeof value);

    value=String(value);
    alert(typeof value);

    /**
     * 숫자형으로 변환
     * 숫자형으로 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어난다.
     * 숫자형이 아닌 값에 /를 적용한 경우에도 적용
     */
    alert("6"/"2");
    
    // Number(value)함수를 사용하면 주어진 값을 숫자형으로 명시해서 변환
    let str="123";
    alert(typeof str);

    let num=Number(str);

    alert(typeof num);
/**
 * 숫자형 값을 사용해 무언가를 하려고 하는데 그 값을 문자 기반 폼을 통해 입력받는
 * 경우엔, 이런 명시적 형 변환이 필수이다.
 * 한편, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면,
 * 그 결과는 NaN이 된다.
 */
    let age = Number("임의의 문자열 123");

    alert(age);

    /**
     * 숫자형으로 변환 시 적용되는 규칙
     * undefined -> NaN
     * null -> 0
     * true and false -> 1, 0
     * string -> 문자열의 처음과 끝 공백이 제거, 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽는다.
     * 변환에 실패하면 NaN이 된다.
     */

    alert(Number("  123   ")); //123
    alert(Number("123z")); // NaN
    alert(Number(true)); // 1
    alert(Number(false)); // 0

    /**
     * null과 undefined는 숫자형으로 변환 시 결과가 다르다는 점에서 유의해야한다.
     * null -> 0 undefined -> null
     */

    /**
     * 불린형으로 변환
     * 논리 연산을 수행할 때 발생한다.
     * Boolean(value)를 호출하면 명시적으로 불리언으로의 형 변환을 수행
     * 불린형으로 변환시 적용되는 규칙은 다음과 같다.
     * -> 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 "비어있다고" 느껴지는 값들 -> false
     * -> 그 외의 값은 true로 변환. 
     */

    alert(Boolean(1)); //숫자 1(true)
    alert(Boolean(0)); //숫자 0(false)

    alert(Boolean("hello")); // 문자열(true)
    alert(Boolean("")); // 빈 문자열(false)
    // 문자열 "0"은 true이다. JS에서는 비어있지 않은 문자열은 언제나 true이다.
    Boolean("0"); // true
    Boolean(" "); //공백이 있는 문자열도 비어있지 않은 문자열이기 때문에