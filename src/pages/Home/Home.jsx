import { getTranding } from 'api/getFilms';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trandingArr, setTrandingArr] = useState([]);

  useEffect(() => {
    getTranding()
      .then(data => {
        setTrandingArr(data.results);
        console.log(data.results);
        //  if (!resp.ok)
        //  throw new Error('Something went wrong')
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Tranding Today</h1>
      <ul>
        {trandingArr.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
