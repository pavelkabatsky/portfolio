
import { S } from "./menu_styles";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.MenuList>
    	{props.menuItems.map((item, index) => {
			return (
			<S.MenuItem key={index}>
				<S.Link href="#">{item}</S.Link>
			</S.MenuItem>
			);
    	})}
    </S.MenuList>
  );
};
