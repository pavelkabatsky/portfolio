import styled from "styled-components";
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle";
import  {SimpleSlider} from "../../components/slider/Slider";
import { Container } from "../../styles/Container";

export const Testimonials: React.FC = () => {
  return (
    <StyledTestimonials>
      <Container>
        <StyledTitle>Testimonials</StyledTitle>
        <StyledSubTitle>What People Says</StyledSubTitle>
        <SimpleSlider />
      </Container>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.section``;
