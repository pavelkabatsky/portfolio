
import myPhoto from "./../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../styles/Container";
import { S } from "./main_styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <S.Head>
            Hi 👋,
            <br /> My name is <br /> <span>Pavel Kabatsky</span>
            <br /> I`m a react developer
          </S.Head>
          <S.PhotoWrapper>
            <S.Photo src={myPhoto} alt="myphoto" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

