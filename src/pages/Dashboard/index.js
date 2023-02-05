import { Fade, Slider } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';

import DashboardLayout from '../../layouts/Dashboard';

export default function Dashboard() {
  const [isStartedContData, setIsStartedContData] = useState(false);
  const [daySelected, setDaySelected] = useState('');
  const [value, setValue] = useState(30);

  const valuetext = () => {
    setValue(value);
  };
  console.log(value);

  function verifyDay(day) {
    if(day === daySelected) {
      setIsStartedContData(!isStartedContData);
    }else { setIsStartedContData(true);}
  }
  return (
    <DashboardLayout background={'#B9DBE1'}>
      <ContHeader>
        <HeaderDash onClick={() => { {
          verifyDay('segunda');
          setDaySelected('segunda');
        }}}>
            Segunda
        </HeaderDash>
        <HeaderDash onClick={() => { {
          verifyDay('terça');
          setDaySelected('terça');
        }}}>
            Terça
        </HeaderDash>
        <HeaderDash onClick={() => { {
          verifyDay('quarta');
          setDaySelected('quarta');
        }}}>
            Quarta
        </HeaderDash>
        <HeaderDash onClick={() => { {
          verifyDay('quinta');
          setDaySelected('quinta');
        }}}>
            Quinta
        </HeaderDash>
        <HeaderDash onClick={() => { {
          verifyDay('sexta');
          setDaySelected('sexta');
        }}}>
            Sexta
        </HeaderDash>
        <HeaderDash onClick={() => { {
          verifyDay('sabado');
          setDaySelected('sabado');
        }}}>
            Sabado
        </HeaderDash>
        <HeaderDash onClick={() => { {
          verifyDay('domingo');
          setDaySelected('domingo');
        }}}>
            Domingo
        </HeaderDash>
      </ContHeader>
      <Fade in={isStartedContData}>
        <ContDataDay>
          <Slider defaultValue={0}  getAriaValueText={valuetext} step={20} aria-label="Temperature" valueLabelDisplay="auto" />
          <Slider defaultValue={0}  step={20} aria-label="Default" valueLabelDisplay="auto" />
          <Slider defaultValue={0}  step={20} aria-label="Default" valueLabelDisplay="auto" />
          <Slider defaultValue={0}  step={20} aria-label="Default" valueLabelDisplay="auto" />
          <Slider defaultValue={0}  step={20} aria-label="Default" valueLabelDisplay="auto" />
          renata
        </ContDataDay>
      </Fade>
    </DashboardLayout>
  );
}
const HeaderDash = styled.div`
  width:80px;
  height: 40px;
  background-color: #B9DBE1;
  display: flex;
  align-items: center;
  justify-content:center ;
  border-radius: 10px;
  color: grey;
  border: 3px solid lightgrey;
  :hover{
    background-color: #6579F9;
    color:white;
    border: 3px solid lightgrey;
    cursor:pointer;
  }
`;
const ContHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  `;
const ContDataDay = styled.div` 
  width: 100%;
  height: 400px;
  padding: 100px 100px;
  background-color: #B9DBE1;
  z-index: 5;
  border-radius: 10px;
`;
