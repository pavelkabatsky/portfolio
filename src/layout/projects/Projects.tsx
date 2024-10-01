
import { FlexWrapper } from "../../components/FlexWrapper";
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle";
import { Container } from "../../styles/Container";
import { dataProjects } from "./dataProjects";
import { S } from "./Projects_styles";
import React, { useState } from "react";
import { ProjectTabs, TabsStatusType } from "./ProjectTabs";
import { PojectItemLink } from "./PojectItemLink";
import { StyledButton } from "../../components/button/StyledButton";

const tabsData: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "SPA",
        status: "spa"
    }
]

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = dataProjects;

    if (currentFilterStatus === "react") {
        filteredProjects = dataProjects.filter(project => project.type === "react")
    }
    if (currentFilterStatus === "landing") {
        filteredProjects = dataProjects.filter(project => project.type === "landing")
    }
    if (currentFilterStatus === "spa") {
        filteredProjects = dataProjects.filter(project => project.type === "spa")
    }

    function changeFilterStatus (value : TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Projects>
            <Container>
                <StyledTitle>Projects</StyledTitle>
                <StyledSubTitle>Things I’ve built so far</StyledSubTitle>
                <ProjectTabs tabsData={tabsData}
                             changeFilterStatus = {changeFilterStatus}
                             currentFilterStatus = {currentFilterStatus}
                />
                <FlexWrapper justify="center" wrap="wrap">
                    
                    {filteredProjects.map((item, index) => {
                        return (
                            <S.ProjectItem key={index}>
                                <S.ImgWrapper>
                                    <img src={item.imgUrl} alt="#" />
                                    <StyledButton>Viev Project</StyledButton>
                                </S.ImgWrapper>

                                <S.ContentWrapper>
                                    <S.ContentTitle>{item.title}</S.ContentTitle>
                                    <S.ContentText>{item.text}</S.ContentText>
                                    <S.StackText>
                                        <span>Tech stack :</span> {item.stack}
                                    </S.StackText>
                                    <S.LinksWrapper>
                                        <PojectItemLink
                                            text="Live Preview"
                                            iconId="link"
                                            href="https://developer.mozilla.org/en-US/"
                                        />
                                        <PojectItemLink
                                            text="View Code"
                                            iconId="git"
                                            href="https://developer.mozilla.org/en-US/"
                                        />
                                    </S.LinksWrapper>
                                </S.ContentWrapper>
                            </S.ProjectItem>
                        );
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};
