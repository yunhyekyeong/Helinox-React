import React from "react";
import SideFilter from "../../components/filter/SideFilter";
import { Container, Section } from "../../components/layout/Layout";
import ShopProductItem from "../../domain/product/ShopProduct";

function OutdoorChair() {
  return (
    <>
      <Section>
        <SideFilter></SideFilter>
        <Container>
          <ShopProductItem />
        </Container>
      </Section>
    </>
  );
}

export default OutdoorChair;
