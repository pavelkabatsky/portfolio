import { S } from "./Slider_Styles";
import { S as Styled } from "./../../layout/skills/Skills_styles";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Icon } from "../icon/Icon";

import Avatar1 from "./../../assets/images/avatar1.webp"
import Avatar2 from "./../../assets/images/avatar2.webp"
import Avatar3 from "./../../assets/images/avatar3.webp"
import Avatar4 from "./../../assets/images/avatar4.webp"
import Avatar5 from "./../../assets/images/avatar5.webp"



const slidesData = [
	{
		text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,libero.	",
		userName : "Ralf Ringer",
		company : "Raifaizen Bank",
		photoSrc : Avatar1
	},
	{
		text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati consequatur consectetur voluptatem. Similique, quod.",
		userName : "Josep Maurinho",
		company : "Raifaizen Bank",
		photoSrc : Avatar2
	},
	{
		text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat delectus voluptas nihil, quae cupiditate, eos reprehenderit libero itaque provident temporibus deleniti?",
		userName : "Cristiano Ronaldo",
		company : "Raifaizen Bank",
		photoSrc : Avatar3
	},
	{
		text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
		userName : "German Gref",
		company : "Sberbank",
		photoSrc : Avatar4
	},
	{
		text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem porro totam odit.",
		userName : "Radji Hudrapale",
		company : "O la la Company",
		photoSrc : Avatar5
	},
]

type SlidePropsType = {
	text : string,
	photoSrc : string,
	userName : string,
	company : string,
}

const Slide = (props: SlidePropsType) => {
	return (
		<S.Slide>
			<S.SlideText>
				{props.text}
			</S.SlideText>
			<S.SlidePhoto>
				<img src={props.photoSrc} alt="avatar" />
			</S.SlidePhoto>
			<S.SlideName>
			{props.userName}
				<span>{props.company}</span>
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
	};
	return (
		<S.Slider>
			<Styled.SkillIconWrapper>
				<Icon width="42px" height="42px" viewBox="0 0 120 120" iconId="js" />
			</Styled.SkillIconWrapper>
			<Slider {...settings}>
				{slidesData.map((item, index) => {
					return <Slide key={index} text= {item.text} company={item.company} photoSrc={item.photoSrc} userName = {item.userName}/>
				})}
				
			</Slider>
		</S.Slider>
	);
}