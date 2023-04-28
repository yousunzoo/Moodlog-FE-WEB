<h1 align="center"><strong>✨Moodlog✨</strong></h1>

## 🪴Moodlog 팀 소개

|                                              이어진(조장)                                               |                                          유선주                                           |                                            이찬영                                            |                                                       조승혜                                                        |
| :-----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: |
|          <img src="https://avatars.githubusercontent.com/u/64579380?v=4" style="zoom: 20%;" />          |  <img src="https://avatars.githubusercontent.com/u/102499959?v=4" style="zoom: 20%;" />   |    <img src="https://avatars.githubusercontent.com/u/92348492?v=4" style="zoom: 20%;" />     |               <img src="https://avatars.githubusercontent.com/u/112364408?v=4" style="zoom: 20%;" />                |
|                                  [boyon99](https://github.com/boyon99)                                  |                         [yousunzoo](https://github.com/yousunzoo)                         |                         [dokimion24](https://github.com/dokimion24)                          |                                      [tmdgp0212](https://github.com/tmdgp0212)                                      |
| \- 서버 구현 <br /> - 유저페이지 <br /> - 달력페이지 <br /> - 팔로워페이지 <br /> - 서버 및 사이트 배포 | - 어플리케이션 디자인 <br /> - 다이어리 생성페이지 <br /> - 세팅페이지 <br /> - 404페이지 | -로그인 페이지 <br /> - 회원가입 페이지 <br /> - 홈 피드 페이지<br /> - 로딩 컴포넌트 <br /> | - 서버 구현 <br />- 다이어리 보기 페이지 <br />- 댓글 작성, 삭제<br />- 유저 검색 페이지<br />- 홈 피드 필터링 기능 |

---

## 📋프로젝트 소개

무드로그는 다양한 무드 아이콘과 함께
나의 하루를 그림으로 기록할 수 있는 소셜 네트워크 서비스입니다.

무드로그를 통해 나의 하루를 생생하게,다양한 시각으로
바라볼 수 있습니다.

무드로그를 통해 나의 감정과 생각을 공유하며
새로운 인연을 만들어 나갈 수 있습니다.

---

- 작업 기간 : 23.04.17 ~ 23.04.28
- 데모사이트 : [Moodlog](http://moodlog-env-fe.eba-a73kg2hr.ap-northeast-2.elasticbeanstalk.com/)
- 테스트용 계정

  - ID: test@test.com
  - PW: test1234

- 노션링크 : [notion](https://unleashed-bottom-2c1.notion.site/49d2bf23c44d4a4e853d5b5cc4313964?v=85e23ce7870641a999578ee866153fa9)

### 🛠️ 사용 기술 스택

- Frontend

  - Basic: `React`, `TypeScript`
  - Library: `React-router-dom`, `React-Query`, `Axios`, `Zustand`, `React-hook-form`, `React-Calendar`, `React-Cookie`, `Styled-components`, `React-icons`

- Backend

  - `Node.js`, `MySQL`, `Express`, `TypeScript`

- Deploy
  - `AWS S3`, `AWS EC2`, `AWS RDS`, `AWS Elastic BeanStalk`

---

## 📁 프로젝트 구조

```
┌─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ assets
├─ server.js
└─ src
   ├─ App.tsx
   ├─ apis
   ├─ components
   │  └─ 각 페이지에 필요한 컴포넌트 모음
   ├─ constants
   │  └─ 각 페이지에 필요한 상수
   ├─ hooks
   │  └─ 각 페이지에 필요한 훅
   ├─ main.tsx
   ├─ pages
   │  └─ 페이지 별 컴포넌트
   ├─ routes
   │  └─ 경로 관련 컴포넌트
   ├─ store
   │  └─ 폰트, 테마 등 전역 속성 관리
   ├─ styles
   │  └─ 스타일 관련 요소
   ├─ types
   │  └─ 전역적으로 사용 할 interface 모음
   └─ utils
      └─ 전역적으로 사용 할 유틸 모음
```

---

## 💻 프로젝트 실행 방법

```
1. $ git clone https://github.com/REACT-2/Moodlog-FE-WEB.git
2. cd Moodlog-FE-WEB
3. yarn
4. yarn dev
```

---

## 🪢 프로젝트 다이어그램

![drawio](https://user-images.githubusercontent.com/112364408/235072370-71b6b219-84a5-4ac3-9515-af5f5da04079.png)

---

## 🌈 프로젝트 프리뷰

<div align="center">
<table>
<tr>
    <th>
      <div >
        <img src="https://user-images.githubusercontent.com/112364408/235073375-50250c6f-1655-4545-869c-121e387e595d.png" width="280" height="520">
      </div>
      <div align="center">
      로그인 페이지
      </div>
    </th>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073376-ac568f3b-eda1-4292-a809-e801babcd66e.png" width="280" height="520">
      </div>
     <div align="center">
      회원가입 페이지
      </div>
    </th>
  </tr>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073372-0b4a0637-715d-4748-9bc4-3039e56faf18.png" width="280" height="520">
      </div>
      <div align="center">
      메인 페이지
      </div>
    </th>
    <th>
      <div>
       <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073383-b9cfcd62-6a41-49de-8e36-74471e356d07.png" width="280" height="520">
      </div>
      </div>
      <div align="center">
      다이어리 페이지
      </div>
    </th>
  </tr>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073391-b8a42ae8-9e77-4073-8e9f-533556f84bfb.png" width="280" height="520">
      </div>
      <div align="center">
      다이어리 작성 페이지 1
      </div>
    </th>
    <th>
      <div>
       <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073370-768c3850-9fac-4d5b-8e7b-a6d106b8bac9.png" width="280" height="520">
      </div>
      </div>
      <div align="center">
      다이어리 작성 페이지 2
      </div>
    </th>
  </tr>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073385-e0256018-480f-4a50-aa25-a1d36e0e3884.png" width="280" height="520">
      </div>
      <div align="center">
      유저 페이지
      </div>
    </th>
    <th>
      <div>
       <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073387-b6a1b088-9c0a-447a-88dd-b07cef2aa91c.png" width="280" height="520">
      </div>
      </div>
      <div align="center">
      달력 페이지
      </div>
    </th>
  </tr>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073379-5f7b7abd-c307-4acd-9040-400a0d7add0a.png" width="280" height="520">
      </div>
      <div align="center">
      유저 검색 페이지
      </div>
    </th>
    <th>
      <div>
       <div>
        <img src="https://user-images.githubusercontent.com/112364408/235073382-9bd2566f-6000-4461-b627-6b610678ca68.png" width="280" height="520">
      </div>
      </div>
      <div align="center">
      설정 페이지
      </div>
    </th>
  </tr>
</table>
</div>
