import express from 'express'
import axios from 'axios'
const app = express.Router()
const baseUrl = 'https://api.themoviedb.org/3'

app.get('/movie', (req, res, next) => {
	axios
		.get(
			`${baseUrl}/discover/movie${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}&include_adult=true&language=en-US&sort_by=popularity.desc&with_genres=${req.query.id}&page=${req.query.page}`
		)
		.then((data) => {
			res.status(200).json({
				success: true,
				data: data.data.results,
				total_pages: data.data.total_pages,
				total_results: data.data.total_results,
			})
		})
		.catch((err) => next(err))
})
app.get('/tv', (req, res, next) => {
	axios
		.get(
			`${baseUrl}/discover/tv${process.env.b54760b5d03ffc4ebc273f0b3d5ad9f7}&include_adult=true&language=en-US&sort_by=popularity.desc&with_genres=${req.query.id}&page=${req.query.page}`
		)
		.then((data) => {
			res.status(200).json({
				success: true,
				data: data.data.results,
				total_pages: data.data.total_pages,
				total_results: data.data.total_results,
			})
		})
		.catch((err) => next(err))
})
export default app
