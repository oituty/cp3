import styled from 'styled-components';
import Button from './Button';

const FooterStyle = styled.footer`
  display: flex;
  padding: 13.5px 31.97px 14.5px 34px;
  justify-content: space-between; /* Para distribuir os elementos horizontalmente */
  align-items: center;
`;

const Logo = styled.div`
  /* Estilos para a logo à esquerda */
`;

const NavigationLinks = styled.nav`
  /* Estilos para os links de navegação ao centro */
`;


export default function Footer() {
  return (
    <FooterStyle as="footer">
      <Logo>logo</Logo>
      <NavigationLinks>links</NavigationLinks>
      <Button label="Vistoria" variant="outlined"></Button>
    </FooterStyle>
  );
}
