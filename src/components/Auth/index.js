import styled from 'styled-components';
import Container from '../Container';

export const StyledContainer = styled(Container)`
  background: ${props => props.backgroundCont};
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing:border-box;
  padding: 30px;
  img {
    width: 100px;
    cursor:pointer;
    transition: all .5s;
    border: 10px solid transparent;
  :hover{
    border: 13px solid white;
    border-radius: 25px;
    -webkit-filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    -webkit-transform: rotateZ(-360deg) scale(1.2);
    transform: rotateZ(-360deg) scale(1.2);
}
  }
  margin-right: 30px;
  z-index: 2;
`;
export const LogoDiv = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  position:fixed;
  right: 250px;
`;

export const ConteinerLine = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  position:fixed;
  top: 0;
  margin-top: 118px;
`;

export const Line0 = styled.div`
  
  width: 2px;
  height: 50px;
  background-color: white;
  margin-top: 20px;
`;

export const Line1 = styled.div`
  position:relative;
  width: 2px;
  height: 100vh;
  background-color: white;
  left: 665px;
  top: -119px;
`;

export const Line2 = styled.div`
  position:relative;
  width: 2px;
  height: 100vh;
  background-color: white;
  left: 690px;
  top: -119px;
`;
export const ConteinerLineHorizontal = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction:column;
  position:fixed;
  top: 0;
`;

export const Line0h = styled.div`
  position:relative;
  width: 68.5%;
  height: 2px;
  background-color: #6579F9;
  top: 480px;
`;

export const Line1h = styled.div`
  position:relative;
  width: 68.5%;
  height: 2px;
  background-color: #6579F9;
  top: 500px;
`;

export const Line2h = styled.div`
  position:relative;
  width: 68.5%;
  height: 2px;
  background-color: #6579F9;
  top: 520px;
`;
export const Line0h0 = styled.div`
  position:relative;
  width: 68.5%;
  height: 2px;
  background-color: #6579F9;
  top: 80px;
`;

export const Line1h1 = styled.div`
  position:relative;
  width: 68.5%;
  height: 2px;
  background-color: #6579F9;
  top: 100px;
`;

export const Line2h2 = styled.div`
  position:relative;
  width: 68.5%;
  height: 2px;
  background-color: #6579F9;
  top: 120px;
`;

export const ConteinerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 35px;
  margin-top: 10px;
  color: white;
`;

export const Label = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  form {
    font-family: 'Lexend Deca';







    Button{
      color:#6579F9;
      background-color: white;
      :hover{
        background-color: lightgrey;
        filter: brightness(1.2);
        font-family: 'Lexend Deca';
      }
    }
  }
`;
export const Subtitle = styled.h1`
font-size: 14px;
color: #8E8E8E;
white-space: nowrap;
margin: 0 10px;
`;

export const Divider = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0;
`;

export const Line = styled.span`
width: 100%;
height: 1px;
background-color: #8E8E8E;
opacity: 0.3;
`;

export const OAuthWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 0 20px;
margin-bottom: 20px;
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
}
`;

export const LogoWrapper = styled.span`
width: 44px;
height: 44px;
margin-bottom: 6px;
border-radius: 10px;
border: 1px solid rgba(142,142,142,0.3);
display: flex;
align-items: center;
justify-content: center;
img{
  width: 20px;
  height: 20px;
  object-fit: contain;
} 
`;
