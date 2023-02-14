import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoimg from "../../assets/img/logo/logo_white.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiKakaotalk, SiFacebook, SiInstagram, SiNaver, SiYoutube } from "react-icons/si";
import { mediaMax } from "../../util/MediaQurey";

function Footer() {
  return (
    <FooterWrap>
      <BtwnWrap>
        <FNB>
          <FNBItem>
            <Link to="#!">이용약관</Link>
          </FNBItem>
          <FNBItem>
            <Link to="#!">이용안내</Link>
          </FNBItem>
          <FNBItem>
            <Link to="#!">
              <strong>개인정보처리방침</strong>
            </Link>
          </FNBItem>
          <FNBItem>
            <Link to="#!">한국어</Link>
          </FNBItem>
        </FNB>
        <Sns>
          <li>
            <Link to="#!">
              <SiFacebook />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <SiInstagram />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <SiNaver />
            </Link>
          </li>
          <li>
            <Link to="#!">
              <SiYoutube />
            </Link>
          </li>
        </Sns>
      </BtwnWrap>

      <Logo>
        <img src={logoimg} alt="" />
      </Logo>
      <CS>
        <li>
          <Link to="#!">
            <BsFillTelephoneFill />
            02-730-1928
          </Link>
        </li>
        <li>
          <Link to="#!">
            <SiKakaotalk /> HELINOXCS
          </Link>
        </li>
        <li>AM 10:00 ~ PM 04:00(주말 및 공휴일 휴무)</li>
        <li>점심시간 12:00 ~ 13:00</li>
        <li>HCC 매장 운영시간 PM 11:00 ~ PM 09:00</li>
      </CS>
      <Company>
        <li>대표자: 라영환</li>
        <li>개인정보 보호 책임자: 이창희</li>
        <li>사업자등록번호: 101-86-83690</li>
        <li>통신판매업신고: 2020-서울용산-0047 </li>
        <li>EMAIL) hi@helinox.com</li>
        <li>TEL) 02-730-1928</li>
        <li>(주)헬리녹스의 상표, 제품 디자인 그리고 당사가 운영하는 웹사이트 등에 게재된 저작물과 관련한 모든 지식재산권은 (주)헬리녹스가 보유하고 있습니다.</li>
      </Company>
      <CopyRight>©2021 Helinox. All Rights Reserved</CopyRight>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 50px;
  ${mediaMax.sm} {
    padding: 24px 16px;
  }
`;

const BtwnWrap = styled.div`
  ${({ theme }) => theme.common.flexBtween};
  ${mediaMax.sm} {
    flex-direction: column;
  }
`;

const FNB = styled.ul`
  display: flex;
  ${({ theme }) => theme.fontSize.mdfont};
  ${mediaMax.sm} {
    margin-bottom: 20px;
  }
  ${mediaMax.sm} {
    width: 100%;
    display: inline-block;
    li {
      line-height: 1.5;
    }
  }
`;

const FNBItem = styled.li`
  margin-right: 20px;
  strong {
    font-weight: 600;
  }
`;

const Sns = styled.ul`
  display: flex;
  gap: 40px;
  ${mediaMax.sm} {
    width: 100%;
    gap: 30px;
  }
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.lightgray};
  }
`;

const Logo = styled.div`
  width: 200px;
  margin: 30px 0;
  ${mediaMax.sm} {
    width: 180px;
    margin: 20px 0;
  }
  img {
    width: 100%;
  }
`;

const CS = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  ${({ theme }) => theme.fontSize.mdfont};
  ${mediaMax.xlg} {
    display: inline-block;
    li {
      line-height: 1.5;
    }
  }
  svg {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightgray};
    margin-right: 6px;
  }
`;

const Company = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 6px 20px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.maingray};
  li {
    ${({ theme }) => theme.fontSize.smfont};
    line-height: 1.2;
    ${mediaMax.sm} {
      font-size: 13px;
    }
  }
`;

const CopyRight = styled.div`
  ${({ theme }) => theme.fontSize.smfont};
  color: ${({ theme }) => theme.colors.maingray};
`;
