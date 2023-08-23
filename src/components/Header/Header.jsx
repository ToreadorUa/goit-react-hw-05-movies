import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from '../../images/logo.png';

const Header = () => (
  <HeaderCont>
    <Link to="/">
      <img src={logo} alt="logo" width="60" />
    </Link>
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Nav>
  </HeaderCont>
);

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #551a8b;
  &.active {
    color: #fffb35;
  }
`;

const HeaderCont = styled.div`
  display: flex;
  gap: 20px;
  background-color: #c7c7c5;
  padding-left: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export default Header;
