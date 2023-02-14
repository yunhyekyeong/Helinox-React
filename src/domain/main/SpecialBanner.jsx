import React from "react";
import styled from "styled-components";
import { Section, Container } from "../../components/layout/Layout";
import specialbkg from "../../assets/img/banner/special.jpg";
import withleica from "../../assets/img/logo/laica-helinox-logo-white.png";
import Button from "../../components/button/Button";
import { mediaMax } from "../../util/MediaQurey";

function SpecialBanner() {
  return (
    <SpecialSection>
      <SpecialContainer>
        <figure>
          <img src={withleica} alt="" />
        </figure>
        <p>라이카X헬리녹스 스페셜 패키지 에디션은 프리미엄 카메라 브랜드 라이카와 협업으로 탄생했습니다.</p>
        <Button styletype="moreround" border="1px solid #fff" color="#fff" fontsize="18px">
          more!
        </Button>
      </SpecialContainer>
    </SpecialSection>
  );
}

export default SpecialBanner;

const SpecialSection = styled(Section)`
  position: relative;
  width: 100%;
  height: 400px;
  background: url(${specialbkg}) no-repeat center center/cover;
  background-attachment: fixed;
`;

const SpecialContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  img {
    ${mediaMax.sm} {
      width: 100%;
    }
  }
  p {
    margin: 20px 0;
    word-break: keep-all;
    line-height: 1.3;
  }
`;
