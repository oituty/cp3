import styled from 'styled-components';


const ButtonStyle = styled.button`
color: #0046C0;
text-align: center;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
letter-spacing: 0.4px;
display: flex;
padding: 6px 13.03px 6px 13px;
align-items: flex-start;
border-radius: 4px;
cursor: pointer;

  &:hover {
    background-color: #0046C0;
  }
`;

const ElevatedButton = styled(ButtonStyle)`
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const OutlinedButton = styled(ButtonStyle)`
  background-color: transparent;
  border: 1px solid #0046C0;
  color: #0046C0;

  &:hover {
    background-color: #0046C0;
    color: #fff;
  }
`;

export default function Button({ onClick, label, variant }) {
  const RenderedButton =
    variant === 'elevated'
      ? ElevatedButton
      : variant === 'outlined'
      ? OutlinedButton
      : ButtonStyle;

  return (
    <RenderedButton as="button" onClick={onClick}>
      {label}
    </RenderedButton>
  );
}
