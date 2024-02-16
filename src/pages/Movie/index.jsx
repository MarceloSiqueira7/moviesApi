import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import MovieContainer from './styles';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const searchTheMovie = `${moviesURL}${id}?${apiKey}`;
    getMovie(searchTheMovie);
  }, []);

  return (
    <>
      {movie && (
      <MovieContainer>
        <div className="info-image-movie">
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
        </div>
        <div className="info-movie-container">
          <h1 className="title-movie">{movie.title}</h1>
          <p className="about-movie">{movie.overview}</p>
          <div className="genres-container">
            <h3>Categorias:</h3>
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
          <div className="data-movie">
            <h3>Data de Lançamento:</h3>
            <span>{movie.release_date}</span>
          </div>
          <div className="companies-movie-container">
            <h3>Produzido por: </h3>
            <div className="companies-movie">
              {movie.production_companies.map((companies) => (
                <a
                  key={companies.id}
                  className="companie"
                  href={`https://www.google.com/search?q=${companies.name}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {companies.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </MovieContainer>
      )}
    </>
  );
}

export default Movie;
