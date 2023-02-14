import styled from "styled-components";
import { mediaMax } from "../../util/MediaQurey";

export const Section = styled.section`
  margin: 120px 0;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: calc(100% - 100px);
  }
  ${mediaMax.md} {
    width: 100%;
    padding: 0 16px;
  }
`;

export const ProductPgSection = styled.section`
  margin: 200px 0;
`;
