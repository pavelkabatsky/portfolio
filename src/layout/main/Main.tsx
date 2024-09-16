import styled from "styled-components";
import myPhoto from "./../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-around">
        <h1>
          Hi 👋,
          <br /> My name is <br /> <span>Pavel Kabatsky</span>
          <br /> I`m a react developer
        </h1>
        <StyledPhotoWrapper>
          <StyledPhoto src={myPhoto} alt="myphoto" />
        </StyledPhotoWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledPhotoWrapper = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  border: 9px solid #4a56e1;
`;
const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledMain = styled.section`
/* display: flex; */
align-items: center;
  min-height: 100vh;
  justify-content: center ;
`;
