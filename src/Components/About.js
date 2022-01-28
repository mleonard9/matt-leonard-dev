import React from 'react';
import styled from 'styled-components'
import photo from '../Resources/profile-picture.jpg';
import resume from '../Resources/resume.json';
import Skills from './Skills';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 48rem;
  justify-content: center;
  align-items: center;
  background: #EEF2F3;
`;

const PhotoCard = styled.div`
  height: 32rem;
  width: 20rem;
  text-align: center;
  margin: 2rem;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Photo = styled.img`
  object-fit: cover;
  width: 18rem;
  margin: 1rem 1rem .5rem 1rem;
`;

const InfoCard = styled.div`
  height: 40rem;
  width: 100%;
  max-width: 72rem;
  background: white;
  padding: 1rem 2rem;
  margin: 2rem;
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
        <Name>{resume.name}</Name>
      </PhotoCard>
      <InfoCard>
        <Skills />
      </InfoCard>
    </Wrapper>
    </>
  );
}

export default About;