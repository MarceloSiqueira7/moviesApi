import { Link } from 'react-router-dom';

import { Star } from 'lucide-react';
import CardMovieContainer from './styles';

const imageUrl = import.meta.env.VITE_IMG;

function CardMovie({ movie, showLink = true }) {
  return (
    <CardMovieContainer>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />

      <div className="info-movie">
        <h2 className="title">{movie.title}</h2>

        <p className="vote-movie">
          <Star size={18} />
          {parseFloat(movie.vote_average.toFixed(1))}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`} className="link-movie">Detalhes</Link>}
      </div>
    </CardMovieContainer>
  );
}

export default CardMovie;
