import axios from "axios";
import { apiKey } from '../constants';

//endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMovieEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMovieEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMovieEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

const movieDetailsEndPoints = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoints = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMovieEnpoints = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const personDetails = id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMovie = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;
// https://api.themoviedb.org/3/person/person_id

// https://api.themoviedb.org/3/search/movie
const searchMovie = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

export const img500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const img342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const img185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

export const fallbackMovieUrl = require('../assets/falback.png');
export const fallbackPersonurl = require('../assets/person.png');

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        // console.log("error", error);
        return {}
    }
}

export const fetchTrendingMovie = () => {
    return apiCall(trendingMovieEndpoint);
}

export const fetchUpcomingMovie = () => {
    return apiCall(upcomingMovieEndpoint);
}

export const fetchTopRatedMovie = () => {
    return apiCall(topRatedMovieEndpoint);
}

export const fetchMovieDetails = id => {
    return apiCall(movieDetailsEndPoints(id));
}

export const fetchMovieCredits = id => {
    return apiCall(movieCreditsEndpoints(id));
}

export const fetchSimilarMovie = id => {
    return apiCall(similarMovieEnpoints(id));
}

export const fetchPersonDetails = id => {
    return apiCall(personDetails(id));
}

export const fetchPersonMovies = id => {
    return apiCall(personMovie(id));
}

export const fetchSearchMovie = (params) => {
    return apiCall(searchMovie, params);
}