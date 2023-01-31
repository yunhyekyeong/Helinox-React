import React from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section, Container } from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import { mediaMax } from "../../util/MediaQurey";

// 이미지
import winter01 from "../../assets/img/banner/lookwinter01.jpg";
import winter02 from "../../assets/img/banner/lookwinter02.jpg";
import winter03 from "../../assets/img/banner/lookwinter03.jpg";
import winter04 from "../../assets/img/banner/lookwinter04.jpg";
import summer01 from "../../assets/img/banner/looksummer01.jpg";
import summer02 from "../../assets/img/banner/looksummer02.jpg";
import summer03 from "../../assets/img/banner/looksummer03.jpg";
import summer04 from "../../assets/img/banner/looksummer04.jpg";

function LookbookBanner() {
  const settings = {
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Section>
      <Container>
        <LookbookWrap>
          <ImgBoxSlider {...settings}>
            <ImgItem>
              <img src={winter01} alt="" />
            </ImgItem>
            <ImgItem>
              <img src={winter02} alt="" />
            </ImgItem>
            <ImgItem>
              <img src={winter03} alt="" />
            </ImgItem>
            <ImgItem>
              <img src={winter04} alt="" />
            </ImgItem>
          </ImgBoxSlider>
          <RightTxtBox>
            <Tit>Helinox Winter Look Book</Tit>
            <p>Groenland with the RTS 겨울캠핑도 헬리녹스!</p>
            <Button styletype="moreround" border="1px solid #000" fontsize="16px">
              more!
            </Button>
          </RightTxtBox>
        </LookbookWrap>
        <LookbookWrap>
          <LeftTxtBox>
            <Tit>Helinox Summer Look Book</Tit>
            <p>USA _ Outdoor Line Chair 여름도 헬리녹스 체어!</p>
            <Button styletype="moreround" border="1px solid #000" fontsize="16px">
              more!
            </Button>
          </LeftTxtBox>
          <ImgBoxSlider {...settings}>
            <ImgItem>
              <img src={summer01} alt="" />
            </ImgItem>
            <ImgItem>
              <img src={summer02} alt="" />
            </ImgItem>
            <ImgItem>
              <img src={summer03} alt="" />
            </ImgItem>
            <ImgItem>
              <img src={summer04} alt="" />
            </ImgItem>
          </ImgBoxSlider>
        </LookbookWrap>
      </Container>
    </Section>
  );
}

export default LookbookBanner;

const LookbookWrap = styled.div`
  display: flex;
  height: 400px;
  ${mediaMax.xlg} {
    height: 300px;
  }
  ${mediaMax.lg} {
    height: 280px;
  }
  @media (max-width: 912px) {
    height: 256px;
  }
  ${mediaMax.md} {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

const ImgBoxSlider = styled(Slider)`
  width: 50%;
  height: 100%;
  overflow: hidden;

  ${mediaMax.md} {
    width: 100%;
  }
  @media (max-width: 768px) {
    height: 468px;
  }
  @media (max-width: 712px) {
    height: 432px;
  }
  ${mediaMax.sm} {
    height: 250px;
  }
  @media (max-width: 414px) {
    height: 243px;
  }
  @media (max-width: 412px) {
    height: 241px;
  }
  @media (max-width: 390px) {
    height: 228px;
  }
  @media (max-width: 375px) {
    height: 218px;
  }
  @media (max-width: 360px) {
    height: 209px;
  }
  @media (max-width: 320px) {
    height: 183px;
  }
  @media (max-width: 280px) {
    height: 158px;
  }
`;

const ImgItem = styled.figure`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TxtBox = css`
  width: 50%;
  position: relative;
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  ${mediaMax.md} {
    width: 100%;
    padding: 20px 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    transform: rotate(45deg);

    z-index: 10;
    ${mediaMax.md} {
      display: none;
    }
  }
  p {
    ${({ theme }) => theme.fontSize.mdfont};
    margin-bottom: 10px;
    word-break: keep-all;
    ${mediaMax.xsm} {
      width: 70%;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 10px;
      line-height: 1.2;
    }
  }
`;
const RightTxtBox = styled.div`
  ${TxtBox}
  background-color: ${({ theme }) => theme.colors.pointcolor};
  color: ${({ theme }) => theme.colors.bkgcolor};
  Button {
    border: 1px solid ${({ theme }) => theme.colors.bkgcolor};
    color: ${({ theme }) => theme.colors.bkgcolor};
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.pointcolor};
    left: -15px;
  }
`;
const LeftTxtBox = styled.div`
  ${TxtBox}
  background-color: ${({ theme }) => theme.colors.brightgray};
  &::after {
    background-color: ${({ theme }) => theme.colors.brightgray};
    right: -15px;
  }
`;

const Tit = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 7px;
  ${mediaMax.sm} {
    font-size: 22px;
  }
  ${mediaMax.xsm} {
    font-size: 18px;
  }
`;
