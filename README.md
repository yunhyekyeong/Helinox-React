# 1. React create-react-app

- 함수형 컴포넌트 사용
- css-in-js 라이브러리 style-component 백틱 형식 사용 (vscode 확장팩 vscode-styled-components(자동코드), Styled-Components Extractor(emmet 형식으로 사용가능))
- Carousel 라이브러리 react-slick 사용

---

# 2. src 폴더

## components 폴더 ( 공통 컴포넌트 폴더 import 하여 재사용)

- Button.jsx, ScrollTop.jsx
- ProductItem.jsx, ProductDetail.jsx, ProductList.jsx (상품 리스트, 상품 세부페이지, 상품카드)
- Header.jsx, Footer.jsx

## page 폴더

    1.  main 폴더
    - MainHome.jsx 메인홈페이지 레이아웃
    - HeroBanner.jsx 메인홈 최상단 슬라이드
    - MainBestSeller.jsx 베스트셀러 아이템

## style 폴더

    1. GrobalStyle.jsx 전역 reset style (styled-components createGlobalStyle) 적용
    1. theme.jsx 전역 common style (styled-components ThemeProvider) 적용

## util 폴더

    1. MediaQurey.jsx 미디어쿼리 분리 관리

---

# 3. style-components 규칙

## 1. 공통레이아웃

    ```

    <Header />
        <Main>
        </Main>
    <Footer />

    ```

## 2. export 전역 레이아웃

    Section - section 태그 컴포넌트 (한페이지 안에 내용이 달라지는 부분이 있을 때 사용)
    Container - width 사이즈 공통으로 정해진 div 태그 컴포넌트 (필수조건은 아님)

## 3. component명

    ```
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

    ```

---

## 커밋 메세지 규칙

    feat : 새로운 기능 추가
    fix : 버그 수정
    docs : 문서 수정
    style : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
    refactor : 코드 리팩터링
    test : 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X)
    design : CSS 등 사용자 UI 디자인 변경
    comment : 필요한 주석 추가 및 변경
    rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
    remove : 파일을 삭제하는 작업만 수행한 경우
    !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우
