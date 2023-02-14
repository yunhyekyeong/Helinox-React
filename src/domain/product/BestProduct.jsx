import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { mediaMax } from "../../util/MediaQurey";
import best01 from "../../assets/img/product/best01.jpg";

function BestProductItem() {
  return (
    <BestProduct>
      <Link to="">
        <BestImg>
          <img src={best01} alt="" />
        </BestImg>
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
    </BestProduct>
  );
}

export default BestProductItem;

const BestProduct = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  height: 312.5px;
  ${mediaMax.xlg} {
    height: 360px;
  }
  ${mediaMax.lg} {
    height: 300px;
  }
  ${mediaMax.md} {
    height: auto;
    border: none;
  }

  /* 숫자카운트 */
  &:after {
    ${({ theme }) => theme.common.flexCenter};
    position: absolute;
    top: -1px;
    left: -1px;
    width: 40px;
    height: 40px;
    border-radius: 6px 0 6px 0;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    counter-increment: numbering;
    content: counter(numbering);
    ${mediaMax.sm} {
      width: 25px;
      height: 25px;
      font-size: 14px;
    }
    ${mediaMax.xsm} {
      width: 30px;
      height: 30px;
    }
  }

  &:hover {
    & > div {
      bottom: 0;
    }
  }
`;

const BestImg = styled.figure`
  width: 100%;
  height: 100%;
  ${mediaMax.md} {
    height: 230px;
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    border-radius: 6px;
  }
  ${mediaMax.sm} {
    height: 160px;
  }
  ${mediaMax.xsm} {
    height: 240px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: -80px;
  z-index: 1;
  width: 100%;
  height: 80px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.4s;
  ${mediaMax.md} {
    position: static;
    height: auto;
    color: ${({ theme }) => theme.colors.black};
    padding: 10px;
  }
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
    ${mediaMax.md} {
      display: none;
    }
  }
`;

const ProductName = styled.div`
  ${({ theme }) => theme.common.flexLeft};
  ${({ theme }) => theme.fontSize.mdfont};
  font-weight: 600;
  margin-bottom: 10px;
  word-break: keep-all;
  ${mediaMax.md} {
    margin-bottom: 4px;
  }
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
  ${mediaMax.md} {
    color: ${({ theme }) => theme.colors.black};
  }
  strong {
    ${({ theme }) => theme.fontSize.mdfont};
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
