import axios from "axios"

export const apiKey = '89246dbb7ac3ddd89161b16eff965369'
export const baseUrl = 'https://api.themoviedb.org/3'

export const baseImgUrl = 'https://image.tmdb.org/t/p/w300'

export const getTrendingMediaList = async () => {
    const trending = await axios.get(`${baseUrl}/trending/all/week?api_key=${apiKey}&page=1`)
    return trending.data.results
}

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&page=1`)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/keyword?query=${q}&api_key=${apiKey}&page1`)
    return search.data.results
}

export const getSeriesList = async () => {
    const series = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}&page=1`)
    return series.data.results
}