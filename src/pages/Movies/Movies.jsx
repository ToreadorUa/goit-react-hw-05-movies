import { getFindMovie } from 'api/getFilms';
//import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [dataQuery, setDataQuery] = useState([]);

  //   useEffect(() => {
  //     if (query !== '') {
  //       //   const fetchData = async () => {
  //       //     const respData = await getFindMovie(query);
  //       //     setDataQuery(respData);
  //       //   };
  //     }
  //     // fetchData();
  //   }, [query]);
  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const respData = await getFindMovie(query);
    setDataQuery(respData.results);
  };
  console.log(dataQuery);
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="search">Find movie:</label>
        <input type="text" id="search" onChange={onChange} />
      </form>

      {!!dataQuery.length && (
        <ul>
          {dataQuery.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
