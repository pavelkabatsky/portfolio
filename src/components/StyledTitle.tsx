import styled from "styled-components";

type StyledTitleProps = {
    weight?: number;
    fz? : number;
}

export const StyledTitle = styled.h2<StyledTitleProps>`
    font-weight: ${ (props) => props.weight ||  700 };
    font-size: ${ (props) => props.fz ||  58 + ' px'};
    line-height:26px;
    color:#42446E;
    text-align:center;
    

`

export const StyledSubTitle = styled.h2`
    font-weight: 400;
    font-size: 22px;
    line-height:26px;
    color:#666666;
    text-align:center;

`