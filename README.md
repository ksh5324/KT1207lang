# KT Lang (버전: 0.0)개발중

<div align="center">
    <img src="./kt.jpeg" width="250px" />   
</div>

<hr />
- 위사진은 허락을 맡고 첨부하였으며, 이 언어를 제작하는 것 또한 허락을 맡고 제작한것입니다.

경태는 저희학교 인재로 경태 님이 자주 하는 말에서 착안하여 제작되었습니다. 이는 rycont님의 엄랭과 ArpaAP님의 mollang을 참고하여 제작되었으며, 문법은 다릅니다.

현재 제작중인 것은 베타 버전으로 만든 후에 다시 체계화된 언어를 제작할 것입니다.

_제안할 사항이 있다면 언제든 이슈 넣어주시길 바랍니다_

```txt
경태 k 는 3;
경태 t 는 5;

경태 r 는 k 찍 t;


헤이즐넛(k>t)라뗴
헤
    내가_데 k;
    k 깜 1;
응;

```

# 문법

## 세미콜론과 띄어쓰기

실행문이 끝나면 반드시 세미콜론을 해야하며 각각의 요소 사이에는 공백이 존재해야한다

## 리터럴

문자, 문자열을 적을 땐 ""안에 적어야 합니다.
나머지는 다른 언어와 같습니다.

## 변수

### 1. 변수 선언

키워드: '경태'
변수에는 정수, 실수, 문자, 문자열, 불리언 값을 저장할 수 있습니다.
선언만 하고 값을 할당하지 않는 경우 '경태머리'라는 값이 들어값니다. 이것은 undifined 혹은 null과 비슷한 의미입니다.

선언하는 방법은 다음과 같습니다.

    경태 a // a라는 변수 선언
    경태 k // k라는 변수 선언
    경태 t // t라는 변수 선언

### 2. 변수 대입

키워드: '는'
변수에 값을 대입할 때는 '는'을 사용하여 '는' 뒤에 오는 것을 변수에 대입합니다.

    경태 k 는 3; // k라는 변수 선언과 동시에 3 대입
    k 는 "경태"; // k라는 변수에 "경태"라는 문자열 대입

### 3. 변수 사용

변수를 사용할 때는 변수이름을 적으면 됩니다.

    k // k라는 변수 사용

## 연산

연산자는 다른 언어와 같이 깜(+), 찍(-), 한(\*), 경(/), 태(%) 이렇게 다섯개만 현재 구현되어있습니다.

깜 -> +, 찍 -> -, 한 -> \*, 경 -> /, 태 -> %

    경태 k 는 5; // k라는 변수 선언 및 5로 초기화
    경태 t 는 7; // t라는 변수 선언 및 7로 초기화

    경태 R 는 k 깜 t; // k값과 t값을 더한 12라는 값으로 초기화 된 R 변수 선언

## 입력, 출력

### 입력

입력을 받을 때는 '탈모'를 사용합니다.

    경태 a;
    a 는 탈모;

### 출력

내가\_데 라는 키워드를 사용하여 출력합니다.

    경태 k 는 3; // k라는 변수를 생성하여 3으로 초기화
    내가_데 k; // k라는 변수 출력

    //추가 문자열이 필요하다면
    내가_데 "kt" k "ktkt";
    // 이 이상의 추가 문자열을 오류를 발생시키므로 또 하나의 내가_데를 사용해야합니다.

## 중괄호 {}

kt1207lang에서는 중괄효 대신 헤, 응을 사용합니다.

    헤
        내가_데 k;
    응

## 조건문

조건문에 문법은 '살고싶지않아(조건)?' 입니다.

    경태 a 는 3 // a라는 변수에 3저장

    살고싶지않아(경대(a) >= 0)?
    헤
        내가_데 a;
    응

## 반복문

반복문에 문법은 '헤이즐럿(조건)라떼' 입니다.

    경태 a 는 3 // a라는 변수에 3저장

    헤이즐럿(경대(a) >= 0)라떼
    헤
        내가_데 a;
        a 는 a - 1;
    응

## 함수

함수는 상당히 까다로운 문법입니다.  
이경태가 함수 키워드이며, 반사는 리턴문입니다.

```txt
이경태 함수이름(매개변수)
헤
   [실행문]
   반사 '값';
응
```

함수를 실행할 때는 '모자람'을 사용합니다.

```txt
모자람 함수이름(인자);
k 는 모자람 함수이름(인자);
```
