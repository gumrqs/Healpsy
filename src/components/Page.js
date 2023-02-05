import styled from 'styled-components';

export default styled.div`
  background: ${props => props.background};
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 48px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > * {
    text-align: center;
  }
  img {
    width: 450px;
  }
  

  @media (max-width: 600px) {
    padding: 0;
  }
`;
