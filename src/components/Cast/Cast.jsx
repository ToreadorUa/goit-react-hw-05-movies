import { getMovieCredits } from 'api/getFilms';
import { BASE_URL_IMG } from 'pages/MovieDetails/MovieDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imgPlug from '../../images/placeholder.png';
import { CastGallery, CastImg } from './Cast.styled';

const Cast = () => {
  const [castData, setCastData] = useState([]);

  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const dataResp = await getMovieCredits(movieId);

        setCastData(dataResp.cast);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCast();
  }, [movieId]);
  console.log(castData);
  if (castData.length > 0) {
    return (
      <div>
        <CastGallery>
          {castData.map(({ name, character, profile_path, id }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <CastImg
                    src={BASE_URL_IMG + '/w185' + profile_path}
                    alt={name}
                  />
                ) : (
                  <CastImg src={imgPlug} alt="NoPhoto" width="185" />
                )}
                <p>
                  <b>{name}</b> as <br />
                  <i>{character}</i>
                </p>
              </li>
            );
          })}
        </CastGallery>
      </div>
    );
  } else {
    return <div>There are not data for cast of this movie</div>;
  }
};

export default Cast;
