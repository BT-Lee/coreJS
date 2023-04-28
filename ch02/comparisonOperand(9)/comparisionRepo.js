'use strict';

5>4 //true
"apple">"pineapple"; //false -> 사전순. 길이 순 X
"2">"12"; //false // true -> 문자열 이므로 사전순으로 비교
undefined==null; //true // 같다
undefined===null; // false
null=="\n0\n"; //false -> null은 오직 undefined와 같다
null===+"\n0\n"; //false -> 형이 다르기 때문