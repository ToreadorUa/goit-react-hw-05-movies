const BASE_URL ='https://api.themoviedb.org/3/'
const API_KEY = '92d9d3b4ee00fe21e96f6da37ec5a945'


// trending  - https://api.themoviedb.org/3/trending/movie/day?api_key=###
//https://api.themoviedb.org/3/search/movie?query=king&include_adult=false&language=en-US&page=1&api_key=92d9d3b4ee00fe21e96f6da37ec5a945
//https://api.themoviedb.org/3/movie/{movie_id}/credits

export const getTranding = () => {
    return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
         .then(resp => { 
             if (!resp.ok)
                 throw new Error('Something went wrong...');
             return resp.json();
         } )
}

export const getMovieById = (movieId) => {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
        .then(resp => {
            if (!resp.ok) 
                throw new Error('Smth went wrong')
            return resp.json();
    })
}

export const getMovieCredits = async (movieId) => {
    const resp = await fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
    if (!resp.ok) throw new Error('Smth went wrong')
    return resp.json();
}

export const getMovieReview = async (movieId) => {
    const resp = await fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    if (!resp.ok) throw new Error('Smth went wrong')
    return resp.json();
}

//https://api.themoviedb.org/3/search/movie?query=bat&language=en-US&page=1&api_key=92d9d3b4ee00fe21e96f6da37ec5a945
export const getFindMovie = async (q) => {
    const resp = await fetch(`${BASE_URL}search/movie?query=${q}&api_key=${API_KEY}&language=en-US&page=1`);
    if (!resp.ok) { throw new Error('Smth went wrong') }
    return resp.json();
}
