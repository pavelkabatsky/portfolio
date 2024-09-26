import styled from "styled-components";
import { StyledSubTitle, StyledTitle } from "../../components/StyledTitle";
import { Slider } from "../../components/slider/Slider";
import { Container } from "../../styles/Container";

export const Testimonials = () => {
  return (
    <StyledTestimonials>
      <Container>
        <StyledTitle>Testimonials</StyledTitle>
        <StyledSubTitle>What People Says</StyledSubTitle>
        <Slider />
      </Container>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.section``;
