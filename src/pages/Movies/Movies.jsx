import { getFindMovie } from 'api/getFilms';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { IconSearch, InputFind } from './Movies.styled';
import { ImageGallery } from 'pages/Home/Home.styled';

const Movies = () => {
  const [dataQuery, setDataQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  useEffect(() => {
    if (query !== '') {
      search(query);
    }
  }, []);

  const search = async () => {
    const respData = await getFindMovie(query);
    setDataQuery(respData.results);
  };
  console.log(dataQuery);
  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          search();
        }}
      >
        {/* <label htmlFor="search">Find movie:</label> */}
        <div style={{ position: 'relative' }}>
          <InputFind
            type="text"
            id="search"
            placeholder="Find movie..."
            onChange={e =>
              setSearchParams(
                e.target.value !== '' ? { query: e.target.value } : {}
              )
            }
          />
          <IconSearch onClick={search}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </IconSearch>
        </div>
      </form>

      {!!dataQuery.length && (
        <ImageGallery>
          {dataQuery.map(({ id, title, release_date }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title} ({release_date.substr(0, 4)})
                </Link>
              </li>
            );
          })}
        </ImageGallery>
      )}
    </div>
  );
};

export default Movies;
