import { Logo } from "../../components/logo/Logo";
import { Socials } from "../../components/socials/Socials";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../styles/Container";
import {S} from "./Footer_Styles"
import React from "react";


export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterTop>
          <FlexWrapper justify="space-between" align="center">
            <Logo />
            <span>+7 999 354 54 54</span>
            <span>pashakab@gmail.com</span>
            <Socials />
          </FlexWrapper>
        </S.FooterTop>
        <S.FooterBottom>
          
            <small>
              Designed and built by <span>Pavel Kabatsky</span> with
              <span>Love</span> & <span>Cofee</span>
            </small>

        </S.FooterBottom>
      </Container>
    </S.Footer>
  );
};


