import { Slide } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import PatientOverview from './PatientOverview';
import SearchSection from './SearchSection';


export default function PsyDashboard() {
    const [search, setSearch] = useState('');
    const [patientData, setPatientData] = useState({
        name: "Bilu Tetéia",
        age: '24 anos',
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
        ]
        
    })
    console.log(search);

    return (
        <Background>
            <LeftSection>
                <SearchSection search={search} setSearch={setSearch}/>
            </LeftSection>
            {
                search !== '' ? 
                    <>    
                        <Slide  timeout={2000} direction="right" in={search} mountOnEnter unmountOnExit>
                            <RightSection>
                                <PatientOverview patientData={patientData}/>
                            </RightSection>
                        </Slide>
                    </>
                    :
                    <></>
            }
        </Background>
    );
}


const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #c1bef7;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LeftSection = styled.section`
    width: 40%;
    height: 100%;
    background-color: #c1bef7;
    margin: 0 10px;
`;

const RightSection = styled.section`
    ::-webkit-scrollbar {
        width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #7079F8; 
        border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #C1BEF7; 
    }
    overflow-y: scroll;
    width: 50%;
    height: 80%;
    background-color: aliceblue;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    margin-left: 0 10px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
