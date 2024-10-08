import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

const Skills = styled.section`
  position: relative;
  background-color: rgba(255,255,255,0);
  ${FlexWrapper} {
    gap: 50px 70px;
  }
`;
export const SkillIconWrapper = styled.div`
  background-color: rgba(255,255,255,0.7);
  text-align: center;
  flex-grow: 1;
`;

export const S = {
  Skills,
  SkillIconWrapper,
};
