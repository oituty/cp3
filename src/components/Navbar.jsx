import styled from 'styled-components';
import Button from './Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoHorizontal from '../assets/logo-horizontal.svg';

const NavbarStyle = styled.header`
  display: flex;
  padding: 13px 34px 13px 34px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  min-height: 40px;
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

  const routes = [
    { hash: "#passo-a-passo", label: "Passo a Passo" },
    { hash: "#seguro-bike", label: "Seguro Porto Bike" },
    { hash: "#equipe", label: "Equipe" },
  ];
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate("/login");
  }

  function logout() {
    console.info("Integrar logout");
    navigate("/login");
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
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.hash}>{route.label} </Link>
              </li>
            ))}
          </ul>
        </Navigation>
      )}
      {(isHomePage || isUserLogged) && (
        <Button
          label={isUserLogged ? "Sair" : "Vistoria"}
          variant={isUserLogged ? "outlinedError" : "outlined"}
          onClick={isUserLogged ? logout : goToLoginPage}
        />
      )}
    </NavbarStyle>
  );
}
