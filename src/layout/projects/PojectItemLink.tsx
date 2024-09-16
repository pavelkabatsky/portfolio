import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

type PojectItemLinkPropsType = {
    href : string
    iconId : string
    text : string
}

export const PojectItemLink = (props: PojectItemLinkPropsType) => {
  return (
    <div>
      <Icon width="20px" height="20px" viewBox="0 0 30 30" iconId={props.iconId} />
      <StyledPojectItemLink href={props.href}>{props.text}</StyledPojectItemLink>
    </div>
  );
};
const StyledPojectItemLink = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color:#000000;
    margin-left:10px;
`