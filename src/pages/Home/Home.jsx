import { getTranding } from 'api/getFilms';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImageGallery } from './Home.styled';

const Home = () => {
  const [trandingArr, setTrandingArr] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTranding()
      .then(data => {
        setTrandingArr(data.results);
        console.log(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Tranding Today</h1>
      <ImageGallery>
        {trandingArr.map(({ id, original_title, release_date }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title} ({release_date.substr(0, 4)})
            </Link>
          </li>
        ))}
      </ImageGallery>
    </>
  );
};

export default Home;
