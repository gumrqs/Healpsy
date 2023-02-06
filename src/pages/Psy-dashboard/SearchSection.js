import styled from 'styled-components';
import purpleImage from '../../assets/images/logo2.png';


export default function SearchSection({ search, setSearch }) {
  console.log(search);
  return (
    <Container>
        <PurpleImage src={purpleImage}/>
        <SearchInput 
            placeholder='Buscar paciente'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </Container>
  );
}


const Container = styled.div`  
    width: 100%;
    height: 100vh;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PurpleImage = styled.img`
    width: 200px;
`;

const SearchInput = styled.input`
    width: 300px;
    height: 35px;
    background-color: #9793ed;
    border-radius: 10px;
    border: none;
    box-shadow: inset 2px -3px 8px rgba(0, 0, 0, 0.2);
    margin-top: 15px;

    padding: 0 15px;
    color: white;
    outline: none;

    ::placeholder{
        color: white;
        font-size: 16px;
    }
`;