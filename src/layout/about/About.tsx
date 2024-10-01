import { StyledTitle } from "../../components/StyledTitle";
import { Container } from "../../styles/Container";
import { S } from "./About_Styles";
import React from "react";
import { ExperienceList } from "./ExperianceList";


const experienceData = [
    {
        post: 'Junior Web Developer',
        shedule: 'Full Time',
        company: 'Dr. Rajkumar’s Learning App',
        location: 'Bengaluru',
        date: 'Sep 2021 - Dec 2021'
    },
    {
        post: 'Web Development Intern',
        shedule: 'Internship',
        company: 'IonPixelz Web Solutions',
        location: 'Bengaluru',
        date: 'Sep 2020 - Dec 2021'
    },
    {
        post: 'SEO / SEM Specialist',
        shedule: 'Internship',
        company: 'HAAPS',
        location: 'Bengaluru',
        date: 'Sep 2017 - Dec 2020'
    },
];
const EducationData = [
    {
        post: 'Bachelor in Electronics & Communication',
        shedule: 'Full Time',
        company: 'Bangalore Instutute of Technology',
        location: 'Bengaluru',
        date: 'Aug 2015 - Dec 2020'
    }

]

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <S.AboutWrapper>
                    <StyledTitle>About Me</StyledTitle>
                    <S.AboutText>
                        The Generator App is an online tool that helps you to export
                        ready-made templates ready to work as your future website. It helps
                        you to combine slides, panels and other components and export it as
                        a set of static files: HTML/CSS/JS.
                    </S.AboutText>
                    <StyledTitle> Work Experience</StyledTitle>
                    <ExperienceList data={experienceData} />
                    <S.Education>
                        <StyledTitle>Education</StyledTitle>
                        <ExperienceList data={EducationData} />
                    </S.Education>
                </S.AboutWrapper>
            </Container>
        </S.About>
    );
};


