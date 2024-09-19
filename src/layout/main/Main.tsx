import styled from "styled-components";
import myPhoto from "./../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../styles/Container";
import { theme } from "../../styles/theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <StyledHead>
            Hi 👋,
            <br /> My name is <br /> <span>Pavel Kabatsky</span>
            <br /> I`m a react developer
          </StyledHead>
          <StyledPhotoWrapper>
            <StyledPhoto src={myPhoto} alt="myphoto" />
          </StyledPhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledPhotoWrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 0;
  
  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left:20px;
    display: inline-block;
    width: 360px;
    height:360px;
    background-color:green;
    z-index: -1;
  } */
`;
const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledMain = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
`;

const StyledHead = styled.h1`
font-size: 58px;
font-weight: 700;
line-height: 70px;
color: ${theme.colors.primary};

span {
  background-color: #94c901;
background-image: ${theme.colors.gradient};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent
}

`
