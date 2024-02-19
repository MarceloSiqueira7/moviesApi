import { Link, useNavigate } from 'react-router-dom';
import { Search, Clapperboard, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import NavBarContainer from './styles';

function Navbar({ onToggleTheme, selectedTheme }) {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <NavBarContainer>
      <h2>
        <Link to="/">
          <Clapperboard size={38} className="icon-Title" />
          MoviesLib
        </Link>
      </h2>
      <div className="container-form">
        <div className="container-toggle-button">
          <button
            type="button"
            onClick={onToggleTheme}
          >
            {selectedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} color="#FFF" />}
          </button>
          <span />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um Filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <button type="submit"><Search /></button>
        </form>
      </div>

    </NavBarContainer>
  );
}

export default Navbar;
