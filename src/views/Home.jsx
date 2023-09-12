import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import cyclistBackground from '../assets/cyclist-background.png';
import step1Background from '../assets/step-1-background.png';
import step2Background from '../assets/step-2-background.png';
import step3Background from '../assets/step-3-background.png';
import backgroundHeader from '../assets/background-header.png';
import backgroundSurvey from '../assets/background-survey.png';

const HomeStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSectionStyle = styled.section`
  color: #0046c0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
  gap: 16px;
  background: rgba(32, 173, 252, 0.2);
  height: 85vh;
  max-height: 900px;

  & > .header-section-box {
    padding: 13px 34px 13px 34px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 65%;
  }
  & > .header-section-background {
    background-image: url(${backgroundHeader});
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

const StepByStepStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  background: #fff;
  text-align: center;
  padding: 100px 34px;
  max-width: 1000px;

  & > .step-by-step-section-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;

    & > h2 {
      color: #0046c0;
    }
  }

  & > .step-by-step-section-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    & > .card {
      height: 400px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 16px;
      padding: 16px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
      align-content: flex-end;

      & > .title {
        background-color: #0046c0;
        color: #fff;
      }
      & > .description {
        padding: 16px;
        background-color: #fff;
        border-radius: 0 0 16px 16px;
      }
    }
  }
`;

const SurveyStyle = styled.section`
  width: 100%;
  background-image: url(${backgroundSurvey});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > .survey-box {
    color: #fff;
    padding: 100px 34px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 300px;
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

const StepByStepSection = () => {
  const cards = [
    {
      backgroundImage: step1Background,
      title: 'Cadastro',
      description:
        'Cadastre os dados da bicicleta, com informações da marca, mobelo, cores e etc',
    },
    {
      backgroundImage: step2Background,
      title: 'Fotos',
      description:
        'Tire fotos da bicicleta para que nosso sistema de reconhecimento comprove os dados cadastrados',
    },
    {
      backgroundImage: step3Background,
      title: 'Análise',
      description:
        'Os dados serão analisados e salvos no nosso sistema para aprovação',
    },
  ];
  return (
    <StepByStepStyle as="section" id="passo-a-passo">
      <div className="step-by-step-section-box">
        <h2>Como fazer sua vistoria online?</h2>
        <p>
          Entenda como funciona as etapas do processo de vistoria online da sua
          bike.
        </p>
      </div>
      <div className="step-by-step-section-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
          >
            <h3 className="title">{card.title}</h3>
            <p className="description">{card.description}</p>
          </div>
        ))}
      </div>
    </StepByStepStyle>
  );
};

const SurveySection = () => {
  return (
    <SurveyStyle as="section">
      <div className="survey-box">
        <h2>Não tem seguro bike ainda?</h2>
        <p>Acesse o site Seguro Porto Bike e faça sua cotação online</p>
        <Button label="Acessar Seguro Porto" variant="elevated" />
      </div>
    </SurveyStyle>
  );
};

export default function Home() {
  return (
    <HomeStyle as="main">
      <HeaderSection />
      <StepByStepSection />
      <SurveySection />
      <img
        src={cyclistBackground}
        alt="Imagem de um ciclista andando de bicicleta"
      />
    </HomeStyle>
  );
}
