import styled from 'styled-components';
import logo3 from '../assets/images/logo3.png';
import Page from '../components/Page';

import { Slide } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { StyledContainer as Container, LogoDiv, Line0, Line1, Line2, ConteinerLine, ConteinerLineHorizontal, Line0h, Line1h, Line2h, Line0h0, Line1h1, Line2h2 } from '../components/Auth';

export default function Dashboard({ background, children }) {
  const [isStarted, setIsStarted] = useState(false);
  const [isStartedDiv, setIsStartedDiv] = useState(true);
  setTimeout(() => {
    setIsStarted(true);
  }, 500);
  setInterval(() => {
    setIsStartedDiv(!isStartedDiv);
  }, 4000);
  return (
    <Page background={background}>
      <ConteinerLineHorizontal >
        <Slide timeout={1800} direction="right" in={isStarted} mountOnEnter unmountOnExit>
          <Line0h0></Line0h0>
        </Slide>
        <Slide timeout={1800} direction="right" in={isStarted} mountOnEnter unmountOnExit>
          <Line1h1></Line1h1>
        </Slide>
        <Slide timeout={1800} direction="right" in={isStarted} mountOnEnter unmountOnExit>
          <Line2h2></Line2h2>
        </Slide>
      <ContImg>
        <img src={logo3}/>
      </ContImg>
        <Slide timeout={1800} direction="right" in={isStarted} mountOnEnter unmountOnExit>
          <Line0h></Line0h>
        </Slide>
        <Slide timeout={1800} direction="right" in={isStarted} mountOnEnter unmountOnExit>
          <Line1h></Line1h>
        </Slide>
        <Slide timeout={1800} direction="right" in={isStarted} mountOnEnter unmountOnExit>
          <Line2h></Line2h>
        </Slide>

      </ConteinerLineHorizontal>
      <Slide  timeout={2000} direction="right" in={isStarted} mountOnEnter unmountOnExit>
        <StyledContainer width="740px" height="570px">
          {children}
        </StyledContainer>
      </Slide>
    </Page>
  );
}
const ContImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img{
    width: 240px;
    left: 200px;
    top: 180px;
  }
`;
const StyledContainer = styled(Container)`
  display: flex;
  padding: 40px;
  background-color: #EBEBEB;
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
