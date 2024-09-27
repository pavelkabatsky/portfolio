import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle";
import { Container } from "../../styles/Container";
import { ProjectItem } from "./ProjectItem";
import { dataProjects } from "./dataProjects";
import { S } from "./Projects_styles";
import React from "react";

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <StyledTitle>Projects</StyledTitle>
        <StyledSubTitle>Things I’ve built so far</StyledSubTitle>
        <FlexWrapper justify="center" wrap="wrap">
          <ProjectItem data={dataProjects} />
        </FlexWrapper>
      </Container>
    </S.Projects>
  );
};
