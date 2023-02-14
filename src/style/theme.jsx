import { mediaMax } from "../util/MediaQurey";

const fontSize = {
  lgfont: `
    font-size: 18px;
    ${mediaMax.sm} {
        font-size: 16px;
    }
    `,
  mdfont: `
    font-size: 16px;
    ${mediaMax.sm} {
        font-size: 14px;
    }
    `,
  smfont: `
    font-size: 14px;
    `,
};

const colors = {
  white: "#fff",
  black: "#000",
  deepgray: "#333",
  maingray: "#aaa",
  lightgray: "#ddd",
  brightgray: "#eee",
  orange: "#FF7300",
  aqua: "#03c2fc",
};

const common = {
  flexLeft: `
    display:flex;
    align-items: center;
    `,
  flexCenter: `
    display:flex;
    justify-content: center;
    align-items: center;
    `,
  flexBtween: `
    display:flex;
    justify-content: space-between;
    align-items: center;
    `,
  AfterCommon: `
    content:"";
    display:block;
    position:absolute;

  `,
};

const theme = {
  fontSize,
  colors,
  common,
};
export default theme;
