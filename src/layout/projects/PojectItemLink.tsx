import { Icon } from "../../components/icon/Icon";
import {S} from "./Projects_styles"

type PojectItemLinkPropsType = {
    href : string
    iconId : string
    text : string
}

export const PojectItemLink = (props: PojectItemLinkPropsType) => {
  return (
    <div>
      <Icon width="20px" height="20px" viewBox="0 0 30 30" iconId={props.iconId} />
      <S.PojectItemLink href={props.href}>{props.text}</S.PojectItemLink>
    </div>
  );
};
