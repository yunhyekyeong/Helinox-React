import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../../assets/img/logo/logo_white.png";
import { mediaMax } from "../../util/MediaQurey";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import headermenu from "../../util/constants/constant";
import isMobile from "../../util/utils";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [accodionIndex, setAccodionIndex] = useState(1);
  // const [accodionOpen, setAccodionOpen] = useState(false);
  // const onAccodion = (headermenu) => {
  //   if (setAccodionIndex(headermenu.id)) {
  //     setAccodionOpen(!accodionOpen);
  //     return;
  //   }
  // };

  const [accodionOpen, setAccodionOpen] = useState(false);
  const onAccodion = (idx) => {
    const newArr = Array(idx.length).fill(false);
    newArr[idx] = true;
    setAccodionOpen(newArr);
  };

  return (
    <HeaderWrap>
      <Top>
        <Logo>
          <Link to="/Helinox-react">
            <img src={logo} alt="헬리녹스 로고" />
          </Link>
        </Logo>
        <RightWrap>
          <WebLog>
            <Link to="#!">로그인</Link>
          </WebLog>
          {/* <WebLog>
            <Link to="#!">로그아웃</Link>
          </WebLog> */}
          <WebLog>
            <Link to="#!">회원가입</Link>
          </WebLog>
          {/* <WebLog>
            <Link to="#!">MyPage</Link>
          </WebLog> */}
          <li>
            <Link to="#!">
              <FiSearch />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <FaShoppingCart />
            </Link>
            <Cart>30</Cart>
          </li>
          <MOpen isMove={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MOpen>
        </RightWrap>
      </Top>
      <NAV isMOpen={mobileOpen}>
        <MLog>
          {/* 로그인 */}
          <li>
            <p>
              <span>Helinox</span>
              <br /> 방문을 환영합니다!
            </p>
            <LogBtn>
              <Link to="#!">로그인</Link>
              <Link to="#!">회원가입</Link>
            </LogBtn>
          </li>
          {/* 로그아웃 */}
          {/* <li>
            <p>
              <span>윤혜경</span>님
              <br />
              방문을 환영합니다!
            </p>
            <LogBtn>
              <Link to="#!">마이페이지</Link>
              <Link to="#!">로그아웃</Link>
            </LogBtn>
          </li> */}
          <CS>
            <ul>
              <li>
                <a href="tel:02-730-1928">
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <strong>02-730-1928</strong>
                </a>
              </li>
              <li>
                <strong>평일</strong> 10:00 ~ 16:00 (주말, 공휴일 휴무)
              </li>
              <li>
                <strong>점심</strong> 12:00 ~ 13:00
              </li>
            </ul>
          </CS>
        </MLog>
        <GNB>
          {headermenu.map((item, index) => (
            <GNBItem key={item.id}>
              <GNBMenu onClick={isMobile ? () => onAccodion(index) : undefined}>
                {item.gnbmenu}
                <Micon isIcon={accodionOpen[index]}>
                  <TfiAngleDown />
                </Micon>
              </GNBMenu>
              {item.lnbmenu && (
                <LNB isAccodionOpen={accodionOpen[index]}>
                  {item.lnbmenu.map((lnbitem) => (
                    <LNBItem key={lnbitem.id}>
                      <Link to={lnbitem.url}>{lnbitem.submenu}</Link>
                    </LNBItem>
                  ))}
                </LNB>
              )}
            </GNBItem>
          ))}
        </GNB>
      </NAV>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`;

// 상단
const Top = styled.div`
  ${({ theme }) => theme.common.flexBtween};
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 50px;
  position: relative;
  ${mediaMax.md} {
    padding: 0 16px;
  }
`;

const Logo = styled.h1`
  width: 130px;
  ${mediaMax.xsm} {
    width: 100px;
  }
  img {
    width: 100%;
  }
`;

const RightWrap = styled.ul`
  display: flex;
  li {
    ${({ theme }) => theme.common.flexCenter};
    ${({ theme }) => theme.fontSize.mdfont};
    position: relative;
    cursor: pointer;
    margin-right: 30px;
    ${mediaMax.sm} {
      margin-right: 16px;
    }
    ${mediaMax.xsm} {
      margin-right: 12px;
    }
    /* cart */
    &:nth-of-type(4) {
      margin-right: 0;
      ${mediaMax.md} {
        margin-right: 30px;
      }
      ${mediaMax.sm} {
        margin-right: 16px;
      }
      ${mediaMax.xsm} {
        margin-right: 12px;
      }
    }
    /* Mopen */
    &:last-child {
      margin-right: 0;
      display: none;
      ${mediaMax.md} {
        display: block;
      }
    }
  }
  svg {
    font-size: 20px;
  }
`;

const WebLog = styled.li`
  ${mediaMax.md} {
    display: none !important;
  }
`;

const Cart = styled.span`
  padding: 3px 5px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.aqua};
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-left: 4px;
`;

// 모바일 메뉴오픈
const MOpen = styled.li`
  ${mediaMax.md} {
    display: block;
    position: relative;
    justify-content: flex-end !important;
    width: 25px;
    height: 20px;
    cursor: pointer;
  }
  /* 막대 */
  & > span {
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    &:nth-of-type(1) {
      top: 0;
      ${({ isMove }) =>
        isMove &&
        css`
          top: 9px;
          transform: rotate(135deg);
        `};
    }
    &:nth-of-type(2) {
      top: 9px;
      ${({ isMove }) =>
        isMove &&
        css`
          top: 9px;
          left: 60px;
          transition: 0.4s;
        `};
    }
    &:nth-of-type(3) {
      top: 18px;
      ${({ isMove }) =>
        isMove &&
        css`
          top: 9px;
          transform: rotate(-135deg);
        `};
    }
    transition: 0.4s;
  }
`;

// 모바일 로그
const MLog = styled.ul`
  display: none;
  ${mediaMax.md} {
    display: block;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
    p {
      line-height: 1.3;
      margin-bottom: 10px;
      span {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
`;

const LogBtn = styled.div`
  ${({ theme }) => theme.common.flexBtween}
  gap: 10px;
  a {
    text-align: center;
    flex: 1;
    padding: 10px 16px;
    font-size: 16px;
    &:nth-of-type(1) {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
    &:nth-of-type(2) {
      border: 1px solid ${({ theme }) => theme.colors.lightgray};
    }
  }
`;

// 모바일 cs 전화번호
const CS = styled.li`
  margin-top: 16px;
  ul {
    & > li {
      font-weight: 400;
      line-height: 1.7;
      strong {
        font-weight: 600;
      }
      span {
        font-size: 10px;
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        padding: 5px 6px;
        border-radius: 50%;
        margin-right: 6px;
      }
    }
  }
`;

// 하단 메뉴
const NAV = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 50px;

  ${mediaMax.md} {
    width: 50vw;
    height: 100vh;
    padding: 0 0;
    position: fixed;
    top: 60px;
    left: -50vw;
    transition: 0.4s;
    border-right: 1px solid ${({ theme }) => theme.colors.brightgray};
    border-bottom: none;
    ${({ isMOpen }) =>
      isMOpen &&
      css`
        left: 0;
      `};
  }

  ${mediaMax.sm} {
    width: 80vw;
    left: -80vw;
    ${({ isMOpen }) =>
      isMOpen &&
      css`
        left: 0;
      `};
  }

  ${mediaMax.xsm} {
    width: 100vw;
    left: -100vw;
    ${({ isMOpen }) =>
      isMOpen &&
      css`
        left: 0;
      `};
  }
`;

const GNB = styled.ul`
  display: flex;
  ${mediaMax.md} {
    flex-direction: column;
  }
`;

const GNBItem = styled.li`
  ${({ theme }) => theme.common.flexLeft};
  position: relative;
  height: 40px;
  margin-right: 40px;
  ${({ theme }) => theme.fontSize.lgfont};
  font-weight: 500;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    &::after {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;
    }

    /* LNB 공통 */
    & > ul {
      display: block;
    }
  }

  ${mediaMax.md} {
    display: block;
    width: 100%;
    height: auto;
    padding: 0 0;
    margin-right: 0;
  }
`;

const GNBMenu = styled.span`
  ${mediaMax.md} {
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme.common.flexLeft};
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const Micon = styled.span`
  display: none;
  ${mediaMax.md} {
    display: block;
    transform: ${(props) => (props.isIcon ? "rotate(180deg)" : "rotate(0deg)")};
    transition: 0.4s;
    svg {
      font-size: 14px;
    }
  }
`;

const LNB = styled.ul`
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 99;
  width: 220px;
  border-top: 1px solid ${({ theme }) => theme.colors.brightgray};
  border-left: 1px solid ${({ theme }) => theme.colors.brightgray};
  border-right: 1px solid ${({ theme }) => theme.colors.brightgray};
  ${mediaMax.md} {
    position: static;
    overflow: hidden;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.brightgray};
    border-top: none;
    border-left: none;
    border-right: none;
    height: ${(props) => (props.isAccodionOpen ? "auto" : "0")};
  }
`;

const LNBItem = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
  line-height: 2;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  /* Link */
  a {
    display: block;
    width: 100%;
    ${({ theme }) => theme.fontSize.mdfont};
    font-weight: 400;
    padding: 0 10px;
  }

  ${mediaMax.md} {
    border-bottom: none;
    background-color: ${({ theme }) => theme.colors.brightgray};
    line-height: 2.5;

    &:hover {
      background-color: ${({ theme }) => theme.colors.brightgray};
      color: ${({ theme }) => theme.colors.black};
    }

    /* Link */
    a {
      ${({ theme }) => theme.fontSize.mdfont};
      padding: 0 16px;
    }
  }
`;
