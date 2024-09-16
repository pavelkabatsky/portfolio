import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

type SkillPropsType = {
    iconId : string;
}

export const Skill = (props:SkillPropsType) => {
    return (
        <SlillIconWrapper>
            <Icon width="120" height="120" viewBox="0 0 120 120 " iconId = {props.iconId}/>
        </SlillIconWrapper>
    );
}

const SlillIconWrapper = styled.div`

`
