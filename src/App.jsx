import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainHome from "./page/main/MainHomePage";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { mediaMax } from "./util/MediaQurey";

function App() {
  // 모바일 브라우저 100vh
  function setMobileHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setMobileHeight();
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<MainHome />}></Route>
          </Routes>
        </Main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

const Main = styled.main`
  margin-top: 100px;
  ${mediaMax.md} {
    margin-top: 60px;
  }
`;
