import React from "react";
import styled from "styled-components";

function SideFilter({ children }) {
  return (
    <>
      <SideFilterWrap>
        <FilterMenu>
          <li>체어원</li>
          <li>체어투</li>
          <li>선셋체어</li>
          <li>비치체어</li>
          <li>사바나</li>
          <li>플라야</li>
          <li>체어제로</li>
          <li>그라운드</li>
          <li>스위블</li>
          <li>페스티벌</li>
          <li>벤치원</li>
          <li>스피드 스툴</li>
          <li>카페체어</li>
        </FilterMenu>
        <FilterColor>
          <Red></Red>
          <Pink></Pink>
          <Orange></Orange>
          <Yellow></Yellow>
          <Green></Green>
          <Blue></Blue>
          <Aqua></Aqua>
          <Puple></Puple>
          <Sand></Sand>
          <Tan></Tan>
          <Beige></Beige>
          <Black></Black>
          <Gray></Gray>
          <White></White>
        </FilterColor>
        <FilterSize>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </FilterSize>
      </SideFilterWrap>
    </>
  );
}

export default SideFilter;

const SideFilterWrap = styled.aside``;

const FilterMenu = styled.ul`
  li {
    display: grid;
    align-items: center;
    height: 30px;
    font-size: 18px;
    padding: 0 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
  }
`;

const FilterColor = styled.ul``;
const Red = styled.li``;
const Pink = styled.li``;
const Orange = styled.li``;
const Yellow = styled.li``;
const Green = styled.li``;
const Blue = styled.li``;
const Aqua = styled.li``;
const Puple = styled.li``;
const Sand = styled.li``;
const Tan = styled.li``;
const Beige = styled.li``;
const Black = styled.li``;
const Gray = styled.li``;
const White = styled.li``;

const FilterSize = styled.ul``;
