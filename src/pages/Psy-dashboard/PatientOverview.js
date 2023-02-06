import styled from "styled-components";

export default function PatientOverview({ patientData }){
    const { name, age, emotions, posts } = patientData;
    return(
        <>
            <Title>
                Prontuário de {name}
            </Title>
            <Age>
                {age}
            </Age>
            <SectionTitle>
                Média das emoções:
            </SectionTitle>
            <Emotions>
            {
                emotions.map((emotion) => {
                    return <Emotion emotion={emotion}/>
                })
            }
            </Emotions>
            <Posts>
                <SectionTitle>
                    HEaLPsies de {name}:
                </SectionTitle>
                {
                    posts.map((post) => {
                        return <Post post={post}/>
                    })
                }
            </Posts>
        </>
    );
}

function Emotion({ emotion }){
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

function Post({ post }){
    const { date } = post;

    return(
        <PostCard>
            <span>HEaLPsy!</span>
            <span>{date}</span>
        </PostCard>
    );
}

const Title = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #6D64F8;

    margin-top: 20px;
`;

const Age = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: gray;

    margin-top: 10px;
`;

const SectionTitle = styled.div`
    margin: 30px 0 10px 0;

`;

const Emotions = styled.div`
    width: 100%;
    padding: 0 40px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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

const EmotionTitle = styled.div`
    color: gray;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin-top: 5px;
`;

const Posts = styled.div`
    width: 100%;
`;

const PostCard = styled.div`
    width: 100%;
    height: 60px;
    background-color: #6D64F8;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;

    color: white;
    font-family: 'Roboto', sans-serif;
    
    span:first-child{
        font-weight: 700;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover{
        filter: brightness(1.2);
        cursor: pointer;
    }
`


