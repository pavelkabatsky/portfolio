
import sliderPhoto from "./../../assets/images/myPhoto.webp";
import { S } from "./Slider_Styles";
import { S as Styled } from "./../../layout/skills/Skills_styles";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Icon } from "../icon/Icon";

const Slide = () => {
	return (
		<S.Slide>
			<S.SlideText>
				Quote testimonials demonstrate support for your product or feature
				from a user who has experience with it. This can be significantly more
				effective than traditional advertising methods as most consumers will
				trust.
			</S.SlideText>
			<S.SlidePhoto>
				<img src={sliderPhoto} alt="avatar" />
			</S.SlidePhoto>
			<S.SlideName>
				Michal John
				<span>CEO of MZP</span>
			</S.SlideName>
		</S.Slide>
	)
}

export function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		appendDots: (dots:any)=> {
			return (<div>
				<S.Pagination> {dots} </S.Pagination>
			  </div>)
		},
		customPaging: function () {
			return <S.PaginationItem></S.PaginationItem>;
		},
		
		// dotsClass: "slick-dots slick-thumb"
	};
	return (
		<S.Slider>
			<Styled.SkillIconWrapper>
				<Icon width="42px" height="42px" viewBox="0 0 120 120" iconId="js" />
			</Styled.SkillIconWrapper>
			<Slider {...settings}>
				<Slide />
				<Slide />
				<Slide />
			</Slider>
		</S.Slider>
	);
}