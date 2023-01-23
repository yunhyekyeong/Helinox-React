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
  bkgcolor: "#fff",
  pointcolor: "#000",
  deepgray: "#333",
  maingray: "#aaa",
  lightgray: "#ddd",
  brightgray: "#eee",
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
};

const theme = {
  fontSize,
  colors,
  common,
};
export default theme;
