import styled from "styled-components";
import { PojectItemLink } from "./PojectItemLink";
import { FlexWrapper } from "../../components/FlexWrapper";

export const ProjectItemLinks = () => {
    return (
    <FlexWrapper justify="space-between">
        <PojectItemLink text="Live Preview" iconId="link" href="https://developer.mozilla.org/en-US/"/>
        <PojectItemLink text="View Code" iconId="git" href="https://developer.mozilla.org/en-US/"/>
        
    </FlexWrapper>
      );
}
 
