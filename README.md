
# **프로젝트 소개 - 병원예약 페이지 만들기**

## 배포 주소
### 📒 https://preeminent-pony-ca088e.netlify.app

<br>
<br>

## 프로젝트 설명

- 로그인하여 병원을 예약하는 페이지 입니다.
- 병원 선택, 날짜, 시간, 진료 종류를 선택할 수 있습니다.
- 해당 데이터들은 localstorage로 저장하고 화면에 보이게 됩니다.
- 로그인 + 예약완료 상태에서는 예약 조회에 예약 데이터가 나옵니다.
- 예약 완료 상태에서 예약 취소 가능합니다.
- 로그아웃 시에는 localstorage 저장된 내용이 삭제되어 다시 로그인부터 예약 진행해야합니다.

<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> styled-components

> styled-reset

> react-dom

> react-router-dom

> react-datetime-picker


<br>
<br>

## 프로젝트 설치 및 실행 방법

1. Node.js를 설치해주세요.
```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.
```
https://github.com/KOWOONLEE/4th_mini_clinic-reservation.git
```

3. dependencies를 설치해주세요.
```
npm install
```

4. 명령어를 통해 server를 실행해주세요.
```
npm run start
```

<br>
<br>

## 기능 소개

### ✅ 로그인 화면
이름과 핸드폰번호를 입력하여 localstorage에 저장합니다.

![로그인](https://user-images.githubusercontent.com/108816777/196376587-a8fa5a90-514d-4e96-ad05-38b66867d4f8.gif)

<br>
<br>

### ✅ 예약 화면
병원, 시간, 진료 종류를 선택하여 예약합니다.

![예약 페이지](https://user-images.githubusercontent.com/108816777/196376814-3381bd43-5b69-4d2c-ac1d-107483c6c13a.gif)


<br>
<br>

### ✅ 예약 조회, 예약 변경
예약 데이터가 출력됩니다.
예약 변경 버튼 클릭시 기존 예약 데이터는 지워지고 예약화면으로 넘어갑니다.

![예약 변경](https://user-images.githubusercontent.com/108816777/196376963-ee67206b-743b-4a43-827e-1bfe329ae17d.gif)

<br>
<br>

### ✅ 예약 취소
예약 취소 가능하고 localstorage에 저장된 예약 데이터가 삭제됩니다. 예약 조회시 예약 데이터가 없다면 예약 내역이 없다고 뜹니다.

![예약 취소](https://user-images.githubusercontent.com/108816777/196377404-a010ad3f-5669-4e11-8225-3fd4ec8f4de3.gif)

<br>
<br>


### ✅ 로그아웃 화면
로그아웃 시에는 localstoragedp 저장된 사용자 및 예약데이터가 삭제됩니다.

![로그아웃](https://user-images.githubusercontent.com/108816777/196377655-4f07f190-70b2-41be-84e9-e3cdc19d4913.gif)

<br>
<br>



## 코드 설명
- 로그인 버튼 클릭 시 이름과 핸드폰 번호를 입력함. 이름은 1자 이상 핸드폰 번호는 10자 이상 입력해야 버튼 활성화됨
- 로그인 시 상단 메뉴 바의 로그인 버튼이 로그아웃 버튼으로 변경됨.
- 로그인 후 예약 페이지로 넘어감. 여기서 병원, 날짜 및 시간, 진료 종류 선택 후 예약하기 버튼 누르면 localstorage로 데이터 저장하여 조회 페이지로 넘어감.(getItem/setItem)
- 달력은 오늘 이전일은 선택 불가능
- 조회페이지에는 예약 변경 버튼과 취소 버튼이 있음.
- 예약 변경은 현재 저장되어있는 localstorage 데이터 중 예약 관련 데이터를 지우고 예약하기 페이지로 넘어감.
- 예약 취소는 변경과 동일하게 localstorage 데이터를 지우고 메인페이지로 돌아감.
- 만약 예약 완료 건이 있으면 예약 페이지 접속시에 '이미 예약 건이 있고 새로 예약하려면 기존 내역 지우세요'라고 뜸.
- 예약 완료 건이 없다면 예약 조회 페이지에 '예약 건이 없다'고 뜸.
- 예약 취소하기 버튼은 예약 조회 페이지로 넘어감. 해당 페이지에서 변경 및 취소 가능
- 로그아웃 버튼 클릭시 localstorage에 저장했던 모든 데이터 (예약자, 병원, 날짜, 진료 종류) 등은 삭제됨. (removeItem)




## 작성자 깃허브 및 블로그 계정

- 깃허브 https://github.com/KOWOONLEE
- 블로그 https://velog.io/@kkk5689


