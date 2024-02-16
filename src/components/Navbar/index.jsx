import { Link, useNavigate } from 'react-router-dom';
import { Search, Clapperboard } from 'lucide-react';
import { useState } from 'react';
import NavBarContainer from './styles';

function Navbar() {
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
        </Link>
        MoviesLib
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um Filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit"><Search /></button>
      </form>
    </NavBarContainer>
  );
}

export default Navbar;
