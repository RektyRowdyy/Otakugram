import express from 'express'
import routes from './routes/routes.mjs'

const app = express();

app.use(express.json());

//add all the routes here as a middleware.
app.use(routes);

export { app }