import { getMovieById } from 'api/getFilms';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const BASE_URL_IMG = 'http://image.tmdb.org/t/p';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();

  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovieData(data);
    });
  }, [movieId]);

  if (movieData) {
    const { title, overview, poster_path, vote_average, genres } = movieData;
    const movieGenresArr = genres.map(genre => genre.name);
    return (
      <div>
        <button> Go Back</button>
        <img src={BASE_URL_IMG + '/w300' + poster_path} alt="movie_img" />
        <h1>{movieData.title}</h1>
        <p>User score {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{movieGenresArr.join('  ')}</p>

        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to={`/movies/${movieId}/cast`}> Cast </Link>
            </li>
            <li>
              <Link to={`/movies/${movieId}/reviews`}> Reviews </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    );
  }
};

export default MovieDetails;
