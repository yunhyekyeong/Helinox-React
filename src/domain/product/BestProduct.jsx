import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import best01 from "../../assets/img/product/best01.jpg";
import best02 from "../../assets/img/product/best02.jpg";
import best03 from "../../assets/img/product/best03.jpg";
import best04 from "../../assets/img/product/best04.jpg";
import best05 from "../../assets/img/product/best05.jpg";
import best06 from "../../assets/img/product/best06.jpg";
import best07 from "../../assets/img/product/best07.jpg";
import best08 from "../../assets/img/product/best08.jpg";

function BestProductItem() {
  return (
    <BestProduct>
      <BestNum>1</BestNum>
      <Link to="">
        <BestImg>
          <img src={best01} alt="" />
        </BestImg>
      </Link>
      <Caption>
        <ProductName>블랙메쉬 슬링백</ProductName>
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
    </BestProduct>
  );
}

export default BestProductItem;

const BestProduct = styled.li`
  overflow: hidden;

  &:hover {
    & > div {
      bottom: 0;
      transition: 0.4s;
    }
  }
`;

const BestNum = styled.span`
  ${({ theme }) => theme.common.flexCenter};
  position: absolute;
  top: -1px;
  left: -1px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.pointcolor};
  color: ${({ theme }) => theme.colors.bkgcolor};
  border-radius: 0 0 24px 0;
`;

const BestImg = styled.figure`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: -80px;
  z-index: 1;
  width: 100%;
  height: 80px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.bkgcolor};
  &::before {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

const ProductName = styled.div`
  ${({ theme }) => theme.common.flexLeft};
  ${({ theme }) => theme.fontSize.lgfont};
  font-weight: 600;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  ${({ theme }) => theme.common.flexLeft};
`;

const ProductPrice = styled.span`
  ${({ theme }) => theme.common.flexLeft};
  ${({ theme }) => theme.fontSize.lgfont};
  color: ${({ theme }) => theme.colors.brightgray};
  font-weight: 300;
  margin-right: 8px;
  strong {
    font-weight: 300;
  }
`;
const ProductIcon = styled.span`
  ${({ theme }) => theme.common.flexLeft};
  cursor: pointer;
  vertical-align: middle;
  margin-right: 6px;
  svg {
    font-size: 22px;
  }
`;
