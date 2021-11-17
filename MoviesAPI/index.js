import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import './db'
import './seedData'

import genresRouter from './api/genres'

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use('/api/movies', moviesRouter);

app.use('/api/genres', genresRouter);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

