
import myPhoto from "./../../assets/images/myPhoto.webp";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../styles/Container";
import { S } from "./main_styles";
import Typewriter from 'typewriter-effect';
import { Particle } from "../../components/particle/Particle";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Particle/>
            <Container>
                <FlexWrapper align="center" justify="space-between">
                    <S.Head>
                        Hi 👋,
                        <br /> My name is <br /> <p>Pavel Kabatsky</p>
                        <Typewriter
                            options={{
                                strings: ['I`m a Web developer...', 'I`m a Frontend developer...', 'I`m a superman!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <p>A web developer</p>

                    </S.Head>

                    
                        <S.PhotoWrapper>
                            <S.Photo src={myPhoto} alt="myphoto" />
                        </S.PhotoWrapper>
                    

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

