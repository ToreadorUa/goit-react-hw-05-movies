import { getMovieReview } from 'api/getFilms';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [dataReview, setDataReview] = useState();
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const dataResp = await getMovieReview(movieId);
        setDataReview(dataResp.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, [movieId]);
  console.log(dataReview);
  if (dataReview) {
    return (
      <div>
        <ul>
          {dataReview.map(({ id, author, content, created_at, updated_at }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
                <div>
                  <p>
                    <i>Created at: </i>
                    <b>{new Date(created_at).toLocaleString()}</b>,{' '}
                    <i>Updated at: </i>
                    <b>{new Date(updated_at).toLocaleString()}</b>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div>There are not reviews for this movie</div>;
  }
};
