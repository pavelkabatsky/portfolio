import { Icon } from "../../components/icon/Icon";
import { S } from "./Skills_styles";

type SkillPropsType = {
    iconId : string;
}

export const Skill = (props:SkillPropsType) => {
    return (
        <S.SkillIconWrapper>
            <Icon width="110" height="110" viewBox="0 0 110 110 " iconId = {props.iconId}/>
        </S.SkillIconWrapper>
    );
}


