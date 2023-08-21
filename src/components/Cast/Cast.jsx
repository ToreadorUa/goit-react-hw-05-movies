import { getMovieCredits } from 'api/getFilms';
import { BASE_URL_IMG } from 'pages/MovieDetails/MovieDetails';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imgPlug from '../../images/placeholder.png';

export const Cast = () => {
  const [castData, setCastData] = useState();

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
  }, []);
  console.log(castData);
  if (castData) {
    return (
      <div>
        <ul>
          {castData.map(({ name, character, profile_path, id }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <img src={BASE_URL_IMG + '/w185' + profile_path} alt={name} />
                ) : (
                  <img src={imgPlug} alt="No photo" width="185" />
                )}
                <p>
                  {name} as {character}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
