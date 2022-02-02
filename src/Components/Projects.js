import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components'
import resume from '../Resources/resume.json';
import Button from '@mui/material/Button';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const Wrapper = styled.div`
  display: flex
  width: 100%;
  height: 42rem;
  padding: 2rem;
  background: #15202B;
`;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 16rem;
    height: 24rem;
    object-fit: cover;
  }
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
  margin: .25rem .5rem .5rem .5rem;
  opacity: 75%;
`;


const SlideActions = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const SlideTechnologies = styled.div`
  width: 100%;
`;

const ActionButton = styled(Button)`
  && {
   margin: .5rem;
  }
`;

const Tag = styled(Button)`
  && {
    line-height: .5rem;
    color: white;
    background-color: #22303C;
    margin: .25rem;
    padding: .5rem;
  }
`;


function Projects() {
  return (
    <Wrapper>
      <SwiperWrapper>
        <Swiper slidesPerView={3} spaceBetween={30} pagination={{"clickable": true}} breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              }, 
              2000: {
                slidesPerView: 5,
              } 
            }}
              className="mySwiper">
                {
                  resume.projects.map((project)=> 
                    <SwiperSlide key={project.name}>
                      <ProjectSlide>
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
                            <Tag key={tech}>{tech}</Tag>
                          )
                          }
                        </SlideTechnologies>
                        <SlideActions>
                          <ActionButton variant="outlined">Live</ActionButton>
                          <ActionButton variant="outlined">Source</ActionButton>
                        </SlideActions>
                      </ProjectSlide>
                    </SwiperSlide>
                  )
                }
        </Swiper>
      </SwiperWrapper>
    </Wrapper>
  );
}

export default Projects;