import axios from "axios";
import { apiKey } from '../constants';

//endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMovieEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMovieEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMovieEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

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
        console.log("error", error);
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