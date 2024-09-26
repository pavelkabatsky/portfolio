import styled from "styled-components";
import { Icon } from "../icon/Icon";
import sliderPhoto from "./../../assets/images/myPhoto.webp";
import { theme } from "../../styles/theme";
import { S } from "../../layout/skills/Skills_styles";

export const Slider = () => {
	return (
		<StyledSlider>
			<S.SkillIconWrapper>
			<Icon width="42px" height="42px" viewBox="0 0 120 120" iconId="js" />
			</S.SkillIconWrapper>

			<Slide>
				<SlideText>
				Quote testimonials demonstrate support for your product or feature
				from a user who has experience with it. This can be significantly more
				effective than traditional advertising methods as most consumers will
				trust.
				</SlideText>
				<SlidePhoto>
				<img src={sliderPhoto} alt="avatar" />
				</SlidePhoto>
				<SlideName>
				Michal John
				<span>CEO of MZP</span>
				</SlideName>
				<Pagination>
				<span></span>
				<span></span>
				<span className="active"></span>
				<span></span>
				<span></span>
				</Pagination>
			</Slide>
		</StyledSlider>
);
};

const StyledSlider = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin: 0 auto;
	justify-content: center;
	text-align: center;
`;

const Slide = styled.div``;

const SlideText = styled.p`
	font-size: 18px;
	font-weight: 300;
	margin: 30px 0;
`;

const SlidePhoto = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 15px;
	margin: 20px auto;
	overflow: hidden;

	img {
	width: 100%;
	}
`;

const SlideName = styled.h4`
	font-size: 18px;
	font-weight: 700;
	color: #000;

	span {
	font-weight: 300;
	display: block;
	}
`;

const Pagination = styled.div`
	margin-top: 30px;
	cursor: pointer;

	span {
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;

		background-color: ${theme.colors.primary};

		& + span {
		margin-left: 15px;
		}

		&.active {
		width: 40px;
		border-radius: 10px;
		background: ${theme.colors.gradient};
		}
	}
`;
