import Page from '../components/Page';
import { StyledContainer, LogoDiv, Line0, Line1, Line2, ConteinerLine, ConteinerLineHorizontal, Line0h, Line1h, Line2h, Line0h0, Line1h1, Line2h2 } from '../components/Auth';
import logo1 from '../assets/images/logo1.png';
import { Slide } from '@material-ui/core';
import { useEffect, useState } from 'react';
export default function AuthLayout({ background, children, backgroundCont }) {
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
      <LogoDiv >
        <img src={logo1}/>
      </LogoDiv>
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
        <StyledContainer width="400px" height="520px" backgroundCont={backgroundCont}>
          {children}
        </StyledContainer>
      </Slide>
     
    </Page>
  );
}
