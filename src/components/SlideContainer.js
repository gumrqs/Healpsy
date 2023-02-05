import { StyledContainer } from '../components/Auth';
import { Slide } from '@material-ui/core';

export default function SlideContainer( { children } ) {
  return(
    <Slide timeout={2000} direction="up" in={true} mountOnEnter unmountOnExit>
      <StyledContainer width="400px" height="520px">
        {children}
      </StyledContainer>
    </Slide>
  );
}
