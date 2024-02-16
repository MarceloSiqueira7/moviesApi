import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardMovie from '../../components/CardMovie';
import SearchContainer from './styles';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return (
    <SearchContainer>
      <div className="title-info">
        <span>{movies.length}</span>
        <span>Resultados encontrados para:</span>
        <span className="title-query">{query}</span>
      </div>

      <section className="moives-container">
        {movies.length === 0 && <p>Carregando...</p>}

        {movies.length > 0 && movies.map((movie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
          />
        ))}
      </section>
    </SearchContainer>
  );
}

export default Search;
