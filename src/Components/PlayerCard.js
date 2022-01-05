import React from 'react';
import styled from 'styled-components'
import profpic from '../Resources/profile-picture.jpg'
import Skills from './Skills';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Card = styled.div `
  display: flex;
  margin: 4rem auto;
  padding: 1rem;
  height: 30rem;
  width: 75rem;
  background: #264653;
  border: 2px solid black;
  border-radius: 1rem;
`;

const LeftSide = styled.div `
  padding-right: 2rem;
`;

const RightSide = styled.div `
  width: 100%;
  height: 29rem;
  border: .25rem solid #E9C46A;
  border-radius: .5rem;
  text-align: center;
`;

const NameWrapper = styled.div `

`;

const Name = styled.p `
  color: white;
  font-
`;

const Slogan = styled.p `
  color: white;
`;

const Description = styled.p `
  color: white;
`;

const Actions = styled.div `
  display: flex;
`;

const Avatar = styled.img`
  object-fit: cover;
  border: .25rem solid #E9C46A;
  border-radius: .5rem;
  width: 16rem;
  height: 22rem;
`;

const Button = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.4rem 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  `;


const IconWrapper = styled.div`
  margin: auto;
  display: flex;
`;

const Icon = styled.a`
  color: black;
  font-size: 2rem;
  margin: .25rem;
  cursor: pointer;
`;


function About() {
  return (
    <>
    <Card>
      <LeftSide>
        <Avatar src={profpic} />
        <Actions>
          <IconWrapper>
            <Icon href="">
              <BsGithub />
            </Icon>
            <Icon href="">
            <BsLinkedin />
            </Icon>
          </IconWrapper>
          <Button href="" download> 
            Resume
          </Button>
        </Actions>
      </LeftSide>
      <RightSide>
        <NameWrapper>
          <Name>MATT LEONARD</Name>
          <Slogan>Front End Developer</Slogan>
        </NameWrapper>
        <Description>Matt is a kid with serious skills, He can run, he can pass, he can catch, and his super low center of gravity makes him tough to tackle</Description>
        <Skills />
      </RightSide>
    </Card>
    </>
  );
}

export default About;