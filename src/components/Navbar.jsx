import styled from 'styled-components';
import Button from './Button';
import { Link } from "react-router-dom";

const NavbarStyle = styled.header`
  display: flex;
  padding: 13.5px 31.97px 14.5px 34px;
  justify-content: space-between; /* Para distribuir os elementos horizontalmente */
  align-items: center;
`;

const Logo = styled.div`
  /* Estilos para a logo à esquerda */
`;

const Navigation = styled.nav`
  /* Estilos para os links de navegação ao centro */
`;

const NavigationList = styled.ul`
  /* Estilos para os links de navegação ao centro */
`;


export default function Navbar() {
  return (
    <NavbarStyle as="footer">
      <Logo>logo</Logo>
      <Navigation>
        
        <NavigationList>
          <li>
            <Link to="/">Passo a Passo </Link>
          </li>
          <li>
            <Link to="/login">Seguro Porto Bike</Link>
          </li>
          <li>
            <Link to="/vistoria/1">Equipe</Link>
          </li>
        </NavigationList>

      </Navigation>
      <Button label="Vistoria" variant="outlined" />
    </NavbarStyle>
  );
}
