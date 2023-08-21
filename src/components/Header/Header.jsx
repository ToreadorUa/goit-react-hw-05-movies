import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  </div>
);

export default Header;
