import React from "react";
import styled from "styled-components";

function ColorFilterBox({ backgroundcolor }) {
  return (
    <>
      <ColorBox backgroundcolor={backgroundcolor}></ColorBox>
    </>
  );
}

export default ColorFilterBox;

const ColorBox = styled.span`
  width: 16px;
  height: 16px;
  padding: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundcolor};
  border: 1px solid #eee;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.brightgray};
  }
`;
