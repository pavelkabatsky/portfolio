
import { S } from "./menu_styles";

const menuItems = [
	{
		title : "Home",
		href : "home"
	},
	{
		title : "About",
		href : "about"
	},
	{
		title : "Tech Stack",
		href : "stack"
	},
	{
		title : "Projects",
		href : "projects"
	},
	{
		title : "Contacts",
		href : "contacts"
	},
]

export const Menu:React.FC = () => {
  return (
    <S.MenuList>
    	{menuItems.map((item, index) => {
			return (
			<S.MenuItem key={index}>
				<S.NavLink  href={`#${item.href}`} 
							activeClass="active"
      						to={item.href}
							smooth={true}
							spy={true}>
								{item.title}
				</S.NavLink>
			</S.MenuItem>
			);
    	})}
    </S.MenuList>
  );
};
