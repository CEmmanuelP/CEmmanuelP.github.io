import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
  }
`;

const DeveloperJobGroup = styled.div`
  font-weight: 900;
  color: #d5c455;
  font-size: 16px;
  letter-spacing: 1px;
`;

const WelcomeDescription = styled.div`
  width: 500px;
  font-size: 15px;
  text-align: center;

  @media (max-width: 768px) {
    width: 300px;
    font-size: 12px;
  }
`;

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Container>
        <DeveloperJobGroup>Web Developer</DeveloperJobGroup>
        <h1>Kim Eugene</h1>
        <WelcomeDescription>
          <p>
            - Javascript(ES6+)
            <br />
            - SPA 개발 경험(React)
            <br />
            - Android App 개발 경험(Kotlin)
            <br />
            - Java, Spring Framework를 활용한 API 개발 경험
            <br />을 가지고 있습니다.
          </p>
        </WelcomeDescription>
        <Link
          style={{
            marginTop: '1rem',
            background: '#d5c455',
            color: '#485563',
            border: '1px solid  #d5c455',
            borderRadius: '4px',
            fontSize: '12px',
            textTransform: 'uppercase',
            padding: '1.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            userSelect: 'none',
            textDecoration: 'none',
          }}
          to="/projects/"
        >
          My Projects
        </Link>
      </Container>
    </>
  );
};

export default IndexPage;
