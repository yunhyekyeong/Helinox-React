## 1. React create-react-app

- 함수형 컴포넌트 사용
- css-in-js 라이브러리 style-component 백틱 형식 사용 (vscode 확장팩 vscode-styled-components(자동코드), Styled-Components Extractor(emmet 형식으로 사용가능))
- Carousel 라이브러리 react-slick 사용

## 2. src 폴더

# components 폴더 ( 공통 컴포넌트 폴더 import 하여 재사용)

- Button.jsx, ScrollTop.jsx
- ProductItem.jsx, ProductDetail.jsx, ProductList.jsx (상품 리스트, 상품 세부페이지, 상품카드)
- Header.jsx, Footer.jsx

# page 폴더

    1.  main 폴더
    - MainHome.jsx 메인홈페이지 레이아웃
    - HeroBanner.jsx 메인홈 최상단 슬라이드
    - MainBestSeller.jsx 베스트셀러 아이템

# style 폴더

    1. GrobalStyle.jsx 전역 style 적용

# util 폴더

    1. MediaQurey.jsx 미디어쿼리 분리 관리

## 3. style-components 규칙

공통 레이아웃

```

<Header />
    <Main>
    </Main>
<Footer />

```

Section - section 태그 컴포넌트 (한페이지 안에 내용이 달라지는 부분이 있을 때 사용)
Container - width 사이즈 공통으로 정해진 div 태그 컴포넌트 (필수조건은 아님)

~ Wrap: 단일 요소의 레이아웃을 위함
Top: Wrap안에서의 Top
Left: Wrap안에서의 Left
Right: Wrap안에서의 Right
Bottom: Wrap안에서의 Bottom
~ Box: Wrap안에서의 Top Bottom Left Right 안에서 요소
Item: 프론트 데이터가 들어가면 중복되는 요소들

사용자 입력태그들은 뒤에 그대로 붙여주는걸로
Input: input 태그
Label: label 태그
Select: select 태그
Radio: radio 태그
...
