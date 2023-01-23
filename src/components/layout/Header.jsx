import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo/logo_white.png";
import { mediaMax } from "../../util/MediaQurey";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <HeaderWrap>
      <Top>
        <Logo>
          <Link to="/">
            <img src={logo} alt="" />
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
          <MOpen>
            <span></span>
            <span></span>
            <span></span>
          </MOpen>
        </RightWrap>
      </Top>
      <NAV>
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
          <GNBItem>
            <GNBMenu>Outdoor</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">체어</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">코트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">테이블</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">텐트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">우산 및 기타</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">도그코트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">스토리지</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
          <GNBItem>
            <GNBMenu>Home</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">체어</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">코트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">테이블</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
          <GNBItem>
            <GNBMenu>Tactical</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">체어</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">테이블</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">텍티컬 필드 오피스</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">텐트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">코트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">사이드 스트리지 및 우산</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">텍티컬 어드벤스드 스킨</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
          <GNBItem>
            <GNBMenu>Accessories</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">택티컬 필드 오피스 M 악세서리</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">체어 악세서리</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">워머류</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">테이블 악세서리</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">코트 악세서리</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">텐트 악세서리</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">스틱 악세서리</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">ETC</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
          <GNBItem>
            <GNBMenu>Special/Limited</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">Leica x Helinox</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">BTS | Helinox</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">퍼니쳐</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">기타</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">포인트 상품</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">헬리녹스 인사이더즈</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">10주년</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">아카이브</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">Special SKU</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
          <GNBItem>
            <GNBMenu>T.E.R.G</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">백팩&멀티백</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">크로스백&웨이스트백</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">울트라 라이트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">파우치&ACC</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">멀티링크</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">멀티베스트</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
          <GNBItem>
            <GNBMenu>+Information</GNBMenu>
            <LNB>
              <LNBItem>
                <Link to="#!">Our story</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">공지사항</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">자주 묻는 질문</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">상품 문의</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">이벤트</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">A/S</Link>
              </LNBItem>
              <LNBItem>
                <Link to="#!">HCC</Link>
              </LNBItem>
            </LNB>
          </GNBItem>
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
  background-color: ${({ theme }) => theme.colors.pointcolor};
  color: ${({ theme }) => theme.colors.bkgcolor};
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

    &:last-child {
      margin-right: 0;
      ${mediaMax.sm} {
        margin-left: 16px;
      }
      ${mediaMax.xsm} {
        margin-left: 12px;
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
  /* position: absolute;
  top: 0;
  right: -25px; */
  padding: 3px 5px;
  border-radius: 20px;
  background-color: #ff7300;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.bkgcolor};
  text-align: center;
  margin-left: 4px;
`;

// 모바일 메뉴오픈
const MOpen = styled.li`
  display: none;
  ${mediaMax.md} {
    display: block;
    position: relative;
    justify-content: flex-end !important;
    width: 25px;
    height: 20px;
    cursor: pointer;
  }
  ${mediaMax.sm} {
    right: 16px;
  }
  /* 막대 */
  & > span {
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.bkgcolor};
    position: absolute;
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 9px;
    }
    &:nth-of-type(3) {
      top: 18px;
    }
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
      background-color: ${({ theme }) => theme.colors.pointcolor};
      color: ${({ theme }) => theme.colors.bkgcolor};
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
        background-color: ${({ theme }) => theme.colors.pointcolor};
        color: ${({ theme }) => theme.colors.bkgcolor};
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
  background-color: ${({ theme }) => theme.colors.bkgcolor};
  padding: 0 50px;
  ${mediaMax.md} {
    display: none;
    width: 50vw;
    height: 100vh;
    padding: 0 0;
    position: fixed;
    top: 60px;
    border-right: 1px solid ${({ theme }) => theme.colors.brightgray};
    border-bottom: none;
  }
  ${mediaMax.sm} {
    width: 80vw;
  }
  ${mediaMax.xsm} {
    width: 100vw;
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
      background-color: ${({ theme }) => theme.colors.pointcolor};
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
    ${({ theme }) => theme.common.flexLeft};
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
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
    width: 100%;
    background-color: ${({ theme }) => theme.colors.brightgray};
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;
const LNBItem = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bkgcolor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.brightgray};
  line-height: 2;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.pointcolor};
    color: ${({ theme }) => theme.colors.bkgcolor};
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
      color: ${({ theme }) => theme.colors.pointcolor};
    }
    /* Link */
    a {
      ${({ theme }) => theme.fontSize.mdfont};
      padding: 0 16px;
    }
  }
`;
