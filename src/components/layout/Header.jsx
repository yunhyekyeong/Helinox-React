import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo/logo_white.png";

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
          <li>
            <Link to="#!">Search</Link>
          </li>
          <li>
            <Link to="#!">MyPage</Link>
          </li>
          <li>
            <Link to="#!">Cart</Link>
          </li>
          <li>
            <Link to="#!">Login</Link>
          </li>
          <li>
            <Link to="#!">Join</Link>
          </li>
        </RightWrap>
      </Top>
      <NAV>
        <GNB>
          <GNBItem>
            <Link to="#!">Outdoor</Link>
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
            <Link to="#!">Home</Link>
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
            <Link to="#!">Tactical</Link>
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
            <Link to="#!">Accessories</Link>
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
            <Link to="#!">Special/Limited</Link>
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
            <Link to="#!">T.E.R.G</Link>
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
            <Link to="#!">+Information</Link>
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

const HeaderWrap = styled.header``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #000;
  color: #fff;
  padding: 0 50px;
`;

const Logo = styled.div`
  width: 130px;
  img {
    width: 100%;
  }
`;
const RightWrap = styled.ul`
  display: flex;
  li {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const NAV = styled.nav`
  border-bottom: 1px solid #eee;
  padding: 0 50px;
`;
const GNB = styled.ul`
  display: flex;
`;
const GNBItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    & > ul {
      display: block;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;
const LNB = styled.ul`
  display: none;
  position: absolute;
  top: 41px;
  left: -4px;
  width: 220px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
`;
const LNBItem = styled.li`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  line-height: 1.8;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
  a {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    padding: 0 10px;
  }
`;
