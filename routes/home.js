import axios from 'axios'
import express from 'express'
const app = express.Router()
const baseUrl = 'https://api.themoviedb.org/3'

app.get('/', (req, res, next) => {
	axios
		.all([
			axios.get(`${baseUrl}/trending/movie/day${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}`),
			axios.get(`${baseUrl}/movie/now_playing${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}`),
			axios.get(
				`${baseUrl}/movie/top_rated${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}&page=${Math.floor(
					Math.random() * 100
				)}`
			),
			axios.get(`${baseUrl}/trending/tv/day${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}`),
			axios.get(
				`${baseUrl}/tv/top_rated${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}&page=${Math.floor(
					Math.random() * 100
				)}`
			),
			axios.get(`${baseUrl}/movie/upcoming${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}`),
		])
		.then(
			axios.spread(
				(trendm, nowPlaying, top_rated, trandtv, topRatedTv, upcoming) => {
					res.status(200).json({
						success: true,
						trandingMovies: trendm.data.results,
						nowPlayingMovies: nowPlaying.data.results,
						topRatedMovies: top_rated.data.results,
						trandingtv: trandtv.data.results,
						topRatedTv: topRatedTv.data.results,
						upcoming: upcoming.data.results,
					})
				}
			)
		)
		.catch((err) => next(err))
})

export default app
