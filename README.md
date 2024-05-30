
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=Climbing%20Introduce&fontSize=70" />

# 클라이밍 소개 웹사이트 🧗

><b>사이트 이동</b> : <a href="https://eogks0218.github.io/DH_Climbing/">🧗 The Crag</a>

## 📌목차

▪ [📂 프로젝트 구성](#프로젝트-구성)  
▪ [📺 페이지 설명](#페이지-설명)  
▪ [✔ 프로젝트 진행 중 문제 및 해결](#프로젝트-진행-중-문제-및-해결)  
▪ [😱 문제점](#문제점)  
▪ [💡 해결방안](#해결방안)  




## 📂프로젝트 구성

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/ad2f94a2-8be1-499c-bf66-7727109e6d77" width="400px" />

<div align="right">
  
[목차로](#목차)

</div>


##  📺페이지 설명

### `Main`

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/18d5aedd-a32f-475a-92e3-7c6861a64b82" width="450px" />
<br />

<ul>
  <li>메인페이지 상단</li>
  <li>각 메뉴로 이동 기능</li>
</ul>
<br />
<br />

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/070da9b2-7e89-4774-8579-0b50d78d19d7" width="450px" />
<br />

<ul>
  <li>이미지 슬라이드</li>
  <li>자동 및 수동 전환 가능</li>
</ul>
<br />
<br />

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/026cb953-252b-4e19-852e-775e06f4758f" width="450px" />
<br />

<ul>
  <li>기본 소개글</li>
  <li>이미지에 마우스를 올리면 소개글 출력</li>
  <li>커서 아이콘 클릭 시 동영상 출력</li>
</ul>
<br />
<br />

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/d93a512d-0d51-4c61-b390-46d9e53289f6" width="450PX" />
<br />

<ul>
  <li>메인 페이지 메뉴</li>
</ul>
<br />
<br />

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/4420f1fe-cf6f-4936-aa5a-37352f3fabcc" width="450px" />
<br />

<ul>
  <li>메인 페이지 footer</li>
  <li>클라이밍 선수 정보 및 인스타그램 링크</li>
</ul>
<br />
<br />

### `About`

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/b7e0254c-f463-4ea1-8c05-2355d78587e2" width="450px" />
<br />

<ul>
  <li>About 페이지</li>
  <li>상단 메뉴로 각 페이지로 이동 가능</li>
  <li>사이드 메뉴로 해당 스크롤로 이동 가능</li>
  <li>내용 클릭 시 해당 내용 오픈</li>
</ul>
<br />
<br />

### `Precautions`

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/29f5ec2d-9b67-47c1-acb3-c1488da5505f" width="450px" />
<br />

<ul>
  <li>Precautions 페이지</li>
  <li>상단 메뉴로 각 페이지로 이동 가능</li>
  <li>사이드 메뉴로 해당 스크롤로 이동 가능</li>
  <li>내용 박스에 마우스 올릴 시 해당 내용 오픈</li>
</ul>
<br />
<br />

### `Climbing Gym`

<img src="https://github.com/eogks0218/DH_Climbing/assets/160206306/51b8501b-5b72-4bef-82d2-e794b916ce28" width="500px" />
<br />

<ul>
  <li>Climbing Gym 페이지</li>
  <li>상단 메뉴로 각 페이지로 이동 가능</li>
  <li>사이드 메뉴로 해당 스크롤로 이동 가능</li>
  <li>내용 클릭 시 해당 내용의 정보 오픈('그 외 지역' 메뉴는 마우스 올릴 시)</li>
</ul>
<br />
<br />

<div align="right">
  
[목차로](#목차)

</div>


## ✔프로젝트 진행 중 문제 및 해결

### `Climbing Gym 페이지 클릭 시 나오는 정보 위치`

<ol>
  <li>
    position을 absolute로 주기. ❌
    <ul>
      <li>전체 페이지 기준으로 위치를 잡아버려서 반응형 불가능.</li>
    </ul>
  </li>
  <li>부모 요소에 position을 relative로 준 뒤 absolute 주기. ⭕</li>
</ol>

### `너무 길었던 페이지들`

<ol>
  <li>
    하위 정보들은 접어뒀다가 사용자가 원하는 정보만 보여주기. ⭕
  </li>
</ol>

<div align="right">
  
[목차로](#목차)

</div>


## 😱문제점

### `메인 페이지 사진들이 너무 큰 것 같기도..`

<ul>
  <li>너무 꽉 찬 화면</li>
</ul>

### `복잡한 CSS`

<ul>
  <li>길고 정돈이 안된 느낌</li>
</ul>

<div align="right">
  
[목차로](#목차)

</div>


## 💡해결방안

### `반응형 신경써서 다른 페이지들처럼`

<ul>
  <li>최소한 100%는 피하자</li>
</ul>

### `주석 등으로 구분 짓기`

<ul>
  <li>짧고 한 눈에 알아볼 수 있도록</li>
</ul>


<div align="right">
  
[목차로](#목차)

</div>


<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=footer" />
