import { Fade, Slider } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import Timeline from '../Timeline';
import DashboardLayout from '../../layouts/Dashboard';
import { dashboard } from '../../services/dashboardApi';

export default function Dashboard() {
  const [isStartedContData, setIsStartedContData] = useState(false);
  const [daySelected, setDaySelected] = useState('');
  const [value, setValue] = useState(30);
  const [isTimeline, setIsTimeline] = useState(true);
  const [BackgroudHeader, setBackgroudHeader] = useState(false);
  const [anxietyValue, setAnxietyValue] = useState();
  const [sadnessValue, setSadnessValue] = useState();
  const [happinessValue, setHappinessValue] = useState();
  const [angerValue, setAngerValue] = useState();
  const [otherValue, setOtherValue] = useState();
  const [report, setReport] = useState('')
  
  console.log("ANSIEDADE HEIN: ", anxietyValue, happinessValue, sadnessValue, otherValue,angerValue);
  
  const valuetext = () => {
    setValue(value);
  };
  console.log(value);
  function verifyDay(day) {
    if(day === daySelected) {
      setIsStartedContData(!isStartedContData);
    } else { 
      setIsStartedContData(true); 
    }
  }
  function handleChange(e){
    e.preventDefault();

    const body = {
      anxiety: anxietyValue,
      happiness: happinessValue,
      sadness: sadnessValue,
      anger: angerValue,
      other: otherValue,
      report: report
  }

  postDashboard(body)
      .then((response) => {
  
      })
      .catch((err) => {
          console.error(err);
          if (err.status !== 200) {

          }
      });
    setReport('');
}

  return (
    <DashboardLayout background={'#B9DBE1'}>
      {
        isTimeline  ?
          <>
            <Timeline setIsTimeline={setIsTimeline}/>
          </>
        :
          <>
        <ContHeader>
          <HeaderDash  onClick={() => { {
            verifyDay('segunda');
            setDaySelected('segunda');
          }}}>
              Segunda
          </HeaderDash>
          <HeaderDash onClick={() => { {
            verifyDay('terça');
            setDaySelected('terça');
          }}} >
              Terça
          </HeaderDash>
          <HeaderDash onClick={() => { {
            verifyDay('quarta');
            setDaySelected('quarta');
          }}} >
              Quarta
          </HeaderDash>
          <HeaderDash onClick={() => { {
            verifyDay('quinta');
            setDaySelected('quinta');
          }}} >
              Quinta
          </HeaderDash>
          <HeaderDash onClick={() => { {
            verifyDay('sexta');
            setDaySelected('sexta');
          }}} >
              Sexta
          </HeaderDash>
          <HeaderDash onClick={() => { {
            verifyDay('sabado');
            setDaySelected('sabado');
            setBackgroudHeader(!BackgroudHeader);
          }}} >
              Sabado
          </HeaderDash>
          <HeaderDash onClick={() => { {
            verifyDay('domingo');
            setDaySelected('domingo');
            setBackgroudHeader(!BackgroudHeader);
          }}} >
              Domingo
          </HeaderDash>
        </ContHeader>
        <Fade in={isStartedContData}>
          <ContDataDay>
            <ContEmotion>
              <Emotion>Ansiedade</Emotion> 
              <ContSlider>
                <Slider 
                  defaultValue={0} 
                  getAriaValueText={valuetext} 
                  step={10} aria-label="Temperature" 
                  valueLabelDisplay="auto" 
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                      setAnxietyValue(newValue);
                    }
                  }} 
                />
              </ContSlider>
            </ContEmotion>
            <ContEmotion>
              <Emotion>Tristeza</Emotion> 
              <ContSlider>
                <Slider 
                  defaultValue={0} 
                  getAriaValueText={valuetext} 
                  step={10} aria-label="Temperature" 
                  valueLabelDisplay="auto" 
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                      setSadnessValue(newValue);
                    }
                  }} 
                />
              </ContSlider>
            </ContEmotion>
            <ContEmotion>
              <Emotion>Felicidade</Emotion> 
              <ContSlider>
                <Slider  
                  defaultValue={0} 
                  getAriaValueText={valuetext} 
                  step={10} aria-label="Temperature" 
                  valueLabelDisplay="auto" 
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                      setHappinessValue(newValue);
                    }
                  }} 
                />
              </ContSlider>
            </ContEmotion>
            <ContEmotion>
              <Emotion>Raiva</Emotion> 
              <ContSlider>
                <Slider  
                  defaultValue={0} 
                  getAriaValueText={valuetext} 
                  step={10} aria-label="Temperature" 
                  valueLabelDisplay="auto" 
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                      setAngerValue(newValue);
                    }
                  }} 
                />
              </ContSlider>
            </ContEmotion>
            <ContEmotion>
              <Emotion>Outro(s)</Emotion> 
              <ContSlider>
                <Slider  
                  defaultValue={0} 
                  getAriaValueText={valuetext} 
                  step={10} aria-label="Temperature" 
                  valueLabelDisplay="auto" 
                  onChange={(event, newValue) => {
                    if (typeof newValue === 'number') {
                      setOtherValue(newValue);
                    }
                  }} 
                />
              </ContSlider>
            </ContEmotion>
            <ContText>
                <form onSubmit={handleChange}>
                  <Input type="text"  onChange={(e) => setReport(e.target.value)} 
                        value={report} 
                        required
                        placeholder='Fale brevemente do seu dia.. '/>
                </form>
                <ButtonDay onClick={()=>{setIsTimeline(true)}}>
                  <p>helpsy</p>
                </ButtonDay>
            </ContText>
          </ContDataDay>
        </Fade>
        </>
      }
    </DashboardLayout>
  );
}

const Input =  styled.input`
  font-size: 12px;
  background: #4656B5;
  border-radius: 5px;
  width: 420px;
  height:65px ;
  color: white ;
  padding-left: 11px;
  box-sizing: border-box ;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  outline: none;
  border: none;
  ::placeholder{
    color: #DBDBDB;
    font-size: 15px;
  }
`

const ButtonDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 20px;
  background-color: #4656B5;
  border-radius: 5px;
  margin-top: 13px;
  p {
    color: white;
    font-size: 14px;
  }
  :hover {
    filter:brightness(1.2);
    cursor: pointer;
  }

`;
const ContText = styled.div `
  font-size: 5px;
  margin-top: 40px;
  width: 100%;
  height: 150px;
  border:none;
  border-radius: 10px;
  background-color: #7a89db;
  padding: 15px 15px;
  display: flex;
  align-items: end;
  display: flex;
  flex-direction: column;
`;
const ContEmotion = styled.div `
  display: flex;
`;
const ContSlider =  styled.div` 
  width: 240px;
  margin-left: 15px;
`;
const Emotion = styled.div`
  width: 85px;
  display: flex;
  align-items: center;
  color: grey;
`;
const HeaderDash = styled.div`
  width:80px;
  height: 40px;
  background: ${props => props.BackgroudHeader ? '#6579F9' : '#B9DBE1'};
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
  margin-top: 35px;
  width: 100%;
  height: 420px;
  padding: 100px 80px;
  background-color: #B9DBE1;
  z-index: 5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
