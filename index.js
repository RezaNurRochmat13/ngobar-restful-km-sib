const app = require('./app')
const PORT = process.env.APP_PORT || 8081;

app.listen(PORT, () => {
  console.log(`Application running at localhost:${PORT}`);
});
