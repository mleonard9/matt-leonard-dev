import React from 'react';
import styled from 'styled-components'
import photo from '../Resources/profile-picture.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48rem;
  background: #EEF2F3;
`;

const PhotoCard = styled.div`
  height: 32rem;
  width: 20rem;
  text-align: center;
  margin-right: 8rem;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Photo = styled.img`
  object-fit: cover;
  width: 18rem;
  margin: 1rem 1rem .5rem 1rem;
`;

const InfoCard = styled.div`
  height: 44rem;
  width: 96rem;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Name = styled.div`
  font-size: 1.5rem;
`;

function About() {
  return (
    <>
    <Wrapper>
      <PhotoCard>
        <Photo src={photo} />
        <Name>Matt Leonard</Name>
      </PhotoCard>
      <InfoCard>

      </InfoCard>
    </Wrapper>
    </>
  );
}

export default About;