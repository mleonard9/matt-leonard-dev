import React from 'react';
import styled from 'styled-components'
import resume from '../Resources/resume.json';

const Wrapper = styled.div`
  width: 100%;
  background: #15202B;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 2rem;
  padding-top: 2rem;
`;

const Content = styled.div`
  max-width: 100rem;
  margin: auto;
`;

const JobListItem = styled.div`
  padding-left: 4rem;
  margin: 1rem 0;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: .25rem 0;
`;

const Company = styled.div`
  display: flex;
  font-weight: bolder;
  font-size: 1.25rem;
`;

const JobTitle = styled.div`
 
`;

const TimePeriod = styled.div`
  padding-left: .5rem;
  font-weight: lighter;
`;


function Experience() {
  return (
    <Wrapper>
      <Content>
        <Title>Experience</Title>
        {
          resume.experience.map((job, key) =>
            <JobListItem key={key}>
              <TextWrapper>
                <Company>
                  {job.company}
                </Company>
                <TimePeriod>
                  ({job.time_period})
                </TimePeriod>
              </TextWrapper>
              <JobTitle>
                {job.title}
              </JobTitle>
            </JobListItem>
          )
        }
      </Content>
    </Wrapper>
  );
}

export default Experience;