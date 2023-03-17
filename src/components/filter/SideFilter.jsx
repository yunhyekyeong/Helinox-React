import React from "react";
import styled from "styled-components";
import CheckBox from "../checkbox/CheckBox";
import ColorFilterBox from "./ColorFilter";
import { FILTER_PRODUCT_TYPE, FILTER_COLOR, FILTER_SIZE } from "../../util/constants/constant";

function SideFilter() {
  return (
    <>
      <SideFilterWrap>
        <FilterMenu>
          {FILTER_PRODUCT_TYPE.map((item) => (
            <li key={item.id}>
              <CheckBox>{item.type}</CheckBox>
            </li>
          ))}
        </FilterMenu>
        <FilterColor>
          {FILTER_COLOR.map((item) => (
            <ColorFilterBox backgroundcolor={item.color} />
          ))}
        </FilterColor>
        <FilterMenu>
          {FILTER_SIZE.map((item) => (
            <li>
              <CheckBox>{item.size}</CheckBox>
            </li>
          ))}
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
