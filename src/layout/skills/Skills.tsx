import { FlexWrapper } from "../../components/FlexWrapper";
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle";
import { Skill } from "./Skill";

export const Skills = () => {
  return (
    <section>
      <StyledTitle>My Tech Stack</StyledTitle>
      <StyledSubTitle>
        Technologies I’ve been working with recently
      </StyledSubTitle>
      <FlexWrapper justify="space-between">
        <Skill iconId="html" />
        <Skill iconId="css" />
        <Skill iconId="js" />
        <Skill iconId="react       " />
        <Skill iconId="vector" />
        <Skill iconId="bootstrap" />
        <Skill iconId="tailwind" />
        <Skill iconId="sass" />
        <Skill iconId="git-icon" />
        <Skill iconId="greensock" />
        <Skill iconId="vscode" />
        <Skill iconId="github" />
      </FlexWrapper>
    </section>
  );
};
