import { Icon } from "../icon/Icon";
import { animateScroll } from 'react-scroll';

export const Logo:React.FC = () => {
  return (
    <a onClick={()=>{animateScroll.scrollToTop()}} href="#">
      <Icon iconId='logo' width="97" height="55" viewBox='0 0 97 59' />
    </a>
  );
};
