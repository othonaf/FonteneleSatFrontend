import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginDiv, InputText, DivInput, Button, DivLoginInt, TituloLogin, BotaoLoginDiv } from '../styled'

const api = axios.create({
  baseURL: 'https://fontenele-sat-backend.vercel.app',
});

const Login = () => {
  const [nome, setUsername] = useState('');
  const [senha, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/api/login', { nome, senha });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/Orcamento');
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <LoginDiv>
      <DivLoginInt>
        <TituloLogin>Login</TituloLogin>
        <DivInput>
          <InputText
            type="text"
            placeholder="Nome de usuário"
            value={nome}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DivInput>
        <DivInput>
          <InputText
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DivInput>
        {error && <p>{error}</p>}
        <BotaoLoginDiv>
          <Button onClick={handleLogin}>Entrar</Button>
        </BotaoLoginDiv>

      </DivLoginInt>
    </LoginDiv>
  );
};

export default Login;