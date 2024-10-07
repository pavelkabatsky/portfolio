
import { FlexWrapper } from "../../components/FlexWrapper";
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle";
import { Skill } from "./Skill";
import { Container } from "../../styles/Container";
import { S } from "./Skills_styles";
import { Fade } from "react-awesome-reveal";

const skillsData = ["html", "css", "js", "react", "vector", "bootstrap", "tailwind", "sass", "git-icon", "vscode", "github", "greensock"]

export const Skills = () => {
    return (
        <S.Skills id={"stack"}>
            <Container>
                <StyledTitle>My Tech Stack</StyledTitle>
                <StyledSubTitle>
                    Technologies I’ve been working with recently
                </StyledSubTitle>
                <FlexWrapper justify="flex-start">
                    <Fade cascade={true} damping={0.2} triggerOnce={true}>
                        {skillsData.map((item, index) => {
                            return <Skill iconId={item} key={index} />
                        })}
                    </Fade>

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


