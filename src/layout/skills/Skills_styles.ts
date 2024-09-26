import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

const Skills = styled.section`
  ${FlexWrapper} {
    gap: 50px 70px;
  }
`;
export const SkillIconWrapper = styled.div`
  text-align: center;
  flex-grow: 1;
`;

export const S = {
  Skills,
  SkillIconWrapper,
};
