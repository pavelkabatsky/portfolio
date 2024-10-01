import styled from "styled-components";
import { S } from "./About_Styles";
import { Icon } from "../../components/icon/Icon";

type ExperienceListPropsType = {
    data : Array<any>
}

export const ExperienceList:React.FC<ExperienceListPropsType> = (props: ExperienceListPropsType) => {
    return (
        <StyledExperienceList>
            {props.data.map((item, index)=> {
                return(
                    <S.ExperienceItem key={index}>
            <S.ItemTop>
                <S.Post>{item.post}</S.Post>
                <S.Shedule>{item.shedule}</S.Shedule>
            </S.ItemTop>
            <S.ItemBottom>
                <S.BottomItem>
                    <Icon
                        iconId="house"
                        width="12px"
                        height="12px"
                        viewBox="0 0 12 12"
                    />
                    <span>{item.company}</span>
                </S.BottomItem>
                <S.BottomItem>
                    <Icon
                        iconId="location"
                        width="12px"
                        height="12px"
                        viewBox="0 0 12 12"
                    />
                    <span>{item.location}</span>
                </S.BottomItem>
                <S.BottomItem>
                    <Icon
                        iconId="calendar"
                        width="16px"
                        height="12px"
                        viewBox="0 0 16 12"
                    />
                    <span>{item.date}</span>
                </S.BottomItem>
            </S.ItemBottom>
            </S.ExperienceItem>
                )
            })}
        </StyledExperienceList>
    );
}
 
const StyledExperienceList = styled.div`
    margin-top: 38px;
`
