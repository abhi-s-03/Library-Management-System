const express = require('express');
const app = express();
app.use(express.json());
const bookRouter = require('./src/book/routes');

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use("/api/v1/books", bookRouter);

app.listen(5000, () => {
    console.log('server started');
});