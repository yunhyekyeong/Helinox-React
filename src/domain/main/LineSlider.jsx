import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section, Container } from "../../components/layout/Layout";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { mediaMax } from "../../util/MediaQurey";
import tg01 from "../../assets/img/product/tg01.jpg";
import tg02 from "../../assets/img/product/tg02.jpg";
import tg03 from "../../assets/img/product/tg03.jpg";
import tg04 from "../../assets/img/product/tg04.jpg";
import tg05 from "../../assets/img/product/tg05.jpg";
import tg06 from "../../assets/img/product/tg06.jpg";
import tg07 from "../../assets/img/product/tg07.jpg";
import tg08 from "../../assets/img/product/tg08.jpg";

function LineSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    // nextArrow: (
    //   <ArrowBtnNext>
    //     <TfiAngleRight />
    //   </ArrowBtnNext>
    // ),
    // prevArrow: (
    //   <ArrowBtnPrev>
    //     <TfiAngleLeft />
    //   </ArrowBtnPrev>
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Section>
      <SectionTit>T.E.R.G line</SectionTit>
      <TERGContainer>
        <TERGSlider {...settings}>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg01} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>터그 데이팩</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg02} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>비취타올(아이보리/블랙)</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg03} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>터그 데이팩</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg04} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>비취타올(아이보리/블랙)</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg05} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>비취타올(아이보리/블랙)</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg06} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>비취타올(아이보리/블랙)</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg07} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>비취타올(아이보리/블랙)</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
          <TERGSliderItem>
            <Link to="">
              <ProductImg>
                <img src={tg08} alt="" />
              </ProductImg>
            </Link>
            <Caption>
              <ProductName>비취타올(아이보리/블랙)</ProductName>
              <ProductInfo>
                <ProductPrice>
                  <strong>50,000</strong>원
                </ProductPrice>
                <ProductIcon>
                  <AiOutlineHeart style={{ color: "#ff5959" }} />
                </ProductIcon>
                {/* 좋아요 클릭 */}
                {/* <ProductIcon>
              <AiFillHeart style={{ color: "#ff5959" }} />
            </ProductIcon> */}
                <ProductIcon>
                  <BsCartPlus style={{ fontSize: "18px" }} />
                </ProductIcon>
              </ProductInfo>
            </Caption>
          </TERGSliderItem>
        </TERGSlider>
      </TERGContainer>
    </Section>
  );
}

export default LineSlider;

const SectionTit = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
  ${mediaMax.sm} {
    margin-bottom: 30px;
  }
  ${mediaMax.xsm} {
    margin-bottom: 20px;
  }
`;
const TERGContainer = styled(Container)`
  width: calc(100% - 100px);
  ${mediaMax.md} {
    width: 100%;
  }
`;
const TERGSlider = styled(Slider)`
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li {
    width: 40px;
    height: 3px;
    border-radius: 10px;
    overflow: hidden;
    @media (max-width: 425px) {
      width: 24px;
    }
  }
  .slick-dots li button {
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #aaa;
    }
  }
  .slick-dots li.slick-active button:before {
    background-color: #000;
  }
`;

const TERGSliderItem = styled.div``;

const ProductImg = styled.figure`
  width: 100%;
  height: 320px;
  ${mediaMax.sm} {
    height: 180px;
  }
  overflow: hidden;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
    ${mediaMax.sm} {
      width: 100%;
    }
  }
`;

const Caption = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const ProductName = styled.div`
  ${({ theme }) => theme.fontSize.mdfont};
  font-weight: 600;
  margin-bottom: 4px;
`;
const ProductInfo = styled.div``;
const ProductPrice = styled.span`
  ${({ theme }) => theme.fontSize.mdfont};
  margin-right: 8px;
`;
const ProductIcon = styled.span`
  cursor: pointer;
  vertical-align: middle;
  margin-right: 6px;
  svg {
    font-size: 22px;
  }
`;

// 슬라이드 다음 버튼
const ArrowBtnNext = styled.button`
  right: 0;
  z-index: 10;
  ${mediaMax.lg} {
    right: 16px;
  }
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

// 슬라이드 이전 버튼
const ArrowBtnPrev = styled.button`
  left: 0;
  z-index: 10;
  ${mediaMax.lg} {
    left: 16px;
  }
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`;
