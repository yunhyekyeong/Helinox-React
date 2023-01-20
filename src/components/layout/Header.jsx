import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrap>
      <Top>
        <LogWrap>
          <li>Login</li>
          <li>Join</li>
        </LogWrap>
        <Logo></Logo>
        <RightWrap>
          <li>
            <Link to="">Search</Link>
          </li>
          <li>
            <Link to="">MyPage</Link>
          </li>
          <li>
            <Link to="">Cart</Link>
          </li>
        </RightWrap>
      </Top>
      <Bottom>
        <NAV>
          <GNB>
            <GNBItem>
              <Link to="">Outdoor</Link>
              <LNB>
                <LNBItem>체어</LNBItem>
              </LNB>
            </GNBItem>
          </GNB>
        </NAV>
      </Bottom>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header``;
const Top = styled.div``;
const LogWrap = styled.ul``;
const Logo = styled.div``;
const RightWrap = styled.ul``;
const Bottom = styled.div``;
const NAV = styled.nav``;
const GNB = styled.ul``;
const GNBItem = styled.li``;
const LNB = styled.ul``;
const LNBItem = styled.li``;
