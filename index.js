const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const expressFormidable = require('express-formidable');
const PORT = process.env.APP_PORT || 8081;

const filmRouter = require('./routes/film.route');
const authRouter = require('./routes/authentication.route')

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(expressFormidable());
app.use(authRouter);
app.use(filmRouter);

// Healthcheck endpoint
app.get('/ping', (request, response) => {
  response.json({ message: 'Ping successfully' });
});

app.listen(PORT, () => {
  console.log(`Application running at localhost:${PORT}`);
});
