import React from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

function CheckBox({ id, checked, children, onChange }) {
  return (
    <>
      <CheckWrap>
        <CheckInner>
          <CheckLabel checked={checked} htmlFor={id}>
            <CheckInput type="checkbox" id={id} checked={checked} onChange={onChange} />
            <CheckIcon checked={checked}>
              <BsCheck />
            </CheckIcon>
          </CheckLabel>
        </CheckInner>
        <CheckTxt>{children}</CheckTxt>
      </CheckWrap>
    </>
  );
}

export default CheckBox;

const CheckWrap = styled.div`
  display: flex;
`;

const CheckInner = styled.div`
  display: flex;
  align-items: center;
`;

const CheckLabel = styled.label`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  cursor: pointer;
  border: ${(props) => (props.checked ? "transparent" : "1px solid #ddd")};
  background-color: ${(props) => (props.checked ? "#000" : "#fff")};
`;

const CheckIcon = styled.span`
  width: 100%;
  height: 100%;
  svg {
    display: grid;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 2px;
  }
`;

const CheckInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckTxt = styled.p`
  display: flex;
  align-items: center;
  margin-left: 4px;
`;
