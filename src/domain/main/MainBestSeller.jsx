import React from "react";
import styled from "styled-components";
import { Section, Container } from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import BestProductItem from "../product/BestProduct";

function BestSeller() {
  return (
    <>
      <BestSelSection>
        <Container>
          <BestSellerWrap>
            <BestTxt>
              <h2>Best Seller</h2>
              <Button styletype="viewmore" fontsize="18px" color="#fff" afterbackground="#fff">
                view more
              </Button>
            </BestTxt>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
            <BestProductItem></BestProductItem>
          </BestSellerWrap>
        </Container>
      </BestSelSection>
    </>
  );
}

export default BestSeller;

const BestSelSection = styled(Section)`
  margin: 0 0;
`;

const BestSellerWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  li {
    width: 32%;
    height: 370px;
    border: 1px solid #ddd;
    position: relative;
  }
`;

const BestTxt = styled.li`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.pointcolor};
  color: ${({ theme }) => theme.colors.bkgcolor};

  h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 60px;
  }
`;
