import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import paciente from '../../assets/images/paciente.png';
import psy from '../../assets/images/psy.png';

import UserContext from '../../contexts/UserContext';
import { Row, Title, Label, ConteinerImg, Line0 } from '../../components/Auth';

import useSignIn from '../../hooks/api/useSignIn';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginPacient, setLoginPacient] = useState(false);
  const [loginPsy, setLoginPsy] = useState(false);
  const [loginBackground, setLoginBackground] = useState('#F1DF37');

  const { loadingSignIn, signIn } = useSignIn();

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      localStorage.setItem('driventUser', JSON.stringify(userData));
      setUser(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  } 

  return (
    <>
      <AuthLayout backgroundCont={loginBackground}>
        <Row>
          <Title>Escolha sua forma de login</Title>
        </Row>
        <ConteinerImg>
          <img onClick={() => {
            setLoginPacient(true);
            setLoginBackground('#6579F9');
          }} src={paciente} />
          <Line0></Line0>
          <img onClick={() => {
            setLoginPacient(true);
            setLoginBackground('#BFBFBF');
          }} src={psy}/>
        </ConteinerImg>

        {(loginPacient || loginPsy) ? 
          <Row>
            <Label></Label>
            <form onSubmit={submit}>
              <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
              <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
              <Button type="submit" color="inherit" fullWidth disabled={loadingSignIn}>Entrar</Button>
            </form>
            <Link to="/enroll">Não possui login? Inscreva-se</Link>
          </Row>
          :
          <></>
        };
      </AuthLayout>
    </>
  );
}
