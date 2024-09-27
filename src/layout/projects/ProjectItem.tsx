import { PojectItemLink } from "./PojectItemLink";
import { StyledButton } from "../../components/button/StyledButton";
import {S} from "./Projects_styles"
import React from "react";

type ProjectItemPropsType = {
  data: Array<any>;
};

export const ProjectItem: React.FC<ProjectItemPropsType> = (props: ProjectItemPropsType) => {
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <S.ProjectItem key={index}>
            <S.ImgWrapper>
              <img src={item.imgUrl} alt="#" />
              <StyledButton>Viev Project</StyledButton>
            </S.ImgWrapper>

            <S.ContentWrapper>
              <S.ContentTitle>{item.title}</S.ContentTitle>
              <S.ContentText>{item.text}</S.ContentText>
              <S.StackText>
                <span>Tech stack :</span> {item.stack}
              </S.StackText>
              <S.LinksWrapper>
                <PojectItemLink
                  text="Live Preview"
                  iconId="link"
                  href="https://developer.mozilla.org/en-US/"
                />
                <PojectItemLink
                  text="View Code"
                  iconId="git"
                  href="https://developer.mozilla.org/en-US/"
                />
              </S.LinksWrapper>
            </S.ContentWrapper>
          </S.ProjectItem>
        );
      })}
    </>
  );
};


