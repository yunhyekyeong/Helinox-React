import React from "react";
import styled from "styled-components";
import { Section, Container } from "../../components/layout/Layout";
import BestProductItem from "../product/BestProduct";
import { mediaMax } from "../../util/MediaQurey";

function BestSeller() {
  return (
    <>
      <BestSelSection>
        <BestTxt>
          <h2>Best Seller</h2>
        </BestTxt>
        <Container>
          <BestSellerWrap>
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
            <BestProductItem />
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

const BestSellerWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  counter-reset: numbering;
  ${mediaMax.xlg} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaMax.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaMax.xsm} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BestTxt = styled(Container)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 40px 0;
  margin-bottom: 10px;

  h2 {
    font-size: 40px;
    font-weight: 700;
    /* margin-bottom: 20px; */
  }
`;
