import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <FNB>
        <FNBItem>푸터</FNBItem>
      </FNB>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer``;
const FNB = styled.ul``;
const FNBItem = styled.li``;
