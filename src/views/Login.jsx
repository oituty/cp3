import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import backgroundLogin from '../assets/background-login.png';

const LoginStyle = styled.main`
  color: #0046c0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
  gap: 16px;
  background: rgba(32, 173, 252, 0.2);
  height: 85vh;
  max-height: 900px;

  & > .login-box {
    padding: 13px 34px 13px 34px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    & > button {
      width: 100%;
    }
  }
  & > .login-background {
    background-image: url(${backgroundLogin});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > .login-box {
      max-width: 85%;
      
    }
    & > .login-background {
      display: none;
    }
  }
`;

export default function Login() {
  const navigate = useNavigate();

  const [inspectionCode, setInspectionCode] = useState('');
  const [password, setPassword] = useState('');

  // Event handlers to update states
  const handleInspectionCodeChange = (event) => {
    setInspectionCode(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    console.log('Código de Vistoria:', inspectionCode);
    console.log('Senha:', password);

    setInspectionCode('');
    setPassword('');
    navigate('/vistoria/1');
  };

  return (
    <LoginStyle as="section">
      <form className="login-box">
        <h1>Iniciar vistoria</h1>

        <div className="inputField">
          <label htmlFor="codigoVistoria">Código de Vistoria:</label>
          <input
            type="text"
            id="codigoVistoria"
            name="codigoVistoria"
            value={inspectionCode} placeholder='Digite o código de vistoria'
            onChange={handleInspectionCodeChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha" placeholder='Digite sua senha'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <Button
          type="submit"
          label="Entrar"
          variant="elevated"
          onClick={handleSubmit}
        />
      </form>
      <div className="login-background" />
    </LoginStyle>
  );
}
