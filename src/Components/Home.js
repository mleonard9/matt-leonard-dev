import React from 'react';
import styled from 'styled-components'
import myAvatar from '../Resources/cartoon-avatar.svg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import resume from '../Resources/resume.json';

import resumePDF from '../Resources/Matthew-Leonard-Resume.pdf';

const Wrapper = styled.div`
  height: 100vh;
  background: none;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Card = styled.div`
  margin: auto;
  height: 24rem;
  width: 18rem;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 12rem;
  height: 12rem;
  margin: auto;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.a`
  color: white;
  font-size: 2rem;
  margin: 1rem;
  cursor: pointer;
`;

const Title = styled.div`
  text-align: center;
  color: #EEF2F3;
`;

const SubTitle = styled.div`
  text-align: center;
  color: #EEF2F3;
`;

const DownloadButton = styled.a`
  border-radius: .25rem;
  padding: .5rem;
  margin: auto;
  width: 16rem;
  background: #11A3DE;
  color: #EEF2F3;
  text-decoration: none;
`
function Home() {
    return (
      <>
      <Wrapper> 
        <Card>
        <Avatar src={myAvatar} />
        <Title>
          {resume.name}
        </Title>
        <SubTitle>
          {resume.title}
        </SubTitle>
        <IconWrapper>
          <Icon href="https://www.github.com/mleonard9" target="_blank">
            <BsGithub />
          </Icon>
          <Icon href="https://www.linkedin.com/in/matthew-leonard-818b1a120/" target="_blank">
           <BsLinkedin />
          </Icon>
        </IconWrapper>
        <DownloadButton href={resumePDF} without rel="noopener noreferrer" target="_blank"> 
          Download CV
        </DownloadButton>
        </Card>
      </Wrapper>
      </>
    );
}

export default Home;