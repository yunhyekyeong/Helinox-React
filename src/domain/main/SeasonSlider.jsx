import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section, Container } from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import { mediaMax } from "../../util/MediaQurey";
import warmer01 from "../../assets/img/product/warmer01.jpg";
import warmer02 from "../../assets/img/product/warmer02.jpg";
import warmer03 from "../../assets/img/product/warmer03.jpg";
import warmer04 from "../../assets/img/product/warmer04.jpg";

function MainSeason() {
  const Productsettings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const Namesettings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [mainSlick, setMainSlick] = useState(null);
  const [pagingSlick, setPagingSlick] = useState(null);
  const mainSlickRef = useRef(null);
  const pagingSlickRef = useRef(null);

  useEffect(() => {
    setMainSlick(mainSlickRef.current);
    setPagingSlick(pagingSlickRef.current);
  }, []);
  return (
    <SeasoSection>
      <Container>
        <SeasonWrap>
          <div>
            <ProductSlider ref={mainSlickRef} asNavFor={pagingSlick} {...Productsettings}>
              <ProductSlideItem>
                <img src={warmer01} alt="" />
              </ProductSlideItem>
              <ProductSlideItem>
                <img src={warmer02} alt="" />
              </ProductSlideItem>
              <ProductSlideItem>
                <img src={warmer03} alt="" />
              </ProductSlideItem>
              <ProductSlideItem>
                <img src={warmer04} alt="" />
              </ProductSlideItem>
            </ProductSlider>
            <ProductNameSlider ref={pagingSlickRef} asNavFor={mainSlick} {...Namesettings}>
              <ProductNameSlideItem>
                Fleece Seat Warmer
                <br /> for Chair One<span>플리스 시트워머</span>
              </ProductNameSlideItem>
              <ProductNameSlideItem>
                Tac. Field Cover
                <br /> for Chair One<span>텍티컬 필드 시트커버</span>
              </ProductNameSlideItem>
              <ProductNameSlideItem>
                Coyote Tan Seat Warmer
                <br /> for Chair One<span>코요테탄 시트워머</span>
              </ProductNameSlideItem>
              <ProductNameSlideItem>
                Bandanna Seat Warmer
                <br /> for Chair One<span>반다나 시트워머</span>
              </ProductNameSlideItem>
            </ProductNameSlider>
          </div>
          <Left>
            <TxtBox>
              <TopTxt>Helinox</TopTxt>
              <div>Seat Warmer</div>
              <p>따뜻한 겨울을 위해, 헬리녹스 시트 워머와 함께해보세요!</p>
              <Button styletype="viewmore" fontsize="18px" afterbackground="#000">
                view more
              </Button>
            </TxtBox>
          </Left>
        </SeasonWrap>
      </Container>
    </SeasoSection>
  );
}

export default MainSeason;

const SeasoSection = styled(Section)`
  margin: 120px, 0 0 0;
`;

const SeasonWrap = styled.div`
  ${({ theme }) => theme.common.flexBtween}
  ${mediaMax.md} {
    flex-direction: column-reverse;
  }
  & > div {
    width: 50%;
    ${mediaMax.md} {
      width: 100%;
    }
  }
`;

const ProductSlider = styled(Slider)`
  width: 500px !important;
  height: 500px;
  border: 3px solid #000;
  margin-bottom: 20px;
  @media (max-width: 1200px) {
    width: 400px !important;
    height: 400px;
  }
  ${mediaMax.lg} {
    width: 360px !important;
    height: 360px;
  }
  ${mediaMax.md} {
    width: 400px !important;
    height: 400px;
    margin: 0 auto 20px auto;
  }
  ${mediaMax.sm} {
    width: 320px !important;
    height: 320px;
  }
  ${mediaMax.xsm} {
    width: 240px !important;
    height: 240px;
  }
`;
const ProductSlideItem = styled.figure`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductNameSlider = styled(Slider)`
  width: 500px !important;
  @media (max-width: 1200px) {
    width: 400px !important;
  }
  ${mediaMax.lg} {
    width: 360px !important;
  }
  ${mediaMax.md} {
    width: 400px !important;
    margin: 0 auto;
  }
  ${mediaMax.sm} {
    width: 320px !important;
  }
  ${mediaMax.xsm} {
    width: 240px !important;
  }
`;
const ProductNameSlideItem = styled.div`
  font-size: 36px;
  font-weight: 700;
  span {
    font-size: 20px;
    font-weight: 300;
    margin-left: 8px;
  }
  ${mediaMax.lg} {
    font-size: 30px;
    span {
      font-size: 18px;
    }
  }
  ${mediaMax.sm} {
    font-size: 24px;
    span {
      margin-top: 6px;
      display: block;
    }
  }
  ${mediaMax.xsm} {
    font-size: 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  ${({ theme }) => theme.common.flexBtween}
  flex-direction: column;

  ${mediaMax.md} {
    text-align: center;
    margin-bottom: 40px;
    justify-content: center;
  }
`;
const TxtBox = styled.div`
  font-size: 100px;
  font-weight: 600;
  line-height: 0.9;
  p {
    font-size: 36px;
    font-weight: 300;
    word-break: keep-all;
    line-height: 1.2;
  }
  ${mediaMax.md} {
    p {
      font-size: 32px;
    }
  }
  ${mediaMax.sm} {
    font-size: 76px;
    p {
      font-size: 24px;
    }
  }
  ${mediaMax.xsm} {
    font-size: 70px;
    p {
      font-size: 20px;
    }
  }
`;
const TopTxt = styled.div`
  color: ${({ theme }) => theme.colors.white};
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.black};
`;
