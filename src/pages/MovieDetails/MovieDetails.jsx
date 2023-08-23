import { getMovieById } from 'api/getFilms';
import { Loader } from 'components/Loader';
import { useRef, Suspense, useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import btnBack from '../../images/Back-Button1.png';
import {
  AddList,
  MovieContainer,
  MovieInfoCont,
  StyledLi,
  TitleAdd,
} from './MovieDetails.styled';
import { StyledLink } from 'components/Header/Header';

export const BASE_URL_IMG = 'http://image.tmdb.org/t/p';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();

  const params = useParams();
  const movieId = params.movieId;
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovieData(data);
    });
  }, [movieId]);

  if (movieData) {
    const { title, overview, poster_path, vote_average, genres, release_date } =
      movieData;
    const movieGenresArr = genres.map(genre => genre.name);
    return (
      <div>
        <MovieContainer>
          <img src={BASE_URL_IMG + '/w300' + poster_path} alt="movie_img" />
          <MovieInfoCont>
            <h1>
              {title} ({release_date.substr(0, 4)})
            </h1>
            <p>User score {vote_average}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p style={{ fontStyle: 'oblique' }}>{movieGenresArr.join('  ')}</p>
            <Link to={backLocation.current}>
              <img src={btnBack} alt="back" width="60" />
            </Link>
          </MovieInfoCont>
        </MovieContainer>

        <div>
          <TitleAdd>Additional information</TitleAdd>
          <AddList>
            <StyledLi>
              <StyledLink to={`/movies/${movieId}/cast`}> Cast </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
            </StyledLi>
          </AddList>
        </div>
        <div>
          <Suspense
            fallback={
              <Loader>
                <Rings />
              </Loader>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
