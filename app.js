const express = require('express');
const { sequelize } = require('./models');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express in a Single Executable!');
});

sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
