import React from "react";
import styled from "styled-components";
import CheckBox from "../checkbox/CheckBox";
import ColorFilterBox from "./ColorFilter";
import { PRODUCT_TYPE } from "../../util/constants/constant";

function SideFilter() {
  return (
    <>
      <SideFilterWrap>
        <FilterMenu>
          {PRODUCT_TYPE.mpa((item) => (
            <li key={item.id}>
              <CheckBox>{item.type}</CheckBox>
            </li>
          ))}
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
