import { useState, useEffect } from 'react';

import HomeContainer from './styles';
import CardMovie from '../../components/CardMovie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <HomeContainer>
      <h2 className="title-home">Melhores Filmes</h2>

      <section className="moives-container">
        {topMovies.length === 0 && <p>Carregando...</p>}

        {topMovies.length > 0 && topMovies.map((movie) => (
          <CardMovie
            key={movie.id}
            movie={movie}
          />
        ))}
      </section>
    </HomeContainer>
  );
}

export default Home;
