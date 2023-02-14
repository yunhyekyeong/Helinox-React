import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Visual01 from "../../assets/img/banner/visual01.jpg";
import Visual02 from "../../assets/img/banner/visual02.jpg";
import Visual03 from "../../assets/img/banner/visual03.jpg";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Button from "../../components/button/Button";
import { mediaMax } from "../../util/MediaQurey";

function HeroBanner() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    nextArrow: (
      <ArrowBtnNext>
        <TfiAngleRight />
      </ArrowBtnNext>
    ),
    prevArrow: (
      <ArrowBtnPrev>
        <TfiAngleLeft />
      </ArrowBtnPrev>
    ),
  };
  return (
    <>
      <Slider {...settings}>
        {/* 슬라이드 반복 */}
        <SlideItem>
          <figure>
            <img src={Visual01} alt="herobannerimage" />
          </figure>
          <SlideTxt>
            <Title>A LIGHTER WEIGHT STRONGER</Title>
            <p>헬리녹스는 DAC알루미늄 합금 폴을 사용하여 가볍고 강하며 편리합니다.</p>
            <Button styletype="moreround" border="1px solid #fff" fontsize="20px" color="#fff">
              more!
            </Button>
          </SlideTxt>
        </SlideItem>
        <SlideItem>
          <figure>
            <img src={Visual02} alt="herobannerimage" />
          </figure>
          <SlideTxt>
            <Title>OPEN UP A NEW GENRE</Title>
            <p>첨단 기술 노하우를 통해 제작된 초경량 제품들은 브랜드의 새로운 카테고리를 만들어 나갑니다.</p>
            <Button styletype="moreround" border="1px solid #fff" fontsize="20px" color="#fff">
              more!
            </Button>
          </SlideTxt>
        </SlideItem>
        <SlideItem>
          <figure>
            <img src={Visual03} alt="herobannerimage" />
          </figure>
          <SlideTxt>
            <Title>AT HOME ANYWHERE</Title>
            <p>언제 어디서나 편안한 휴식을 헬리녹스의 제품과 함께 하고 싶어 질 것입니다.</p>
            <Button styletype="moreround" border="1px solid #fff" fontsize="20px" color="#fff">
              more!
            </Button>
          </SlideTxt>
        </SlideItem>
      </Slider>
    </>
  );
}

export default HeroBanner;

const SlideItem = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  ${mediaMax.sm} {
    height: 70vh;
  }
  figure {
    width: 100%;
    height: 100%;
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
    }
  }
`;

const SlideTxt = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  ${mediaMax.lg} {
    width: calc(100% - 120px);
  }
  ${mediaMax.md} {
    width: 60%;
  }
  ${mediaMax.sm} {
    width: calc(100% - 100px);
  }
  /* 서브타이틀 */
  p {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
    word-break: keep-all;
    line-height: 1.2;
    ${mediaMax.sm} {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.3;
    }
  }
`;

const Title = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
  word-break: keep-all;
  ${mediaMax.sm} {
    font-size: 40px;
  }
  ${mediaMax.xsm} {
    font-size: 28px;
    font-weight: 800;
  }
`;

// 슬라이드 다음 버튼
const ArrowBtnNext = styled.button`
  right: 10%;
  z-index: 10;
  ${mediaMax.lg} {
    right: 16px;
  }
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

// 슬라이드 이전 버튼
const ArrowBtnPrev = styled.button`
  left: 10%;
  z-index: 10;
  ${mediaMax.lg} {
    left: 16px;
  }
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
  }
`;
