import styled from 'styled-components';
import logoHorizontalFooter from '../assets/logo-horizontal-footer.svg';

const FooterStyle = styled.footer`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  & > img {
    width: 143px;
  }
`;

export default function Footer() {
  return (
    <FooterStyle as="footer">
      <Logo>
          <img
            src={logoHorizontalFooter}
            alt="Logo com a escrita Porto Seguro em azul e preto com fundo transparente"
          />
      </Logo>
      <span> © 2023 Todos os direitos reservados</span>
    </FooterStyle>
  );
}
