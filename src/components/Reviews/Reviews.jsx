import { getMovieReview } from 'api/getFilms';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemReview, ListReview, NoResults } from './Reviews.styled';

export const Reviews = () => {
  const [dataReview, setDataReview] = useState([]);
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const dataResp = await getMovieReview(movieId);
        console.log(dataResp);
        setDataReview(dataResp.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, [movieId]);
  console.log(dataReview);
  if (dataReview.length > 0) {
    return (
      <div>
        <ListReview>
          {dataReview.map(
            ({ id, author, content, created_at, updated_at }, idx) => {
              return (
                <ItemReview
                  key={id}
                  style={{ background: idx % 2 === 0 ? '#ede5e5' : 'white' }}
                >
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
                </ItemReview>
              );
            }
          )}
        </ListReview>
      </div>
    );
  } else {
    return <NoResults>There are not reviews for this movie</NoResults>;
  }
};
