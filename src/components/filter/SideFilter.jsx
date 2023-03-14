import React from "react";
import styled from "styled-components";
import CheckBox from "../checkbox/CheckBox";
import ColorFilterBox from "./ColorFilter";

function SideFilter() {
  return (
    <>
      <SideFilterWrap>
        <FilterMenu>
          <li>
            <CheckBox>체어원</CheckBox>
          </li>
          <li>
            <CheckBox>체어투</CheckBox>
          </li>
          <li>
            <CheckBox>선셋체어</CheckBox>
          </li>
          <li>
            <CheckBox>비치체어</CheckBox>
          </li>
          <li>
            <CheckBox>사바나</CheckBox>
          </li>
          <li>
            <CheckBox>플라야</CheckBox>
          </li>
          <li>
            <CheckBox>체어제로</CheckBox>
          </li>
          <li>
            <CheckBox>그라운드</CheckBox>
          </li>
          <li>
            <CheckBox>스위블</CheckBox>
          </li>
          <li>
            <CheckBox>페스티벌</CheckBox>
          </li>
          <li>
            <CheckBox>벤치원</CheckBox>
          </li>
          <li>
            <CheckBox>스피드 스툴</CheckBox>
          </li>
          <li>
            <CheckBox>카페체어</CheckBox>
          </li>
        </FilterMenu>
        <FilterColor>
          <ColorFilterBox backgroundcolor={"black"} />
          <ColorFilterBox backgroundcolor={"white"} />
          <ColorFilterBox backgroundcolor={"gray"} />
          <ColorFilterBox backgroundcolor={"burlywood"} />
          <ColorFilterBox backgroundcolor={"tan"} />
          <ColorFilterBox backgroundcolor={"red"} />
          <ColorFilterBox backgroundcolor={"blue"} />
          <ColorFilterBox backgroundcolor={"green"} />
          <ColorFilterBox backgroundcolor={"yellow"} />
        </FilterColor>
        <FilterMenu>
          <li>
            <CheckBox>S</CheckBox>
          </li>
          <li>
            <CheckBox>M</CheckBox>
          </li>
          <li>
            <CheckBox>L</CheckBox>
          </li>
          <li>
            <CheckBox>XL</CheckBox>
          </li>
        </FilterMenu>
      </SideFilterWrap>
    </>
  );
}

export default SideFilter;

const SideFilterWrap = styled.aside`
  width: 20%;
`;

const FilterMenu = styled.ul`
  margin-bottom: 16px;
  li {
    display: grid;
    align-items: center;
    height: 30px;
  }
`;

const FilterColor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;
