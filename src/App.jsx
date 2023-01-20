import React from "react";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainHome from "./page/main/MainHome";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GrolbalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;

const Main = styled.main``;
