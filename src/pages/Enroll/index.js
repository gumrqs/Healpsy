import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';
import paciente from '../../assets/images/paciente.png';
import psy from '../../assets/images/psy.png';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label, ConteinerImg, Line0 } from '../../components/Auth';
import Link from '../../components/Link';

import useSignUp from '../../hooks/api/useSignUp';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginPacient, setLoginPacient] = useState(false);
  const [loginPsy, setLoginPsy] = useState(false);
  const [loginBackground, setLoginBackground] = useState('#F1DF37');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        console.log(email, password, 'aqui');
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout background={loginBackground}>
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
          setLoginPsy(true);
          setLoginBackground('#BFBFBF');
        }} src={psy}/>
      </ConteinerImg>
      {(loginPacient || loginPsy) ?   
        <Row>
          <Label>Inscrição</Label>
          <form onSubmit={submit}>
            <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
            <Input label="Repita sua senha" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>Inscrever</Button>
          </form>
          <Link to="/sign-in">Já está inscrito? Faça login</Link>
        </Row>
        :
        <></>
      };
    </AuthLayout>
  );
}
