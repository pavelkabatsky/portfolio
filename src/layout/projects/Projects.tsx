import { FlexWrapper } from "../../components/FlexWrapper"
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle"
import { ProjectItem } from "./ProjectItem"
import {dataProjects} from './dataProjects'
    

export const Projects = ()=> {
    return (
        <section>
            <StyledTitle>Projects</StyledTitle>
            <StyledSubTitle>Things I’ve built so far</StyledSubTitle>
            <FlexWrapper justify="space-between" wrap="wrap">
                <ProjectItem data ={dataProjects}/>
            </FlexWrapper>
        </section>
    )
}