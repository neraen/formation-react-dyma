import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: "https://api.themoviedb.org/4"
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTFlZDE5MjM3Yjg5MDEyODk0Y2JhMmE0N2QzYjg2NCIsInN1YiI6IjYyMzU5NjE0MWRhN2E2MDAxZDYxYjJjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fOBCUVVEM5P7QDq8pf0ChBwhfKZhw9bFQmDD6dfCH6M";
    return req;
})

export default apiMovie

export const apiMovieMap = movie => ({
    img: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
    title: movie.title,
    details: `${movie.release_date} | ${movie.vote_average}/10 | ${movie.vote_count}`,
    description: movie.overview
})