
import { Menu } from "../Menu";
import { S } from "../menu_styles";

export const DesctopMenu: React.FC<{menuItems : Array<string>}> = (props : {menuItems : Array<string>}) => {
  return (
	<S.StyledMenu>
		<Menu menuItems={props.menuItems}/>
	</S.StyledMenu>
  );
};


