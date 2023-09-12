import styled from 'styled-components';
import Button from './Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoHorizontal from '../assets/logo-horizontal.svg';

const NavbarStyle = styled.header`
  display: flex;
  padding: 13.5px 31.97px 14.5px 34px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
  & > a {
    display: flex;
    align-items: center;
  }
`;

const Navigation = styled.nav`
  & > ul {
    background-color: #fff;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 36px;
  }
  & > li {
    list-style-type: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > ul {
      display: none;
    }
  }
`;

export default function Navbar() {
  const isHomePage = useLocation().pathname === '/';
  const isUserLogged = useLocation().pathname.includes('/vistoria'); //Integrar dados logados

  const navigate = useNavigate();

  function goToLoginPage() {
    navigate('/login');
  }

  function logout() {
    console.info('Integrar logout');
    navigate('/login');
  }

  return (
    <NavbarStyle as="header">
      <Logo>
        <Link to="/">
          <img
            src={logoHorizontal}
            alt="Logo com a escrita Porto em azul e fundo transparente "
          />
        </Link>
      </Logo>
      {isHomePage && (
        <Navigation>
          <ul>
            <li>
              <Link to="#passo-a-passo">Passo a Passo </Link>
            </li>
            <li>
              <Link to="#seguro-bike">Seguro Porto Bike</Link>
            </li>
            <li>
              <Link to="#equipe">Equipe</Link>
            </li>
          </ul>
        </Navigation>
      )}
      <Button
        label={isUserLogged ? 'Sair' : 'Vistoria'}
        variant={isUserLogged ? 'outlinedError' : 'outlined'}
        onClick={isUserLogged ? logout : goToLoginPage}
      />
    </NavbarStyle>
  );
}
