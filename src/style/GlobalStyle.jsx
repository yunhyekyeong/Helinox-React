import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: "Pretendard";
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    min-height: 100vh;
    min-height: calc(var(--vh) * 100);
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(
      safe-area-inset-bottom) env(safe-area-inset-left);
    }
    ol,
    ul,
    li {
    list-style: none;
    text-decoration: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    *,
    div,
    p,
    a,
    span {
    font-family: "Pretendard";
    box-sizing: border-box;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    button {
        border: none;
        background: inherit;
        padding: 0;
    }
   
    //슬라이드 버튼 초기화
    .slick-next:before,
    .slick-prev:before {
        display: none;
    }
    .slick-prev,
    .slick-next {
        font-size: 0;
        line-height: 0;
        position: absolute;
        top: 50%;
        display: block;
        width: inherit;
        height: inherit;
        padding: 0;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
        color: inherit;
        border: none;
        outline: none;
        background: inherit;
        z-index: 99;
    }
    .slick-prev:hover,
    .slick-next:hover {
        width: inherit;
        height: inherit;
        color: inherit;
        background: inherit;
    }
`;

export default GlobalStyle;
