import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components'

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
  height: 48rem;
  padding: 2rem;
  background: #87A1A6;
`;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
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
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide>

            </ProjectSlide>
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </Wrapper>
  );
}

export default Projects;