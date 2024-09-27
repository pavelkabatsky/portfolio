import { Icon } from "../icon/Icon";
import sliderPhoto from "./../../assets/images/myPhoto.webp";
import { S } from "../../layout/skills/Skills_styles";
import {S as Styled} from "./Slider_Styles"

export const Slider: React.FC = () => {
	return (
		<Styled.Slider>
			<S.SkillIconWrapper>
			<Icon width="42px" height="42px" viewBox="0 0 120 120" iconId="js" />
			</S.SkillIconWrapper>

			<Styled.Slide>
				<Styled.SlideText>
				Quote testimonials demonstrate support for your product or feature
				from a user who has experience with it. This can be significantly more
				effective than traditional advertising methods as most consumers will
				trust.
				</Styled.SlideText>
				<Styled.SlidePhoto>
				<img src={sliderPhoto} alt="avatar" />
				</Styled.SlidePhoto>
				<Styled.SlideName>
				Michal John
				<span>CEO of MZP</span>
				</Styled.SlideName>
				<Styled.Pagination>
				<span></span>
				<span></span>
				<span className="active"></span>
				<span></span>
				<span></span>
				</Styled.Pagination>
			</Styled.Slide>
		</Styled.Slider>
);
};

