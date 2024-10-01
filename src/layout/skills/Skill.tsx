import { Icon } from "../../components/icon/Icon";
import { S } from "./Skills_styles";

type SkillPropsType = {
    iconId : string;
}

export const Skill = (props:SkillPropsType) => {
    return (
        <S.SkillIconWrapper>
            <Icon width="120px" height="120px" viewBox="0 0 120 120 " iconId = {props.iconId}/>
        </S.SkillIconWrapper>
    );
}


