
import styled from 'styled-components';

export default function Emotion({ emotion }){
    const { name, value } = emotion;
    return(
        <>
            <EmotionBox>
                <EmotionValue>
                    {value}
                </EmotionValue>
                <EmotionTitle>
                    {name}
                </EmotionTitle>
            </EmotionBox>
        </>
    );
}

const EmotionTitle = styled.div`
    color: gray;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-top: 5px;
`;

const EmotionBox = styled.div`
    width: 100px;
    height: 70px;
    border-radius: 10px;
    border: 1px solid #6D64F8;
    margin-top: 30px;
    margin: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover{
        filter: brightness(1.2);
        cursor: pointer;
    }
`;

const EmotionValue = styled.div`    
    color: #6D64F8;
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    margin-top: 5px;
`;