
import styled from 'styled-components';
export default function Post({ post }){
    const { date } = post;

    return(
        <PostCard>
            <span>HEaLPsy!</span>
            <span>{date}</span>
        </PostCard>
    );
}

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