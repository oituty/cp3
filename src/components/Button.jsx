import styled from 'styled-components';

const ButtonStyle = styled.button`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.4px;
  display: flex;
  padding: 12px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  max-width: 400px;
`;

const ElevatedButton = styled(ButtonStyle)`
  color: #fff;
  border: 1px solid #0046c0;
  background: #0046c0;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #0051dd;
  }
`;

const OutlinedButton = styled(ButtonStyle)`
  background-color: transparent;
  border: 1px solid #0046c0;
  color: #0046c0;

  &:hover {
    background-color: #0046c0;
    color: #fff;
  }
`;

const OutlinedErrorButton = styled(ButtonStyle)`
  background-color: transparent;
  border: 1px solid #fd6157;
  color: #fd6157;

  &:hover {
    background-color: #fd6157;
    color: #fff;
    border: 1px solid #fd6157;
  }
`;

const ButtonStyleByVariant = {
  elevated: ElevatedButton,
  outlined: OutlinedButton,
  outlinedError: OutlinedErrorButton,
};

export default function Button({ onClick, label, variant }) {
  const RenderedButton = ButtonStyleByVariant[variant];

  return (
    <RenderedButton as="button" onClick={onClick}>
      {label}
    </RenderedButton>
  );
}
