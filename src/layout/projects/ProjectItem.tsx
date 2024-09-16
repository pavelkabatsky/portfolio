import styled from "styled-components";
import { ProjectItemLinks } from "./ProjectItemLinks";

type ProjectItemPropsType = {
  data: Array<any>;
};

export const ProjectItem = (props: ProjectItemPropsType) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <StyledProjectItem>
            <img src={item.imgUrl} alt="#" />
            <div className="content">
              <h3>{item.title}</h3>
              <p>
                {item.text}
              </p>
              <p>
                <span>Tech stack :</span> {item.stack}
              </p>
              <ProjectItemLinks />
            </div>
          </StyledProjectItem>
        );
      })}
    </>
  );
};

const StyledProjectItem = styled.div`
  width: 375px;
  border-radius: 20px;
  box-shadow: 4px 4px 100px 18px rgba(0, 0, 0, 0.2);
  margin-bottom: 62px;

  img {
    width: 100%;
    height:260px;
    object-fit:cover;
  }

  .content {
    padding: 30px;
  }
`;
