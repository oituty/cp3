import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const SurveyStyle = styled.main`
  color: #0046c0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
  height: 85vh;
  max-height: 900px;

  & > .survey-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    background: rgba(32, 173, 252, 0.2);
    height: 100%;
    justify-content: center;

    & > button {
      width: 100%;
      margin-top: 16px;
    }
  }
  & > .survey-chat {
    background: rgba(210, 239, 254, 0.20);
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > .survey-box {
      max-width: 100%;
    }
  }
`;

const steps = [
  {
    id: '1',
    title: 'Dados da bicicleta',
    description: 'Vamos pegar algumas informações da sua bicicleta',
  },
  {
    id: '2',
    title: 'Fotos da bike',
    description: 'Vamos coletar algumas fotos da sua bicicleta',
  },
  {
    id: '3',
    title: 'Análise usuário',
    description:
      'Vamos coletar algumas informações suas para finalizar a vistoria',
  },
];

export default function Survey() {
  const step = Number(useParams().step);
  const currentStep = steps[step - 1];
  const navigate = useNavigate();

  function goToNextStep() {
    if (!step || step > steps.length - 1) {
      throw Error("Etapa não existe");
    }
    navigate(`/vistoria/${step + 1}`)
  }

  return (
    <SurveyStyle as="section">
      <div className="survey-box">
        <h1>{`${step} - ${currentStep.title}`}</h1>
        <p>{currentStep.description}</p>
        <Button variant="elevated" label="Próxima etapa" onClick={goToNextStep}></Button>
      </div>
      <div className="survey-chat" />
    </SurveyStyle>
  );
}
