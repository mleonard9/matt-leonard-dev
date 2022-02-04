import React from 'react';
import styled from 'styled-components'
import { FaAngular, FaReact, FaJava, FaSwift} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si'
import resume from '../Resources/resume.json';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Wrapper = styled.div`
  display: flex;
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
`;

const TagsWrapper = styled.div`
  width: 30%;
  diplay: flex;
`;

const Tag = styled(Chip)`
  && {
    color: white;
    background-color: #22303C;
    margin: .125rem;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2rem;
  margin-bottom: .25rem;
`;

const IconWrapper = styled.div`
  text-align: center;
  margin: auto;
  font-size: 2rem;
`;

const Name = styled.div`
  width: 8rem;
  line-height: 1.75rem;
  text-align: center;
`;

const Rating = styled.div`
  width ${props => props.rating || 0}%;
  height: 1rem;
  background: red;
  border-radius: 1rem 0 0 1rem;
  transition: 1s ease;
  transition-delay: 0.5s;
`;

const RatingContainer = styled.div`
  width 100%;
  height: 1rem;
  background: grey;
  border-radius: 1rem 0 0 1rem;
`;

function Icon(props) {
  const name = props.name;

  switch(name) {
    case 'Angular':
      return <FaAngular />;
    case 'React':
      return <FaReact />;
    case 'Javascript':
      return <SiJavascript />;
    case 'Java':
      return <FaJava />;
    case 'Swift':
      return <FaSwift />;
    default:
  }
}

function Skills() {
  return (
    <>
    <Wrapper>
      <SkillsWrapper>
        {
          resume.skills.map((skill, key) => 
          <Skill key={key}>
            <IconWrapper>
              <Icon name={skill.name}/>
            </IconWrapper>
            <Name>{skill.name}</Name>
            <RatingContainer>
              <Rating rating={skill.rating} />
            </RatingContainer>
          </Skill>
          )
        }
      </SkillsWrapper>
        <TagsWrapper>
          {
            resume.technologies.map((tech, key) => 
              <Tag label={tech} key={key} />
            )
          }
        </TagsWrapper>
    </Wrapper>
    </>
  );
}

export default Skills;