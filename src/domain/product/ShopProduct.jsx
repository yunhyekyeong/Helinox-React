import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCartCheckFill, BsCartPlus } from "react-icons/bs";
// import { mediaMax } from "../../util/MediaQurey";
import best05 from "../../assets/img/product/best05.jpg";

function ShopProductItem() {
  const [islick, setislick] = useState(false);
  const [incart, setincart] = useState(false);
  return (
    <ShopProduct>
      <ProductImg>
        {/* 상세페이지 이동 */}
        <Link to="">
          <img src={best05} alt="상품이미지" />
        </Link>
        <CartIcon onClick={() => setincart(!incart)}>{incart ? <BsFillCartCheckFill /> : <BsCartPlus />}</CartIcon>
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

const ShopProduct = styled.div``;

const ProductImg = styled.figure`
  width: 100%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// 공통
export const ClickIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  ${({ theme }) => theme.common.flexCenter};
  svg {
    font-size: 24px;
  }
`;

const CartIcon = styled(ClickIcon)`
  bottom: 65px;
  svg {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const LickIcon = styled(ClickIcon)`
  bottom: 20px;
  svg {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const ProductInfo = styled.div``;
const InfoTop = styled.div`
  ${({ theme }) => theme.common.flexBtween};
  margin-bottom: 4px;
`;
const ProductName = styled.span`
  ${({ theme }) => theme.fontSize.mdfont};
  font-weight: 600;
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.deepgray};
`;
const ProductColor = styled.span``;

const ProductPrice = styled.div`
  ${({ theme }) => theme.fontSize.lgfont};
  font-weight: 600;
`;
