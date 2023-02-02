import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { mediaMax } from "../../util/MediaQurey";
import best05 from "../../assets/img/product/best05.jpg";

function ShopProductItem() {
  const [islick, setislick] = useState(false);
  return (
    <ShopProduct>
      <ProductImg>
        <Link to="">
          <img src={best05} alt="상품이미지" />
        </Link>
        <LickIcon onClick={() => setislick(!islick)}>{islick ? <AiFillHeart /> : <AiOutlineHeart />}</LickIcon>
      </ProductImg>
      <ProductInfo>
        <InfoTop>
          <div>
            <ProductName>홈라인 체어원</ProductName>
            <ProductColor>레드</ProductColor>
          </div>
        </InfoTop>
        <ProductPrice>
          195,000<span>원</span>
        </ProductPrice>
      </ProductInfo>
    </ShopProduct>
  );
}

export default ShopProductItem;

const ShopProduct = styled.div`
  width: 24%;
  a {
    width: 100%;
  }
`;

const ProductImg = styled.figure`
  width: 100%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.brightgray};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const LickIcon = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.likecolor};
  }
`;
const ProductInfo = styled.div``;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;
const ProductName = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 4px;
`;
const ProductColor = styled.span``;

const ProductPrice = styled.div``;
