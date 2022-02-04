import React from "react";
// Import Swiper React components
import styled from 'styled-components'
import resume from '../Resources/resume.json';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const Wrapper = styled.div`
  width: 100%;
  background: #15202B;
`;

const ProjectGrid = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;

const ProjectSlide = styled.div`
  height: 32rem;
  width: 24rem;
  display: flex;
  flex-direction: column;
  background: #192734;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
`;

const SlideImage = styled.div`
  height: 16rem;
  width: 100%;
  background-image: url(${props => props.src || ""});
`;

const SlideTitle = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: .25rem .5rem;
`;

const SlideDescription = styled.div`
  height: 6rem;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 .5rem;
  opacity: 75%;
`;

const SlideActions = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const SlideTechnologies = styled.div`
  position: absolute;
  margin: 0 .25rem;
  bottom: 3rem;
`;

const ActionButton = styled(Button)`
  && {
   margin: .5rem;
  }
`;

const Tag = styled(Chip)`
  && {
    color: white;
    background-color: #22303C;
    margin: .125rem;
  }
`;


function Projects() {
  return (
    <Wrapper>
      <ProjectGrid>
        {
          resume.projects.map((project, key)=> 
              <ProjectSlide key={key}>
                <SlideImage src={project.img}/>
                <SlideTitle>
                  {project.name}
                </SlideTitle>
                <SlideDescription>
                  {project.description}
                </SlideDescription>
                <SlideTechnologies>
                  {
                  project.techonologies.map((tech)=> 
                    <Tag label={tech} key={tech} />
                  )
                  }
                </SlideTechnologies>
                <SlideActions>
                  <ActionButton variant="outlined">Live</ActionButton>
                  <ActionButton variant="outlined">Source</ActionButton>
                </SlideActions>
              </ProjectSlide>
          )
        }
      </ProjectGrid>
    </Wrapper>
  );
}

export default Projects;