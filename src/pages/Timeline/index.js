import { Fade, Slider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Emotion from './Emotion';
import Post from './Post'

import { useNavigate } from 'react-router-dom';

export default function Timeline({setIsTimeline}) {
    const navigate = useNavigate()
    const [isData, setIsData] = useState(false);
    const [patientData, setPatientData] = useState({
        name: "Bilu Tetéia",
        age: '24 anos',
        /* emotions: [
            {
                name: 'felicidade',
                value: 7
            },
            {
                name: 'tristeza',
                value: 8
            },
            {
                name: 'ansiedade',
                value: 5
            },
            {
                name: 'raiva',
                value: 10
            }
        ],
        posts: [
            {
                date: "27/01/2023",
                emotions: [
                    {
                        name: 'felicidade',
                        value: 7
                    },
                    {
                        name: 'tristeza',
                        value: 8
                    },
                    {
                        name: 'ansiedade',
                        value: 5
                    },
                    {
                        name: 'raiva',
                        value: 10
                    },
                ],
                report: "Ah ao dia de hoje foi muito legal tipo uau"
            },
            {
                date: "28/01/2023",
                emotions: [
                    {
                        name: 'felicidade',
                        value: 7
                    },
                    {
                        name: 'tristeza',
                        value: 8
                    },
                    {
                        name: 'ansiedade',
                        value: 5
                    },
                    {
                        name: 'raiva',
                        value: 10
                    },
                ],
                report: "Ah ao dia de hoje foi muito legal tipo uau"
            },
            {
                date: "29/01/2023",
                emotions: [
                    {
                        name: 'felicidade',
                        value: 7
                    },
                    {
                        name: 'tristeza',
                        value: 8
                    },
                    {
                        name: 'ansiedade',
                        value: 5
                    },
                    {
                        name: 'raiva',
                        value: 10
                    },
                ],
                report: "Ah ao dia de hoje foi muito legal tipo uau"
            }
        ] */
        
    });
    const [scaling, setScaling] = useState(false);
    let contador=0;
    useEffect(() => {
        setInterval(() => {
            setScaling(!scaling);
        }, 1000);
    }, [])
    console.log(scaling)

    return(
        <>
            <Title>
                Olá, {patientData.name}! Bem vindo ao seu feed 😀 
            </Title>
            {
                patientData.emotions ?
                <>
                    <SubTitle>
                        Analise suas emoções e acompanhe seu desenvolvimento!!
                    </SubTitle>
                    <Posts>
                        <SectionTitle>
                            Seus HEaLPsies:
                        </SectionTitle>
                        {
                            patientData.posts.map((post) => {
                                return <Post post={post}/>
                            })
                        }
                        <ConteinerFooter>
                            <Emoji scaling={scaling}>
                                <span>😀</span>
                                <span>😡</span>
                                <span>😔</span>
                                <span>😥</span>
                                <span>🤔</span>               
                            </Emoji>
                            <TitleFooter onClick={() => {
                                setIsTimeline(false);
                            }}>Clique aqui e faça um Healpsy</TitleFooter>
                        </ConteinerFooter>
                    </Posts>
                </>
                :
                    <>
                        <SubTitle onClick={() => setIsTimeline(false)}>
                            Clique aqui para fazer o seu primeiro Healpsy
                        </SubTitle>
                        <Healpsy onClick={() => setIsTimeline(false)}>
                            HE<span>a</span>LP<span>sy</span>
                        </Healpsy>
                    </>
            }
            
         </>
        );

}
const Healpsy = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 85px;
    margin-top: 50px;
    width: 350px;
    text-align: center;
    font-size: 75px;
    font-weight: 700;
    color: yellow;
    :hover{
        span{
            transition: all 0.5s;
            cursor: pointer;    
            -webkit-filter: blur(5px);
            filter: blur(5px);
        }
    }
    span {
        color:orange;
        font-size: 55px;
    }
    cursor: pointer;


`
const ConteinerFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TitleFooter = styled.div ` 
    margin-top: 35px;
    color: #7079F8;
    font-size: 13px;
    cursor: pointer;
`
const Emoji = styled.div`
    width: 80%;
    margin-top: 35px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
    background-color: #EBEBEB;

    -webkit-transform: ${(props) => props.scaling ? 'scale(1.2)': 'scale(1)'};
    transform: ${(props) => props.scaling ? 'scale(1.2)': 'scale(1)'};
    transition: all 1s;

    :hover{
        cursor: pointer;
    }
`

const Title = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #6D64F8;
    margin-top: 20px;
`;

const SubTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: gray;
    cursor:pointer;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const SectionTitle = styled.div`
    margin: 30px 0 10px 0;
`;

const Emotions = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: grey;
`;
const Posts = styled.div`
    width: 100%;
`;

const Conteiner = styled.div`
    display: flex;
`
const DayEmotions = styled.div` 
    width: 400px;
    height: 470px;
    background-color: #B9DBE1;
    border-radius: 10px;
    padding: 35px 15px;
    
`
const TitleTimeline = styled.div` 
    width: 100px;
    color: yellow;
    font-size: 55px;
    font-weight: 700;
    p {
        display: inline;
        color: orange;
        font-size: 25px;
    }
    
`