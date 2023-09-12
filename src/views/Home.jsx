import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const HomeStyle = styled.main`
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const HeaderSectionStyle = styled.section`
  color: #0046c0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  gap: 16px;
  background: rgba(32, 173, 252, 0.2);
  height: 85vh;
  max-height: 900px;

  & > .header-section-box {
    padding: 13.5px 31.97px 14.5px 34px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 65%;
  }
  & > .header-section-background {
    background-image: url('./src/assets/background-header.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > .header-section-box {
      max-width: 85%;
    }
    & > .header-section-background {
      display: none;
    }
  }
`;

const HeaderSection = () => {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate('/login');
  }

  return (
    <HeaderSectionStyle as="section">
      <div className="header-section-box">
        <h1>
          Faça sua vistoria agora. <br />
          Online, rápido e fácil.
        </h1>
        <p>
          Mais do que um seguro para bicicleta, uma solução completa que oferece
          proteção e serviços para você se aventurar sem medo.
        </p>
        <Button
          label="Fazer vistoria"
          variant="elevated"
          onClick={goToLoginPage}
        />
      </div>
      <div className="header-section-background" />
    </HeaderSectionStyle>
  );
};

export default function Home() {
  return (
    <HomeStyle as="main">
      <HeaderSection></HeaderSection>
    </HomeStyle>
  );
}
